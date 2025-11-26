import { Grid, List } from 'lucide-react';
import type { SortOption, ViewMode } from '../../lib/types';

interface ControlsBarProps {
  totalCount: number;
  filteredCount: number;
  sortBy: SortOption;
  viewMode: ViewMode;
  onSortChange: (sort: SortOption) => void;
  onViewModeChange: (mode: ViewMode) => void;
}

export function ControlsBar({
  totalCount,
  filteredCount,
  sortBy,
  viewMode,
  onSortChange,
  onViewModeChange,
}: ControlsBarProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-ivory rounded-lg border-2 border-warm-gray">
      <div className="font-medium text-deep-purple">
        Showing {filteredCount} of {totalCount} tools
      </div>

      <div className="flex items-center gap-4 w-full sm:w-auto">
        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm font-medium text-deep-purple whitespace-nowrap">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="px-3 py-2 border-2 border-warm-gray rounded-lg bg-white text-sm
                       focus:outline-none focus:border-camel-rose cursor-pointer"
          >
            <option value="name-asc">A-Z</option>
            <option value="name-desc">Z-A</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        {/* View Toggle */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-2 rounded-lg border-2 transition-all
                       ${viewMode === 'grid'
                         ? 'bg-camel-rose text-white border-camel-rose'
                         : 'bg-white text-deep-purple border-warm-gray hover:border-camel-rose'
                       }`}
            aria-label="Grid view"
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => onViewModeChange('table')}
            className={`p-2 rounded-lg border-2 transition-all
                       ${viewMode === 'table'
                         ? 'bg-camel-rose text-white border-camel-rose'
                         : 'bg-white text-deep-purple border-warm-gray hover:border-camel-rose'
                       }`}
            aria-label="Table view"
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
