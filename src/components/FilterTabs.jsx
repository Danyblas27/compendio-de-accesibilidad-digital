export default function FilterTabs({ options, active, onChange, label }) {
  const all = ['Todos', ...options]
  return (
    <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label={label}>
      {all.map((opt) => {
        const value = opt === 'Todos' ? null : opt
        const pressed = active === value
        return (
          <button
            key={opt}
            type="button"
            className={`px-3.5 py-1.5 text-sm font-bold rounded-full border transition-colors cursor-pointer ${
              pressed
                ? 'bg-interactive text-white border-interactive shadow-sm'
                : 'bg-surface text-secondary border-border hover:bg-interactive-tint hover:text-main hover:border-interactive'
            }`}
            aria-pressed={pressed}
            onClick={() => onChange(value)}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}
