import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        primary: '#1E328B',
        'primary-light': '#8BB9F7',
        accent: '#FEBB39',
        navy: '#0D1B5E',
        'text-primary': '#0A0F2E',
        'text-muted': '#6B7494',
        border: '#E8ECF4',
        'bg-subtle': '#F7F7F7',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
export default config
