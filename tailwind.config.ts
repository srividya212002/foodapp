import {nextui} from '@nextui-org/theme';
 /**@type {import ('tailwindcss').config}*/

 module.exports= {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/tabs.js"
  ],
  theme: {
    extend: {
      container: {
      center: true,
        padding : "15px",
         },
         colors : {
          accent:"#f94c25",
         }
    },
  },
  plugins: [nextui()],
} 
