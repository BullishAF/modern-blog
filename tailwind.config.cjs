/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui: {
      themes: [
        {
          mytheme: {
          
 "primary": "#6d28d9",
          
 "secondary": "#fb923c",
          
 "accent": "#9333ea",
          
 "neutral": "#1E293B",
          
 "base-100": "#0F172A",
          
 "info": "#a855f7",
          
 "success": "#2DD4BF",
          
 "warning": "#F4BF50",
          
 "error": "#FB7085",
          },
        },
      ],
    },
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
}
