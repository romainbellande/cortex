.DEFAULT_GOAL = help
## —— trivia ———————————————————————————————————————————————————————————————————————————————————————————————————————————
help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— certs ————————————————————————————————————————————————————————————————————————————————————————————————————————————
certs:
	mkcert -install && mkcert -cert-file certs/local-cert.pem -key-file certs/local-key.pem "cortex.localhost" "*.cortex.localhost"

## —— api ———————————————————————————————————————————————————————————————————————————————————————————————————————
typeorm:
	docker-compose exec api yarn typeorm:exec $(command)

migration-generate: ## [api] generate migration
	make typeorm command="migration:generate -n $(name) -d src/migrations"

migration-revert: ## [api] revert migration
	make typeorm command="migration:revert"

migration-run: ## [api] run migration
	make typeorm command="migration:run"

.PHONY: migration-generate migration-revert migration-run certs

## —— client ———————————————————————————————————————————————————————————————————————————————————————————————————————
ui-component: ## [client] create new ui component
	npx nx g component $(name) --project=ui --export

app-view:
	npx nx g module views/$(name) --routing --project=cortex

dashboard-view:
	npx nx g module views/dashboard/$(name) --routing --project=cortex && npx nx g component views/dashboard/$(name) --project=cortex

portal-view:
	npx nx g module views/portal/$(name) --routing --project=cortex && npx nx g component views/portal/$(name) --project=cortex
