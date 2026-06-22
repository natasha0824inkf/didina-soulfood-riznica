# Didina SoulFood Riznica — Dev Rules

## Repo roles

| Repo | Owner | Role |
|------|-------|------|
| `natasha0824inkf/didina-soulfood-riznica` | Natasha | **Staging** — active development, feature branches, PRs |
| `didina-soulfood/riznica` | Dragana (org) | **Preprod / Production** — receives every push to `main` via dual remote |

**URLs:**
- Staging: `https://natasha0824inkf.github.io/didina-soulfood-riznica`
- Production: `https://didina-soulfood.github.io/riznica`

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
  └──► didina-soulfood/riznica                  (production)
```

To set up the dual remote (one-time, per machine):
```bash
git remote set-url --add origin https://github.com/didina-soulfood/riznica.git
```

Verify:
```bash
git remote -v
# origin  https://github.com/natasha0824inkf/didina-soulfood-riznica.git (fetch)
# origin  https://github.com/natasha0824inkf/didina-soulfood-riznica.git (push)
# origin  https://github.com/didina-soulfood/riznica.git (push)
```

## Pull / sync

Pull always comes from natasha's repo (fetch origin = natasha's):
```bash
git pull origin main
```

`didina-soulfood/riznica` is push-only — never pull from it.

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

- [ ] Create `riznica` repo inside `didina-soulfood` org (public, enable Pages on `main`)
- [ ] Add second push remote locally: `git remote set-url --add origin https://github.com/didina-soulfood/riznica.git`
- [ ] Do an initial push to populate the prod repo
- [ ] Verify `https://didina-soulfood.github.io/riznica` loads correctly
