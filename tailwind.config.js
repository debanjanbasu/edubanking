/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#da1710",
          "secondary": "#991AD6",         
          "accent": "#ffd9f7",         
          "neutral": "#2a2e42",         
          "base-100": "f9f9fb",         
          "info": "#0074c4",         
          "success": "#008000",         
          "warning": "#c53b00",    
          "error": "#ff0",
          "background" : "f3f4f6",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
