export default [

    {
        name: "Construction",
        orderType: 'build',
        side: 'left',
        img: 'Order/order-build',
        imgSpe: 'Order/order-build-spe',
        recap: {
            a: "1. Déplacement d'unités vers la planète active.",
            b: "2. Déclenchement d'une bataille si présence dans une zone ennemie.",
            spe: "Votre limite de construction d'unité est augmentée d'1. De plus, vous bénéficiez d'une remise d'une ressource pour l'achat d'une base, unité, bâtiment ou module."
        },
        title: {

            name: 'l\'ordre Construction',
            desc: 'Quand un joueur exécute un ordre Construction, il peut construire de nouveaux travailleurs, transports, et des unités. Il peut aussi acheter un bâtiment, et/ou acheter un module pour ses bases, ainsi que construire une base.',
        },
        order: {
    
            order1: 'Si le joueur actif a une base sur la planète active, il peut construire des travailleurs et des transports (autant qu\'il le souhaite), ET construire un nombre d\'unités égal à sa limite de construction d\'unité (par défaut : 2).',
            order2: 'Si le joueur actif a au moins une base amie ou une unité sur la planète active, il peut alors améliorer ses bases en achetant 1 bâtiment et/ou 1 module, qu\'il place sur sa fiche de faction.',
            order3: 'Si le joueur actif a au moins une unité amie sur la planète active, mais pas de base, il peut y construire une nouvelle base.',
            desc1: 'Pour construire des travailleurs,des transports, ou des unités, le joueur doit avoir une base sur la planète active, puis il place l\'unité sur une zone vide ou amie de la planète active. ',
            desc2: 'Pour acheter des améliorations de base (bâtiments et modules), un joueur doit avoir une unité amie ou une base amie sur la planète active.',
            desc3: 'Pour construire une base, le joueur doit avoir une unité amie sur la planète active.',
        }
    },
    {
        name: "Mobilisation",
        orderType: 'move',
        side: 'right',
        img: 'Order/order-move',
        imgSpe: 'Order/order-move-spe',
        recap: {
            a: "1. Peut construire des travailleurs, des transports et des unités (base requise).",
            b: "2. Peut construire un bâtiment, et un module (unité ou base requise).",
            c: "3. Peut construire une base (unité requise).",
            spe: "Piochez 2 cartes Combat supplémentaires et gain de +1 en attaque pour chaque escarmouche de la bataille."
        },
        title: {

            name: 'l\'ordre mobilisation',
            desc: 'Les joueurs utilisent leurs ordres Mobilisation pour déplacer leurs unités vers, et/ou dans, les zones de la planète active. Si le joueur actif déplace des unités dans une zone de la planète active contenant des unités ennemis, une bataille s\'ensuit une fois les mouvements terminés. ',
        },
        order: {
    
            order1: 'Déplacement des unités.',
            order2: 'Résolution des batailles.',
            order3: 'null',
            desc1: 'Déplacer des unités amies d\'une ou plusieurs zones de la planète active vers une ou plusieurs zones de la planète active.',
            desc2: 'Quand un joueur exécute un ordre Mobilisation, il peut déplacer (ou transporter) ses unités dans plusieurs zones vides ou amies de la planète, mais DANS UNE SEULE ZONE ENNEMIE, le joueur peut dépasser la limite d\'unités d\'une zone quand il initie une bataille (autant d\'unités que la limite d\'unités de la zone + 2). Par conséquent, il ne peut initier qu\'une bataille par ordre Mobilisation. ',
            desc3: 'null',
        }
    },
    {
        name: "Recherche",
        orderType: 'research',
        side: 'left',
        img: 'Order/order-research',
        imgSpe: 'Order/order-research-spe',
        recap: {
            a: "1. Piochez 1 carte Evénement et 3 cartes Combat.",
            b: "2. Possibilité d'acheter tous les exemplaires d'une technologie.",
            c: "3. Si vous achetez une technologie, mélangez ces cartes dans votre paquet.",
            spe: "Vous pouvez ajouter dans votre main une des cartes technologie venant d'être achetées OU vous pouvez piochez 1 carte Evénement supplémentaire."
        },
        title: {

            name: 'l\'ordre recherche',
            desc: 'On se sert de ces ordres pour acquérir des cartes Combat et Evénement et pour acheter des cartes Technologie. Pour exécuter un ordre Recherche, le joueur doit avoir une base sur la planète active.',
        },
        order: {
    
            order1: 'Piocher une carte Evénement (OBLIGATOIRE)',
            order2: 'Piochez trois cartes Combat, et/ou, Acheter de la technologie (OPTIONNEL) : Piocher les trois première cartes de son paquet Combat, et les placer dans sa main de cartes Combat. et/ou, Pouvoir consulter son paquet Technologie pour y acheter une technologie. ',
            order3: 'Mélanger le paquet Combat (en cas d\'achat de technologie)',
            desc1: 'Piocher la première carte du paquet Evénement et la placer face cachée devant lui sans en prendre connaissance.',
            desc2: 'La plupart des cartes Technologie sont en Plusieurs Exemplaires dans ce paquet. Le nombre de carte identique est indiqué par les points au bas de la carte. Quand vous achetez une technologie, vous gagnez toutes les cartes Technologie avec le même nom de son paquet (mais vous ne payez le coût en ressource de la technologie qu\'une seule fois). Après avoir choisi une technologie, vous devez annoncer aux autres joueurs la technologie achetée et expliquer ses effets. A moins que la technologie ne dise le contraire, la (ou les) carte venant d\'être acquise est ajoutée au paquet Combat du joueur actif. (Toutes Technologie ajoutées au paquet Combat sont considèrées comme des cartes Combat.)',
            desc3: 'Enfin, si le joueur actif a acheté des cartes Technologie pour son paquet Combat, il doit mélanger son paquet Combat \'avec les cartes Combat défaussées\' pour former un nouveau paquet Combat. Mais si il n\'a pas acheté de technologie, ou si la technologie achetée a été mise dans l\'aire de jeu (et non dans le paquet Combat), il \'ne mélange pas\' son paquet Combat. ',
        }
    }
];

/*

export default {
    
    title : {

        name: 'Séquence de l\'ordre de construction',
        desc: 'Quand un joueur exécute un ordre Construction, il peut construire de nouveaux travailleurs, transports, et des unités. Il peut aussi acheter un bâtiment, et/ou acheter un module pour ses bases, ainsi que construire une base.',
    },
    order : {

        order1: 'Si le joueur actif a une base sur la planète active, il peut construire des travailleurs et des transports (autant qu\'il le souhaite), ET construire un nombre d\'unités égal à sa limite de construction d\'unité (par défaut : 2).',
        order2: 'Si le joueur actif a au moins une base amie ou une unité sur la planète active, il peut alors améliorer ses bases en achetant 1 bâtiment et/ou 1 module, qu\'il place sur sa fiche de faction.',
        order3: 'Si le joueur actif a au moins une unité amie sur la planète active, mais pas de base, il peut y construire une nouvelle base.',
        desc1: 'Pour construire des travailleurs,des transports, ou des unités, le joueur doit avoir une base sur la planète active, puis il place l\'unité sur une zone vide ou amie de la planète active. ',
        desc2: 'Pour acheter des améliorations de base (bâtiments et modules), un joueur doit avoir une unité amie ou une base amie sur la planète active.',
        desc3: 'Pour construire une base, le joueur doit avoir une unité amie sur la planète active.',
        memo1 : 'Un autre moyen pour se souvenir de tout cela : Si le joueur actif n\'a pas de base sur la planète active, on saute la première étape de l\'ordre de construction.',
        memo3: 'N\'oubliez pas que vous ne pouvez construire des unités que sur une planète où vous avez une base et que vous ne pouvez construire une base que dans une zone où vous avez une unité. Il faut d\'abord envoyer des unités vers d\'autres planètes pour pouvoir y construire des bases qui vous permettront de construire de nouvelles unités, de capturer de nouvelles ressources et/ points de conquête pour votre faction.',
    },
    module : {

        moduleAppName: 'Le Module d\'Approvisionnement',
        moduleApp: 'Ces modules augmentent la limite de construction d\'unités de leurs possesseur. Pour chaque module d\'approvisionnement sur sa fiche de factions, le joueur voit sa limite de construction d\'unités augmentée de 1.',
        moduleResearchName: 'Le Module Recherche & Développement',
        moduleResearch: 'Ces modules permettent au joueur d\'utiliser des ordres spéciaux. Lors de la Phase de Programmation, le joueur peut placer autant d\'ordres spéciaux que le nombre de modules de Recherche & Développement sur sa fiche de faction. Mais il est toujours interdit de placer plus de 4 ordres.',
        moduleTowerName: 'Le Module Soutien Aérien',
        moduleTower: 'Ce type de module donne aux bases du joueur 3 avantages importants :',
        radarName: 'Détecteur de Camouflage',
        radar: 'Toutes les unités du joueur dans la même zone qu\'une de ses bases gagnent la capacité Détecteur.',
        towerName: 'Défenses Anti-Aériennes',
        tower: 'Quand une bataille se déroule dans une zone contenant une des bases du joueur, le joueur reçoit +1 à la force de son attaque dans chaque escarmouche où l\'unités adverse en première ligne est une unités volante.',
        antiflyName: 'Défense Orbital Limitée',
        antifly: 'Les adversaires ne peuvent pas transporter d\'unités (venant d\'autre planètes) par les routes de navigation directement dans une zone contenant une des bases du joueur. Cela représente la capacité des bases à abattre les transports ennemis entrant dans leur espace aérien. Mais les adversaires peuvent toujours transporter des unités dans d\'autres zones de la planète active. Et les unités adverses Déjà sur la planète peuvent entrer dans une zone contenant une base avec une Défense Orbital Limitée.',
        memo: 'Le module de Soutien Aérien est un excellent moyen de se prévenir d\'attaques surprises sur ses bases. Mais la capacité de Défense Orbitale Limitée ne protège que des attaques d\'unités venant d\'une planète adjacente et non des attaques d\'unités de la même planète que sa base.',
    },  
};

/*

export default [

    {
        title : 'Quand un joueur exécute un ordre Construction, il peut faire les choses suivantes, dans cet ordre uniquement : ',
        order1 : 'Si le joueur actif a une base sur la planète active, il peut construire des travailleurs et des transports (autant qu\'il le souhaite), ET construire un nombre d\'unités égal à sa limite de construction d\'unité (par défaut : 2).',
        order2 : 'Si le joueur actif a au moins une base amie ou une unité sur la planète active, il peut alors améliorer ses bases en achetant 1 bâtiment et/ou 1 module, qu\'il place sur sa fiche de faction.',
        order3 : 'Si le joueur actif a au moins une unité amie sur la planète active, mais pas de base, il peut y construire une nouvelle base.',
        memo1 : 'Un autre moyen pour se souvenir de tout cela : Si le joueur actif n\'a pas de base sur la planète active, on saute la première étape de l\'ordre de construction.',
        moduleApp: 'Ces modules augmentent la limite de construction d\'unités de leurs possesseur. Pour chaque module d\'approvisionnement sur sa fiche de factions, le joueur voit sa limite de construction d\'unités augmentée de 1.',
        moduleResearch: 'Ces modules permettent au joueur d\'utiliser des ordres spéciaux. Lors de la Phase de Programmation, le joueur peut placer autant d\'ordres spéciaux que le nombre de modules de Recherche & Développement sur sa fiche de faction. Mais il est toujours interdit de placer plus de 4 ordres.',
        moduleTower: 'Ce type de module donne aux bases du joueur 3 avantages importants :',
        radar: 'Toutes les unités du joueur dans la même zone qu\'une de ses bases gagnent la capacité Détecteur.',
        tower: 'Quand une bataille se déroule dans une zone contenant une des bases du joueur, le joueur reçoit +1 à la force de son attaque dans chaque escarmouche où l\'unités adverse en première ligne est une unités volante.',
        antifly: 'Les adversaires ne peuvent pas transporter d\'unités (venant d\'autre planètes) par les routes de navigation directement dans une zone contenant une des bases du joueur. Cela représente la capacité des bases à abattre les transports ennemis entrant dans leur espace aérien.',

    }
]; 

*/