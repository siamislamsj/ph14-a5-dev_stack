function TechnologyCard({ technology, isAdded, onAdd }) {
  const badgeColors = {
    Popular: 'bg-sky-50 text-sky-500',
    Versatile: 'bg-emerald-50 text-emerald-500',
    Fast: 'bg-orange-50 text-orange-500',
    'Top SQL': 'bg-blue-50 text-blue-500',
    Cache: 'bg-red-50 text-red-500',
    Ubiquitous: 'bg-amber-50 text-amber-500',
    Essential: 'bg-sky-50 text-sky-500',
    Robust: 'bg-sky-50 text-sky-500',
    Modern: 'bg-cyan-50 text-cyan-500',
    Containers: 'bg-sky-50 text-sky-500',
    Standard: 'bg-emerald-50 text-emerald-500',
  }

  const badgeClass = badgeColors[technology.badge] || 'bg-slate-100 text-slate-500'

  return (
    <article className="flex min-h-[245px] flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.03)]">
      <div className="flex items-start justify-between gap-4">
        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="h-7 w-7 object-contain"
        />
        <span className={`rounded-full px-3 py-1 text-[10px] font-semibold ${badgeClass}`}>
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{technology.name}</h3>
      <p className="mt-2 flex-1 text-xs leading-5 text-slate-500">{technology.description}</p>

      <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-3 text-[10px] text-slate-500">
        <span className="rounded bg-slate-50 px-2 py-1">{technology.category}</span>
        <span className="truncate">{technology.difficulty}</span>
        <span className="ml-auto whitespace-nowrap text-slate-700">⭐ {technology.rating}</span>
      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-3 w-full rounded-md py-2.5 text-xs font-medium text-white ${
          isAdded ? 'cursor-not-allowed bg-slate-400' : 'bg-slate-950 hover:bg-slate-800'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  )
}

export default TechnologyCard
