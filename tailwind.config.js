/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta WCAG estricta
        main: '#0F172A', // Texto principal y títulos (Azul Medianoche Profundo)
        interactive: {
          DEFAULT: '#0E7490', // Cerceta Profunda / Teal
          hover: '#0c5e75',
          dark: '#155e75',
          tint: '#e6f4f7',
        },
        focus: '#4338CA', // Índigo Enfoque
        app: '#F8F9FA', // Fondo general de la aplicación (Blanco Roto Neutro)
        surface: '#FFFFFF', // Superficie de tarjetas y modales (Blanco Puro)
        secondary: '#475569', // Texto secundario y metadatos (Gris Pizarra Medio)
        border: '#CBD5E1', // Bordes y divisores (Gris Pizarra Claro)
        // Alertas de estado
        alert: {
          success: {
            bg: '#DCFCE7',
            border: '#14532D',
            text: '#14532D',
            functional: '#166534',
          },
          error: {
            bg: '#FEE2E2',
            border: '#7F1D1D',
            text: '#7F1D1D',
            functional: '#991B1B',
          },
          warning: {
            bg: '#FEF3C7',
            border: '#78350F',
            text: '#78350F',
            functional: '#9A3412',
          },
          info: {
            bg: '#DBEAFE',
            border: '#1E3A8A',
            text: '#1E3A8A',
            functional: '#1E40AF',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
