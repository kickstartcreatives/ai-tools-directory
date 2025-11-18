import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { TOOL_TYPES, PURPOSES, PRICING_TIERS, BUSINESS_STAGES } from '../../lib/constants';

interface FilterSectionProps {
  toolTypes: string[];
  purposes: string[];
  pricingTiers: string[];
  businessStages: string[];
  onToolTypesChange: (types: string[]) => void;
  onPurposesChange: (purposes: string[]) => void;
  onPricingTiersChange: (tiers: string[]) => void;
  onBusinessStagesChange: (stages: string[]) => void;
}

export function FilterSection({
  toolTypes,
  purposes,
  pricingTiers,
  businessStages,
  onToolTypesChange,
  onPurposesChange,
  onPricingTiersChange,
  onBusinessStagesChange,
}: FilterSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSelection = (value: string, current: string[], onChange: (vals: string[]) => void) => {
    if (current.includes(value)) {
      onChange(current.filter(v => v !== value));
    } else {
      onChange([...current, value]);
    }
  };

  return (
    <div className="bg-white border-2 border-warm-gray rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-ivory transition-colors"
      >
        <span className="font-semibold text-deep-purple">Advanced Filters</span>
        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      {isExpanded && (
        <div className="p-6 space-y-6 border-t-2 border-warm-gray bg-ivory">
          {/* Tool Type Filter */}
          <div>
            <label className="block font-semibold text-deep-purple mb-3">Tool Type</label>
            <div className="flex flex-wrap gap-2">
              {TOOL_TYPES.map((type) => (
                <button
                  key={type}
                  onClick={() => toggleSelection(type, toolTypes, onToolTypesChange)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium border-2 transition-all
                             ${toolTypes.includes(type)
                               ? 'bg-camel-rose text-white border-camel-rose'
                               : 'bg-white text-deep-purple border-warm-gray hover:border-camel-rose'
                             }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Purpose Filter */}
          <div>
            <label className="block font-semibold text-deep-purple mb-3">Purpose</label>
            <div className="flex flex-wrap gap-2">
              {PURPOSES.map((purpose) => (
                <button
                  key={purpose}
                  onClick={() => toggleSelection(purpose, purposes, onPurposesChange)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium border-2 transition-all
                             ${purposes.includes(purpose)
                               ? 'bg-camel-rose text-white border-camel-rose'
                               : 'bg-white text-deep-purple border-warm-gray hover:border-camel-rose'
                             }`}
                >
                  {purpose}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Tier Filter */}
          <div>
            <label className="block font-semibold text-deep-purple mb-3">Pricing Tier</label>
            <div className="flex flex-wrap gap-2">
              {PRICING_TIERS.map((tier) => (
                <button
                  key={tier}
                  onClick={() => toggleSelection(tier, pricingTiers, onPricingTiersChange)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium border-2 transition-all
                             ${pricingTiers.includes(tier)
                               ? 'bg-camel-rose text-white border-camel-rose'
                               : 'bg-white text-deep-purple border-warm-gray hover:border-camel-rose'
                             }`}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>

          {/* Business Stage Filter */}
          <div>
            <label className="block font-semibold text-deep-purple mb-3">Business Stage</label>
            <div className="flex flex-wrap gap-2">
              {BUSINESS_STAGES.map((stage) => (
                <button
                  key={stage}
                  onClick={() => toggleSelection(stage, businessStages, onBusinessStagesChange)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium border-2 transition-all
                             ${businessStages.includes(stage)
                               ? 'bg-camel-rose text-white border-camel-rose'
                               : 'bg-white text-deep-purple border-warm-gray hover:border-camel-rose'
                             }`}
                >
                  {stage}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
