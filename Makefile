
.PHONY: build start

start: build
    node server.js

build
    ./node_modules/.bin/sass public/stylesheets.scss > /public/stylesheets.css
