# creates some blogs in the in the db
db-seeding:
	docker exec latm-blog-mongo-1 cp /docker/seeding/seeding.sh seeding-copy.sh
	docker exec latm-blog-mongo-1 chmod +x seeding-copy.sh
	docker exec latm-blog-mongo-1 sh /seeding-copy.sh

down:
	docker compose down

backend-up:
	docker compose up -d

app-up-dev:
	npm --prefix app/ run dev

up-dev:
	docker compose up -d
	npm --prefix app/ run dev

up-prod:
	docker compose up -d
	npm --prefix app/ run