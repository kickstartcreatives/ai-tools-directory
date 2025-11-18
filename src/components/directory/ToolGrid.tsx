import { ToolCard } from './ToolCard';
import type { Tool } from '../../lib/types';

interface ToolGridProps {
  tools: Tool[];
}

export function ToolGrid({ tools }: ToolGridProps) {
  if (tools.length === 0) {
    return (
      <div className="text-center py-16 bg-ivory rounded-lg border-2 border-warm-gray">
        <p className="text-lg text-deep-purple mb-2">No tools found matching your filters</p>
        <p className="text-sm text-gray-600">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}
