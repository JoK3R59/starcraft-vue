# StarCraft — Le Jeu de Plateau

Compagnon non-officiel (fan-made) pour le jeu de plateau **StarCraft** de Fantasy Flight Games.  
Application en **français** couvrant les factions, les règles et un simulateur de combat.

> Projet réalisé par Guillaume ersent (début 2021).

---

## Stack technique

| Technologie | Version |
|-------------|---------|
| Vue.js | 2.6 |
| Vue Router | 3.x |
| Bootstrap | 4.x |
| Node.js | 14+ |

- Pas de Vuex — la communication entre composants passe par un **event bus** (`src/main.js`)
- Toutes les données sont locales (pas d'API) — fichiers JS dans `src/data/`

---

## Installation

```bash
npm install
```

## Commandes

```bash
npm run serve   # Serveur de développement avec hot-reload
npm run build   # Build de production → dist/
npm run lint    # ESLint avec correction automatique
```

---

## Déploiement Docker

Build multi-étape : Node 14 (build) → Nginx Alpine (serve, port 80).

```bash
docker build -t starcraft-vue .
docker run -p 80:80 starcraft-vue
```

---

## Routes

| Chemin | Composant | Description |
|--------|-----------|-------------|
| `/` | `Acceuil` | Page d'accueil et FAQ |
| `/combat` | `Combat` | Simulateur de combat |
| `/factions` | `Factions` | Grille des factions et commandants |
| `/factions/:name` | `Commander` | Détail d'un commandant |
| `/regles` | `Regles` | Référence des règles du jeu |

---

## Historique des versions

**v0.4.5**
Ajout SIMULATION — mise en place de la balise `SELECT` pour Atk et Def, correction sur `CARD.js` pour différencier Carte Combat et Carte Renfort.

**v0.3.0**
Ajout Multiples dans RÈGLES — Récap à terminer, bouton « Plus d'informations » à terminer. Rectifications CSS sur divers composants.

**v0.2.9**
Changement de framework — passage de React.js à Vue.js.

**v0.2.8**
Changement d'interface (SCSS) — redirection des images dans `public/` — corrections CSS mineures — ajout fond noir dans MODAL — ajout composant FOOTER.

**v0.2.6**
Redux mis en place, arborescence des fichiers revue, composant Rules à terminer (Order en cours). CSS à revoir sur Order — données à transférer dans le store Redux.

**v0.2.5**
Changements CSS dans MENU et RACES. Ajout bouton RULES pour inclure les composants PHASE et ORDER.

**v0.2.0**
Mise en place de la section « Présentation des races ». Réglage temporaire du CSS.
