
.PHONY: build

build: 
		./node_modules/.bin/sass public/stylesheets/style.scss > public/stylesheets/style.css
