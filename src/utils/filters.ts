import type { Tool, Filters } from '../lib/types';

export function filterTools(tools: Tool[], filters: Filters): Tool[] {
  return tools.filter(tool => {
    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const searchableText = [
        tool.name,
        tool.description
      ].join(' ').toLowerCase();

      if (!searchableText.includes(searchLower)) return false;
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
    if (filters.showFreePlansOnly && !tool.has_free_plan) return false;
    if (filters.showAffiliatesOnly && !tool.is_affiliate) return false;
    if (filters.showInTechStackOnly && !tool.in_tech_stack) return false;
    if (filters.showStudentCreatedOnly && !tool.created_by_student) return false;

    return true;
  });
}

export function getInitialFilters(): Filters {
  return {
    search: '',
    purposes: [],
    pricingTiers: [],
    businessStages: [],
    showFreePlansOnly: false,
    showAffiliatesOnly: false,
    showInTechStackOnly: false,
    showStudentCreatedOnly: false,
  };
}
