export interface Tool {
  id: string;
  name: string;
  url: string;
  description: string;
  tool_type: string[];
  purpose: string[];
  use_cases: string[];
  pricing_tier: string;
  pricing_details?: string;
  has_free_plan: boolean;
  business_stages: string[];
  upgrade_triggers: string[];
  is_favorite: boolean;
  is_affiliate: boolean;
  affiliate_note?: string;
  diane_quote?: string;
  pro_tips?: string;
  display_order?: number;
  created_at: string;
  updated_at: string;
}

export interface Filters {
  search: string;
  toolTypes: string[];
  purposes: string[];
  pricingTiers: string[];
  businessStages: string[];
  showFavoritesOnly: boolean;
  showFreePlansOnly: boolean;
  showAffiliatesOnly: boolean;
}

export type SortOption =
  | 'name-asc'
  | 'name-desc'
  | 'price-asc'
  | 'price-desc'
  | 'favorites-first';

export type ViewMode = 'grid' | 'table';
