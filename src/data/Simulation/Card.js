export default {
    terran: {
        race: 'Terran',
        value: 'terran',
        route_trp: 'Bleu/Troupes/',
        route_tch: 'Bleu/Technologies/',
        troupe: [
            {
                name: 'Cuirassé & Char de Siège',
                img: 'cuir_char',
                type: 'combat',
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
                name: 'Cuirassé & Char de Siège',
                img: 'cuir_char_2',
                figurine: [
                    {
                        name: 'Cuirassé'
                    },
                    {
                        name: 'Char de Siège'
                    }
                ],
                type: 'combat',
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
                name: 'Cuirassé & Ombre',
                img: 'cuir_ombre',
                figurine: [
                    {
                        name: 'Cuirassé'
                    },
                    {
                        name: 'Ombre'
                    }
                ],
                type: 'combat',
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
                name: 'Cuirassé & Ombre',
                img: 'cuir_ombre_2',
                figurine: [
                    {
                        name: 'Cuirassé'
                    },
                    {
                        name: 'Ombre'
                    }
                ],
                type: 'combat',
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
                name: 'Flammeur & Marine',
                img: 'flam_mari',
                figurine: [
                    {
                        name: 'Flammeur'
                    },
                    {
                        name: 'Marine'
                    }
                ],
                type: 'combat',
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
                name: 'Flammeur & Marine',
                img: 'flam_mari_2',
                figurine: [
                    {
                        name: 'Flammeur'
                    },
                    {
                        name: 'Marine'
                    }
                ],
                type: 'combat',
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
                name: 'Goliath & Char de Siège',
                img: 'goli_char',
                figurine: [
                    {
                        name: 'Goliath'
                    },
                    {
                        name: 'Char de Siège'
                    }
                ],
                type: 'combat',
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
                name: 'Goliath & Ombre',
                img: 'goli_ombr',
                figurine: [
                    {
                        name: 'Goliath'
                    },
                    {
                        name: 'Ombre'
                    }
                ],
                type: 'combat',
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
                        by: 'vol'
                    },
                    type: 'atk',
                    result: 2
                }
            },
            {
                name: 'Goliath & Ombre',
                img: 'goli_ombr_2',
                figurine: [
                    {
                        name: 'Goliath'
                    },
                    {
                        name: 'Ombre'
                    }
                ],
                type: 'combat',
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
                        by: 'vol'
                    },
                    type: 'atk',
                    result: 1
                }
            },
            {
                name: 'Marine & Fantôme',
                img: 'mari_fant',
                figurine: [
                    {
                        name: 'Marine'
                    },
                    {
                        name: 'Fantôme'
                    }
                ],
                type: 'combat',
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
                        by: 'vol'
                    },
                    type: 'atk',
                    result: 1
                }
            },
            {
                name: 'Marine & Fantôme',
                img: 'mari_fant_2',
                figurine: [
                    {
                        name: 'Marine'
                    },
                    {
                        name: 'Fantôme'
                    }
                ],
                type: 'combat',
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
                        by: 'vol'
                    },
                    type: 'atk',
                    result: 1
                }
            },
            {
                name: 'Marine & Fantôme & Flammeur',
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
                type: 'combat',
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
                name: 'Vautour & Fantôme',
                img: 'vaut_fant',
                figurine: [
                    {
                        name: 'Vautour'
                    },
                    {
                        name: 'Fantôme'
                    }
                ],
                type: 'combat',
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
                name: 'Vautour & Flammeur',
                img: 'vaut_flam',
                figurine: [
                    {
                        name: 'Vautour'
                    },
                    {
                        name: 'Flammeur'
                    }
                ],
                type: 'combat',
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
                name: 'Vautour & Flammeur',
                img: 'vaut_flam_2',
                figurine: [
                    {
                        name: 'Vautour'
                    },
                    {
                        name: 'Flammeur'
                    }
                ],
                type: 'combat',
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
                name: 'Vautour & Goliath & Char de Siège',
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
                type: 'combat',
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
                        by: 'vol'
                    },
                    type: 'atk',
                    result: 1
                }
            },
            {
                name: 'Carte Renfort',
                img: 'r-all',
                type: 'renfort',
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
            },
        ],
        techno: [
            {
                name: 'Arme Nucléaire',
                img: 'arme_nucleaire',
                figurine: 'Fantôme',
                type: 'combat',
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
                name: 'Balayage de Scanner',
                img: 'balayage_scanner',
                capacity: {
                    name: 'Détecteur',
                    for: 'all'
                },
            },
            {
                name: 'Canon Yamato',
                img: 'canon_yamato',
                figurine: 'Cuirassé',
                type: 'combat',
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
                name: 'Canon Yamato',
                img: 'canon_yamato_2',
                figurine: 'Cuirassé',
                type: 'combat',
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
                name: 'Matrice Défensive',
                img: 'matrice_defensive',
                condition: {
                    unit: 'Vaisseau Laboratoire',
                    type: 'renfort'
                },
                type: 'def',
                result: 1
            },
            {
                name: 'Mines Araignées',
                img: 'mines_araignees',
                figurine: 'Vautour',
                type: 'combat',
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
                        type: 'répercutés',
                        by: 'sol'
                    }
                }
            },
            {
                name: 'Mines Araignées',
                img: 'mines_araignees_2',
                figurine: 'Vautour',
                type: 'combat',
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
                        type: 'répercutés',
                        by: 'sol'
                    }
                }
            },
            {
                name: 'Mode Siège',
                img: 'mode_siege',
                figurine: 'Char de Siège',
                type: 'combat',
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
                        type: 'répercutés',
                        by: 'sol'
                    }
                }
            },
            {
                name: 'Mode Siège',
                img: 'mode_siege_2',
                figurine: 'Char de Siège',
                type: 'combat',
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
                type: 'renfort',
                Tech: {
                    condition: {
                        type: 'renfort',
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
                type: 'renfort',
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
                type: 'renfort',
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
                        by: 'sol_vol'
                    },
                    type: 'atk',
                    result: 1
                }
            },
            {
                name: 'Onde VDE',
                img: 'r-onde_vde',
                figurine: 'Vaisseau Laboratoire',
                type: 'renfort',
                Tech: {
                    condition: {
                        type: 'renfort',
                    },
                    capacity: {
                        name: 'Annulez',
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
                type: 'renfort',
                Tech: {
                    condition: {
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
                                name: 'Porte-Nef'
                            },
                            {
                                name: 'Scout'
                            },
                            {
                                name: 'Destructeur'
                            }
                        ],
                    }
                }
            },
            {
                name: 'Stimulant',
                img: 'stimulant',
                figurine: [
                    {
                        name: 'Marine'
                    },
                    {
                        name: 'Flammeur'
                    }
                ],
                type: 'combat',
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
                name: 'Stimulant',
                img: 'stimulant_2',
                figurine: [
                    {
                        name: 'Marine'
                    },
                    {
                        name: 'Flammeur'
                    }
                ],
                type: 'combat',
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
        ],
    },
    zerg: {
        race: 'Zerg',
        value: 'zerg',
        route_trp: 'Violet/Troupes/',
        route_tch: 'Violet/Technologies/',
        troupe: [
            {
                name: 'Hydralisk',
                img: 'hydr',
                atk_max: 6,
                atk_min: 2,
                def_max: 6,
                def_min: 5,
                Tech: {
                    condition: {
                        by: 'vol'
                    },
                    type: 'atk',
                    result: 1
                }
            },
            {
                name: 'Masse',
                img: 'mass',
                atk_max: 0,
                atk_min: 5,
                def_max: 8,
                def_min: 2,
                Tech: {
                    condition: {
                        type: 'suicide',
                        by: 'vol'
                    },
                }
            },
            {
                name: 'Masse',
                img: 'mass_2',
                atk_max: 0,
                atk_min: 5,
                def_max: 9,
                def_min: 2,
                Tech: {
                    condition: {
                        type: 'suicide',
                        by: 'vol'
                    },
                }
            },
            {
                name: 'Mutalisk',
                img: 'muta',
                atk_max: 8,
                atk_min: 3,
                def_max: 7,
                def_min: 4,
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
                name: 'Mutalisk',
                img: 'muta_2',
                atk_max: 7,
                atk_min: 3,
                def_max: 8,
                def_min: 4,
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
                name: 'Mutalisk',
                img: 'muta_3',
                atk_max: 7,
                atk_min: 3,
                def_max: 7,
                def_min: 4,
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
                name: 'Mutalisk & Hydralisk',
                img: 'muta_hydr',
                atk_max: 7,
                atk_min: 2,
                def_max: 6,
                def_min: 5
            },
            {
                name: 'Ultralisk & Gardien',
                img: 'ultr_gard',
                atk_max: 7,
                atk_min: 3,
                def_max: 8,
                def_min: 4
            },
            {
                name: 'Ultralisk & Gardien',
                img: 'ultr_gard_2',
                atk_max: 8,
                atk_min: 3,
                def_max: 7,
                def_min: 4,
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
                name: 'Ultralisk & Gardien',
                img: 'ultr_gard_3',
                atk_max: 8,
                atk_min: 5,
                def_max: 8,
                def_min: 2,
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
                name: 'Zergling',
                img: 'zerg',
                atk_max: 6,
                atk_min: 4,
                def_max: 3,
                def_min: 3
            },
            {
                name: 'Zergling',
                img: 'zerg_2',
                atk_max: 4,
                atk_min: 4,
                def_max: 5,
                def_min: 3
            },
            {
                name: 'Zergling',
                img: 'zerg_3',
                atk_max: 5,
                atk_min: 4,
                def_max: 4,
                def_min: 3
            },
            {
                name: 'Zergling & Hydralisk',
                img: 'zerg_hydr',
                atk_max: 5,
                atk_min: 1,
                def_max: 5,
                def_min: 6
            },
            {
                name: 'Zergling & Hydralisk',
                img: 'zerg_hydr_2',
                atk_max: 5,
                atk_min: 1,
                def_max: 6,
                def_min: 6,
                Tech: {
                    condition: {
                        type: 'front',
                        unit: 'Hydralisk',
                        by: 'vol'
                    },
                    type: 'atk',
                    result: 1
                }
            },
            {
                name: 'Carte Renfort',
                img: 'r-all',
                Tech: {
                    condition: {
                        type: 'soutien'
                    },
                    type: 'atk',
                    result: 1
                }
            },
        ],
        techno: [

        ],
    },
    protoss: {
        race: 'Protoss',
        value: 'protoss',
        route_trp: 'Jaune/Troupes/',
        route_tch: 'Jaune/Technologies/',
        troupe: [
            {
                name: 'Archonte',
                img: 'arch',
                atk_max: 9,
                atk_min: 5,
                def_max: 8,
                def_min: 2,
                Tech: {
                    condition: {
                        type: 'répercutés',
                        by: 'sol_vol'
                    }
                }
            },{
                name: 'Archonte & Destructeur',
                img: 'arch_dest',
                atk_max: 8,
                atk_min: 2,
                def_max: 8,
                def_min: 5,
                Tech: {
                    condition: {
                        type: 'répercutés',
                        by: 'sol'
                    }
                }
            },{
                name: 'Destructeur',
                img: 'dest',
                atk_max: 7,
                atk_min: 3,
                def_max: 7,
                def_min: 4,
                Tech: {
                    condition: {
                        type: 'répercutés',
                        by: 'sol'
                    }
                }
            },{
                name: 'Disciple',
                img: 'disc',
                atk_max: 6,
                atk_min: 2,
                def_max: 7,
                def_min: 5
            },{
                name: 'Disciple',
                img: 'disc_2',
                atk_max: 7,
                atk_min: 2,
                def_max: 5,
                def_min: 5
            },{
                name: 'Disciple',
                img: 'disc_3',
                atk_max: 5,
                atk_min: 2,
                def_max: 6,
                def_min: 5
            },{
                name: 'Disciple & Dragon',
                img: 'disc_drag',
                atk_max: 6,
                atk_min: 1,
                def_max: 6,
                def_min: 6,
                Tech: {
                    condition: {
                        type: 'front',
                        unit: 'Dragon',
                        by: 'vol'
                    },
                    type: 'atk',
                    result: 1
                }
            },{
                name: 'Disciple & Dragon',
                img: 'disc_drag_2',
                atk_max: 5,
                atk_min: 1,
                def_max: 7,
                def_min: 6
            },{
                name: 'Porte-Nefs & Archonte',
                img: 'port_arch',
                atk_max: 8,
                atk_min: 2,
                def_max: 9,
                def_min: 5,
                Tech: {
                    condition: {
                        type: 'répercutés',
                        unit: 'Archonte',
                        by: 'sol_vol'
                    }
                }
            },{
                name: 'Porte-Nefs & Archonte',
                img: 'port_arch_2',
                atk_max: 9,
                atk_min: 5,
                def_max: 8,
                def_min: 2,
                Tech: {
                    condition: {
                        type: 'répercutés',
                        unit: 'Archonte',
                        by: 'sol_vol'
                    }
                }
            },{
                name: 'Porte-Nefs & Destructeur',
                img: 'port_dest',
                atk_max: 7,
                atk_min: 3,
                def_max: 8,
                def_min: 4
            },{
                name: 'Porte-Nefs & Destructeur',
                img: 'port_dest_2',
                atk_max: 8,
                atk_min: 3,
                def_max: 8,
                def_min: 4
            },{
                name: 'Scout',
                img: 'scou',
                atk_max: 7,
                atk_min: 4,
                def_max: 8,
                def_min: 3
            },{
                name: 'Scout',
                img: 'scou_2',
                atk_max: 7,
                atk_min: 4,
                def_max: 8,
                def_min: 3,
                Tech: {
                    condition: {
                        by: 'vol'
                    },
                    type: 'atk',
                    result: 1
                }
            },{
                name: 'Scout & Dragon',
                img: 'scou_drag',
                atk_max: 7,
                atk_min: 3,
                def_max: 7,
                def_min: 4,
                Tech: {
                    condition: {
                        by: 'vol'
                    },
                    type: 'atk',
                    result: 1
                }
            },{
                name: 'Scout & Dragon',
                img: 'scou_drag_2',
                atk_max: 8,
                atk_min: 3,
                def_max: 7,
                def_min: 4
            },{
                name: 'Carte Renfort',
                img: 'r-all',
                Tech: {
                    condition: {
                        type: 'soutien'
                    },
                    type: 'def',
                    result: 1
                }
            },
        ],
        techno: [

        ],
    },
}

/* 

name: '',
img: '',
figurine: '', [{}, {}],
type: 'combat', 'renfort',
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
        type: 'front' ou 'répercutés' ou 'suicide' ou 'renfort' ou 'destroy',
        unit: 'name' ou [{name},{name}],
        by: 'sol_vol'
    },
    capacity: {
        name: 'capacité',
        for: 'all' ou [{name}, {name}],
        unit: 'name'
    },
    type: 'atk def',
    result: , [{}, {}]

*/

///////////////////
//
// TEST CARD []
//
///////////////////

/*

export default [
    {
        race: 'Terran',
        value: 'terran',
        route_trp: 'Bleu/Troupes/',
        route_tch: 'Bleu/Technologies/',
        troupe: [
            {
                name: 'Cuirassé & Char de Siège',
                img: 'cuir_char',
                type: 'combat',
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
                name: 'Cuirassé & Char de Siège',
                img: 'cuir_char_2',
                figurine: [
                    {
                        name: 'Cuirassé'
                    },
                    {
                        name: 'Char de Siège'
                    }
                ],
                type: 'combat',
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
                name: 'Cuirassé & Ombre',
                img: 'cuir_ombre',
                figurine: [
                    {
                        name: 'Cuirassé'
                    },
                    {
                        name: 'Ombre'
                    }
                ],
                type: 'combat',
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
                name: 'Cuirassé & Ombre',
                img: 'cuir_ombre_2',
                figurine: [
                    {
                        name: 'Cuirassé'
                    },
                    {
                        name: 'Ombre'
                    }
                ],
                type: 'combat',
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
                name: 'Flammeur & Marine',
                img: 'flam_mari',
                figurine: [
                    {
                        name: 'Flammeur'
                    },
                    {
                        name: 'Marine'
                    }
                ],
                type: 'combat',
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
                name: 'Flammeur & Marine',
                img: 'flam_mari_2',
                figurine: [
                    {
                        name: 'Flammeur'
                    },
                    {
                        name: 'Marine'
                    }
                ],
                type: 'combat',
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
                name: 'Goliath & Char de Siège',
                img: 'goli_char',
                figurine: [
                    {
                        name: 'Goliath'
                    },
                    {
                        name: 'Char de Siège'
                    }
                ],
                type: 'combat',
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
                name: 'Goliath & Ombre',
                img: 'goli_ombr',
                figurine: [
                    {
                        name: 'Goliath'
                    },
                    {
                        name: 'Ombre'
                    }
                ],
                type: 'combat',
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
                        by: 'vol'
                    },
                    type: 'atk',
                    result: 2
                }
            },
            {
                name: 'Goliath & Ombre',
                img: 'goli_ombr_2',
                figurine: [
                    {
                        name: 'Goliath'
                    },
                    {
                        name: 'Ombre'
                    }
                ],
                type: 'combat',
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
                        by: 'vol'
                    },
                    type: 'atk',
                    result: 1
                }
            },
            {
                name: 'Marine & Fantôme',
                img: 'mari_fant',
                figurine: [
                    {
                        name: 'Marine'
                    },
                    {
                        name: 'Fantôme'
                    }
                ],
                type: 'combat',
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
                        by: 'vol'
                    },
                    type: 'atk',
                    result: 1
                }
            },
            {
                name: 'Marine & Fantôme',
                img: 'mari_fant_2',
                figurine: [
                    {
                        name: 'Marine'
                    },
                    {
                        name: 'Fantôme'
                    }
                ],
                type: 'combat',
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
                        by: 'vol'
                    },
                    type: 'atk',
                    result: 1
                }
            },
            {
                name: 'Marine & Fantôme & Flammeur',
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
                type: 'combat',
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
                name: 'Vautour & Fantôme',
                img: 'vaut_fant',
                figurine: [
                    {
                        name: 'Vautour'
                    },
                    {
                        name: 'Fantôme'
                    }
                ],
                type: 'combat',
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
                name: 'Vautour & Flammeur',
                img: 'vaut_flam',
                figurine: [
                    {
                        name: 'Vautour'
                    },
                    {
                        name: 'Flammeur'
                    }
                ],
                type: 'combat',
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
                name: 'Vautour & Flammeur',
                img: 'vaut_flam_2',
                figurine: [
                    {
                        name: 'Vautour'
                    },
                    {
                        name: 'Flammeur'
                    }
                ],
                type: 'combat',
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
                name: 'Vautour & Goliath & Char de Siège',
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
                type: 'combat',
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
                        by: 'vol'
                    },
                    type: 'atk',
                    result: 1
                }
            },
            {
                name: 'Carte Renfort',
                img: 'r-all',
                type: 'renfort',
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
            },
        ],
        techno: [
            {
                name: 'Arme Nucléaire',
                img: 'arme_nucleaire',
                figurine: 'Fantôme',
                type: 'combat',
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
                name: 'Balayage de Scanner',
                img: 'balayage_scanner',
                capacity: {
                    name: 'Détecteur',
                    for: 'all'
                },
            },
            {
                name: 'Canon Yamato',
                img: 'canon_yamato',
                figurine: 'Cuirassé',
                type: 'combat',
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
                name: 'Canon Yamato',
                img: 'canon_yamato_2',
                figurine: 'Cuirassé',
                type: 'combat',
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
                name: 'Matrice Défensive',
                img: 'matrice_defensive',
                condition: {
                    unit: 'Vaisseau Laboratoire',
                    type: 'renfort'
                },
                type: 'def',
                result: 1
            },
            {
                name: 'Mines Araignées',
                img: 'mines_araignees',
                figurine: 'Vautour',
                type: 'combat',
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
                        type: 'répercutés',
                        by: 'sol'
                    }
                }
            },
            {
                name: 'Mines Araignées',
                img: 'mines_araignees_2',
                figurine: 'Vautour',
                type: 'combat',
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
                        type: 'répercutés',
                        by: 'sol'
                    }
                }
            },
            {
                name: 'Mode Siège',
                img: 'mode_siege',
                figurine: 'Char de Siège',
                type: 'combat',
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
                        type: 'répercutés',
                        by: 'sol'
                    }
                }
            },
            {
                name: 'Mode Siège',
                img: 'mode_siege_2',
                figurine: 'Char de Siège',
                type: 'combat',
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
                type: 'renfort',
                Tech: {
                    condition: {
                        type: 'renfort',
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
                type: 'renfort',
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
                type: 'renfort',
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
                        by: 'sol_vol'
                    },
                    type: 'atk',
                    result: 1
                }
            },
            {
                name: 'Onde VDE',
                img: 'r-onde_vde',
                figurine: 'Vaisseau Laboratoire',
                type: 'renfort',
                Tech: {
                    condition: {
                        type: 'renfort',
                    },
                    capacity: {
                        name: 'Annulez',
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
                type: 'renfort',
                Tech: {
                    condition: {
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
                                name: 'Porte-Nef'
                            },
                            {
                                name: 'Scout'
                            },
                            {
                                name: 'Destructeur'
                            }
                        ],
                    }
                }
            },
            {
                name: 'Stimulant',
                img: 'stimulant',
                figurine: [
                    {
                        name: 'Marine'
                    },
                    {
                        name: 'Flammeur'
                    }
                ],
                type: 'combat',
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
                name: 'Stimulant',
                img: 'stimulant_2',
                figurine: [
                    {
                        name: 'Marine'
                    },
                    {
                        name: 'Flammeur'
                    }
                ],
                type: 'combat',
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
        ],
    },
    {
        race: 'Zerg',
        value: 'zerg',
        route_trp: 'Violet/Troupes/',
        route_tch: 'Violet/Technologies/',
        troupe: [
            {
                name: 'Hydralisk',
                img: 'hydr',
                atk_max: 6,
                atk_min: 2,
                def_max: 6,
                def_min: 5,
                Tech: {
                    condition: {
                        by: 'vol'
                    },
                    type: 'atk',
                    result: 1
                }
            },
            {
                name: 'Masse',
                img: 'mass',
                atk_max: 0,
                atk_min: 5,
                def_max: 8,
                def_min: 2,
                Tech: {
                    condition: {
                        type: 'suicide',
                        by: 'vol'
                    },
                }
            },
            {
                name: 'Masse',
                img: 'mass_2',
                atk_max: 0,
                atk_min: 5,
                def_max: 9,
                def_min: 2,
                Tech: {
                    condition: {
                        type: 'suicide',
                        by: 'vol'
                    },
                }
            },
            {
                name: 'Mutalisk',
                img: 'muta',
                atk_max: 8,
                atk_min: 3,
                def_max: 7,
                def_min: 4,
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
                name: 'Mutalisk',
                img: 'muta_2',
                atk_max: 7,
                atk_min: 3,
                def_max: 8,
                def_min: 4,
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
                name: 'Mutalisk',
                img: 'muta_3',
                atk_max: 7,
                atk_min: 3,
                def_max: 7,
                def_min: 4,
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
                name: 'Mutalisk & Hydralisk',
                img: 'muta_hydr',
                atk_max: 7,
                atk_min: 2,
                def_max: 6,
                def_min: 5
            },
            {
                name: 'Ultralisk & Gardien',
                img: 'ultr_gard',
                atk_max: 7,
                atk_min: 3,
                def_max: 8,
                def_min: 4
            },
            {
                name: 'Ultralisk & Gardien',
                img: 'ultr_gard_2',
                atk_max: 8,
                atk_min: 3,
                def_max: 7,
                def_min: 4,
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
                name: 'Ultralisk & Gardien',
                img: 'ultr_gard_3',
                atk_max: 8,
                atk_min: 5,
                def_max: 8,
                def_min: 2,
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
                name: 'Zergling',
                img: 'zerg',
                atk_max: 6,
                atk_min: 4,
                def_max: 3,
                def_min: 3
            },
            {
                name: 'Zergling',
                img: 'zerg_2',
                atk_max: 4,
                atk_min: 4,
                def_max: 5,
                def_min: 3
            },
            {
                name: 'Zergling',
                img: 'zerg_3',
                atk_max: 5,
                atk_min: 4,
                def_max: 4,
                def_min: 3
            },
            {
                name: 'Zergling & Hydralisk',
                img: 'zerg_hydr',
                atk_max: 5,
                atk_min: 1,
                def_max: 5,
                def_min: 6
            },
            {
                name: 'Zergling & Hydralisk',
                img: 'zerg_hydr_2',
                atk_max: 5,
                atk_min: 1,
                def_max: 6,
                def_min: 6,
                Tech: {
                    condition: {
                        type: 'front',
                        unit: 'Hydralisk',
                        by: 'vol'
                    },
                    type: 'atk',
                    result: 1
                }
            },
            {
                name: 'Carte Renfort',
                img: 'r-all',
                Tech: {
                    condition: {
                        type: 'soutien'
                    },
                    type: 'atk',
                    result: 1
                }
            },
        ],
        techno: [

        ],
    },
    {
        race: 'Protoss',
        value: 'protoss',
        route_trp: 'Jaune/Troupes/',
        route_tch: 'Jaune/Technologies/',
        troupe: [
            {
                name: 'Archonte',
                img: 'arch',
                atk_max: 9,
                atk_min: 5,
                def_max: 8,
                def_min: 2,
                Tech: {
                    condition: {
                        type: 'répercutés',
                        by: 'sol_vol'
                    }
                }
            },{
                name: 'Archonte & Destructeur',
                img: 'arch_dest',
                atk_max: 8,
                atk_min: 2,
                def_max: 8,
                def_min: 5,
                Tech: {
                    condition: {
                        type: 'répercutés',
                        by: 'sol'
                    }
                }
            },{
                name: 'Destructeur',
                img: 'dest',
                atk_max: 7,
                atk_min: 3,
                def_max: 7,
                def_min: 4,
                Tech: {
                    condition: {
                        type: 'répercutés',
                        by: 'sol'
                    }
                }
            },{
                name: 'Disciple',
                img: 'disc',
                atk_max: 6,
                atk_min: 2,
                def_max: 7,
                def_min: 5
            },{
                name: 'Disciple',
                img: 'disc_2',
                atk_max: 7,
                atk_min: 2,
                def_max: 5,
                def_min: 5
            },{
                name: 'Disciple',
                img: 'disc_3',
                atk_max: 5,
                atk_min: 2,
                def_max: 6,
                def_min: 5
            },{
                name: 'Disciple & Dragon',
                img: 'disc_drag',
                atk_max: 6,
                atk_min: 1,
                def_max: 6,
                def_min: 6,
                Tech: {
                    condition: {
                        type: 'front',
                        unit: 'Dragon',
                        by: 'vol'
                    },
                    type: 'atk',
                    result: 1
                }
            },{
                name: 'Disciple & Dragon',
                img: 'disc_drag_2',
                atk_max: 5,
                atk_min: 1,
                def_max: 7,
                def_min: 6
            },{
                name: 'Porte-Nefs & Archonte',
                img: 'port_arch',
                atk_max: 8,
                atk_min: 2,
                def_max: 9,
                def_min: 5,
                Tech: {
                    condition: {
                        type: 'répercutés',
                        unit: 'Archonte',
                        by: 'sol_vol'
                    }
                }
            },{
                name: 'Porte-Nefs & Archonte',
                img: 'port_arch_2',
                atk_max: 9,
                atk_min: 5,
                def_max: 8,
                def_min: 2,
                Tech: {
                    condition: {
                        type: 'répercutés',
                        unit: 'Archonte',
                        by: 'sol_vol'
                    }
                }
            },{
                name: 'Porte-Nefs & Destructeur',
                img: 'port_dest',
                atk_max: 7,
                atk_min: 3,
                def_max: 8,
                def_min: 4
            },{
                name: 'Porte-Nefs & Destructeur',
                img: 'port_dest_2',
                atk_max: 8,
                atk_min: 3,
                def_max: 8,
                def_min: 4
            },{
                name: 'Scout',
                img: 'scou',
                atk_max: 7,
                atk_min: 4,
                def_max: 8,
                def_min: 3
            },{
                name: 'Scout',
                img: 'scou_2',
                atk_max: 7,
                atk_min: 4,
                def_max: 8,
                def_min: 3,
                Tech: {
                    condition: {
                        by: 'vol'
                    },
                    type: 'atk',
                    result: 1
                }
            },{
                name: 'Scout & Dragon',
                img: 'scou_drag',
                atk_max: 7,
                atk_min: 3,
                def_max: 7,
                def_min: 4,
                Tech: {
                    condition: {
                        by: 'vol'
                    },
                    type: 'atk',
                    result: 1
                }
            },{
                name: 'Scout & Dragon',
                img: 'scou_drag_2',
                atk_max: 8,
                atk_min: 3,
                def_max: 7,
                def_min: 4
            },{
                name: 'Carte Renfort',
                img: 'r-all',
                Tech: {
                    condition: {
                        type: 'soutien'
                    },
                    type: 'def',
                    result: 1
                }
            },
        ],
        techno: [

        ],
    },
]

*/