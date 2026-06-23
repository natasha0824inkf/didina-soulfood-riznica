# Didina SoulFood Riznica — Dev Rules

## Repo roles

| Repo | Owner | Role |
|------|-------|------|
| `natasha0824inkf/didina-soulfood-riznica` | Natasha | Hosts both **Staging** (`/staging/`) and **Preprod** (root) |
| `didina-soulfood/riznica` | Dragana (org) | **Production** — receives every push to `main` via sync workflow |

**URLs:**
- Staging (testing): `https://natasha0824inkf.github.io/didina-soulfood-riznica/staging/`
- Preprod (Natasha's original site): `https://natasha0824inkf.github.io/didina-soulfood-riznica/`
- Production (Dragana's live site): `https://didina-soulfood.github.io/riznica/`

## Branch strategy

- `main` — stable, deploys to preprod and prod on every push
- `claude/*` — AI-assisted feature branches (e.g. `claude/friendly-cray-sha9s`)
- `feature/*` — manual feature branches
- All work goes via PR into `main`; direct pushes to `main` only for hotfixes

## Push flow

Every `git push` goes to both remotes simultaneously:

```
git push
  └──► natasha0824inkf/didina-soulfood-riznica  (preprod)
  └──► didina-soulfood/riznica                  (production)
```

To set up the dual remote (one-time, per machine — use SSH):
```bash
git remote set-url origin git@github.com:natasha0824inkf/didina-soulfood-riznica.git
git remote set-url --add origin git@github.com:didina-soulfood/riznica.git
```

Verify:
```bash
git remote -v
# origin  git@github.com:natasha0824inkf/didina-soulfood-riznica.git (fetch)
# origin  git@github.com:natasha0824inkf/didina-soulfood-riznica.git (push)
# origin  git@github.com:didina-soulfood/riznica.git (push)
```

SSH key must be added to `natasha0824inkf` GitHub account. `natasha0824inkf` must have write access to `didina-soulfood/riznica`.

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

## Production setup — DONE ✅

- [x] Created `didina-soulfood` org on GitHub
- [x] Created `riznica` repo inside org (public, Pages enabled on `main`)
- [x] Added `natasha0824inkf` as collaborator with write access
- [x] Set up SSH key on natasha's Mac
- [x] Configured dual-remote push via `.git/config`
- [x] Initial push done — production site live at `https://didina-soulfood.github.io/riznica`
