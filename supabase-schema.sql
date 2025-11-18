-- Create tools table
CREATE TABLE tools (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,

  -- Basic Info (Required)
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  description TEXT NOT NULL,

  -- Categorization (Arrays for multi-select)
  tool_type TEXT[] NOT NULL,
  purpose TEXT[] DEFAULT '{}',
  use_cases TEXT[] DEFAULT '{}',

  -- Pricing
  pricing_tier TEXT NOT NULL,
  pricing_details TEXT,
  has_free_plan BOOLEAN DEFAULT false,

  -- Business Stage Recommendations
  business_stages TEXT[] DEFAULT '{}',
  upgrade_triggers TEXT[] DEFAULT '{}',

  -- Special Attributes
  is_favorite BOOLEAN DEFAULT false,
  is_affiliate BOOLEAN DEFAULT false,
  affiliate_note TEXT,

  -- Content (Optional)
  diane_quote TEXT,
  pro_tips TEXT,

  -- Metadata
  display_order INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_tools_tool_type ON tools USING GIN (tool_type);
CREATE INDEX idx_tools_purpose ON tools USING GIN (purpose);
CREATE INDEX idx_tools_pricing_tier ON tools (pricing_tier);
CREATE INDEX idx_tools_is_favorite ON tools (is_favorite);
CREATE INDEX idx_tools_has_free_plan ON tools (has_free_plan);

-- Auto-update timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_tools_updated_at
BEFORE UPDATE ON tools
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security
ALTER TABLE tools ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON tools
  FOR SELECT
  USING (true);

-- Allow authenticated users (admin) to do everything
CREATE POLICY "Allow authenticated users full access" ON tools
  FOR ALL
  USING (auth.role() = 'authenticated');
