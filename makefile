dogui : build
	
build :
	cross-env NODE_ENV=production browserify -g envify -p [ vueify/plugins/extract-css -o dist/build.css ] -e src/main.js | uglifyjs -c warnings=false -m > dist/build.js

run : watchify localServe
	
watchify :
	watchify -vd -p browserify-hmr -e src/main.js -o dist/build.js

localServe :
	http-server -o -s -c 1 -a localhost

install :
	npm install && npm install --only=dev

clean :
	rm dist/build.css dist/build.js
