function StackPanel({ selected, onRemove, onRemoveAll }) {
  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-4 shadow-[0_2px_10px_rgba(15,23,42,0.03)]">
      <h3 className="font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-[11px] text-slate-400">
        {selected.length} {selected.length === 1 ? 'Technology' : 'Technologies'} Selected
      </p>

      <div className="mt-4 space-y-2">
        {selected.length === 0 ? (
          <div className="rounded-lg border border-dashed border-slate-200 px-3 py-8 text-center text-xs text-slate-400">
            Your Stack is empty
          </div>
        ) : (
          selected.map((item) => (
            <div key={item.id} className="flex items-center gap-3 rounded-lg border border-slate-200 p-2.5">
              <img src={item.icon} alt="" className="h-7 w-7 object-contain" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-slate-800">{item.name}</p>
                <p className="text-[9px] text-slate-400">{item.category}</p>
              </div>
              <button onClick={() => onRemove(item.id)} className="text-lg leading-none text-slate-300 hover:text-red-500">×</button>
            </div>
          ))
        )}
      </div>

      <button
        onClick={onRemoveAll}
        className="mt-5 w-full rounded-md border border-red-200 py-2 text-xs font-semibold text-red-500"
      >
        Remove All
      </button>
    </aside>
  )
}

export default StackPanel
