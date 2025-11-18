import { X } from 'lucide-react';
import type { Filters } from '../../lib/types';

interface ActiveFiltersProps {
  filters: Filters;
  onRemoveToolType: (type: string) => void;
  onRemovePurpose: (purpose: string) => void;
  onRemovePricingTier: (tier: string) => void;
  onRemoveBusinessStage: (stage: string) => void;
  onClearAll: () => void;
}

export function ActiveFilters({
  filters,
  onRemoveToolType,
  onRemovePurpose,
  onRemovePricingTier,
  onRemoveBusinessStage,
  onClearAll,
}: ActiveFiltersProps) {
  const hasActiveFilters =
    filters.toolTypes.length > 0 ||
    filters.purposes.length > 0 ||
    filters.pricingTiers.length > 0 ||
    filters.businessStages.length > 0 ||
    filters.showFavoritesOnly ||
    filters.showFreePlansOnly ||
    filters.showAffiliatesOnly;

  if (!hasActiveFilters) return null;

  return (
    <div className="bg-ivory p-4 rounded-lg border-2 border-warm-gray">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-deep-purple">Active Filters</h3>
        <button
          onClick={onClearAll}
          className="text-sm text-camel-rose hover:text-deep-purple font-medium transition-colors"
        >
          Clear All
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {filters.toolTypes.map((type) => (
          <FilterChip key={type} label={type} onRemove={() => onRemoveToolType(type)} />
        ))}
        {filters.purposes.map((purpose) => (
          <FilterChip key={purpose} label={purpose} onRemove={() => onRemovePurpose(purpose)} />
        ))}
        {filters.pricingTiers.map((tier) => (
          <FilterChip key={tier} label={tier} onRemove={() => onRemovePricingTier(tier)} />
        ))}
        {filters.businessStages.map((stage) => (
          <FilterChip key={stage} label={stage} onRemove={() => onRemoveBusinessStage(stage)} />
        ))}
      </div>
    </div>
  );
}

function FilterChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-camel-rose text-white rounded-full text-sm">
      <span>{label}</span>
      <button
        onClick={onRemove}
        className="hover:bg-white/20 rounded-full p-0.5 transition-colors"
        aria-label={`Remove ${label} filter`}
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
