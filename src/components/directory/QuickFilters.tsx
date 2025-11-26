interface QuickFiltersProps {
  showInTechStack: boolean;
  showFreePlans: boolean;
  showAffiliates: boolean;
  showStudentCreated: boolean;
  onToggleInTechStack: () => void;
  onToggleFreePlans: () => void;
  onToggleAffiliates: () => void;
  onToggleStudentCreated: () => void;
}

export function QuickFilters({
  showInTechStack,
  showFreePlans,
  showAffiliates,
  showStudentCreated,
  onToggleInTechStack,
  onToggleFreePlans,
  onToggleAffiliates,
  onToggleStudentCreated,
}: QuickFiltersProps) {
  return (
    <div className="flex gap-3 flex-wrap">
      <button
        onClick={onToggleInTechStack}
        className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all
                   ${showInTechStack
                     ? 'bg-camel-rose text-white border-camel-rose'
                     : 'bg-white text-black border-warm-gray hover:border-camel-rose hover:bg-ivory'
                   }`}
      >
        🛠️ In Diane's Tech Stack
      </button>
      <button
        onClick={onToggleFreePlans}
        className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all
                   ${showFreePlans
                     ? 'bg-camel-rose text-white border-camel-rose'
                     : 'bg-white text-black border-warm-gray hover:border-camel-rose hover:bg-ivory'
                   }`}
      >
        💰 Free Option
      </button>
      <button
        onClick={onToggleAffiliates}
        className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all
                   ${showAffiliates
                     ? 'bg-camel-rose text-white border-camel-rose'
                     : 'bg-white text-black border-warm-gray hover:border-camel-rose hover:bg-ivory'
                   }`}
      >
        🔗 Affiliate
      </button>
      <button
        onClick={onToggleStudentCreated}
        className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all
                   ${showStudentCreated
                     ? 'bg-camel-rose text-white border-camel-rose'
                     : 'bg-white text-black border-warm-gray hover:border-camel-rose hover:bg-ivory'
                   }`}
      >
        🎓 Student Created
      </button>
    </div>
  );
}
