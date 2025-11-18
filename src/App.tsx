import { useState, useMemo, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SearchBar } from './components/directory/SearchBar';
import { QuickFilters } from './components/directory/QuickFilters';
import { FilterSection } from './components/directory/FilterSection';
import { ActiveFilters } from './components/directory/ActiveFilters';
import { ControlsBar } from './components/directory/ControlsBar';
import { ToolGrid } from './components/directory/ToolGrid';
import { ToolTable } from './components/directory/ToolTable';
import { useTools } from './hooks/useTools';
import { filterTools, getInitialFilters } from './utils/filters';
import { sortTools } from './utils/sorting';
import type { Filters, SortOption, ViewMode } from './lib/types';

function App() {
  const { tools, loading, error } = useTools();
  const [filters, setFilters] = useState<Filters>(getInitialFilters());
  const [sortBy, setSortBy] = useState<SortOption>('name-asc');
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    // Load view preference from localStorage
    const saved = localStorage.getItem('viewMode');
    return (saved === 'table' || saved === 'grid') ? saved : 'grid';
  });

  // Save view mode preference
  useEffect(() => {
    localStorage.setItem('viewMode', viewMode);
  }, [viewMode]);

  // Filter and sort tools
  const filteredAndSortedTools = useMemo(() => {
    const filtered = filterTools(tools, filters);
    return sortTools(filtered, sortBy);
  }, [tools, filters, sortBy]);

  // Filter handlers
  const handleSearchChange = (search: string) => {
    setFilters(prev => ({ ...prev, search }));
  };

  const handleToggleFavorites = () => {
    setFilters(prev => ({ ...prev, showFavoritesOnly: !prev.showFavoritesOnly }));
  };

  const handleToggleFreePlans = () => {
    setFilters(prev => ({ ...prev, showFreePlansOnly: !prev.showFreePlansOnly }));
  };

  const handleToggleAffiliates = () => {
    setFilters(prev => ({ ...prev, showAffiliatesOnly: !prev.showAffiliatesOnly }));
  };

  const handleToolTypesChange = (toolTypes: string[]) => {
    setFilters(prev => ({ ...prev, toolTypes }));
  };

  const handlePurposesChange = (purposes: string[]) => {
    setFilters(prev => ({ ...prev, purposes }));
  };

  const handlePricingTiersChange = (pricingTiers: string[]) => {
    setFilters(prev => ({ ...prev, pricingTiers }));
  };

  const handleBusinessStagesChange = (businessStages: string[]) => {
    setFilters(prev => ({ ...prev, businessStages }));
  };

  const handleRemoveToolType = (type: string) => {
    setFilters(prev => ({
      ...prev,
      toolTypes: prev.toolTypes.filter(t => t !== type)
    }));
  };

  const handleRemovePurpose = (purpose: string) => {
    setFilters(prev => ({
      ...prev,
      purposes: prev.purposes.filter(p => p !== purpose)
    }));
  };

  const handleRemovePricingTier = (tier: string) => {
    setFilters(prev => ({
      ...prev,
      pricingTiers: prev.pricingTiers.filter(t => t !== tier)
    }));
  };

  const handleRemoveBusinessStage = (stage: string) => {
    setFilters(prev => ({
      ...prev,
      businessStages: prev.businessStages.filter(s => s !== stage)
    }));
  };

  const handleClearAllFilters = () => {
    setFilters(getInitialFilters());
  };

  // Loading state
  if (loading) {
    return (
      <>
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-camel-rose mb-4"></div>
              <p className="text-deep-purple">Loading tools...</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Error state
  if (error) {
    return (
      <>
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-800 font-semibold mb-2">Unable to load tools</p>
            <p className="text-red-600 text-sm">{error}</p>
            <p className="text-red-600 text-sm mt-2">Please refresh the page or check your connection.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8 space-y-6">
        {/* Search Section */}
        <div className="bg-ivory p-6 rounded-xl border-2 border-warm-gray">
          <div className="mb-6">
            <SearchBar value={filters.search} onChange={handleSearchChange} />
          </div>
          <QuickFilters
            showFavorites={filters.showFavoritesOnly}
            showFreePlans={filters.showFreePlansOnly}
            showAffiliates={filters.showAffiliatesOnly}
            onToggleFavorites={handleToggleFavorites}
            onToggleFreePlans={handleToggleFreePlans}
            onToggleAffiliates={handleToggleAffiliates}
          />
        </div>

        {/* Advanced Filters */}
        <FilterSection
          toolTypes={filters.toolTypes}
          purposes={filters.purposes}
          pricingTiers={filters.pricingTiers}
          businessStages={filters.businessStages}
          onToolTypesChange={handleToolTypesChange}
          onPurposesChange={handlePurposesChange}
          onPricingTiersChange={handlePricingTiersChange}
          onBusinessStagesChange={handleBusinessStagesChange}
        />

        {/* Active Filters */}
        <ActiveFilters
          filters={filters}
          onRemoveToolType={handleRemoveToolType}
          onRemovePurpose={handleRemovePurpose}
          onRemovePricingTier={handleRemovePricingTier}
          onRemoveBusinessStage={handleRemoveBusinessStage}
          onClearAll={handleClearAllFilters}
        />

        {/* Controls Bar */}
        <ControlsBar
          totalCount={tools.length}
          filteredCount={filteredAndSortedTools.length}
          sortBy={sortBy}
          viewMode={viewMode}
          onSortChange={setSortBy}
          onViewModeChange={setViewMode}
        />

        {/* Tools Display */}
        {viewMode === 'grid' ? (
          <ToolGrid tools={filteredAndSortedTools} />
        ) : (
          <ToolTable tools={filteredAndSortedTools} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
