const factions = [
    {
        race : 'Terran',
        slug: 'terran',
        image: 'Terran/Terran',
        cap_first_name: 'Décollage',
        cap_first_desc: 'Lors de l\'éxecution d\'un ordre Mobilisation, si vous avez une base sur la planète active, vous pouvez la déplacer sur n\'importe quelle zone amie de la planète.',
        cap_second_name: 'Adaptabilité',
        cap_second_desc: 'Limite de cartes en main 8 (au lieu de 6).',
        history: "Condamnés sur Terre, un grand nombre de prisonniers terrans furent à la place mis en stase cryogénique et envoyés dans l'espace. On avait le secret espoir que ces prisonniers trouvent de nouvelles colonies pour s'y installer. A cause d'une défaillance de l'équipement, les terrans endormis s'écrasèrent dans une galaxie différente. Des siècles plus tard, leurs descendants se sont retrouvés entrainés dans un conflit entre deux races alien. L'humanité ne possède ni la technologie anvancée des protoss, ni les avantages biologiques des zerg. En dépit de nombreuses pertes, les terrans ont montré leur résistance et ils continuent à se battre pour leur survie.",
        commander: [
            {
                leader: 'Jim Raynor',
                gifL: 'Terran/JimRaynor',
                slug: 'jim_raynor',
                color: 'Bleu',
                victory: 'Vous gagnez immédiatement la partie si vous contrôlez au moins 6 zones avec du minerai et/ou du gaz lors de la Phase de Regroupement à l\'époque III du jeu.',
                world: 'Mar Sara',
                imgW: '',
                soldier: {
                    name: "Marines",
                    numb: "2",
                },
                gifS: 'Terran/Troupes/soldier',
                advance: {
                    name: "Flammeur",
                    numb: "1"
                },
                gifA: 'Terran/Troupes/advance',
                vehicule: {
                    name: "Vautour",
                    numb: "1"
                },
                gifV: 'Terran/Troupes/vehicule-a',
                ship: {
                    name: "Transport",
                    numb: "1"
                },
                gifSh: 'Terran/Troupes/ship',
                constructor: {
                    name: "Travailleurs",
                    numb: "8"
                },
                gifC: 'Terran/Troupes/constructor',
            },
            {
                leader: 'Arcturus Mengsk',
                gifL: 'Terran/ArcturusMengsk',
                slug: 'arcturus_mengsk',
                color: 'Rouge',
                victory: 'Vous gagnez immédiatement la partie si vous contrôlez toutes les zones sur deux planètes différentes lors de l\'époque III du jeu.',
                world: 'Korhal IV',
                soldier: {
                    name: "Marines",
                    numb: "2"
                },
                gifS: 'Terran/Troupes/soldier',
                advance: {
                    name: "Flammeur",
                    numb: "1"
                },
                gifA: 'Terran/Troupes/advance',
                vehicule: {
                    name: "Fantôme",
                    numb: "1"
                },
                gifV: 'Terran/Troupes/vehicule-b',
                ship: {
                    name: "Transport",
                    numb: "1"
                },
                gifSh: 'Terran/Troupes/ship',
                constructor: {
                    name: "Travailleurs",
                    numb: "8"
                },
                gifC: 'Terran/Troupes/constructor',
            }
        ],
        soldiers: [
            {
                name: 'Marine',
                atq: '5',
                def: '5',
                tec: '2'
            },
            {
                name: 'Flammeur',
                atq: '6',
                def: '5',
                tec: '2'
            },
            {
                name: 'Fantôme',
                atq: '5',
                def: '5',
                tec: '4'
            },
            {
                name: 'Vautour',
                atq: '6',
                def: '6',
                tec: '1'
            },
            {
                name: 'Goliath',
                atq: '7',
                def: '7',
                tec: '0'
            },
            {
                name: 'Tank de Siège',
                atq: '8',
                def: '8',
                tec: '1'
            },
            {
                name: 'Ombre',
                atq: '7',
                def: '7',
                tec: '1'
            },
            {
                name: 'Vaisseau Laboratoire',
                renfort : true,
                tec: '3'
            },
            {
                name: 'Cuirassé',
                atq: '8',
                def: '8',
                tec: '1'
            },
        ],
    },
    {
        race: 'Zerg',
        slug: 'zerg',
        image: 'Zerg/Zerg',
        cap_first_name: 'Rampant',
        cap_first_desc: 'Votre limite de construction d\'unités est égale à deux fois le nombre de bâtiments différents sur votre feuille de faction.',
        cap_second_name: 'Soin',
        cap_second_desc: 'Piochez 1 carte Combat à la fin de chaque bataille à laquelle vous participez.',
        history: "Les Zerg sont composés de plusieurs types de créatures qui ont été intégrées à la Nuée par l'Overmind. Ces créatures ont été choisies pour devenir des tueurs efficaces ou pour assister les zerg dans leur quête du pouvoir ultime. Les zerg n'utilisent pas de technologie, mais leur armement et blindage naturels sont comparables aux appareils employés par les autres espèces. Cette évolution biologique, combinée avec une sauvagerie inégalée et une dévotion absolue à l'Overmind, font des zerg un adversaire mortel.",
        commander: [
            {
                leader: 'La Reine des Lames',
                gifL: 'Zerg/Reine',
                slug: 'reine_lames',
                color: 'Violet',
                victory: 'Vous gagnez immédiatement la partie si vous contrôlez au moins 3 zones fournissant des points de conquête lors de la Phase Regroupement à l\'époque III du jeu.',
                world: 'Braxis',
                soldier: {
                    name: "Zerglings",
                    numb: "3"
                },
                gifS: 'Zerg/Troupes/soldier',
                advance: {
                    name: "Hydralisks",
                    numb: "2"
                },
                gifA: 'Zerg/Troupes/advance',
                vehicule: false,
                gifV: '',
                ship: {
                    name: "Transport",
                    numb: "1"
                },
                gifSh: 'Zerg/Troupes/ship',
                constructor: {
                    name: "Travailleurs",
                    numb: "7"
                },
                gifC: 'Zerg/Troupes/constructor'
            },
            {
                leader: 'L\'Overmind',
                gifL: 'Zerg/Overmind',
                slug: 'overmind',
                color: 'Vert',
                victory: 'Vous gagnez immédiatement la partie si vous avez une base sur au moins 3 planètes différentes lors de la Phase Regroupement à l\'époque III du jeu.',
                world: 'Char',
                soldier: {
                    name: "Zerglings",
                    numb: "4"
                },
                gifS: 'Zerg/Troupes/soldier',
                advance: {
                    name: "Hydralisks",
                    numb: "1"
                },
                gifA: 'Zerg/Troupes/advance',
                vehicule: '',
                gifV: '',
                ship: {
                    name: "Transport",
                    numb: "1"
                },
                gifSh: 'Zerg/Troupes/ship',
                constructor: {
                    name: "Travailleurs",
                    numb: "8"
                },
                gifC: 'Zerg/Troupes/constructor'
            }
        ],
        soldiers: [
            {
                name: 'Zergling',
                atq: '5',
                def: '5',
                tec: '2'
            },
            {
                name: 'Hydralisk',
                atq: '6',
                def: '6',
                tec: '1'
            },
            {
                name: 'Ultralisk',
                atq: '8',
                def: '8',
                tec: '1'
            },
            {
                name: 'Reine',
                renfort : true,
                tec: '3'
            },
            {
                name: 'Saboteur',
                renfort : true,
                tec: '4'
            },
            {
                name: 'Masse',
                atq: '*',
                def: '8',
                tec: '0'
            },
            {
                name: 'Mutalisk',
                atq: '7',
                def: '7',
                tec: '1'
            },
            {
                name: 'Gardien',
                atq: '8',
                def: '8',
                tec: '1'
            }
        ],
    },
    {
        race: 'Protoss',
        slug: 'protoss',
        image: 'Protoss/Protoss',
        cap_first_name: 'Boucliers',
        cap_first_desc: 'Piochez 2 cartes Combat supplémentaires lors de l\'étape Pioche de Cartes Combat de chaque bataille où vous êtes le défenseur.',
        history: "A l'opposé des terrans polyvalents et des féroces zerg se dressent les flegmatiques protoss. Avec leur technologie avancée et leurs capacités psioniques, les protoss se sont longtemps considérés comme l'espèce la plus puissante du monde connu. S'ils ne sont pas un peuple prolifique, ils ont appris à consolider leur armée avec des robots de guerre et à combiner leur capacité psionique inhérente avec la technologie, produisant ainsi les guerriers les plus redoutables jamais connus. Si les protoss ont une faiblesse, c'est leur refus à accepter le changement. Les doctrines du Khala sont rigides, et les protoss n'aiment pas s'en écarter de peur du désordre civil.",
        commander: [
            {
                leader: 'Tassadar',
                gifL: 'Protoss/Tassadar',
                slug: 'tassadar',
                color: 'Jaune',
                victory: 'Vous gagnez Immédiatement la partie si vous contrôlez plus de zones que chaque autre adversaire lors de la Phase de Regroupement à l\'époque III du jeu.',
                world: 'Shakuras',
                soldier: {
                    name: "Disciples",
                    numb: "3"
                },
                gifS: 'Protoss/Troupes/soldier',
                advance: '',
                gifA: '',
                vehicule: '',
                gifV: '',
                ship: {
                    name: "Transport",
                    numb: "1"
                },
                gifSh: 'Protoss/Troupes/ship',
                constructor: {
                    name: "Travailleurs",
                    numb: "8"
                },
                gifC: 'Protoss/Troupes/constructor'
            },
            {
                leader: 'Aldaris',
                gifL: 'Protoss/Aldaris',
                slug: 'aldaris',
                color: 'Orange',
                victory: 'Le nombre de points de conquête nécessaires pour une victoire normale de vos adversaires passe de 15 à 20. Quand au moins 2 cartes Evénement <<La Fin est Proche>> sont jouées, la faction Aldaris gagne immédiatement la partie.',
                world: 'Aiur',
                soldier: {
                    name: "Disciples",
                    numb: "2"
                },
                gifS: 'Protoss/Troupes/soldier',
                advance: '',
                gifA: '',
                vehicule: {
                    name: "Dragon",
                    numb: "1"
                },
                gifV: 'Protoss/Troupes/vehicule',
                ship: {
                    name: "Transport",
                    numb: "1"
                },
                gifSh: 'Protoss/Troupes/ship',
                constructor: {
                    name: "Travailleurs",
                    numb: "7"
                },
                gifC: 'Protoss/Troupes/constructor'
            }
        ],
        soldiers: [
            {
                name: 'Disciple',
                atq: '6',
                def: '6',
                tec: '0'
            },
            {
                name: 'Dragon',
                atq: '7',
                def: '7',
                tec: '1'
            },
            {
                name: 'Templier',
                renfort : true,
                tec: '3'
            },
            {
                name: 'Destructeur',
                atq: '8',
                def: '8',
                tec: '1'
            },
            {
                name: 'Archonte',
                atq: '9',
                def: '8',
                tec: '0'
            },
            {
                name: 'Scout',
                atq: '7',
                def: '8',
                tec: '0'
            },
            {
                name: 'Arbitre',
                renfort : true,
                tec: '3'
            },
            {
                name: 'Porte-Nefs',
                atq: '8',
                def: '8',
                tec: '1'
            }
        ],
    }
];

export default factions;