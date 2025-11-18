import type { Tool } from '../../lib/types';

interface ToolTableProps {
  tools: Tool[];
}

export function ToolTable({ tools }: ToolTableProps) {
  if (tools.length === 0) {
    return (
      <div className="text-center py-16 bg-ivory rounded-lg border-2 border-warm-gray">
        <p className="text-lg text-deep-purple mb-2">No tools found matching your filters</p>
        <p className="text-sm text-gray-600">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-ivory rounded-lg border-2 border-warm-gray">
      <table className="w-full">
        <thead className="bg-warm-gray border-b-2 border-warm-gray">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-deep-purple">Name</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-deep-purple">Description</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-deep-purple">Type</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-deep-purple">Price</th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-deep-purple">⭐</th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-deep-purple">🔗</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => (
            <tr
              key={tool.id}
              className="border-b border-warm-gray hover:bg-white transition-colors"
            >
              <td className="px-6 py-4">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-black hover:text-camel-rose transition-colors inline-flex items-center gap-2"
                >
                  {tool.name}
                </a>
              </td>
              <td className="px-6 py-4 text-deep-purple max-w-md">
                <p className="line-clamp-2">{tool.description}</p>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-1">
                  {tool.tool_type.slice(0, 2).map((type, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-warm-gray text-deep-purple rounded text-xs font-medium"
                    >
                      {type}
                    </span>
                  ))}
                  {tool.tool_type.length > 2 && (
                    <span className="px-2 py-1 bg-warm-gray text-deep-purple rounded text-xs font-medium">
                      +{tool.tool_type.length - 2}
                    </span>
                  )}
                </div>
              </td>
              <td className="px-6 py-4">
                {tool.pricing_tier && tool.pricing_tier !== 'TBD' && (
                  <span className="inline-block px-3 py-1 bg-camel-rose text-white rounded-full text-xs font-semibold whitespace-nowrap">
                    {tool.pricing_tier}
                  </span>
                )}
              </td>
              <td className="px-6 py-4 text-center">
                {tool.is_favorite && (
                  <span className="text-lg">⭐</span>
                )}
              </td>
              <td className="px-6 py-4 text-center">
                {tool.is_affiliate && (
                  <span className="text-base">🔗</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
