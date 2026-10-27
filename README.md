# TaskFlow

**Gestion de tâches d'équipe — projet de démonstration**

> ⚠️ **Contenu entièrement fictif.**
> Ce dépôt est un exercice. La société *Northwind Studio*, l'équipe, les utilisateurs,
> les tâches, les métriques et les dates sont **inventés**. Aucune donnée réelle,
> aucune personne réelle, aucune société réelle n'est représentée ici.

TaskFlow est une application (fictive) de gestion de tâches pour de petites équipes.
Elle permet de créer des projets, d'assigner des tâches, de suivre leur avancement
et de visualiser la charge de travail de chacun sur un tableau de bord simple.

## Fonctionnalités

- Tableau kanban : `À faire` → `En cours` → `En revue` → `Terminé`
- Assignation d'une tâche à un membre de l'équipe
- Étiquettes, priorités et dates d'échéance
- Tableau de bord de charge (tâches ouvertes par personne)
- Historique des modifications par tâche

## Stack technique (fictive)

| Couche | Technologie |
| --- | --- |
| Frontend | React 18 + Vite |
| Backend | Node.js 20 + Express |
| Base de données | PostgreSQL 16 |
| Tests | Vitest + Playwright |
| CI/CD | GitHub Actions |

## Démarrage

```bash
npm install
npm run dev
```

L'application est alors disponible sur `http://localhost:4242`.
Les données de démonstration sont chargées depuis `data/`.

## Structure du projet

```
demo-projet/
├── data/
│   ├── tasks.json      # tâches fictives
│   └── users.json      # membres d'équipe fictifs
├── src/
│   ├── index.js        # point d'entrée de la démo
│   └── stats.js        # calcul des statistiques de charge
├── CHANGELOG.md
├── CONTRIBUTING.md
└── package.json
```

## API (fictive)

| Méthode | Route | Description |
| --- | --- | --- |
| `GET` | `/api/tasks` | Liste les tâches |
| `POST` | `/api/tasks` | Crée une tâche |
| `PATCH` | `/api/tasks/:id` | Met à jour une tâche |
| `GET` | `/api/stats` | Charge par membre |

## Équipe (fictive)

| Nom | Rôle | Contact |
| --- | --- | --- |
| Camille Vasseur | Product Owner | camille.vasseur@example.com |
| Yanis Delorme | Lead Dev | yanis.delorme@example.com |
| Priya Raman | Frontend | priya.raman@example.com |
| Tomas Berg | Backend | tomas.berg@example.com |
| Léa Fontaine | QA | lea.fontaine@example.com |

Toutes les adresses utilisent le domaine réservé `example.com` et ne pointent vers
aucune boîte réelle.

## Chiffres de démonstration (fictifs)

- 3 projets actifs
- 42 tâches dont 17 terminées
- Temps moyen de revue : 1,8 jour
- Vélocité moyenne : 23 points par sprint

## Roadmap (fictive)

- **v0.4** — Filtres par étiquette et par échéance
- **v0.5** — Notifications par e-mail
- **v1.0** — Mode hors-ligne et synchronisation

## Licence

MIT — voir [LICENSE](LICENSE).
