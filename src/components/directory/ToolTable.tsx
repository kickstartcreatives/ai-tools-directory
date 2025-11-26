import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { Tool } from '../../lib/types';

interface ToolTableProps {
  tools: Tool[];
}

type OpenDropdown = {
  toolId: string;
  type: 'purpose' | 'stage' | 'description';
} | null;

export function ToolTable({ tools }: ToolTableProps) {
  const [openDropdown, setOpenDropdown] = React.useState<OpenDropdown>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setOpenDropdown(null);
    };

    if (openDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [openDropdown]);

  if (tools.length === 0) {
    return (
      <div className="text-center py-16 bg-ivory rounded-lg border-2 border-warm-gray">
        <p className="text-lg text-deep-purple mb-2">No tools found matching your filters</p>
        <p className="text-sm text-gray-600">Try adjusting your search or filters</p>
      </div>
    );
  }

  const handleToggleDropdown = (toolId: string, type: 'purpose' | 'stage' | 'description', e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenDropdown((current) =>
      current?.toolId === toolId && current?.type === type
        ? null
        : { toolId, type }
    );
  };

  return (
    <div className="overflow-x-auto bg-ivory rounded-lg border-2 border-warm-gray">
      <table className="w-full table-fixed">
        <thead className="bg-warm-gray border-b-2 border-warm-gray">
          <tr>
            <th className="w-[15%] px-3 py-2 text-left text-xs font-semibold text-deep-purple">Tool</th>
            <th className="w-[30%] px-3 py-2 text-left text-xs font-semibold text-deep-purple">Description</th>
            <th className="w-[20%] px-3 py-2 text-left text-xs font-semibold text-deep-purple">Purpose</th>
            <th className="w-[15%] px-3 py-2 text-left text-xs font-semibold text-deep-purple">Pricing Tier</th>
            <th className="w-[15%] px-3 py-2 text-left text-xs font-semibold text-deep-purple">Business Stage</th>
            <th className="w-[5%] px-3 py-2 text-center text-xs font-semibold text-deep-purple"></th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => (
            <ToolRow
              key={tool.id}
              tool={tool}
              openDropdown={openDropdown}
              onToggleDropdown={handleToggleDropdown}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface ToolRowProps {
  tool: Tool;
  openDropdown: OpenDropdown;
  onToggleDropdown: (toolId: string, type: 'purpose' | 'stage' | 'description', e: React.MouseEvent) => void;
}

function ToolRow({ tool, openDropdown, onToggleDropdown }: ToolRowProps) {
  const isPurposeOpen = openDropdown?.toolId === tool.id && openDropdown?.type === 'purpose';
  const isStageOpen = openDropdown?.toolId === tool.id && openDropdown?.type === 'stage';
  const isDescriptionOpen = openDropdown?.toolId === tool.id && openDropdown?.type === 'description';

  return (
    <tr className="border-b border-warm-gray hover:bg-white transition-colors">
      <td className="px-3 py-2">
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-sm text-black hover:text-camel-rose transition-colors block truncate"
          title={tool.name}
        >
          {tool.name}
        </a>
      </td>
      <td className="px-3 py-2">
        <div className="relative">
          <p
            className={`text-xs text-deep-purple cursor-pointer hover:text-camel-rose ${isDescriptionOpen ? '' : 'line-clamp-2'}`}
            onClick={(e) => onToggleDropdown(tool.id, 'description', e)}
          >
            {tool.description}
          </p>
        </div>
      </td>
      <td className="px-3 py-2">
        <div className="relative">
          <button
            onClick={(e) => onToggleDropdown(tool.id, 'purpose', e)}
            className="inline-flex items-center gap-1 text-xs bg-camel-rose text-white px-2 py-1 rounded-full font-semibold hover:bg-deep-purple transition-colors"
          >
            <span className="truncate max-w-[120px]">{tool.purpose[0] || '—'}</span>
            {tool.purpose.length > 1 && (
              <>
                <span>+{tool.purpose.length - 1}</span>
                {isPurposeOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </>
            )}
          </button>
          {isPurposeOpen && tool.purpose.length > 1 && (
            <div className="absolute z-10 mt-1 w-64 bg-white border-2 border-warm-gray rounded-lg shadow-lg p-3 max-h-48 overflow-y-auto">
              <div className="flex flex-wrap gap-2">
                {tool.purpose.map((p, i) => (
                  <span key={i} className="px-3 py-1 bg-warm-gray text-deep-purple rounded-full text-xs font-medium">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </td>
      <td className="px-3 py-2">
        <span className="inline-block text-xs bg-camel-rose text-white px-2 py-1 rounded-full font-semibold whitespace-nowrap">
          {tool.pricing_tier}
        </span>
      </td>
      <td className="px-3 py-2">
        <div className="relative">
          <button
            onClick={(e) => onToggleDropdown(tool.id, 'stage', e)}
            className="inline-flex items-center gap-1 text-xs bg-camel-rose text-white px-2 py-1 rounded-full font-semibold hover:bg-deep-purple transition-colors"
            title={tool.business_stages[0]}
          >
            <span className="truncate max-w-[100px]">
              {tool.business_stages[0]?.replace(/\(.*\)/, '').trim() || '—'}
            </span>
            {tool.business_stages.length > 1 && (
              <>
                <span>+{tool.business_stages.length - 1}</span>
                {isStageOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </>
            )}
          </button>
          {isStageOpen && tool.business_stages.length > 1 && (
            <div className="absolute z-10 mt-1 w-64 bg-white border-2 border-warm-gray rounded-lg shadow-lg p-3 max-h-48 overflow-y-auto">
              <div className="flex flex-wrap gap-2">
                {tool.business_stages.map((stage, i) => (
                  <span key={i} className="px-3 py-1 bg-warm-gray text-deep-purple rounded-full text-xs font-medium">
                    {stage}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </td>
      <td className="px-3 py-2">
        <div className="flex gap-1 justify-center">
          {tool.in_tech_stack && (
            <span className="text-sm" title="In Diane's Tech Stack">🛠️</span>
          )}
          {tool.has_free_plan && (
            <span className="text-sm" title="Free Option">💰</span>
          )}
          {tool.is_affiliate && (
            <span className="text-sm" title="Affiliate">🔗</span>
          )}
          {tool.created_by_student && (
            <span className="text-sm" title="Student Created">🎓</span>
          )}
        </div>
      </td>
    </tr>
  );
}
