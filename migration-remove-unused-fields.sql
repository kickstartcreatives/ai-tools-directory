-- Migration to remove unused fields from tools table

-- Make tool_type nullable (or we can drop it entirely)
ALTER TABLE tools ALTER COLUMN tool_type DROP NOT NULL;

-- Drop unused columns entirely
ALTER TABLE tools DROP COLUMN IF EXISTS tool_type;
ALTER TABLE tools DROP COLUMN IF EXISTS use_cases;
ALTER TABLE tools DROP COLUMN IF EXISTS upgrade_triggers;
ALTER TABLE tools DROP COLUMN IF EXISTS is_favorite;
ALTER TABLE tools DROP COLUMN IF EXISTS affiliate_note;
ALTER TABLE tools DROP COLUMN IF EXISTS diane_quote;
ALTER TABLE tools DROP COLUMN IF EXISTS pro_tips;
ALTER TABLE tools DROP COLUMN IF EXISTS pricing_details;
ALTER TABLE tools DROP COLUMN IF EXISTS display_order;

-- Update updated_at timestamp
UPDATE tools SET updated_at = NOW();
