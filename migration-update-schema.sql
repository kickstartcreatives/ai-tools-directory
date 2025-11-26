-- Migration to add new fields for updated data structure
-- Run this on your Supabase database before importing new data

-- Add new columns
ALTER TABLE tools ADD COLUMN IF NOT EXISTS in_tech_stack BOOLEAN DEFAULT false;
ALTER TABLE tools ADD COLUMN IF NOT EXISTS created_by_student BOOLEAN DEFAULT false;

-- Add indexes for the new columns (for better query performance)
CREATE INDEX IF NOT EXISTS idx_tools_in_tech_stack ON tools (in_tech_stack);
CREATE INDEX IF NOT EXISTS idx_tools_created_by_student ON tools (created_by_student);

-- Add comments to document the new fields
COMMENT ON COLUMN tools.in_tech_stack IS 'Whether this tool is in Diane''s personal tech stack';
COMMENT ON COLUMN tools.created_by_student IS 'Whether this tool was created by a Lab Student';

-- Update updated_at timestamp
UPDATE tools SET updated_at = NOW();
