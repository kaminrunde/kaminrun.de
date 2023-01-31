#!make

all: compile

.PHONY: setup
setup:
	npm install

.PHONY: dev
dev:
	npm run dev

.PHONY: build
build:
	npm run build

dist/css/main.css:
	npx tailwindcss -i src/css/main.css -o dist/css/main.css

.PHONY: watch
compile-watch:
	npx tailwindcss -i src/css/main.css -o dist/css/main.css --watch

.PHONY: clean
clean:
	rm -rf node_modules
