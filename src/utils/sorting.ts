import type { Tool, SortOption } from '../lib/types';

const PRICING_ORDER: Record<string, number> = {
  'Free': 0,
  'Under $10/month': 1,
  '$10-20/month': 2,
  '$20-50/month': 3,
  '$50-100/month': 4,
  '$100+/month': 5,
  'Annual Plan Only': 6,
  'One-Time Purchase': 7,
  'TBD': 8
};

export function sortTools(tools: Tool[], sortBy: SortOption): Tool[] {
  const sorted = [...tools];

  switch (sortBy) {
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));

    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name));

    case 'price-asc':
      return sorted.sort((a, b) =>
        (PRICING_ORDER[a.pricing_tier] ?? 99) - (PRICING_ORDER[b.pricing_tier] ?? 99)
      );

    case 'price-desc':
      return sorted.sort((a, b) =>
        (PRICING_ORDER[b.pricing_tier] ?? 99) - (PRICING_ORDER[a.pricing_tier] ?? 99)
      );

    default:
      return sorted;
  }
}
