// Locked categories - hardcoded, do NOT pull from database
// Diane cannot add new categories - must contact developer

export const TOOL_TYPES = [
  "AI Image Generation",
  "AI Video",
  "LLMs / Text AI",
  "Content Creation",
  "Business Tools",
  "Website & SEO",
  "Email Marketing",
  "Education & Courses",
  "Stock Resources",
  "Utilities",
  "Editing & Enhancement",
  "Voice & Audio"
] as const;

export const PURPOSES = [
  "Client Work",
  "Personal Branding",
  "Content Creation",
  "Website Building",
  "Email Marketing",
  "Video Production",
  "Image Creation",
  "AI Photoshoots",
  "Productivity",
  "Compliance & Legal",
  "Education",
  "Business Operations"
] as const;

export const USE_CASES = [
  "Social Media Content",
  "Blog Graphics",
  "Presentations",
  "Lead Magnets",
  "Sales Pages",
  "Client Reports",
  "Link-in-Bio Pages",
  "Course Materials",
  "Product Photos",
  "Professional Headshots",
  "Video Shorts",
  "Long-Form Video",
  "Website Design",
  "SEO Optimization",
  "Podcast Creation"
] as const;

export const PRICING_TIERS = [
  "Free",
  "Under $10/month",
  "$10-20/month",
  "$20-50/month",
  "$50-100/month",
  "$100+/month",
  "Annual Plan Only",
  "One-Time Purchase",
  "TBD"
] as const;

export const BUSINESS_STAGES = [
  "Getting Started (Under $20/month)",
  "Growing Your Business ($30-55/month)",
  "Scaling Operations ($100+/month)"
] as const;

export const UPGRADE_TRIGGERS = [
  "Spending 5+ hours/week on content creation",
  "Landed first paying AI client",
  "Free tool limitations constraining client work",
  "Booking 3+ clients per month",
  "Tool hours running out before month-end",
  "Clients asking for advanced features",
  "Monthly revenue exceeds $1,000 from AI services"
] as const;

// Type exports
export type ToolType = typeof TOOL_TYPES[number];
export type Purpose = typeof PURPOSES[number];
export type UseCase = typeof USE_CASES[number];
export type PricingTier = typeof PRICING_TIERS[number];
export type BusinessStage = typeof BUSINESS_STAGES[number];
export type UpgradeTrigger = typeof UPGRADE_TRIGGERS[number];
