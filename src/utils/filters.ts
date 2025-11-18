import type { Tool, Filters } from '../lib/types';

export function filterTools(tools: Tool[], filters: Filters): Tool[] {
  return tools.filter(tool => {
    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const searchableText = [
        tool.name,
        tool.description,
        tool.diane_quote || '',
        tool.pro_tips || ''
      ].join(' ').toLowerCase();

      if (!searchableText.includes(searchLower)) return false;
    }

    // Tool type filter
    if (filters.toolTypes.length > 0) {
      if (!filters.toolTypes.some(type => tool.tool_type.includes(type))) {
        return false;
      }
    }

    // Purpose filter
    if (filters.purposes.length > 0) {
      if (!filters.purposes.some(purpose => tool.purpose.includes(purpose))) {
        return false;
      }
    }

    // Pricing tier filter
    if (filters.pricingTiers.length > 0) {
      if (!filters.pricingTiers.includes(tool.pricing_tier)) {
        return false;
      }
    }

    // Business stage filter
    if (filters.businessStages.length > 0) {
      if (!filters.businessStages.some(stage => tool.business_stages.includes(stage))) {
        return false;
      }
    }

    // Quick filters
    if (filters.showFavoritesOnly && !tool.is_favorite) return false;
    if (filters.showFreePlansOnly && !tool.has_free_plan) return false;
    if (filters.showAffiliatesOnly && !tool.is_affiliate) return false;

    return true;
  });
}

export function getInitialFilters(): Filters {
  return {
    search: '',
    toolTypes: [],
    purposes: [],
    pricingTiers: [],
    businessStages: [],
    showFavoritesOnly: false,
    showFreePlansOnly: false,
    showAffiliatesOnly: false,
  };
}
