/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	 mytheme: {
          
 "primary": "#22d3ee",
          
 "secondary": "#22d3ee",
          
 "accent": "#9333ea",
          
 "neutral": "#1E293B",
          
 "base-100": "#0F172A",
          
 "info": "#0CA5E9",
          
 "success": "#2DD4BF",
          
 "warning": "#F4BF50",
          
 "error": "#FB7085",
          },
        },
      ],
    },
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
}
