export default [
    {
        name: "Le module d'Approvisionement",
        desc: "Ces modules augmentent la limite de construction d'unités de leur possesseur. Pour chaque modules d'approvisionnement sur sa fiche de faction, le joueur voit sa limite de construction d'unités augmentée de 1.",
        imgB: "Bleu/jeton/module_appro",
        imgO: "Orange/jeton/module_appro"
    },
    {
        name: "Le module Recherche & Développement",
        desc: "Ces modules permettent au joueur d'utiliser des ordres spéciaux. Lors de la phase de programmation, le joueur peut placer autant d'ordres spéciaux que le nombre de modules de R&D sur sa fiche de faction (interdit de placer plus de quatre ordres)",
        imgB: "Bleu/jeton/module_rd",
        imgO: "Orange/jeton/module_rd",
        imgV: "Violet/jeton/module_rd"
    },
    {
        name: "Le module Soutien Aérien",
        desc: "Ce type de module donne aux bases du joueur trois avantages Importants :",
        dc: {
            name: "Détecteur de Camouflage :",
            desc: "Toutes les unités du joueur dans la même zone qu'une de ses bases gagnent la capacité Détecteur.",
            img: "dc"
        },
        da: {
            name: "Défenses Anti-aériennes :",
            desc: "Quand une bataille se déroule dans une zone contenant une des bases du joueur, celui-ci reçoit +1 à la force de son attaque dans chaque escarmouche où l'unité adverse en première ligne est une unité volante.",
            img: "da"
        },
        do: {
            name: "Défense Orbitale Limitée :",
            desc: "Les adversaires ne peuvent pas transporter d'unités (venant d'autres planètes) par les routes de navigation directement dans une zone contenant une des bases du joueur.",
            img: "do"
        },
        imgB: "Bleu/jeton/module_tower",
        imgO: "Orange/jeton/module_tower",
        imgV: "Violet/jeton/module_tower"
    }
]