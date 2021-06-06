export default {
    terran: {
        race: 'Terran',
        value: 'terran',
        figurine: [
            {
                name: 'Char de Siège',
                value: 'char_de_siege',
                img: 'char',
                soutien_value: 2,
                type: 'sol',
                atk: 'sol'
            },
            {
                name: 'Cuirassé',
                value: 'cuirasse',
                img: 'cuirasse',
                soutien_value: 2,
                type: 'air',
                atk: 'sol_air'
            },
            {
                name: 'Fantôme',
                value: 'fantome',
                img: 'fantome',
                soutien_value: 1,
                type: 'sol',
                atk: 'sol_air'
            },
            {
                name: 'Flammeur',
                value: 'flammeur',
                img: 'flammeur',
                soutien_value: 1,
                type: 'sol',
                atk: 'sol'
            },
            {
                name: 'Goliath',
                value: 'goliath',
                img: 'goliath',
                soutien_value: 1,
                type: 'sol',
                atk: 'sol_air'
            },
            {
                name: 'Vaisseau Laboratoire',
                value: 'vaisseau_laboratoire',
                img: 'labo',
                type: 'air'
            },
            {
                name: 'Marine',
                value: 'marine',
                img: 'marine',
                soutien_value: 1,
                type: 'sol',
                atk: 'sol_air'
            },
            {
                name: 'Ombre',
                value: 'ombre',
                img: 'ombre',
                soutien_value: 1,
                type: 'air',
                atk: 'sol_air'
            },
            {
                name: 'Vautour',
                value: 'vautour',
                img: 'vautour',
                soutien_value: 1,
                type: 'sol',
                atk: 'sol'
            }
        ],
        combat: {
            troupe: [
                {
                    name: 'Cuirassé & Char de Siège 7/8',
                    img: 'cuir_char',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Cuirassé'
                        },
                        {
                            name: 'Char de Siège'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 7,
                            min: 5
                        },
                        def: {
                            max: 8,
                            min: 2
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'front',
                            unit: 'Cuirassé'
                        },
                        type: 'atk',
                        result: 1
                    }
                },
                {
                    name: 'Cuirassé & Char de Siège 8/8',
                    img: 'cuir_char_2',
                    figurine: [
                        {
                            name: 'Cuirassé'
                        },
                        {
                            name: 'Char de Siège'
                        }
                    ],
                    type: 'std',
                    degats: {
                        atk: {
                            max: 8,
                            min: 5
                        },
                        def: {
                            max: 8,
                            min: 2
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'front',
                            unit: 'Cuirassé'
                        },
                        type: 'atk',
                        result: 1
                    }
                },
                {
                    name: 'Cuirassé & Ombre 7/7',
                    img: 'cuir_ombr',
                    figurine: [
                        {
                            name: 'Cuirassé'
                        },
                        {
                            name: 'Ombre'
                        }
                    ],
                    type: 'std',
                    degats: {
                        atk: {
                            max: 7,
                            min: 4
                        },
                        def: {
                            max: 7,
                            min: 3
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'front',
                            unit: 'Cuirassé'
                        },
                        type: 'def',
                        result: 1
                    }
                },
                {
                    name: 'Cuirassé & Ombre 7/8',
                    img: 'cuir_ombr_2',
                    figurine: [
                        {
                            name: 'Cuirassé'
                        },
                        {
                            name: 'Ombre'
                        }
                    ],
                    type: 'std',
                    degats: {
                        atk: {
                            max: 7,
                            min: 4
                        },
                        def: {
                            max: 8,
                            min: 3
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'front',
                            unit: 'Cuirassé'
                        },
                        type: 'atk_def',
                        result: 1
                    }
                },
                {
                    name: 'Flammeur & Marine 5/5',
                    img: 'flam_mari',
                    figurine: [
                        {
                            name: 'Flammeur'
                        },
                        {
                            name: 'Marine'
                        }
                    ],
                    type: 'std',
                    degats: {
                        atk: {
                            max: 5,
                            min: 3
                        },
                        def: {
                            max: 5,
                            min: 4
                        }
                    }
                },
                {
                    name: 'Flammeur & Marine 6/6',
                    img: 'flam_mari_2',
                    figurine: [
                        {
                            name: 'Flammeur'
                        },
                        {
                            name: 'Marine'
                        }
                    ],
                    type: 'std',
                    degats: {
                        atk: {
                            max: 6,
                            min: 3
                        },
                        def: {
                            max: 6,
                            min: 4
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'répercutés',
                            by: 'sol',
                            unit: [
                                {
                                    name: 'Marine'
                                },
                                {
                                    name: 'Disciple'
                                },
                                {
                                    name: 'Zergling'
                                },
                            ]
                        },
                        result: 1
                    }
                },
                {
                    name: 'Goliath & Char de Siège 7/8',
                    img: 'goli_char',
                    figurine: [
                        {
                            name: 'Goliath'
                        },
                        {
                            name: 'Char de Siège'
                        }
                    ],
                    type: 'std',
                    degats: {
                        atk: {
                            max: 7,
                            min: 2
                        },
                        def: {
                            max: 8,
                            min: 5
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'front',
                            unit: 'Char de Siège'
                        },
                        type: 'atk',
                        result: 1
                    }
                },
                {
                    name: 'Goliath & Ombre 6/7',
                    img: 'goli_ombr',
                    figurine: [
                        {
                            name: 'Goliath'
                        },
                        {
                            name: 'Ombre'
                        }
                    ],
                    type: 'std',
                    degats: {
                        atk: {
                            max: 6,
                            min: 3
                        },
                        def: {
                            max: 7,
                            min: 4
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'front',
                            unit: 'Goliath',
                            by: 'air'
                        },
                        type: 'atk',
                        result: 2
                    }
                },
                {
                    name: 'Goliath & Ombre 6/7',
                    img: 'goli_ombr_2',
                    figurine: [
                        {
                            name: 'Goliath'
                        },
                        {
                            name: 'Ombre'
                        }
                    ],
                    type: 'std',
                    degats: {
                        atk: {
                            max: 6,
                            min: 3
                        },
                        def: {
                            max: 7,
                            min: 4
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'front',
                            by: 'air'
                        },
                        type: 'atk',
                        result: 1
                    }
                },
                {
                    name: 'Marine & Fantôme 5/4',
                    img: 'mari_fant',
                    figurine: [
                        {
                            name: 'Marine'
                        },
                        {
                            name: 'Fantôme'
                        }
                    ],
                    type: 'std',
                    degats: {
                        atk: {
                            max: 5,
                            min: 2
                        },
                        def: {
                            max: 4,
                            min: 5
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'front',
                            by: 'air'
                        },
                        type: 'atk',
                        result: 1
                    }
                },
                {
                    name: 'Marine & Fantôme 5/5',
                    img: 'mari_fant_2',
                    figurine: [
                        {
                            name: 'Marine'
                        },
                        {
                            name: 'Fantôme'
                        }
                    ],
                    type: 'std',
                    degats: {
                        atk: {
                            max: 5,
                            min: 2
                        },
                        def: {
                            max: 5,
                            min: 5
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'front',
                            by: 'air'
                        },
                        type: 'atk',
                        result: 1
                    }
                },
                {
                    name: 'Marine & Fantôme & Flammeur 6/4',
                    img: 'mari_fant_flam',
                    figurine: [
                        {
                            name: 'Marine'
                        },
                        {
                            name: 'Fantôme'
                        },
                        {
                            name: 'Flammeur'
                        }
                    ],
                    type: 'std',
                    degats: {
                        atk: {
                            max: 6,
                            min: 2
                        },
                        def: {
                            max: 4,
                            min: 5
                        }
                    }
                },
                {
                    name: 'Vautour & Fantôme 5/6',
                    img: 'vaut_fant',
                    figurine: [
                        {
                            name: 'Vautour'
                        },
                        {
                            name: 'Fantôme'
                        }
                    ],
                    type: 'std',
                    degats: {
                        atk: {
                            max: 5,
                            min: 3
                        },
                        def: {
                            max: 6,
                            min: 4
                        }
                    }
                },
                {
                    name: 'Vautour & Flammeur 6/6',
                    img: 'vaut_flam',
                    figurine: [
                        {
                            name: 'Vautour'
                        },
                        {
                            name: 'Flammeur'
                        }
                    ],
                    type: 'std',
                    degats: {
                        atk: {
                            max: 6,
                            min: 4
                        },
                        def: {
                            max: 6,
                            min: 3
                        }
                    }
                },
                {
                    name: 'Vautour & Flammeur 6/5',
                    img: 'vaut_flam_2',
                    figurine: [
                        {
                            name: 'Vautour'
                        },
                        {
                            name: 'Flammeur'
                        }
                    ],
                    type: 'std',
                    degats: {
                        atk: {
                            max: 6,
                            min: 4
                        },
                        def: {
                            max: 5,
                            min: 3
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'répercutés',
                            by: 'sol',
                            unit: [
                                {
                                    name: 'Marine'
                                },
                                {
                                    name: 'Disciple'
                                },
                                {
                                    name: 'Zergling'
                                },
                            ]
                        },
                        result: 1
                    }
                },
                {
                    name: 'Vautour & Goliath & Char de Siège 7/7',
                    img: 'vaut_goli_char',
                    figurine: [
                        {
                            name: 'Vautour'
                        },
                        {
                            name: 'Goliath'
                        },
                        {
                            name: 'Char de Siège'
                        }
                    ],
                    type: 'std',
                    degats: {
                        atk: {
                            max: 7,
                            min: 2
                        },
                        def: {
                            max: 7,
                            min: 5
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'front',
                            unit: 'Goliath',
                            by: 'air'
                        },
                        type: 'atk',
                        result: 1
                    }
                }
            ],
            techno: [
                {
                    name: 'Arme Nucléaire',
                    img: 'arme_nucleaire',
                    figurine: [
                        {
                            name: 'Fantôme'
                        }
                    ],
                    type: 'tch',
                    degats: {
                        atk: {
                            max: 0,
                            min: 7
                        },
                        def: {
                            max: 6,
                            min: 4
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'destroy',
                            unit: 'fantôme'
                        },
                        result: 2
                    }
                },
                {
                    name: 'Canon Yamato 9/9',
                    img: 'canon_yamato',
                    figurine: [
                        {
                            name: 'Cuirassé'
                        }
                    ],
                    type: 'tch',
                    degats: {
                        atk: {
                            max: 9,
                            min: 4
                        },
                        def: {
                            max: 9,
                            min: 7
                        }
                    }
                },
                {
                    name: 'Canon Yamato 10/9',
                    img: 'canon_yamato_2',
                    figurine: [
                        {
                            name: 'Cuirassé'
                        }
                    ],
                    type: 'tch',
                    degats: {
                        atk: {
                            max: 10,
                            min: 4
                        },
                        def: {
                            max: 9,
                            min: 7
                        }
                    }
                },
                {
                    name: 'Mines Araignées 7/7',
                    img: 'mines_araignees',
                    figurine: [
                        {
                            name: 'Vautour'
                        }
                    ],
                    type: 'tch',
                    degats: {
                        atk: {
                            max: 7,
                            min: 5
                        },
                        def: {
                            max: 7,
                            min: 6
                        }
                    },
                    Tech: {
                        condition: {
                            byCondition: 'noDétecteur',
                            type: 'répercutés',
                            by: 'sol'
                        }
                    }
                },
                {
                    name: 'Mines Araignées 8/7',
                    img: 'mines_araignees_2',
                    figurine: [
                        {
                            name: 'Vautour'
                        }
                    ],
                    type: 'tch',
                    degats: {
                        atk: {
                            max: 8,
                            min: 5
                        },
                        def: {
                            max: 7,
                            min: 6
                        }
                    },
                    Tech: {
                        condition: {
                            byCondition: 'noDétecteur',
                            type: 'répercutés',
                            by: 'sol'
                        }
                    }
                },
                {
                    name: 'Mode Siège 8/8',
                    img: 'mode_siege',
                    figurine: [
                        {
                            name: 'Char de Siège'
                        }
                    ],
                    type: 'tch',
                    degats: {
                        atk: {
                            max: 8,
                            min: 6
                        },
                        def: {
                            max: 8,
                            min: 5
                        }
                    },
                    Tech: {
                        condition: {
                            byCondition: 'noCondition',
                            type: 'répercutés',
                            by: 'sol'
                        }
                    }
                },
                {
                    name: 'Mode Siège 9/8',
                    img: 'mode_siege_2',
                    figurine: [
                        {
                            name: 'Char de Siège'
                        }
                    ],
                    type: 'tch',
                    degats: {
                        atk: {
                            max: 9,
                            min: 6
                        },
                        def: {
                            max: 8,
                            min: 5
                        }
                    },
                    Tech: {
                        condition: {
                            byCondition: 'noCondition',
                            type: 'répercutés',
                            by: 'sol'
                        }
                    }
                },
                {
                    name: 'Stimulant 7/3',
                    img: 'stimulant',
                    figurine: [
                        {
                            name: 'Marine'
                        },
                        {
                            name: 'Flammeur'
                        }
                    ],
                    type: 'tch',
                    degats: {
                        atk: {
                            max: 7,
                            min: 6
                        },
                        def: {
                            max: 3,
                            min: 5
                        }
                    }
                },
                {
                    name: 'Stimulant 7/4',
                    img: 'stimulant_2',
                    figurine: [
                        {
                            name: 'Marine'
                        },
                        {
                            name: 'Flammeur'
                        }
                    ],
                    type: 'tch',
                    degats: {
                        atk: {
                            max: 7,
                            min: 6
                        },
                        def: {
                            max: 4,
                            min: 5
                        }
                    }
                }
            ]
        },
        renfort: {
            troupe: [
                {
                    name: 'Carte Renfort',
                    img: 'r-all',
                    type: 'std',
                    Tech: {
                        condition: {
                            type: 'soutien',
                            unit: [
                                {
                                    name: 'Cuirassé'
                                },
                                {
                                    name: 'Ombre'
                                },
                                {
                                    name: 'Vaisseau Laboratoire'
                                },
                                {
                                    name: 'Vautour'
                                },
                                {
                                    name: 'Char de Siège'
                                },
                                {
                                    name: 'Goliath'
                                },
                            ]
                        },
                        type: 'def',
                        result: 1
                    }
                }
            ],
            techno: [
                {
                    name: 'Bunker',
                    img: 'r-bunker',
                    figurine: [
                        {
                            name: 'Flammeur'
                        },
                        {
                            name: 'Marine'
                        },
                        {
                            name: 'Fantôme'
                        }
                    ],
                    type: 'tch',
                    Tech: {
                        condition: {
                            type: 'base',
                            unit: [
                                {
                                    name: 'Flammeur'
                                },
                                {
                                    name: 'Marine'
                                },
                                {
                                    name: 'Fantôme'
                                }
                            ]
                        },
                        type: 'def',
                        result: 3
                    }
                },
                {
                    name: 'Champ de Camouflage',
                    img: 'r-champ_camouflage',
                    figurine: [
                        {
                            name: 'Ombre'
                        },
                        {
                            name: 'Fantôme'
                        }
                    ],
                    type: 'tch',
                    Tech: {
                        capacity: {
                            name: 'Camouflage',
                            unit: [
                                {
                                    name: 'Ombre'
                                },
                                {
                                    name: 'Fantôme'
                                }
                            ]
                        }
                    }
                },
                {
                    name: 'Irradiation',
                    img: 'r-irradiation',
                    figurine: 'Vaisseau Laboratoire',
                    type: 'tch',
                    Tech: {
                        condition: {
                            type: 'répercutés',
                            unit: [
                                {
                                    name: 'Marine'
                                },
                                {
                                    name: 'Flammeur'
                                },
                                {
                                    name: 'Fantôme'
                                },
                                {
                                    name: 'Disciple'
                                },
                                {
                                    name: 'Templier'
                                },
                                {
                                    name: 'Zerg'
                                }
                            ],
                            by: 'sol_air'
                        },
                        type: 'atk',
                        result: 1
                    }
                },
                {
                    name: 'Onde VDE',
                    img: 'r-onde_vde',
                    figurine: 'Vaisseau Laboratoire',
                    type: 'tch',
                    Tech: {
                        capacity: {
                            name: 'Annulez',
                            of: 'renfort',
                            for: 'Archonte'
                        },
                        result: [
                            {
                                number: 3
                            },
                            {
                                number: 1
                            }
                        ]
                    }
                },
                {
                    name: 'Verrou',
                    img: 'r-verrou',
                    figurine: 'Fantôme',
                    type: 'tch',
                    Tech: {
                        capacity: {
                            name: 'Verrou',
                            unit: [
                                {
                                    name: 'Dragons'
                                },
                                {
                                    name: 'Vautour'
                                },
                                {
                                    name: 'Goliath'
                                },
                                {
                                    name: 'Char de Siège'
                                },
                                {
                                    name: 'Ombre'
                                },
                                {
                                    name: 'Vaisseau Laboratoire'
                                },
                                {
                                    name: 'Cuirassé'
                                },
                                {
                                    name: 'Porte-Nefs'
                                },
                                {
                                    name: 'Scout'
                                },
                                {
                                    name: 'Destructeur'
                                }
                            ],
                        },
                        result: 0
                    }
                }
            ]
        },
        zoneJeu: [
            {
                name: 'Balayage de Scanner',
                img: 'balayage_scanner',
                type: 'tch',
                capacity: {
                    name: 'Détecteur',
                    for: 'all'
                }
            },
            {
                name: 'Matrice Défensive',
                img: 'matrice_defensive',
                type: 'tch',
                Tech: {
                    condition: {
                        unit: 'Vaisseau Laboratoire',
                        type: 'renfort'
                    },
                    type: 'def',
                    result: 1
                }
            }
        ]
    },
    zerg: {
        race: 'Zerg',
        value: 'zerg',
        figurine: [
            {
                name: 'Gardien',
                value: 'gardien',
                img: 'gardien',
                soutien_value: 2,
                type: 'air',
                atk: 'sol'
            },
            {
                name: 'Hydralisk',
                value: 'hydralisk',
                img: 'hydralisk',
                soutien_value: 1,
                type: 'sol',
                atk: 'sol_air'
            },
            {
                name: 'Masse',
                value: 'masse',
                img: 'masse',
                soutien_value: 0,
                type: 'air'
            },
            {
                name: 'Mutalisk',
                value: 'mutalisk',
                img: 'mutalisk',
                soutien_value: 1,
                type: 'air',
                atk: 'sol_air'
            },
            {
                name: 'Reine',
                value: 'reine',
                img: 'reine',
                type: 'air'
            },
            {
                name: 'Saboteur',
                value: 'saboteur',
                img: 'saboteur',
                type: 'sol'
            },
            {
                name: 'Ultralisk',
                value: 'ultralisk',
                img: 'ultralisk',
                soutien_value: 2,
                type: 'sol',
                atk: 'sol'
            },
            {
                name: 'Zergling',
                value: 'zergling',
                img: 'zergling',
                soutien_value: 1,
                type: 'sol',
                atk: 'sol'
            }
        ],
        combat: {
            troupe: [
                {
                    name: 'Hydralisk 6/6',
                    img: 'hydr',
                    figurine: [
                        {
                            name: 'Hydralisk'
                        }
                    ],
                    type: 'std',
                    degats: {
                        atk: {
                            max: 6,
                            min: 2,
                        },
                        def: {
                            max: 6,
                            min: 5,
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'front',
                            by: 'air'
                        },
                        type: 'atk',
                        result: 1
                    }
                },
                {
                    name: 'Masse 0/8',
                    img: 'mass',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Masse'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 0,
                            min: 5,
                        },
                        def: {
                            max: 8,
                            min: 2,
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'suicide',
                            by: 'air'
                        },
                    }
                },
                {
                    name: 'Masse 0/9',
                    img: 'mass_2',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Masse'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 0,
                            min: 5,
                        },
                        def: {
                            max: 9,
                            min: 2,
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'suicide',
                            by: 'air'
                        },
                    }
                },
                {
                    name: 'Mutalisk 8/7',
                    img: 'muta',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Mutalisk'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 8,
                            min: 3,
                        },
                        def: {
                            max: 7,
                            min: 4,
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'répercutés',
                            by: 'sol',
                            unit: [
                                {
                                    name: 'Marine'
                                },
                                {
                                    name: 'Zergling'
                                },
                                {
                                    name: 'Disciple'
                                }
                            ]
                        },
                        result: 1
                    }
                },
                {
                    name: 'Mutalisk 7/8',
                    img: 'muta_2',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Mutalisk'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 7,
                            min: 3,
                        },
                        def: {
                            max: 8,
                            min: 4,
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'répercutés',
                            by: 'sol',
                            unit: [
                                {
                                    name: 'Marine'
                                },
                                {
                                    name: 'Zergling'
                                },
                                {
                                    name: 'Disciple'
                                }
                            ]
                        },
                        result: 1
                    }
                },
                {
                    name: 'Mutalisk 7/7',
                    img: 'muta_3',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Mutalisk'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 7,
                            min: 3,
                        },
                        def: {
                            max: 7,
                            min: 4,
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'répercutés',
                            by: 'sol',
                            unit: [
                                {
                                    name: 'Marine'
                                },
                                {
                                    name: 'Zergling'
                                },
                                {
                                    name: 'Disciple'
                                }
                            ]
                        },
                        result: 1
                    }
                },
                {
                    name: 'Mutalisk & Hydralisk 7/6',
                    img: 'muta_hydr',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Mutalisk'
                        },
                        {
                            name: 'Hydralisk'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 7,
                            min: 2,
                        },
                        def: {
                            max: 6,
                            min: 5,
                        }
                    }
                },
                {
                    name: 'Ultralisk & Gardien 7/8',
                    img: 'ultr_gard',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Ultralisk'
                        },
                        {
                            name: 'Gardien'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 7,
                            min: 3,
                        },
                        def: {
                            max: 8,
                            min: 4,
                        }
                    }
                },
                {
                    name: 'Ultralisk & Gardien 8/7',
                    img: 'ultr_gard_2',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Ultralisk'
                        },
                        {
                            name: 'Gardien'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 8,
                            min: 3,
                        },
                        def: {
                            max: 7,
                            min: 4,
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'front',
                            unit: 'Ultralisk'
                        },
                        type: 'def',
                        result: 1
                    }
                },
                {
                    name: 'Ultralisk & Gardien 8/8',
                    img: 'ultr_gard_3',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Ultralisk'
                        },
                        {
                            name: 'Gardien'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 8,
                            min: 5,
                        },
                        def: {
                            max: 8,
                            min: 2,
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'front',
                            unit: 'Ultralisk'
                        },
                        type: 'def',
                        result: 1
                    }
                },
                {
                    name: 'Zergling 6/3',
                    img: 'zerg',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Zergling'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 6,
                            min: 4,
                        },
                        def: {
                            max: 3,
                            min: 3,
                        }
                    }
                },
                {
                    name: 'Zergling 4/5',
                    img: 'zerg_2',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Zergling'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 4,
                            min: 4,
                        },
                        def: {
                            max: 5,
                            min: 3,
                        }
                    }
                },
                {
                    name: 'Zergling 5/4',
                    img: 'zerg_3',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Zergling'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 5,
                            min: 4,
                        },
                        def: {
                            max: 4,
                            min: 3,
                        }
                    }
                },
                {
                    name: 'Zergling & Hydralisk 5/5',
                    img: 'zerg_hydr',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Zergling'
                        },
                        {
                            name: 'Hydralisk'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 5,
                            min: 1,
                        },
                        def: {
                            max: 5,
                            min: 6,
                        }
                    }
                },
                {
                    name: 'Zergling & Hydralisk 5/6',
                    img: 'zerg_hydr_2',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Zergling'
                        },
                        {
                            name: 'Hydralisk'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 5,
                            min: 1,
                        },
                        def: {
                            max: 6,
                            min: 6,
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'front',
                            unit: 'Hydralisk',
                            by: 'air'
                        },
                        type: 'atk',
                        result: 1
                    }
                }
            ],
            techno: [
                {
                    name: 'Armure Chitineuse 9/9',
                    img: 'armure_chitineuse',
                    figurine: [
                        {
                            name: 'Ultralisk'
                        }
                    ],
                    type: 'tch',
                    degats: {
                        atk: {
                            max: 9,
                            min: 4
                        },
                        def: {
                            max: 9,
                            min: 5
                        }
                    }
                },
                {
                    name: 'Armure Chitineuse 8/10',
                    img: 'armure_chitineuse_2',
                    figurine: [
                        {
                            name: 'Ultralisk'
                        }
                    ],
                    type: 'tch',
                    degats: {
                        atk: {
                            max: 8,
                            min: 4
                        },
                        def: {
                            max: 10,
                            min: 5
                        }
                    }
                },
                {
                    name: 'Attaque Volante 9/8',
                    img: 'attaque_volante',
                    figurine: [
                        {
                            name: 'Gardien'
                        }
                    ],
                    type: 'tch',
                    degats: {
                        atk: {
                            max: 9,
                            min: 5
                        },
                        def: {
                            max: 8,
                            min: 4
                        }
                    }
                },
                {
                    name: 'Attaque Volante 10/8',
                    img: 'attaque_volante_2',
                    figurine: [
                        {
                            name: 'Gardien'
                        }
                    ],
                    type: 'tch',
                    degats: {
                        atk: {
                            max: 10,
                            min: 5
                        },
                        def: {
                            max: 8,
                            min: 4
                        }
                    }
                },
                {
                    name: 'Enfouissage 0/5',
                    img: 'enfouissage',
                    figurine: [
                        {
                            name: 'Zergling'
                        },
                        {
                            name: 'Hydralisk'
                        },
                        {
                            name: 'Saboteur'
                        }
                    ],
                    type: 'tch',
                    degats: {
                        atk: {
                            max: 0,
                            min: 4
                        },
                        def: {
                            max: 5,
                            min: 6
                        }
                    },
                    Tech: {
                        capacity: {
                            name: 'Camouflage',
                            for: [
                                {
                                    name: 'Zergling'
                                },
                                {
                                    name: 'Hydralisk'
                                },
                                {
                                    name: 'Saboteur'
                                }
                            ]
                        },
                    }
                },
                {
                    name: 'Enfouissage 0/6',
                    img: 'enfouissage_2',
                    figurine: [
                        {
                            name: 'Zergling'
                        },
                        {
                            name: 'Hydralisk'
                        },
                        {
                            name: 'Saboteur'
                        }
                    ],
                    type: 'tch',
                    degats: {
                        atk: {
                            max: 0,
                            min: 4
                        },
                        def: {
                            max: 6,
                            min: 6
                        }
                    },
                    Tech: {
                        capacity: {
                            name: 'Camouflage',
                            for: [
                                {
                                    name: 'Zergling'
                                },
                                {
                                    name: 'Hydralisk'
                                },
                                {
                                    name: 'Saboteur'
                                }
                            ]
                        },
                    }
                }
            ]
        },
        renfort: {
            troupe: [
                {
                    name: 'Carte Renfort',
                    img: 'r-all',
                    type: 'std',
                    Tech: {
                        condition: {
                            type: 'soutien',
                            by: 'soutien'
                        },
                        type: 'atk',
                        result: 1
                    }
                }
            ],
            techno: [
                {
                    name: 'Carapace Améliorée',
                    img: 'r-carapace_amelioree',
                    type: 'tch',
                    Tech: {
                        type: 'def',
                        result: 1
                    }
                },
                {
                    name: 'Colonie Noyée',
                    img: 'r-colonie_noyee',
                    type: 'tch',
                    Tech: {
                        condition: {
                            type: 'base',
                            by: 'sol'
                        },
                        type: 'atk',
                        result: 2
                    }
                },
                {
                    name: 'Essaim Noir',
                    img: 'r-essaim_noir',
                    figurine: 'Saboteur',
                    type: 'tch',
                    Tech: {
                        condition: {
                            type: 'exception',
                            unit: [
                                {
                                    name: 'Flammeur'
                                },
                                {
                                    name: 'Zergling'
                                },
                                {
                                    name: 'Ultralisk'
                                },
                                {
                                    name: 'Disciple'
                                }
                            ],
                            by: 'sol'
                        },
                        type: 'atk',
                        result: 0
                    }
                },
                {
                    name: 'Mucus',
                    img: 'r-mucus',
                    figurine: 'Reine',
                    type: 'tch',
                    Tech: {
                        capacity: {
                            name: 'Détecteur',
                            for: 'soutien' ,
                            result: 0
                        },
                        type: 'def',
                        result: 1
                    }
                },
                {
                    name: 'Peste',
                    img: 'r-peste',
                    figurine: 'Saboteur',
                    type: 'tch',
                    Tech: {
                        condition: {
                            unit: 'Saboteur',
                            type: 'répercutés',
                            by: 'sol_vol'
                        },
                        capacity: {
                            name: 'Détecteur'
                        }
                    }
                },
                {
                    name: 'Vers',
                    img: 'r-vers',
                    figurine: 'Reine',
                    type: 'tch',
                    Tech: {
                        condition: {
                            type: 'destroy',
                            unit: [
                                {
                                    name:'Marine'
                                },
                                {
                                    name:'Flammeur'
                                },
                                {
                                    name:'Fantôme'
                                },
                                {
                                    name:'Vautour'
                                },
                                {
                                    name:'Goliath'
                                },
                                {
                                    name:'Char de Siège'
                                },
                                {
                                    name:'Disciple'
                                },
                                {
                                    name:'Dragon'
                                },
                                {
                                    name:'Templier'
                                },
                                {
                                    name:'Zerg'
                                }
                            ],
                            by: 'sol'
                        }
                    }
                }
            ]
        },
        zoneJeu: [
            {
                name: 'Boost Métabolique',
                img: 'boost_metabolique',
                type: 'tch',
                Tech: {
                    condition: {
                        type: 'front',
                        unit: 'Zergling',
                    },
                    type: 'def',
                    result: 2,
                }
            },
            {
                name: 'Parasite',
                img: 'parasite',
                type: 'tch',
                Tech: {
                    condition: {
                        unit: 'Reine'
                    },
                    capacity: {
                        name: 'Détecteur'
                    }
                }
            }
        ]
    },
    protoss: {
        race: 'Protoss',
        value: 'protoss',
        figurine: [
            {
                name: 'Arbitre',
                value: 'arbitre',
                img: 'arbitre',
                type: 'air'
            },
            {
                name: 'Archonte',
                value: 'archonte',
                img: 'archonte',
                soutien_value: 2,
                type: 'sol',
                atk: 'sol_air'
            },
            {
                name: 'Destructeur',
                value: 'destructeur',
                img: 'destructeur',
                soutien_value: 2,
                type: 'sol',
                atk: 'sol'
            },
            {
                name: 'Disciple',
                value: 'disciple',
                img: 'disciple',
                soutien_value: 1,
                type: 'sol',
                atk: 'sol'
            },
            {
                name: 'Dragon',
                value: 'dragon',
                img: 'dragon',
                soutien_value: 1,
                type: 'sol',
                atk: 'sol_air'
            },
            {
                name: 'Porte-Nefs',
                value: 'porte-nefs',
                img: 'porte-nefs',
                soutien_value: 2,
                type: 'air',
                atk: 'sol_air'
            },
            {
                name: 'Scout',
                value: 'scout',
                img: 'scout',
                soutien_value: 1,
                type: 'air',
                atk: 'sol_air'
            },
            {
                name: 'Templier',
                value: 'templier',
                img: 'templier',
                type: 'sol'
            }
        ],
        combat: {
            troupe: [
                {
                    name: 'Archonte 9/8',
                    img: 'arch',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Archonte'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 9,
                            min: 5
                        },
                        def: {
                            max: 8,
                            min: 2
                        }
                    },
                    Tech: {
                        condition: {
                            byCondition: 'noCondition',
                            type: 'répercutés',
                            by: 'sol_air'
                        }
                    }
                },
                {
                    name: 'Archonte & Destructeur 8/8',
                    img: 'arch_dest',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Archonte'
                        },
                        {
                            name: 'Destructeur'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 8,
                            min: 2
                        },
                        def: {
                            max: 8,
                            min: 5
                        }
                    },
                    Tech: {
                        condition: {
                            byCondition: 'noCondition',
                            type: 'répercutés',
                            by: 'sol'
                        }
                    }
                },
                {
                    name: 'Destructeur 7/7',
                    img: 'dest',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Destructeur'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 7,
                            min: 3
                        },
                        def: {
                            max: 7,
                            min: 4
                        }
                    },
                    Tech: {
                        condition: {
                            byCondition: 'noCondition',
                            type: 'répercutés',
                            by: 'sol'
                        }
                    }
                },
                {
                    name: 'Disciple 6/7',
                    img: 'disc',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Disciple'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 6,
                            min: 2
                        },
                        def: {
                            max: 7,
                            min: 5
                        }
                    }
                },
                {
                    name: 'Disciple 7/5',
                    img: 'disc_2',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Disciple'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 7,
                            min: 2
                        },
                        def: {
                            max: 5,
                            min: 5
                        }
                    }
                },
                {
                    name: 'Disciple 5/6',
                    img: 'disc_3',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Disciple'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 5,
                            min: 2
                        },
                        def: {
                            max: 6,
                            min: 5
                        }
                    }
                },
                {
                    name: 'Disciple & Dragon 6/6',
                    img: 'disc_drag',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Disciple'
                        },
                        {
                            name: 'Dragon'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 6,
                            min: 1
                        },
                        def: {
                            max: 6,
                            min: 6
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'front',
                            unit: 'Dragon',
                            by: 'air'
                        },
                        type: 'atk',
                        result: 1
                    }
                },
                {
                    name: 'Disciple & Dragon 5/7',
                    img: 'disc_drag_2',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Disciple'
                        },
                        {
                            name: 'Dragon'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 5,
                            min: 1
                        },
                        def: {
                            max: 7,
                            min: 6
                        }
                    }
                },
                {
                    name: 'Porte-Nefs & Archonte 8/9',
                    img: 'port_arch',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Porte-Nefs'
                        },
                        {
                            name: 'Archonte'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 8,
                            min: 2
                        },
                        def: {
                            max: 9,
                            min: 5
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'répercutés',
                            unit: 'Archonte',
                            by: 'sol_air'
                        }
                    }
                },
                {
                    name: 'Porte-Nefs & Archonte 9/8',
                    img: 'port_arch_2',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Porte-Nefs'
                        },
                        {
                            name: 'Archonte'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 9,
                            min: 5
                        },
                        def: {
                            max: 8,
                            min: 2
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'répercutés',
                            unit: 'Archonte',
                            by: 'sol_air'
                        }
                    }
                },
                {
                    name: 'Porte-Nefs & Destructeur 7/8',
                    img: 'port_dest',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Porte-Nefs'
                        },
                        {
                            name: 'Destructeur'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 7,
                            min: 3
                        },
                        def: {
                            max: 8,
                            min: 4
                        }
                    }
                },
                {
                    name: 'Porte-Nefs & Destructeur 8/8',
                    img: 'port_dest_2',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Porte-Nefs'
                        },
                        {
                            name: 'Destructeur'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 8,
                            min: 3
                        },
                        def: {
                            max: 8,
                            min: 4
                        }
                    }
                },
                {
                    name: 'Scout 7/8',
                    img: 'scou',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Scout'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 7,
                            min: 4
                        },
                        def: {
                            max: 8,
                            min: 3
                        }
                    }
                },
                {
                    name: 'Scout 7/8',
                    img: 'scou_2',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Scout'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 7,
                            min: 4
                        },
                        def: {
                            max: 8,
                            min: 4
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'front',
                            by: 'air'
                        },
                        type: 'atk',
                        result: 1
                    }
                },
                {
                    name: 'Scout & Dragon 7/7',
                    img: 'scou_drag',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Scout'
                        },
                        {
                            name: 'Dragon'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 7,
                            min: 3
                        },
                        def: {
                            max: 7,
                            min: 4
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'front',
                            by: 'air'
                        },
                        type: 'atk',
                        result: 1
                    }
                },
                {
                    name: 'Scout & Dragon 8/7',
                    img: 'scou_drag_2',
                    type: 'std',
                    figurine: [
                        {
                            name: 'Scout'
                        },
                        {
                            name: 'Dragon'
                        }
                    ],
                    degats: {
                        atk: {
                            max: 8,
                            min: 3
                        },
                        def: {
                            max: 7,
                            min: 4
                        }
                    }
                }
            ],
            techno: [
                {
                    name: 'Capacité Augmentée du Destructeur 9/8',
                    img: 'capacite_destructeur',
                    figurine: [
                        {
                            name: 'Destructeur'
                        }
                    ],
                    type: 'tch',
                    degats: {
                        atk: {
                            max: 9,
                            min: 6
                        },
                        def: {
                            max: 8,
                            min: 5
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'répercutés',
                            by: 'sol'
                        }
                    }
                },
                {
                    name: 'Capacité Augmentée du Destructeur 10/8',
                    img: 'capacite_destructeur_2',
                    figurine: [
                        {
                            name: 'Destructeur'
                        }
                    ],
                    type: 'tch',
                    degats: {
                        atk: {
                            max: 10,
                            min: 6
                        },
                        def: {
                            max: 8,
                            min: 5
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'répercutés',
                            by: 'sol'
                        }
                    }
                },
                {
                    name: 'Capacité Augmentée du Destructeur 9/7',
                    img: 'capacite_destructeur_3',
                    figurine: [
                        {
                            name: 'Destructeur'
                        }
                    ],
                    type: 'tch',
                    degats: {
                        atk: {
                            max: 9,
                            min: 6
                        },
                        def: {
                            max: 7,
                            min: 5
                        }
                    },
                    Tech: {
                        condition: {
                            type: 'répercutés',
                            by: 'sol'
                        }
                    }
                },
                {
                    name: 'Capacité Augmentée du Porte-Nefs 10/9',
                    img: 'capacite_porte-nefs',
                    figurine: [
                        {
                            name: 'Porte-Nefs'
                        }
                    ],
                    type: 'tch',
                    degats: {
                        atk: {
                            max: 10,
                            min: 5
                        },
                        def: {
                            max: 9,
                            min: 6
                        }
                    }
                },
                {
                    name: 'Capacité Augmentée du Porte-Nefs 9/9',
                    img: 'capacite_porte-nefs_2',
                    figurine: [
                        {
                            name: 'Porte-Nefs'
                        }
                    ],
                    type: 'tch',
                    degats: {
                        atk: {
                            max: 9,
                            min: 5
                        },
                        def: {
                            max: 9,
                            min: 6
                        }
                    }
                },
                {
                    name: 'Capacité Augmentée du Porte-Nefs 9/8',
                    img: 'capacite_porte-nefs_3',
                    figurine: [
                        {
                            name: 'Porte-Nefs'
                        }
                    ],
                    type: 'tch',
                    degats: {
                        atk: {
                            max: 9,
                            min: 5
                        },
                        def: {
                            max: 8,
                            min: 6
                        }
                    }
                }
            ]
        },
        renfort: {
            troupe: [
                {
                    name: 'Carte Renfort',
                    img: 'r-all',
                    type: 'std',
                    Tech: {
                        condition: {
                            type: 'soutien'
                        },
                        type: 'def',
                        result: 1
                    }
                }
            ],
            techno: [
                {
                    name: 'Armure Terrestre',
                    img: 'r-armure_terrestre',
                    type: 'tch',
                    Tech: {
                        condition: {
                            type: 'base'
                        },
                        type: 'def',
                        result: 2,
                    }
                },
                {
                    name: 'Champ de Stase',
                    img: 'r-champ_stase',
                    figurine: 'Arbitre',
                    type: 'tch',
                    Tech: {
                        capacity: {
                            name: 'stase'
                        },
                        type: 'atk',
                        result: 0,
                    }
                },
                {
                    name: 'Charge de Singularité',
                    img: 'r-charge_singularite',
                    figurine: 'Dragon',
                    type: 'tch',
                    Tech: {
                        type: 'atk',
                        result: 1,
                    }
                },
                {
                    name: 'Hallucination',
                    img: 'r-hallucination',
                    figurine: 'Templier',
                    type: 'tch',
                    Tech: {
                        capacity: {
                            name: 'Annulez'
                        }
                    }
                },
                {
                    name: 'Tempête Psionique',
                    img: 'r-tempete_psionique',
                    figurine: 'Templier',
                    type: 'tch',
                    Tech: {
                        condition: {
                            unit: 'Templier',
                            type: 'répercutés',
                            by: 'sol_air'
                        },
                        capacity: {
                            name: 'Détecteur'
                        },
                        type: 'atk',
                        result: 2,
                    }
                }
            ]
        },
        zoneJeu: [
            {
                name: 'Champ de Camouflage',
                img: 'champ_camouflage',
                type: 'tch',
                Tech: {
                    condition: {
                        type: 'renfort',
                        unit: 'Arbitre'
                    },
                    capacity: {
                        name: 'Camouflage',
                        for: 'all'
                    }
                }
            },
            {
                name: 'Observateurs',
                img: 'observateurs',
                type: 'tch',
                Tech: {
                    capacity: {
                        name: 'Détecteur',
                        for: 'all'
                    }
                }
            }
        ]
    },
}

/* 

name: '',
img: '',
figurine: '', [{}, {}],
// std = Standard / tch = Techno
type: 'std', 'tch',
degats: {
    atk: {
        max: ,
        min: 
    },
    def: {
        max: ,
        min: 
    }
},
Tech: {
    condition: {
        type: 'front' ou 'répercutés' ou 'suicide' ou 'renfort' ou 'destroy', ou 'base', ou 'exception'
        unit: 'name' ou [{name},{name}],
        by: 'sol_air'
    },
    capacity: {
        name: 'capacité',
        for: 'all' ou [{name}, {name}],
        unit: 'name'
    },
    type: 'atk_def',
    result: , [{}, {}]
}

*/