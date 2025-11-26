import fs from 'fs';
import csv from 'csv-parser';

// Parse the new CSV data
const newData = [];
fs.createReadStream('/Users/barbaramiller/Downloads/Copy of AI Tools Directory Site Spreadsheet - AI Tools Only.csv')
  .pipe(csv())
  .on('data', (row) => {
    newData.push(row);
  })
  .on('end', () => {
    console.log('=== COMPARISON REPORT ===\n');

    console.log(`Total tools in new CSV: ${newData.length}\n`);

    // Analyze the structure
    console.log('=== NEW COLUMN STRUCTURE ===');
    const columns = Object.keys(newData[0]);
    columns.forEach(col => console.log(`- ${col}`));

    console.log('\n=== KEY CHANGES IDENTIFIED ===\n');

    // 1. New field: "In Diane's Tech Stack"
    console.log('1. NEW FIELD: "In Diane\'s Tech Stack" (Y/blank)');
    const inStack = newData.filter(row => row["In Diane's Tech Stack"] === 'Y').length;
    console.log(`   - ${inStack} tools marked as in Diane's tech stack\n`);

    // 2. New field: "Created by a Lab Student"
    console.log('2. NEW FIELD: "Created by a Lab Student" (Y/blank)');
    const byStudent = newData.filter(row => row["Created by a Lab Student"] === 'Y').length;
    console.log(`   - ${byStudent} tools marked as created by lab students\n`);

    // 3. Updated Purpose categories
    console.log('3. UPDATED: Purpose field now contains comma-separated categories');
    const purposeCategories = new Set();
    newData.forEach(row => {
      if (row.Purpose) {
        row.Purpose.split(',').forEach(p => purposeCategories.add(p.trim()));
      }
    });
    console.log('   Categories found:');
    Array.from(purposeCategories).sort().forEach(cat => console.log(`   - ${cat}`));

    console.log('\n4. BUSINESS STAGE categories updated:');
    const businessStages = new Set();
    newData.forEach(row => {
      if (row["Business Stage"]) {
        businessStages.add(row["Business Stage"]);
      }
    });
    Array.from(businessStages).sort().forEach(stage => console.log(`   - ${stage}`));

    console.log('\n5. PRICING TIER categories:');
    const pricingTiers = new Set();
    newData.forEach(row => {
      if (row["Pricing Tier"]) {
        pricingTiers.add(row["Pricing Tier"]);
      }
    });
    Array.from(pricingTiers).sort().forEach(tier => console.log(`   - ${tier}`));

    console.log('\n=== TOOLS WITH EXTENSIVE COMMENTS ===');
    newData.filter(row => row["Diane's Comments"] && row["Diane's Comments"].length > 100)
      .forEach(row => {
        console.log(`\n${row.Tool}:`);
        console.log(`  ${row["Diane's Comments"].substring(0, 150)}...`);
      });

    console.log('\n=== SAMPLE DATA (First 3 tools) ===');
    newData.slice(0, 3).forEach(row => {
      console.log(`\n${row.Tool}:`);
      console.log(`  Link: ${row.Link}`);
      console.log(`  In Stack: ${row["In Diane's Tech Stack"]}`);
      console.log(`  Free: ${row["Free Option"]}`);
      console.log(`  Affiliate: ${row.Affiliate}`);
      console.log(`  Student Created: ${row["Created by a Lab Student"]}`);
      console.log(`  Purpose: ${row.Purpose}`);
      console.log(`  Pricing: ${row["Pricing Tier"]}`);
      console.log(`  Stage: ${row["Business Stage"]}`);
      console.log(`  Comments: ${row["Diane's Comments"].substring(0, 100)}...`);
    });
  });
