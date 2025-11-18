interface QuickFiltersProps {
  showFavorites: boolean;
  showFreePlans: boolean;
  showAffiliates: boolean;
  onToggleFavorites: () => void;
  onToggleFreePlans: () => void;
  onToggleAffiliates: () => void;
}

export function QuickFilters({
  showFavorites,
  showFreePlans,
  showAffiliates,
  onToggleFavorites,
  onToggleFreePlans,
  onToggleAffiliates,
}: QuickFiltersProps) {
  return (
    <div className="flex gap-3 flex-wrap">
      <button
        onClick={onToggleFavorites}
        className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all
                   ${showFavorites
                     ? 'bg-camel-rose text-white border-camel-rose'
                     : 'bg-white text-black border-warm-gray hover:border-camel-rose hover:bg-ivory'
                   }`}
      >
        ⭐ Diane's Favorites
      </button>
      <button
        onClick={onToggleFreePlans}
        className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all
                   ${showFreePlans
                     ? 'bg-camel-rose text-white border-camel-rose'
                     : 'bg-white text-black border-warm-gray hover:border-camel-rose hover:bg-ivory'
                   }`}
      >
        💰 Free Plans
      </button>
      <button
        onClick={onToggleAffiliates}
        className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all
                   ${showAffiliates
                     ? 'bg-camel-rose text-white border-camel-rose'
                     : 'bg-white text-black border-warm-gray hover:border-camel-rose hover:bg-ivory'
                   }`}
      >
        🔗 Affiliates
      </button>
    </div>
  );
}
