<h1>React Radial Component</h1>
<pre>
1. git clone https://github.com/nbuskirk/react-site-test/tree/radial ~/Sites/radial
2. cd ~/Sites/radial && npm install && npm run dev
3. Browse http://localhost:8090
--
npm commands:
--
"build": "webpack -d",
"start": "npm run serve | npm run dev",
"serve": "./node_modules/.bin/http-server -p 8080",
"dev": "webpack-dev-server -d --progress --colors --port 8090"

React radial dial component. Initial version 1.0.

Structure: (es6, react, jade, less)
--
Layouts/templates for dynamic content are in /layouts
Static templates (eg: index.html) is generated from a jade template in /statics thats copied to /dist on bundle.
Functionality and react components for the layouts are in /components (eg: radial, footer, navigation, etc)
CSS and styles are bundled from /css/main.less - transpiled to css on bundle in /dist 

Deploy
--
Copy /dist to server, enjoy.

Example
--
http://lab.nbuskirk.com/radial
</pre>
