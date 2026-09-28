export default function FilterTabs({ options, active, onChange, label }) {
  const all = ['Todos', ...options]
  return (
    <div className="filters" role="group" aria-label={label}>
      {all.map((opt) => {
        const value = opt === 'Todos' ? null : opt
        const pressed = active === value
        return (
          <button
            key={opt}
            type="button"
            className={`chip${pressed ? ' is-active' : ''}`}
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
