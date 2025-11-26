export interface Tool {
  id: string;
  name: string;
  url: string;
  description: string;
  purpose: string[];
  pricing_tier: string;
  has_free_plan: boolean;
  business_stages: string[];
  is_affiliate: boolean;
  in_tech_stack: boolean;
  created_by_student: boolean;
  created_at: string;
  updated_at: string;
}

export interface Filters {
  search: string;
  purposes: string[];
  pricingTiers: string[];
  businessStages: string[];
  showFreePlansOnly: boolean;
  showAffiliatesOnly: boolean;
  showInTechStackOnly: boolean;
  showStudentCreatedOnly: boolean;
}

export type SortOption =
  | 'name-asc'
  | 'name-desc'
  | 'price-asc'
  | 'price-desc';

export type ViewMode = 'grid' | 'table';
