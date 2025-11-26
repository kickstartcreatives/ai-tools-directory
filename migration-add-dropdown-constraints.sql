-- Migration to add dropdown constraints for easier data entry in Supabase

-- Create ENUM type for pricing_tier
CREATE TYPE pricing_tier_enum AS ENUM (
  'Free',
  'Under $10/month',
  '$10-20/month',
  '$20-50/month',
  '$50-100/month',
  '$100+/month',
  'One-time purchase'
);

-- Alter the tools table to use the ENUM type
ALTER TABLE tools
  ALTER COLUMN pricing_tier TYPE pricing_tier_enum
  USING pricing_tier::pricing_tier_enum;

-- Add a comment to help with data entry
COMMENT ON COLUMN tools.pricing_tier IS 'Select one pricing tier from the dropdown';
COMMENT ON COLUMN tools.purpose IS 'Array of purpose tags. Format: ["Tag1", "Tag2"]. Valid tags: AI Image Generation, AI Video Generation, LLMs/AI Text Generation, Content Creation, Business Operations, Website & SEO, Trusted Coaches & Courses, AI Editing/Enhancement, AI Voice & Audio, AI Photoshoots, Productivity, Compliance & Legal, Branding, AI Avatars';
COMMENT ON COLUMN tools.business_stages IS 'Array of business stages. Format: ["Stage1"]. Valid stages: Getting started (Under $20/month), Growing Your Business ($30-55/month), Scaling Operations ($100+/month)';
