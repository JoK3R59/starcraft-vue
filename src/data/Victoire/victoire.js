const victoire = [
    {
        name: "Victoire Normale",
        desc: "Un joueur (ou plus) a accumulé 15 points de conquête (ou plus) lors de l'étape 6 de la Phase de Regroupement.",
        plus: "A la fin de l'étape 6 de la phase de Regroupement, si un ou plusieurs joueurs on accumulé 15 points de conquête ou plus, le jeu se termine immédiatement et le joueur avec le plus de points de conquête est le vainqueur. S'il y a une égalité, c'est le joueur impliqué avec le plus de ressources (Gaz et Minerai) qui l'emporte. On compte le nombre total de ressources, pas le nombre de cartes ressource. S'il y a toujours égalité, c'est le joueur impliqué qui contrôle le plus de zone qui l'emporte. S'il y a toujours égalité, c'est le joueur impliqué avec le plus de bases en jeu qui l'emporte. S'il y a toujours égalité, c'est le joueur impliqué avec le plus de travailleurs dans sa réserve qui l'emporte. Dans le cas très rare où il y aurait toujours égalité, les joueurs à égalité partagent la victoire."
    },
    {
        name: "Victoire Particulière",
        desc: "Un joueur (ou plus) a accompli son objectif de victoire particulière lors de l'étape 7 de la Phase de Regroupement.",
        plus: "Chaque fiche de faction indique la condition de victoire particulière de cette faction. Lors de l'étape 7 de la phase de Regroupement, si un joueur a accompli sa condition de victoire particulière, le jeu est IMMEDIATEMENT terminé et ce joueur a gagné.",
        plus2: "Si deux joueurs ont accompli leur condition de victoire particulière. le joueur est impliqué avec le plus de conquête l'emporte. S'il y a une égalité, on utilise la même procédure pour départager les égalités que pour la victoire normale."
    },
    {
        name: "Victoire de Fin de Partie",
        desc: "Deux cartes (ou plus) Evénement <<la Fin est Proche>> se trouvent dans l'aire de jeu commune à la fin de l'étape 8 de la Phase de Regroupement.",
        plus: "A la fin de l'étape 8 de la phase de Regroupement, s'il y a au moins deux cartes <<la Fin est Proche>> sur l'aire de jeu commune, le jeu est immédiatement terminé, et le joueur avec le plus de points de conquête l'emporte. S'il y a une égalité, on utilise la procédure de départage indiquée par la Victoire Normale."
    },
    {
        name: "Victoire par Elimination (rare)",
        desc: "Tous les joueurs sauf un sont éliminés."
    }
];

export default victoire;