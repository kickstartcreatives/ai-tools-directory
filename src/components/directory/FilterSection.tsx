import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { PURPOSES, PRICING_TIERS, BUSINESS_STAGES, BUSINESS_STAGE_DESCRIPTIONS } from '../../lib/constants';

interface FilterSectionProps {
  purposes: string[];
  pricingTiers: string[];
  businessStages: string[];
  onPurposesChange: (purposes: string[]) => void;
  onPricingTiersChange: (tiers: string[]) => void;
  onBusinessStagesChange: (stages: string[]) => void;
}

export function FilterSection({
  purposes,
  pricingTiers,
  businessStages,
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
            <div className="mb-3">
              <label className="block font-semibold text-deep-purple mb-1">Business Stage</label>
              <p className="text-xs text-deep-purple opacity-75">Click a stage to see detailed recommendations</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {BUSINESS_STAGES.map((stage) => (
                <button
                  key={stage}
                  onClick={() => {
                    // If clicking the currently selected stage, deselect it, otherwise select only this one
                    if (businessStages.includes(stage)) {
                      onBusinessStagesChange([]);
                    } else {
                      onBusinessStagesChange([stage]);
                    }
                  }}
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

            {/* Show description for selected stage */}
            {businessStages.length > 0 && (
              <div className="mt-4">
                {businessStages.map((stage) => {
                  const description = BUSINESS_STAGE_DESCRIPTIONS[stage];
                  if (!description) return null;

                  return (
                    <div key={stage} className="bg-white border-2 border-warm-gray rounded-lg p-4">
                      <h4 className="font-bold text-deep-purple mb-2">{stage}</h4>
                      <p className="text-sm text-deep-purple mb-3">{description.intro}</p>

                      <ul className="space-y-2 mb-3">
                        {description.tools.map((tool, idx) => (
                          <li key={idx} className="text-sm text-deep-purple leading-relaxed">
                            • {tool}
                          </li>
                        ))}
                      </ul>

                      {description.whenToUpgrade && (
                        <>
                          <p className="font-semibold text-deep-purple text-sm mt-4 mb-2">When to Upgrade to the Next Level:</p>
                          <ul className="space-y-1">
                            {description.whenToUpgrade.map((item, idx) => (
                              <li key={idx} className="text-sm text-deep-purple">
                                • {item}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
