.PHONY: setup dev-frontend dev-backend dev build clean deploy-vercel deploy-render

setup:
	npm install
	cd src/frontend && npm install
	cd src/backend && npm install

dev-frontend:
	cd src/frontend && npm run dev

dev-backend:
	cd src/backend && npm run dev

dev:
	npm run dev

build:
	npm run build

clean:
	rm -rf node_modules
	rm -rf src/frontend/node_modules src/frontend/.next
	rm -rf src/backend/node_modules src/backend/dist

deploy-vercel:
	cd src/frontend && npx vercel

deploy-render:
	cd src/backend && npx render deploy