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

.PHONY: clean
clean:
	rm -rf dist node_modules
