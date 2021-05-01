export default [

    {
        title: 'La Phase de Programmation.',
        numb: "I",
        recap: "Lors de la phase de Programmation, les joueurs placent leurs ordres face cachée, chacun leur tour, sur les planètes. Les joueurs peuvent choisir parmi les ordres Mobilisation, Construction, et Recherche. Une fois que chaque joueur a placé quatre ordres, on passe à la phase d'Exécution.",
        desc1: 'Lors de cette Phase, les joueurs assignent exactement 4 ordres aux planètes de la galaxie. Le joueur choisi secrètement UN de ses pions ordre et le place face cachée dans la zone d\'ordre d\'une planète où il peut le faire, il ne doit pas révéler la nature du pion.',
        desc2: 'Après le premier pion Ordre posé, le joueur à sa gauche en place UN, et ainsi de suite dans le sens horaire jusqu\'à ce que tout le monde ait placé quatre ordre. Une fois qu\'un ordre a été placé, personne ne peut en connaitre la nature avant son éxécution. On peut, par contre, regarder le dos de ces pions pour savoir à quelle faction ils appartiennent. ',
        rules: {
            desc: 'Un joueur ne peut que placer un ordre',
            num1: 'Sur une planète contenant au moins une base ou une unité amie.',
            num2: 'Sur une planète adjacente à une planète contenant au moins une base ou une unité amie.',
            num3: 'Si un joueur veut placer un ordre sur une planète où se trouve déjà un ou plusieurs ordres, il doit placer son nouvel ordre au-dessus des ordres déjà placés, formant une pile d\'ordres.',
            num4: 'Un joueur ne peut pas placer d\'ordre spécial tant qu\'il n\'a pas construit le module requis sur la fiche de sa faction.'
        },
        conseil: {
            desc: 'Conseil',
            num1: 'Le premier ordre placé dans une pile sera le dernier à être exécuté dans cette pile. Donc si vous voulez aller sur une planète pour y construire une base, il faut d\'abord placer votre ordre Construction dans la pile de cette planète, et ensuite placer votre ordre Mobilisation sur cette pile.',
            num2: 'A cause de la façon dont on résout la pile d\'ordres, être le premier joueur du tour peut être un désavantage. Car quand vous placez un ordre, vos adversaire peuvent vous le recouvrir, ce qui vous empêche d\'exécuter votre ordre aussi rapidement que vous le désireriez.'
        },
        end: 'Une fois que chaque joueur a placé quatre pions ordre, on passe à la phase d\'exécution.'
    },
    { 
        title: 'La Phase d\'Exécution.',
        numb: "II",
        recap: "Lors de la phase Exécution, les joueurs exécutent leurs ordres un par un (déplacement d'unités, construction de nouvelles unités ou d'améliorations de base, recherche de nouvelles technologies). Une fois que tout les ordres placés lors de la phase ont été exécutés, on passe à la phase de Regroupement.",
        desc: 'Le premier joueur doit choisir un de ses ordres se trouvant au sommet d\'une pile (il doit être visible), le révéler, l\'exécuter, et le retirer du plateau (il retourne dans son aire de jeu). Puis le joueur a sa gauche fait de même,et ainsi de suite. Un joueur doit exécuter un ordre à son tour, si possible (les joueurs n\'ont pas le droit de << passer >>).',
        desc2: 'Quand un joueur a choisi un ordre et l\'a révélé, il peut choisir de piocher une carte Evénement au lieu d\'exécuter cet ordre. Si il décide de le faire, il retire son pion ordre du plateau (qui revient dans son aire de jeu) sans l\'exécuter et il pioche une carte du paquet Evénement, qu\'il la place face cachée devant lui sans en prendre connaissance. (Nous recommandons de glisser la carte partiellement sous sa fiche de faction pour ne pas oublier de ne pas regarder avant le début de la phase de regroupement)',
        conseil: {
            desc: 'Conseil',
            num1: 'il est souvent difficile de savoir quand vos ordres vont être disponibles dans les piles d\'ordres et vous serez amené de temps en temps à exécuter un ordre qui n\'a que peu d\'interêts. Dans ces cas là, il est souvent préférable de piocher une carte événement à la place. ',
            num2: 'Une fois qu\'un joueur a exécuter ses quatre ordres lors d\'un tour, on ne considère pas qu\'il est bloqué, il ne pioche pas de carte Evénement, on saute son tour.'
        },
        closeOrder : {
            desc: 'Ordres Bloqués.',
            num1: 'Un joueur ne peut exécuter un de ses ordres que s\'il en a un de disponible (visible) au sommet d\'une pile d\'ordres. Si un joueur ne peut pas exécuter un ordre car tous ses ordres sont recouverts par des ordres adverses, le joueur pioche une carte Evénement et le jeu se poursuit avec le joueur à sa gauche.'
        }
    },
    {
        title: 'La Phase de Regroupement.',
        numb: "III",
        recap: "Lors de cette phase, chaque joueur récupère ses travailleurs, reçoit les cartes ressource des territoires nouvellement conquis, et gagne les points de conquête pour chaque zone de points de conquête qu'il contrôle. On vérifie également si une faction a gagné.",
        desc: "Lors de cette phase, chaque joueur récupère ses travailleurs, reçoit les cartes ressource des territoires nouvellement conquis, et gagne les points de conquête pour chaque zone de points de conquête qu'il contrôle. On vérifie également si une faction a gagné.",
        rules : [

            {
                desc: 'Destruction des bases et des transports.',
                num1: 'D\'abord, si un joueur a des unités présentes dans une zone contenant une base adverse, cette base est détruite.',
                num2: 'Ensuite, si un transport n\'a pas au moins une base amie sur l\'une des deux planètes connectées par la route de navigation, il est détruit.'
            },
            {

                desc: 'Pertes des cartes ressource.',
                num1: 'Pour éviter de perdre ses cartes ressource, un joueur doit remplir les deux conditions suivantes pour chaque carte en sa possession.',
                num2: 'Il doit avoir une base sur la planète correspondante. Si ce n\'est pas le cas, il perd toutes les cartes ressource de cette planète.',
                num3: 'La zone correspondant à chaque carte ressource ne doit pas contenir de base ou d\'unité ennemie. Si ce n\'est pas le cas, il perd la carte ressource de cette zone et la remet dans le paquet ressource.',
                info: 'S\'il y a des Travailleurs sur une carte ressource quand elle est perdue, ces travailleurs sont immédiatement détruits.'
            },
            {

                desc: 'Gain des cartes ressource.',
                num1: 'Pour chaque planète où le joueur a une base, il gagne la carte ressource de chaque zone amie de cette planète (s\'il ne l\'a pas déjà). SI un joueur est le seul joueur sur une planète avec une base, il gagne aussi les cartes ressource de chaque zone vide de cette planète. ',
                num2: 'Normalement, quand un joueur gagne une carte ressource, elle doit être placée à côté de sa fiche de faction. côté non épuisé (non jaune) face visible. Si un joueur gagne une carte ressource correspondant à une zone partiellement épuisée, elle doit être placée face partiellement épuisé (jaune) visible.'
            },
            {

                desc: 'Récupérer les travailleurs.',
                num1: 'Les joueurs déplacent tous les travailleurs de leur zone de travailleurs indisponibles (de leur fiche de faction), et tous les travailleurs assignés sur les cartes ressource (y compris ceux sur les ressources permanentes), vers la réserve de travailleurs de leur fiche de faction. ',
                num2: 'Ces travailleurs seront disponible pour récolter des ressources au tour suivant.',
                info: 'Si un adversaire construit une base sur une planète où vous avez précédemment gagné les cartes ressource des zones vides, vous gardez le contrôle de ces ressources tant que cet adversaire ne contrôle pas ces zones.'
            },
            {

                desc: 'Gain des points de conquête.',
                num1: 'Lors de cette étape, chaque joueur gagne autant de points de conquête que la somme des points de conquêtes des zones qu\'il contrôle.',
                num2: 'On repère ces zones par la présence du symbole point de conquête.'
            },
            {

                desc: 'Vérification d\'une victoire normale.',
                num1: 'Si un ou plusieurs joueurs ont accumulé au moins 15 points de conquête, le jeu est terminé et l\'un de ces joueurs l\'emporte.',
                num2: 'Si personne n\'a atteint 15 points de conquête, le jeu se poursuit avec l\'étape suivante.'
            },
            {

                desc: 'Vérification d\'une victoire particulière.',
                num1: 'On vérifie si un joueur a rempli sa condition de victoire particulère. Si c\'est le cas , le jeu est terminé et on détermine un vainqueur.',
                num2: 'Si personne n\'a atteint sa condition de victoire particulière, on passe à l\'étape suivante de la phase de regroupement.'
            },
            {

                desc: "Jouer des cartes Evénement.",
                num1: "Les joueurs consultent (secrètement) les cartes Evénement qu'ils ont reçues lors de la phase d'Exécution. Puis dans le sens horaire et en commençant par le premier joueur, chacun peut exécuter, s'il le souhaite, Une (et Une seule) de ces cartes Evénement.",
                num2: "Une fois qu'un joueur a joué sa carte Evénement (ou décidé de ne pas le faire), il révèle ses cartes Evénement restantes et les défausse (sans aucun effet).",
                num3: "Après qu'une carte Evénement ait été exécutée, elle est défaussée sauf si elle stipule qu'elle doit être placée dans l'aire de jeu du joueur (et peut être utilisée quand l'indique la carte).",
                num4: "Un joueur qui a pioché la carte Evénement <<La fin est proche>> est Obligé de la joueur lors de cette étape. Dans le cas Exceptionnel où un même joueur piocherait plusieurs de ces même cartes, il les résout toutes, une par une. "
            },
            {

                desc: "Défausse des cartes Combat.",
                num1: "Lors de cette étape, chaque joueur doit défausser des cartes Combat (celle de son choix) s'il dépasse sa limite de cartes en main.",
                num2: "Certaines capacités (comme les cartes Evénement) peuvent augmenter la limite de cartes en main d'un joueur. On applique la limite de cartes en main uniquement lors de cette étape."
            },
            {

                desc: "Changement de premier joueur.",
                num1: "Le joueur avec le pion premier joueur le passe à son voisin de gauche."
            }
        ]
    }
];