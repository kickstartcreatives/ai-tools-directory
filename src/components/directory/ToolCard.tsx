import React from 'react';
import type { Tool } from '../../lib/types';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const [showAllTags, setShowAllTags] = React.useState(false);
  const displayedTags = showAllTags ? tool.purpose : tool.purpose.slice(0, 3);
  const remainingCount = tool.purpose.length - 3;

  return (
    <div className="bg-ivory border-2 border-warm-gray rounded-xl p-6 transition-all duration-300 hover:border-camel-rose hover:-translate-y-1 hover:shadow-lg group">
      {/* Header */}
      <div className="flex justify-between items-start mb-3 gap-2">
        <div className="flex items-start gap-2 flex-1 min-w-0">
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold text-black group-hover:text-camel-rose transition-colors flex-1"
          >
            {tool.name}
          </a>
        </div>
        <div className="flex gap-1 flex-shrink-0">
          {tool.in_tech_stack && (
            <span className="text-xl" title="In Diane's Tech Stack">
              🛠️
            </span>
          )}
          {tool.has_free_plan && (
            <span className="text-xl" title="Free Option">
              💰
            </span>
          )}
          {tool.is_affiliate && (
            <span className="text-xl" title="Affiliate">
              🔗
            </span>
          )}
          {tool.created_by_student && (
            <span className="text-xl" title="Created by Lab Student">
              🎓
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-deep-purple mb-4 line-clamp-3 leading-relaxed">
        {tool.description}
      </p>

      {/* Purpose Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {displayedTags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-warm-gray text-deep-purple rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
        {remainingCount > 0 && !showAllTags && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowAllTags(true);
            }}
            className="px-3 py-1 bg-camel-rose text-white rounded-full text-sm font-medium hover:bg-deep-purple transition-colors"
          >
            +{remainingCount} more
          </button>
        )}
        {showAllTags && tool.purpose.length > 3 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowAllTags(false);
            }}
            className="px-3 py-1 bg-camel-rose text-white rounded-full text-sm font-medium hover:bg-deep-purple transition-colors"
          >
            Show less
          </button>
        )}
      </div>

      {/* Price Badge */}
      {tool.pricing_tier && (
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-camel-rose text-white rounded-full text-sm font-semibold">
            {tool.pricing_tier}
          </span>
        </div>
      )}
    </div>
  );
}
