/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta extraída da logo oficial BlueCharge (indigo do wordmark + vermelho do raio)
        brand: {
          DEFAULT: '#3E4095',
          dark: '#2D2F71',
          light: '#EEEEF8',
        },
        spark: {
          DEFAULT: '#D0021B',
          dark: '#A80115',
        },
        graphite: {
          DEFAULT: '#111218',
          soft: '#1B1D26',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        tech: ['Outfit', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
