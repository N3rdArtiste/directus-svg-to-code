# directus-svg-to-code

**Directus extension hook to get svg code from svg files**

[![](https://www.dropbox.com/s/75lb2pltxe7l6jf/Screen%20Shot%202022-03-24%20at%2011.03.15%20AM.png?raw=1)](https://www.dropbox.com/s/75lb2pltxe7l6jf/Screen%20Shot%202022-03-24%20at%2011.03.15%20AM.png?raw=1)


Steps:

1. First install the package "npm install directus-custom-hook-svg-to-code"
2. create a file "extensions/hooks/svg-to-code/index.js"
3. put  `var e = require('directus-custom-hook-svg-to-code');
module.exports = e;
` in that index.js file
4. Start directus.
5. Go to Settings>Data Model>System Collections(drop down)>Directus Files
6. Create a new field with key "svg_code" and type "text". Also, make this field read only.
7. Now when you upload an svg file, this field will immediately be filled with the svg code for that file.

