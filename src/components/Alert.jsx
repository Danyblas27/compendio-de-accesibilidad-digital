/**
 * Componente Alert accesible conforme a WCAG AAA.
 * Incorpora iconos vectoriales identificativos para no depender únicamente del color (Criterio WCAG 1.4.1 Uso del color).
 */
export default function Alert({
  type = 'info', // 'success' | 'error' | 'warning' | 'info'
  title,
  children,
  className = '',
}) {
  const configs = {
    success: {
      role: 'status',
      label: 'Éxito',
      containerClass: 'bg-alert-success-bg border-alert-success-border text-alert-success-text',
      textClass: 'text-alert-success-functional',
      icon: (
        <svg
          className="w-5 h-5 flex-shrink-0 mt-0.5 text-alert-success-text"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    error: {
      role: 'alert',
      label: 'Error',
      containerClass: 'bg-alert-error-bg border-alert-error-border text-alert-error-text',
      textClass: 'text-alert-error-functional',
      icon: (
        <svg
          className="w-5 h-5 flex-shrink-0 mt-0.5 text-alert-error-text"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
      ),
    },
    warning: {
      role: 'status',
      label: 'Advertencia',
      containerClass: 'bg-alert-warning-bg border-alert-warning-border text-alert-warning-text',
      textClass: 'text-alert-warning-functional',
      icon: (
        <svg
          className="w-5 h-5 flex-shrink-0 mt-0.5 text-alert-warning-text"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    info: {
      role: 'status',
      label: 'Información',
      containerClass: 'bg-alert-info-bg border-alert-info-border text-alert-info-text',
      textClass: 'text-alert-info-functional',
      icon: (
        <svg
          className="w-5 h-5 flex-shrink-0 mt-0.5 text-alert-info-text"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      ),
    },
  }

  const current = configs[type] || configs.info

  return (
    <div
      role={current.role}
      className={`flex items-start gap-3 p-4 rounded-md border text-sm ${current.containerClass} ${className}`}
    >
      {current.icon}
      <div className="flex-1 space-y-1">
        {title && (
          <p className="font-bold leading-snug">
            <span className="sr-only">{current.label}: </span>
            {title}
          </p>
        )}
        <div className={`leading-relaxed ${current.textClass}`}>{children}</div>
      </div>
    </div>
  )
}
