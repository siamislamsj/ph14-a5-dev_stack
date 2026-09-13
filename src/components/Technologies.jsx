import TechnologyCard from './TechnologyCard'
import StackPanel from './StackPanel'

function Technologies({
  technologies,
  loading,
  selected,
  onAdd,
  onRemove,
  onRemoveAll,
}) {
  return (
    <section
      id="technologies"
      className="mx-auto max-w-7xl px-5 pb-24 md:px-6"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
          Explore the <span className="brand-gradient">Technologies</span>
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {loading ? (
        <div className="py-20 text-center text-sm text-slate-500">
          Loading technologies...
        </div>
      ) : (
        <div className="grid items-start gap-7 lg:grid-cols-[1fr_230px]">

          
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={selected.some(
                  (item) => item.id === technology.id
                )}
                onAdd={onAdd}
              />
            ))}
          </div>

          {/* Your Stack */}
          <div className="lg:sticky lg:top-24">
            <StackPanel
              selected={selected}
              onRemove={onRemove}
              onRemoveAll={onRemoveAll}
            />
          </div>

        </div>
      )}
    </section>
  )
}

export default Technologies