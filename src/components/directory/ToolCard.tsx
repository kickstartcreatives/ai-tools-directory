import type { Tool } from '../../lib/types';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const displayedTags = tool.tool_type.slice(0, 3);
  const remainingCount = tool.tool_type.length - 3;

  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-ivory border-2 border-warm-gray rounded-xl p-6
                 hover:border-camel-rose hover:-translate-y-1 hover:shadow-lg
                 transition-all duration-300 cursor-pointer group"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-3 gap-2">
        <div className="flex items-start gap-2 flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-black group-hover:text-camel-rose transition-colors flex-1">
            {tool.name}
          </h3>
          {tool.is_affiliate && (
            <span className="text-lg flex-shrink-0" style={{ color: '#BE9780' }} title="Affiliate link">
              🔗
            </span>
          )}
        </div>
        {tool.is_favorite && (
          <span className="text-2xl flex-shrink-0" style={{ color: '#D81159' }} title="Diane's Favorite">
            ★
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-deep-purple mb-4 line-clamp-3 leading-relaxed">
        {tool.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {displayedTags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-warm-gray text-deep-purple rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
        {remainingCount > 0 && (
          <span className="px-3 py-1 bg-warm-gray text-deep-purple rounded-full text-sm font-medium">
            +{remainingCount} more
          </span>
        )}
      </div>

      {/* Price Badge - only show if pricing is known */}
      {tool.pricing_tier && tool.pricing_tier !== 'TBD' && (
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-camel-rose text-white rounded-full text-sm font-semibold">
            {tool.pricing_tier}
          </span>
        </div>
      )}

      {/* Diane's Quote (if exists) */}
      {tool.diane_quote && (
        <p className="text-sm text-deep-purple italic border-l-2 border-camel-rose pl-3 mt-3">
          "{tool.diane_quote}"
        </p>
      )}
    </a>
  );
}
