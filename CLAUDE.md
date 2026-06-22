# Didina SoulFood Riznica — Dev Rules

## Repo roles

| Repo | Owner | Role |
|------|-------|------|
| `natasha0824inkf/didina-soulfood-riznica` | Natasha | **Staging** — active development, feature branches, PRs |
| `DRAGANA_USERNAME/didina-soulfood-riznica` | Dragana | **Preprod / Production** — receives every push to `main` via dual remote |

## Branch strategy

- `main` — stable, deploys to **both** staging and preprod on every push
- `claude/*` — AI-assisted feature branches (e.g. `claude/friendly-cray-sha9s`)
- `feature/*` — manual feature branches
- All work goes via PR into `main`; direct pushes to `main` only for hotfixes

## Push flow

Every `git push` goes to both remotes simultaneously:

```
git push
  └──► natasha0824inkf/didina-soulfood-riznica  (staging)
  └──► DRAGANA_USERNAME/didina-soulfood-riznica  (preprod/prod)
```

To set up the dual remote (one-time, per machine):
```bash
git remote set-url --add origin https://github.com/DRAGANA_USERNAME/didina-soulfood-riznica.git
```

## Pull / sync

Pull always comes from natasha's repo (fetch origin = natasha's):
```bash
git pull origin main
```

Dragana's repo is push-only — never pull from it.

## Language

- UI strings live in `js/translations.js` — SR / DE / EN keys required for every new string
- Serbian (sr) is the default/fallback

## Cache busting

All HTML files reference JS and CSS with `?v=N` — increment N when deploying breaking CSS/JS changes:
```html
<link rel="stylesheet" href="css/style.css?v=2">
<script src="js/main.js?v=2"></script>
```

## Pending setup (see issue #41)

- [ ] Replace `DRAGANA_USERNAME` above with her actual GitHub username
- [ ] Add second push remote locally after her account is created
- [ ] (Later) Migrate to GitHub Org `didinasoulfoodriznica`
