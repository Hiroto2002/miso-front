PNPM := pnpm --prefix ./
SHADCN := npx shadcn@latest --cwd frontend

front/dev: front/install
	$(PNPM) run dev

front/install:
	$(PNPM) install

ui/add/%:
	$(SHADCN) add $*

pnpm/add/%:
	$(PNPM) add $*
