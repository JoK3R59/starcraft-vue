# StarCraft — Le Jeu de Plateau

Compagnon non-officiel (**fan-made**) pour le jeu de plateau [StarCraft](https://www.fantasyflightgames.com/en/products/starcraft-the-board-game/) de Fantasy Flight Games.

Application entièrement en **français**, conçue pour accompagner les joueurs à la table : consultation des factions et commandants, référence des règles, et un **simulateur de combat** permettant de rejouer des escarmouches et d'en visualiser les résultats.

> Ce projet a été initié en **2021**, il s'agissait de mon **tout premier projet** en tant que développeur débutant — une façon d'apprendre Vue.js en construisant quelque chose qui me passionner vraiment.  
> Il a évolué au fil du temps et constitue aujourd'hui une vitrine de ma progression, depuis les premiers composants jusqu'à la mise en place d'une infrastructure de déploiement complète.

---

## Concept

Le jeu de plateau StarCraft est un jeu de stratégie complexe avec de nombreuses factions, règles et mécaniques de combat. Cette application sert de **référence rapide** pour les joueurs :

- **Factions & Commandants** — aperçu des races (Terran, Zerg, Protoss) et de leurs commandants, avec unités de départ et capacités spéciales.
- **Règles** — accès structuré aux phases de jeu, ordres, modules et exploits.
- **Simulateur de combat** — configuration d'escarmouches avec sélection des figurines et des cartes, puis résolution et visualisation des résultats.

---

## Stack technique

| Technologie | Rôle |
|-------------|------|
| **Vue.js 2.6** | Framework UI (SPA) |
| **Vue Router 3** | Navigation entre les sections |
| **Bootstrap 4** | Mise en page et composants CSS |
| **Node.js 18** | Environnement de build |
| **pnpm** | Gestionnaire de paquets |

**Choix d'architecture notables :**

- Pas de Vuex — la communication inter-composants s'appuie sur un **event bus** (`src/main.js`), suffisant pour la taille du projet.
- Toutes les données sont **statiques** (fichiers JS dans `src/data/`) — pas d'API externe, le projet tourne entièrement côté client.
- Données de jeu modélisées en objets JS purs, ce qui les rend facilement extensibles.

---

## Structure des routes

| Chemin | Description |
|--------|-------------|
| `/` | Accueil et FAQ |
| `/factions` | Grille des factions et commandants |
| `/factions/:name` | Détail d'un commandant |
| `/regles` | Référence des règles du jeu |
| `/combat` | Simulateur de combat |

---

## Lancer le projet en local

```bash
pnpm install
pnpm run serve    # http://localhost:8080
```

```bash
pnpm run build    # Build de production → dist/
pnpm run lint     # ESLint avec correction automatique
```

---

## Infrastructure & Déploiement

Le projet tourne en production sur un **VPS Linux** via Docker, derrière un reverse proxy Nginx.

### Architecture de déploiement

```
GitHub (push master)
    └── GitHub Actions
            └── SSH → VPS
                    └── git pull + docker compose up --build
                            └── Container Nginx (port 8081)
                                    └── Reverse proxy Nginx hôte → domaine public
```

### Docker

Build multi-étape — Node 18 Alpine compile le projet, Nginx Alpine sert le bundle statique.

```bash
docker compose up --build -d
```

### CI/CD — GitHub Actions

Le workflow `.github/workflows/deploy.yml` se déclenche à chaque push sur `master` :
se connecte au VPS en SSH, tire les dernières sources et relance le container.

| Secret GitHub requis | Description |
|----------------------|-------------|
| `VPS_HOST` | IP ou hostname du VPS |
| `VPS_USER` | Utilisateur SSH |
| `VPS_SSH_KEY` | Clé privée SSH (ed25519) |

> Les images du jeu (`src/assets/Images/`, ~426 Mo) sont gitignorées et persistent sur le VPS entre chaque déploiement — elles ne transitent jamais par Git.

---

*Projet personnel — non affilié à Fantasy Flight Games ou Blizzard Entertainment.*
