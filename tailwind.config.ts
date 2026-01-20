import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#ffffff',
        'foreground': '#1a1a1a',
        'primary': '#1a1a1a',
        'primary-foreground': '#ffffff',
        'secondary': '#f5f5f5',
        'secondary-foreground': '#1a1a1a',
        'accent': '#e5e5e5',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      }
    },
  },
  plugins: [],
}
export default config