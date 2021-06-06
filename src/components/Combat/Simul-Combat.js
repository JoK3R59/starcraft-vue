export const resultat = (select) => {
    var atk = select.atk
    var def = select.def
    console.log(atk, def)
    // RESULTAT
    const result = {
        atk: {
            damage: {
                type: '',
                atk: 0,
                def: 0
            },
            tech: {
                atk: 0,
                def: 0,
                type: ''
            },
            renfort: {
                atk: 0,
                def: 0
            },
            base: false,
            turret: false,
            soutien: 0,
            target: '',
            error: {
                figurineFrontCiblage: '',
                carteCombat: ''
                // a Terminer pour RESULTAT SIMULATION
            }
        },
        def: {
            damage:  {
                type: '',
                atk: 0,
                def: 0
            },
            tech: {
                atk: 0,
                def: 0,
                type: ''
            },
            renfort: {
                atk: 0,
                def: 0
            },
            base: false,
            turret: false,
            soutien: 0,
            target: '',
            error: {
                figurineFrontCiblage: '',
                carteCombat: ''
                // a Terminer pour RESULTAT SIMULATION
            }
        }
    }
    // Figurine
    var unitFrontAtk = atk.figurineFront
    var unitSoutienAtk = atk.figurineSoutien
    var unitFrontDef = def.figurineFront
    var unitSoutienDef = def.figurineSoutien

    // Carte Combat
    var cardCombatAtk = atk.cardCombat
    var cardCombatDef = def.cardCombat

    // Carte Renfort
    var cardRenfortAtk = atk.cardRenfort
    // var cardRenfortDef = def.cardRenfort

    ///////
    //
    // ATK
    //
    ///////

    // degats de l'ATK : MAX ou MIN
    var nameAtkFront = unitFrontAtk.name
    var combatNameFigurineAtk = cardCombatAtk.figurine
    var combatDegatsAtk = cardCombatAtk.degats
    for (let i=0; i < combatNameFigurineAtk.length; i++) {
        let nameFigurine = combatNameFigurineAtk[i].name
        if (nameFigurine === nameAtkFront) {
            result.atk.damage.type = 'max'
            result.atk.damage.atk = combatDegatsAtk.atk.max
            result.atk.damage.def = combatDegatsAtk.def.max
        } else if (result.atk.damage.type != 'max') {
            result.atk.damage.type = 'min'
            result.atk.damage.atk = combatDegatsAtk.atk.min
            result.atk.damage.def = combatDegatsAtk.def.min
        }
    }

    // ciblage de l'ATK vers DEF
    if (unitFrontAtk.atk === unitFrontDef.type || unitFrontAtk.atk === 'sol_air') {
        result.atk.target = unitFrontDef
    } else if (unitFrontAtk.atk === unitSoutienDef.type || unitFrontAtk.atk === 'sol_air') {
        result.atk.target = unitSoutienDef
    } else {
        result.atk.target = 'noTarget'
    }

    // Ajout degat Soutien a Front ATK 
    if (unitSoutienAtk != 'noTarget') {
        console.log("Vérification de degats possible pour soutien")

        if (unitSoutienAtk.atk === result.atk.target.type) {
            console.log('Soutien peut cibler, ajout degats soutien')
            result.atk.soutien = unitSoutienAtk.soutien_value

        } else {
            console.log('Soutien ne peut pas cibler malgré la cible de la figurine au FRONT, aucun degats ajouté')

        }
    } else {
        console.log("Soutien ne peut pas cibler - aucun degats n'est ajouté")

    }

    // prise en compte Tech ATK de la carte Combat/Technologie
    if (cardCombatAtk.Tech) {
        console.log('** Lecture Tech de cardCombat ATK **')
        let combatTech = cardCombatAtk.Tech
        let verifTechCondition = result.atk.damage.type

        if (combatTech.condition && verifTechCondition === 'max') {
            console.log('Lecture Condition de cardCombat')
            let techCondition = combatTech.condition

            if (techCondition.type) {
                console.log('Lecture Type de Condition')

                if (techCondition.type === 'front') {
                    console.log('Lecture FRONT de Type')

                    if (techCondition.unit && techCondition.unit === nameAtkFront) {
                        console.log('La Condition est respecté - BONUS en cours')
                        let techType = combatTech.type
                        
                        if (techCondition.by) {
                            console.log('Particularitée du CONTRE de la condition SOL ou AIR')
                            let targetATK = unitFrontDef
                            let conditionBy = techCondition.by

                            if (conditionBy === targetATK.type) {
                                console.log('BONUS CONTRE VALIDEE condition respecté')
                                result.atk.tech.atk = combatTech.result
                            } else {
                                console.log('BONUS CONTRE NON validée condition non respectée')
                            }
                        } else {
                            if (techType === 'atk') {
                                console.log('Ajout Atk de la condition')
                                result.atk.tech.atk = combatTech.result
    
                            } else if (techType === 'def') {
                                console.log('Ajout Def de la condition')
                                result.atk.tech.def = combatTech.result
    
                            } else if (techType === 'atk_def') {
                                console.log('Ajout Def et Atk de la condition')
                                result.atk.tech.atk = combatTech.result
                                result.atk.tech.def = combatTech.result
                            }
                        }
                    } else if (!techCondition.unit && techCondition.by) {
                        console.log('La Condition est respecté - BONUS pour AIR en cours')
                        let targetATK = unitFrontDef
                        let conditionBy = techCondition.by

                        if (conditionBy === targetATK.type) {
                            console.log('BONUS CONTRE VALIDEE condition respecté')
                            result.atk.tech.atk = combatTech.result
                            
                        } else {
                            console.log('BONUS CONTRE NON validée condition non respecté')
                        }
                    } else {
                        console.log("La Condition n'est pas respecté - aucun BONUS")
                    }
                } else if (techCondition.type === 'répercutés') {
                    console.log('vérification de la condition degat REPERCUTEE')
                    let typeOfTech = typeof techCondition.unit

                    if (typeOfTech ===  'object') {
                        console.log('réception VALIDE de degat REPERCUTEE avec cibles par Type')
                        result.atk.tech.type = techCondition

                    } else if (typeOfTech ===  'string' && techCondition.unit === unitFrontAtk.name) {
                        console.log('réception VALIDE de degat REPERCUTEE selon figurine par Type')
                        result.atk.tech.type = techCondition

                    } else if (techCondition.byCondition) {
                        console.log('réception VALIDE de degat REPERCUTEE avec|sans condition par Type')
                        result.atk.tech.type = techCondition

                    } else {
                        console.log("BONUS non validée la condition n'est pas respecté les Figurines ne correspondent pas")

                    }
                } else if (techCondition.type === 'suicide') {
                    console.log('réception VALIDE de degat SUICIDE par Type')
                    result.atk.tech.type = techCondition

                } else if (techCondition.type === 'destroy') {
                    console.log('réception VALIDE de degat DESTROY par Type')
                    result.atk.tech.type = techCondition
                    result.atk.tech.number = combatTech.result

                } else {
                    console.log("BONUS non validée la condition n'est pas respecté les Figurines ne correspondent pas")
                    
                }
            }
        } else if (combatTech.capacity) {
            console.log('Lecture Capacity de cardCombat et Ajout de type')
            result.atk.tech.type = combatTech.capacity.name
            let capacityFor = combatTech.capacity.for
            result.atk.tech.unit = []
            for (let i = 0; i < capacityFor.length; i++) {
                let forName = capacityFor[i].name;
                if (forName === nameAtkFront || forName === unitSoutienAtk.name) {
                    console.log('Ajout de la figurine valide dans Renfort Unit')
                    result.atk.tech.unit.push(forName)
                } else if (combatTech.length === i + 1 && result.atk.tech.unit.length === 0) {
                    console.log('Aucune figurine ne correspond a la Capacitée, BONUS non valide')
                }
                
            }
        } else {
            console.log('Les figurines ne correspondent pas a la carte Combat')

        }
    }

    // Prise en compte de la carte Renfort ATK 
    if (cardRenfortAtk != '') {
        console.log('** Lecture de la carte Renfort ATK **')
        let renfortTech = cardRenfortAtk.Tech

        if (renfortTech.condition && !renfortTech.capacity) {
            console.log('Vérification de la Condition Renfort sans capacité')
            let techCondition = renfortTech.condition

            if (techCondition.type === 'soutien') {
                console.log('vérification de la Condition Soutien')

                if (techCondition.unit) {
                    console.log('vérification des UNITES valide sur FRONT uniquement')
                    let conditionUnit = techCondition.unit

                    for (let i = 0; i < conditionUnit.length; i++) {
                        let unit = conditionUnit[i].name

                        if (unit === nameAtkFront) {
                            console.log ('BONUS valide - envoi dans Renfort')
                            result.atk.renfort.def = renfortTech.result

                        } else if (conditionUnit.length === i + 1 && result.atk.renfort.def === 0) {
                            console.log("BONUS non valide, la condition n'est pas respectée")
                        }
                        
                    }
                } else if (techCondition.by) {
                    console.log("vérification de la présence d'UNITE sur SOUTIEN uniquement")
                    
                    if (unitSoutienAtk != '') {
                        console.log("BONUS valide, envoi dans Renfort")
                        result.atk.renfort.atk = renfortTech.result

                    } else {
                        console.log("BONUS non valide, la condition n'est pas respectée")

                    }
                } else {
                    console.log('BONUS valide pour Protoss, sans condition')
                    result.atk.renfort.def = renfortTech.result

                }
            } else if (techCondition.type === 'base') {
                console.log('vérification de la Condition base')
                let base = atk.base
                let techType = renfortTech.type

                if (base && techType === 'def') {
                    console.log('BASE valide, vérification des conditions')
                    
                    if (techCondition.unit) {
                        console.log('Vérification des conditions UNITE')
                        let conditionUnit = techCondition.unit
                        for (let i = 0; i < conditionUnit.length; i++) {
                            let unitName = conditionUnit[i].name

                            if (unitName === nameAtkFront) {
                                console.log('BONUS Valide, envoi dans Renfort')
                                result.atk.renfort.def = renfortTech.result

                            } else if (conditionUnit.length === i + 1 && result.atk.renfort.def === 0) {
                                console.log('BONUS non valide, condition non respectée')

                            }
                        }
                    } else {
                        console.log('BONUS valide pour Protoss, envoi dans Renfort')
                        result.atk.renfort.def = renfortTech.result

                    }
                } else if (base && techType === 'atk') {
                    console.log('Vérification des conditions de Base')
                    let conditionBy = techCondition.by

                    if (conditionBy === unitFrontDef.type) {
                        console.log('BONUS valide, envoi dans Renfort')
                        result.atk.renfort.atk = renfortTech.result

                    } else {
                        console.log('BONUS non valide, condition non respectée')

                    }
                } else {
                    console.log('BONUS non valide pour Base, les conditions ne sont pas respectées')
                    
                }
            } else if (techCondition.type === 'répercutés') {
                console.log('Vérification de la Condition figurine de degats Répercutés')
                let figurineName = cardRenfortAtk.figurine

                if (figurineName === unitFrontAtk.name || figurineName === unitSoutienAtk.name) {
                    console.log('Nom de la figurine vérifiée, la correspondance est bonne, BONUS valide')
                    result.atk.renfort.type = techCondition

                    if (renfortTech.type) {
                        console.log("Ajout Supplémentaire de degats")
                        result.atk.renfort.atk = renfortTech.result

                    }
                } else {
                    console.log('BONUS non valide, la figurine ne correspond pas')
                }

            } else if (!techCondition) {
                console.log('BONUS valide, sans condition')
                result.atk.renfort.def = renfortTech.result
            } else if (techCondition.type === 'exception') {
                console.log("Vérification de la Condition figurine d'Exception")
                let figurineName = cardRenfortAtk.figurine

                if (figurineName === unitFrontAtk.name || figurineName === unitSoutienAtk.name) {
                    console.log('BONUS ajouté Exception dans Type Renfort')
                    result.atk.renfort.type = techCondition

                } else {
                    console.log('BONUS non valide, la figurine ne correspond pas')
                }
            }
        } else if (!renfortTech.condition && renfortTech.capacity) {
            console.log('Vérification de la Capacité sans condition')
            let capacityName = renfortTech.capacity.name

            if (capacityName === 'Camouflage') {
                console.log('Vérification de la capacitée Camouflage')
                let capacityUnit = renfortTech.capacity.unit
                result.atk.renfort.type = capacityName
                result.atk.renfort.unit = []
                for (let i = 0; i < capacityUnit.length; i++) {
                    let unitName = capacityUnit[i].name
                    if (unitName === nameAtkFront || unitName === unitSoutienAtk.name) {
                        console.log('Ajout du nom de la figurine pour la Capacitée Active')
                        result.atk.renfort.unit.push(unitName)
    
                    } else if (capacityUnit.length === i + 1 && result.atk.renfort.unit.length === 0) {
                        console.log('Aucune figurine ne correspond a la Capacitée, BONUS non valide')
    
                    }                
                }
            } else if (capacityName === 'Annulez') {
                console.log('Vérification de la capacitée Annulez')
                let techCapacity = renfortTech.capacity
                let figurineName = cardRenfortAtk.figurine

                if (figurineName === unitFrontAtk.name || figurineName === unitSoutienAtk.name) {
                    console.log('Vérification de la figurine pour BONUS')
                    
                    if (techCapacity.of === 'renfort') {
                        console.log('BONUS Annulez ajouté dans Renfort')
                        result.atk.renfort.type = {
                            name: techCapacity.name,
                            of: techCapacity.of
                        }
                        
                        if (techCapacity.for === result.atk.target.name) {
                            console.log('BONUS SUPPLEMENTAIRE pour figurine spécifique ARCHONTE')
                            result.atk.renfort.atk = renfortTech.result[0].number

                        } else if (def.race === 'protoss') {
                            console.log('BONUS SUPPLEMENTAIRE pour Race spécifique PROTOSS')
                            result.atk.renfort.atk = renfortTech.result[1].number

                        }
                    }
                } else {
                    console.log('la Figurine ne correspond pas, BONUS non valide')
                }


            } else if (capacityName === 'Verrou') {
                console.log('Vérification de la capacitée Verrou')
                let capacityUnit = renfortTech.capacity.unit

                if (cardRenfortAtk.figurine === 'Fantôme') {
                    console.log('BONUS en cours, la figurine correspond')
                    result.atk.renfort.unit = []
                    result.atk.renfort.type = capacityName
                    for (let i = 0; i < capacityUnit.length; i++) {
                        let unitName = capacityUnit[i].name
                        if (unitName === unitFrontDef.name || unitName === unitSoutienDef.name ) {
                            console.log('Ajout du nom de la figurine valide dans Renfort Unit')
                            result.atk.renfort.unit.push(unitName)

                        } else if (capacityUnit.length === i + 1 && result.atk.renfort.unit.length === 0) {
                            console.log('Aucune figurine ne correspond a la Capacitée, BONUS non valide')
                        }
                    }
                }
            } else if (capacityName === 'Détecteur') {
                console.log('Vérification de la figurine correspondante')

                if (cardRenfortAtk.figurine === 'Reine') {
                    console.log('BONUS valide, capacité ajouter dans Type RENFORT')
                    result.atk.renfort.type = renfortTech.capacity
                    result.atk.renfort.def = renfortTech.result
                } else {
                    console.log('BONUS non valide, la figurine ne correspond pas')
                }
            }
        }
    }

    ///////
    //
    // DEF
    //
    ///////

    // degats de DEF : MAX ou MIN
    var nameDefFront = unitFrontDef.name
    var combatNameFigurineDef = cardCombatDef.figurine
    var combatDegatsDef = cardCombatDef.degats
    for (let i=0; i < combatNameFigurineDef.length; i++) {
        let nameFigurine = combatNameFigurineDef[i].name
        if (nameFigurine === nameDefFront) {
            result.def.damage.type = 'max'
            result.def.damage.atk = combatDegatsDef.atk.max
            result.def.damage.def = combatDegatsDef.def.max
        } else if (result.def.damage.type != 'max') {
            result.def.damage.type = 'min'
            result.def.damage.atk = combatDegatsDef.atk.min
            result.def.damage.def = combatDegatsDef.def.min
        }
    }

    // ciblage de DEF vers ATK
    if (unitFrontDef.atk === unitFrontAtk.type || unitFrontDef.atk === 'sol_air') {
        result.def.target = unitFrontAtk
    } else if (unitFrontDef.atk === unitSoutienAtk.type || unitFrontDef.atk === 'sol_air') {
        result.def.target = unitSoutienAtk
    } else {
        result.def.target = 'noTarget'
    }

    // Ajout degat Soutien a Front DEF
    // A REVOIR CHANGEMENT DANS TARGET !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // EXEMPLE via SOUTIEN TARGET ATK
    if (unitSoutienDef != '') {
        if (result.def.target === 'front') {
            if (unitSoutienDef.atk === unitFrontAtk.type || unitSoutienDef.atk === 'sol_air') {
                result.def.soutien = unitSoutienDef.soutien_value
            } else {
                result.def.soutien = 0
            }
        } else if (result.def.target === 'soutien') {
            if (unitSoutienDef.atk === unitFrontAtk.type || unitSoutienDef.atk === 'sol_air') {
                result.def.soutien = unitSoutienDef.soutien_value
            } else {
                result.def.soutien = 0
            }
        } else {
            result.def.soutien = 0
        }
    } else {
        result.def.soutien = 0
    }

    // prise en compte Tech DEF de la carte Combat/Technologie
    if (cardCombatDef.Tech) {
        console.log('** Lecture Tech de cardCombat DEF **')
        let combatTech = cardCombatDef.Tech
        let verifTechCondition = result.def.damage.type

        if (combatTech.condition && verifTechCondition === 'max') {
            console.log('Lecture Condition de cardCombat')
            let techCondition = combatTech.condition

            if (techCondition.type) {
                console.log('Lecture Type de Condition')

                if (techCondition.type === 'front') {
                    console.log('Lecture FRONT de Type')

                    if (techCondition.unit && techCondition.unit === nameDefFront) {
                        console.log('La Condition est respecté - BONUS en cours')
                        let techType = combatTech.type
                        
                        if (techCondition.by) {
                            console.log('Particularitée du CONTRE de la condition SOL ou AIR')
                            let targetATK = unitFrontAtk
                            let conditionBy = techCondition.by

                            if (conditionBy === targetATK.type) {
                                console.log('BONUS CONTRE VALIDEE condition respecté')
                                result.def.tech.atk = combatTech.result
                            } else {
                                console.log('BONUS CONTRE NON validée condition non respecté')
                            }
                        } else {
                            if (techType === 'atk') {
                                console.log('Ajout Atk de la condition')
                                result.def.tech.atk = combatTech.result
    
                            } else if (techType === 'def') {
                                console.log('Ajout Def de la condition')
                                result.def.tech.def = combatTech.result
    
                            } else if (techType === 'atk_def') {
                                console.log('Ajout Def et Atk de la condition')
                                result.def.tech.atk = combatTech.result
                                result.def.tech.def = combatTech.result
                            }
                        }
                    } else if (!techCondition.unit && techCondition.by) {
                        console.log('La Condition est respecté - BONUS pour AIR en cours')
                        let targetATK = unitFrontAtk
                        let conditionBy = techCondition.by

                        if (conditionBy === targetATK.type) {
                            console.log('BONUS CONTRE VALIDEE condition respecté')
                            result.def.tech.atk = combatTech.result
                            
                        } else {
                            console.log('BONUS CONTRE NON validée condition non respecté')
                        }
                    } else {
                        console.log("La Condition n'est pas respecté - aucun BONUS")
                    }
                } else if (techCondition.type === 'répercutés') {
                    console.log('vérification de la condition degat REPERCUTEE')
                    let typeOfTech = typeof techCondition.unit

                    if (typeOfTech ===  'object') {
                        console.log('réception VALIDE de degat REPERCUTEE avec cibles par Type')
                        result.def.tech.type = techCondition

                    } else if (typeOfTech ===  'string' && techCondition.unit === unitFrontDef.name) {
                        console.log('réception VALIDE de degat REPERCUTEE selon figurine par Type')
                        result.def.tech.type = techCondition

                    } else if (techCondition.byCondition) {
                        console.log('réception VALIDE de degat REPERCUTEE avec|sans condition par Type')
                        result.def.tech.type = techCondition

                    } else {
                        console.log("BONUS non validée la condition n'est pas respecté les Figurines ne correspondent pas")

                    }
                } else if (techCondition.type === 'suicide') {
                    console.log('réception VALIDE de degat SUICIDE par Type')
                    result.def.tech.type = techCondition

                } else if (techCondition.type === 'destroy') {
                    console.log('réception VALIDE de degat DESTROY par Type')
                    result.def.tech.type = techCondition
                    result.def.tech.number = combatTech.result

                } else {
                    console.log("BONUS non validée la condition n'est pas respecté les Figurines ne correspondent pas")
                    
                }
            }
        } else if (combatTech.capacity) {
            console.log('Lecture Capacity de cardCombat et Ajout de type')
            result.def.tech.type = combatTech.capacity

        } else {
            console.log('Les figurines ne correspondent pas a la carte Combat')
        }
    }

    // Prise en compte de la carte Renfort DEF

    console.log('*** RESULTAT ***')
    console.log(result)
};