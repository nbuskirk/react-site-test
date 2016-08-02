<h1>React SPA Boilerplate</h1>
<pre>
1. git clone https://github.com/nbuskirk/react-site-test.git /var/www/newProject
2. cd /var/www/newProject && npm install && npm run dev
3. Browse http://localhost:8090
--
npm commands:
--
"build": "webpack -d",
"start": "npm run serve | npm run dev",
"serve": "./node_modules/.bin/http-server -p 8080",
"dev": "webpack-dev-server -d --progress --colors --port 8090"

Initial version, react routing responsible for SPA. Currently uses hashHistory, might re-evaluate to other history mechanism, urls
are hideous this way.

Structure: (es6, react, jade, less)
--
Layouts/templates for dynamic content are in /layouts
Static templates (eg: index.html) is generated from a jade template in /statics thats copied to /dist on bundle.
Functionality and react components for the layouts are in /components (eg: footer, navigation, etc)
CSS and styles are bundled from /css/main.less - transpiled to css on bundle in /dist 

Deploy
--
Copy /dist to server, enjoy.

Example
--
<a href="http://lab.nbuskirk.com/react-routing" target="_blank">http://lab.nbuskirk.com/react-routing</a>
</pre>
