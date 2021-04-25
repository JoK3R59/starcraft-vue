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
        name: "Symbole Soutien Spécialisé",
        recap: "La présence de symbole indique que la capacité spéciale de cette carte renfort ne peut être utilisée que si l'unité représentée est en première ligne ou en soutien de cette escarmouche.",
        imgSSS: "",
        descImg: "Un symbole d'unité avec le Symbole Soutien Spécialisé."
    },
    {
        name:"Dégâts Répercutés",
        recap: "Les Dégâts répercutés ne sont pas résolus lors d'une escarmouche, mais s'accumulent au cours des escarmouches de la bataille et sont résolus à la fin de la bataille.",
        desc: {
            name: "Déclencher des Dégâts Répercutés",
            desc: "Les Dégâts Répercutés d'une carte ne font effet que s'ils sont Déclenchés. Ce déclenchement a lieu si la carte portant le mot clé Dégâts Répercutés détruit au moins une unité adverse lors de l'étape Destruction d'unités de l'escarmouche au cours de laquelle cette carte a été jouée. Cela est toujours le cas même si des unités amies ont été détruites lors de l'escarmouche.",
            desc1: "Si une unité adverse a été détruite lors de la résolution de l'escarmouche, chaque carte amie ayant le mot clé Dégâts Répercutés est déclenchée. Si la carte de Combat standard d'un joueur et sa carte renfort ont le mot clé Dégats Répercutés, et qu'une unité ennemie est détruite lors de l'escarmouche, cela active les deux cartes Dégâts Répercutés.",
            desc2: "Les cartes Dégâts Répercutés activées sont placées face visible à côté de la bataille pour enregistrer le nombre de Dégâts Répercutés pour cette bataille. Les cartes Dégâts Répercutés non activées sont défaussées normalement"
        },
        desc1: {
            name: "Camouflage et Dégâts Répercutés",
            desc: "Détruire une unité camouflée lors d'une escarmouche déclenche des Dégâts Répercutés normalement, même si l'unité camouflée se retire de la bataille au lieu d'être détruite.",
            desc1: "Le camouflage permet à une unité de se retirer au lieu d'être détruite lors d'une escarmouche. Le camouflage ne permet pas à une unité de se retirer lors de l'étape de résolution des Dégâts Répercutés d'une bataille."
        },
        desc2: {
            name: "Résolution des Dégâts Répercutés",
            desc: "Les Dégâts Répercutés se résolvent lors de l'étape <<Résolution des Dégâts Répercutés>> de la séquence de combat. Pour chaque carte activée Dégâts Répercutés du joueur, son adversaire est obligé de choisir et détruire une de ses unités ayant survécu à la bataille. Si les deux joueurs perdent des unités à cause des Dégâts Répercutés, c'est l'Attaquant qui les perd en premier, puis le Défenseur.",
            desc1: "Quand un joueur choisit quelles unités doivent être détruites, il doit toujours détruire autant d'unité que possible. Il doit appliquer les cartes <<Dégâts Répercutés terrestres>> et les cartes <<Dégâts Répercutés volants>> avant d'appliquer les cartes <<Dégâts Répercutés terrestres/volants>>."
        }
    }
];