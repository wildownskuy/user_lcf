const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'blueColor': '#654E92',
        'greyIsh': '#DDE6ED',
        'section': '#F5F5F5',
        'textColor': '#0C134F',
      }
    },
  },
  plugins: [],
});