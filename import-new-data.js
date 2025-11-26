import fs from 'fs';
import csv from 'csv-parser';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials in .env.local');
  process.exit(1);
}

console.log('Using service role key for import...\n');
const supabase = createClient(supabaseUrl, supabaseKey);

// Helper function to parse comma-separated values
function parseMultipleValues(value) {
  if (!value) return [];
  return value.split(',').map(v => v.trim()).filter(v => v.length > 0);
}

// Helper function to normalize boolean values
function parseBoolean(value) {
  return value === 'Y' || value === 'y' || value === 'Yes' || value === 'yes' || value === 'true' || value === 'True';
}

// Parse CSV and import data
const tools = [];

fs.createReadStream('/Users/barbaramiller/Downloads/AI_Tools_Directory_CLEANED.csv')
  .pipe(csv())
  .on('data', (row) => {
    const tool = {
      name: row.Tool,
      url: row.Link,
      description: row["Diane's Comments"] || '',

      // Parse comma-separated Purpose field into array
      purpose: parseMultipleValues(row.Purpose),

      // Pricing
      pricing_tier: row["Pricing Tier"] || 'Free',
      has_free_plan: parseBoolean(row["Free Option"]),

      // Business stage
      business_stages: row["Business Stage"] ? [row["Business Stage"]] : [],

      // Boolean flags
      is_affiliate: parseBoolean(row.Affiliate),
      in_tech_stack: parseBoolean(row["In Diane's Tech Stack"]),
      created_by_student: parseBoolean(row["Created by a Lab Student"]),
    };

    tools.push(tool);
  })
  .on('end', async () => {
    console.log(`\n=== IMPORTING ${tools.length} TOOLS ===\n`);

    try {
      // First, clear existing data (optional - comment out if you want to keep old data)
      console.log('Clearing existing tools...');
      const { error: deleteError } = await supabase
        .from('tools')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all

      if (deleteError) {
        console.error('Error clearing tools:', deleteError);
        // Continue anyway
      }

      // Insert tools in batches of 10
      const batchSize = 10;
      for (let i = 0; i < tools.length; i += batchSize) {
        const batch = tools.slice(i, i + batchSize);
        console.log(`Importing tools ${i + 1} to ${Math.min(i + batchSize, tools.length)}...`);

        const { data, error } = await supabase
          .from('tools')
          .insert(batch)
          .select();

        if (error) {
          console.error(`Error importing batch ${i / batchSize + 1}:`, error);
          console.error('Failed tools:', batch.map(t => t.name).join(', '));
        } else {
          console.log(`✓ Successfully imported ${data.length} tools`);
        }
      }

      console.log('\n=== IMPORT COMPLETE ===');
      console.log(`Total tools imported: ${tools.length}`);
      console.log(`Tools in tech stack: ${tools.filter(t => t.in_tech_stack).length}`);
      console.log(`Student created: ${tools.filter(t => t.created_by_student).length}`);
      console.log(`Free options: ${tools.filter(t => t.has_free_plan).length}`);
      console.log(`Affiliates: ${tools.filter(t => t.is_affiliate).length}`);

    } catch (error) {
      console.error('Fatal error during import:', error);
    }
  });
