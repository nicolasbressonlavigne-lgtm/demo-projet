# Contribuer

> Ce depot est un **exercice fictif** : il n'accepte pas de contributions reelles.
> Le guide ci-dessous sert uniquement a illustrer les bonnes pratiques.

## Mise en place

```bash
npm install
npm run dev
```

## Convention de branches

- `feat/<sujet>` — nouvelle fonctionnalite
- `fix/<sujet>` — correction de bug
- `docs/<sujet>` — documentation

## Convention de commits

Format : `type(scope): description`

Types acceptes : `feat`, `fix`, `docs`, `refactor`, `test`, `chore`.

Exemple : `feat(tasks): ajouter le filtre par etiquette`

## Avant de proposer une pull request

1. Les tests passent (`npm test`)
2. Le code est formate
3. Le `CHANGELOG.md` est mis a jour
