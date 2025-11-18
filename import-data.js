/**
 * Data Import Script for AI Tools Directory
 *
 * This script converts the CSV data to SQL INSERT statements
 * Run this to generate SQL that can be executed in Supabase SQL Editor
 */

import fs from 'fs';
import { parse } from 'csv-parse/sync';

// Read the CSV file
const csvContent = fs.readFileSync('../Downloads/files/tools-data-updated.csv', 'utf-8');

// Parse CSV
const records = parse(csvContent, {
  columns: true,
  skip_empty_lines: true
});

// Convert pipe-delimited strings to PostgreSQL arrays
function parseArray(value) {
  if (!value || value === 'TBD' || value.trim() === '') return '{}';
  const items = value.split('|').map(item => item.trim()).filter(Boolean);
  if (items.length === 0) return '{}';
  return `{${items.map(item => `"${item.replace(/"/g, '\\"')}"`).join(',')}}`;
}

// Convert boolean strings
function parseBoolean(value) {
  return value === 'True' || value === 'TRUE' || value === 'true';
}

// Escape single quotes for SQL
function escapeSql(value) {
  if (!value) return null;
  return value.replace(/'/g, "''");
}

// Generate SQL INSERT statements
let sql = "-- AI Tools Directory Data Import\n";
sql += "-- Generated from tools-data-updated.csv\n\n";

records.forEach((record, index) => {
  const toolType = parseArray(record.tool_type);
  const purpose = parseArray(record.purpose);
  const useCases = parseArray(record.use_cases);
  const businessStages = parseArray(record.business_stages);
  const upgradeTriggers = parseArray(record.upgrade_triggers);

  const name = escapeSql(record.name);
  const url = escapeSql(record.url);
  const description = escapeSql(record.description);
  const pricingTier = record.pricing_tier && record.pricing_tier.trim() ? escapeSql(record.pricing_tier) : 'TBD';
  const pricingDetails = record.pricing_details && record.pricing_details.trim() ? `'${escapeSql(record.pricing_details)}'` : 'NULL';
  const hasFreePlan = parseBoolean(record.has_free_plan);
  const isFavorite = parseBoolean(record.is_favorite);
  const isAffiliate = parseBoolean(record.is_affiliate);
  const affiliateNote = record.affiliate_note && record.affiliate_note.trim() ? `'${escapeSql(record.affiliate_note)}'` : 'NULL';
  const dianeQuote = record.diane_quote && record.diane_quote.trim() ? `'${escapeSql(record.diane_quote)}'` : 'NULL';
  const proTips = record.pro_tips && record.pro_tips.trim() ? `'${escapeSql(record.pro_tips)}'` : 'NULL';

  sql += `INSERT INTO tools (
  name, url, description, tool_type, purpose, use_cases,
  pricing_tier, pricing_details, has_free_plan,
  business_stages, upgrade_triggers,
  is_favorite, is_affiliate, affiliate_note,
  diane_quote, pro_tips, display_order
) VALUES (
  '${name}',
  '${url}',
  '${description}',
  '${toolType}',
  '${purpose}',
  '${useCases}',
  '${pricingTier}',
  ${pricingDetails},
  ${hasFreePlan},
  '${businessStages}',
  '${upgradeTriggers}',
  ${isFavorite},
  ${isAffiliate},
  ${affiliateNote},
  ${dianeQuote},
  ${proTips},
  ${index + 1}
);\n\n`;
});

// Write to file
fs.writeFileSync('import-tools.sql', sql);
console.log('✅ SQL import file generated: import-tools.sql');
console.log('📋 Copy the contents and run it in Supabase SQL Editor');
