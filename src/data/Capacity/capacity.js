export default [
    {
        name:"Camouflage",
        recap: "Quand une unité avec le mot clé CAMOUFLAGE est détruite dans une escarmouche, on ne la retire pas du plateau. A la fin de la résolution de l'escarmouche, l'unité fait Retraite.",
        desc: "Le joueur contrôlant cette unité déplace immédiatement l'unité de la bataille vers une zone vide ou amie de la planète active. S'il n'y a pas de zone possible, ou si l'unité dépasse la limite d'unité de la zone, elle est détruite."
    },
    {
        name:"Détecteur",
        recap: "La capacité Détecteur annule la capacité camouflage de l'unité ennemie dans la même escarmouche",
        desc: "Si un joueur a une unité (en première ligne ou en soutien) avec la capacité Détecteur, la capacité Camouflage des unités adverses dans la même escarmouche est ignorée."
    },
    {
        name:"Renfort",
        recap: "Les unités avec le mot clé Renfort, ne peuvent être assigné comme unités de première ligne dans une escarmouche. Ce sont toujours des unités en soutient. S'il y a de telles unités dans les deux camps, c'est l'attaquant qui assigne ses unités de soutien, puis le défenseur.",
        desc: "Si toutes les unités d'un joueur dans une bataille ont ce mot clé, ce joueur désigne une des ces unités pour être son unité de première ligne. il n'y aura qu'une escarmouche pour cette bataille et les autres unités seront des unités de soutien."
    },
    {
        name:"Dégats Répercutés",
        recap: "Les dégats répercutés ne sont pas résolus klors d'une escarmouche, mais s'accumulent au cours des escarmouches de la bataille et sont résolus à la fin de la bataille.",
        desc: {
            name: "Déclencher des dégats répercutés",
            desc: ""
        },
        desc1: {
            name: "Camouflage et dégats répercutés",
            desc: ""
        },
        desc2: {
            name: "Résolution des dégats répercutés",
            desc: ""
        }
    }
];