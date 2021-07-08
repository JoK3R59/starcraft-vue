export const resultat = (select) => {
    let atk = select.atk
    let def = select.def

    console.log('-------------_ DEBUT SIMULATION _-------------')
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
                def: 0,
                type: ''
            },
            zoneJeu: {
                def: 0,
                type: ''
            },
            turret: {
                atk: 0,
                capacity: ''
            },
            soutien: 0,
            target: ''
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
                def: 0,
                type: ''
            },
            zoneJeu: {
                def: 0,
                type: ''
            },
            turret: {
                atk: 0,
                capacity: ''
            },
            soutien: 0,
            target: ''
        }
    }

    // LOG RESULTAT
    const logResult = {
        atk: {
            damage: {
                info: '',
                statutAdv: 'alive'
            },
            soutien: '',
            target: '',
            tech: '',
            renfort: '',
            zoneJeu: ''
        },
        def: {
            damage: {
                info: '',
                statutAdv: 'alive'
            },
            soutien: '',
            target: '',
            tech: '',
            renfort: '',
            zoneJeu: ''
        }
    }

    // Figurine
    let unitFrontAtk = atk.figurineFront
    let unitSoutienAtk = atk.figurineSoutien
    let unitFrontDef = def.figurineFront
    let unitSoutienDef = def.figurineSoutien

    // Carte Combat
    let cardCombatAtk = atk.cardCombat
    let cardCombatDef = def.cardCombat

    // Carte Renfort
    let cardRenfortAtk = atk.cardRenfort
    let cardRenfortDef = def.cardRenfort

    // Zone de Jeu
    let zoneJeuAtk = atk.cardZone
    let zoneJeuDef = def.cardZone

    
    // Vérification et modification du Soutien != undefined ATK
    if (unitSoutienAtk.length != 0) {
        let newUnitSoutien = []

        for (let i = 0; i < unitSoutienAtk.length; i++) {

            if (unitSoutienAtk[i] != undefined) {
                
                newUnitSoutien.push(unitSoutienAtk[i])
            }
            
        }
        unitSoutienAtk = newUnitSoutien
    }

    // Vérification et modification du Soutien != undefined DEF
    if (unitSoutienDef.length != 0) {
        let newUnitSoutien = []

        for (let i = 0; i < unitSoutienDef.length; i++) {

            if (unitSoutienDef[i] != undefined) {
                newUnitSoutien.push(unitSoutienDef[i])

            }
        }
        unitSoutienDef = newUnitSoutien
    }

    ///////
    //
    // ATK
    //
    ///////
    console.log('-------------_ ATTAQUANT _-------------')

    // degats de l'ATK : MAX ou MIN
    let nameAtkFront = unitFrontAtk.name
    let combatNameFigurineAtk = cardCombatAtk.figurine
    let combatDegatsAtk = cardCombatAtk.degats

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
        logResult.atk.target = "L'unité " + nameAtkFront + " peut cibler " + unitFrontDef.name + " au front."

    } else if (unitSoutienDef.length === 1) {

        if (unitFrontAtk.atk === unitSoutienDef[0].type || unitFrontAtk.atk === 'sol_air') {
            result.atk.target = unitSoutienDef[0]
            logResult.atk.target = "L'unité " + nameAtkFront + " ne peut pas cibler " + unitFrontDef.name + " au front, mais il peut cibler " + unitSoutienDef[0].name + " en soutien."
    
        } else {
            result.atk.target = 'noTarget'
            logResult.atk.target = "L'unité " + nameAtkFront + " ne peut pas cibler " + unitFrontDef.name + " au front, ni cibler " + unitSoutienDef[0].name + " en soutien."
        }
    } else if (unitSoutienDef.length > 1) {
        let multiTarget = []
        logResult.atk.target = {
            hit: '',
            lost: ''
        }
        let targetHit = []
        let targetLost = []

        for (let i = 0; i < unitSoutienDef.length; i++) {
            let selectSoutien = unitSoutienDef[i];

            if (unitFrontAtk.atk === selectSoutien.type || unitFrontAtk.atk === 'sol_air') {
                multiTarget[i] = selectSoutien
                targetHit.push(selectSoutien.name + ', ')
        
            } else {
                multiTarget[i] = 'noTarget'
                targetLost.push(selectSoutien.name + ', ')

            }
        }
        if (targetHit.length > 0) {
            let stringHit = "L'unité " + nameAtkFront + " ne peut pas cibler " + unitFrontDef.name + " au front, mais il peut cibler "
            stringHit = stringHit.concat(...targetHit)
            logResult.atk.target.hit = stringHit + "en soutien."

        }
        if (targetLost.length > 0) {
            let stringLost = "L'unité " + nameAtkFront + " ne peut pas cibler " + unitFrontDef.name + " au front, ni cibler "
            stringLost = stringLost.concat(...targetLost)
            logResult.atk.target.lost = stringLost + "en soutien."

        }
        if (multiTarget.length > 0) {
            let target = ''

            for (let i = 0; i < multiTarget.length; i++) {
                if (multiTarget[i] != 'noTarget' && target === '') {
                    target = multiTarget[i]
                
                }                
            }
            result.atk.target = target
        }
    } else {
        result.atk.target = 'noTarget'
        logResult.atk.target = "L'unité " + nameAtkFront + " ne peut pas cibler " + unitFrontDef.name + " au front."

    }

    // Ajout degat Soutien a Front ATK 
    if (unitSoutienAtk.length != 0) {

        if (result.atk.target != 'noTarget') {
            console.log("Vérification de degats possible pour soutien")
    
            if (unitSoutienAtk.length === 1) {

                if (unitSoutienAtk[0].atk === result.atk.target.type || unitSoutienAtk[0].atk === 'sol_air') {
                    // console.log('Soutien peut cibler, ajout degats soutien')
                    result.atk.soutien = unitSoutienAtk[0].soutien_value
                    logResult.atk.soutien = "L'unité " + unitSoutienAtk[0].name + " en soutien peut attaquer la cible, sa valeur d'attaque est ajouté."
        
                } else {
                    // console.log('Soutien ne peut pas cibler malgré la cible de la figurine au FRONT, aucun degats ajouté')
                    logResult.atk.soutien = "L'unité " + unitSoutienAtk[0].name + " en soutien ne peut pas attaquer la cible."
        
                }
            } else if (unitSoutienAtk.length > 1) {
                logResult.atk.soutien = {
                    hit: '',
                    miss: ''
                }
                let unitHit = []
                let unitMiss = []

                for (let i = 0; i < unitSoutienAtk.length; i++) {

                    let selectSoutien = unitSoutienAtk[i];
                    if (selectSoutien.atk === result.atk.target.type || selectSoutien.atk === 'sol_air') {
                        // console.log('Soutien peut cibler, ajout degats soutien')
                        result.atk.soutien = result.atk.soutien + selectSoutien.soutien_value
                        unitHit.push(selectSoutien.name + ', ')
            
                    } else {
                        // console.log('Soutien ne peut pas cibler malgré la cible de la figurine au FRONT, aucun degats ajouté')
                        unitMiss.push(selectSoutien.name + ', ')
            
                    }
                }
                if (unitHit.length != 0) {
                    let stringHit = "L'unité "
                    stringHit = stringHit.concat(...unitHit)
                    logResult.atk.soutien.hit = stringHit + "en soutien peut attaquer la cible, sa valeur d'attaque est ajouté."

                }
                if (unitMiss.length != 0) {
                    let stringMiss = "L'unité "
                    stringMiss = stringMiss.concat(...unitMiss)
                    logResult.atk.soutien.miss = stringMiss + "en soutien ne peut pas attaquer la cible."

                }
            }
        } else {
            // console.log("Soutien ne peut pas cibler - aucun degats n'est ajouté")
            logResult.atk.soutien = "Aucune cible disponible."
    
        }
    }

    // prise en compte Tech de la carte Combat/Technologie ATK
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
            console.log('Vérification de la Condition sans Capacité')
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
            } else if (techCondition.type === 'destroy') {
                console.log('Vérification de la Condition Destroy')
                let figurineName = cardRenfortAtk.figurine

                if (figurineName === unitFrontAtk.name || figurineName === unitSoutienAtk.name) {
                    console.log('BONUS valide, vérification des conditions')
                    let conditionUnit = techCondition.unit
                    result.atk.renfort.type = {
                        type: techCondition.type
                    }
                    result.atk.renfort.type.unit = []
                    for (let i = 0; i < conditionUnit.length; i++) {
                        let unitName = conditionUnit[i].name;

                        if (unitName === unitFrontDef.name || unitName === unitSoutienDef.name) {
                            console.log('Unité valide, envoi dans Type Renfort')
                            result.atk.renfort.type.unit.push(unitName)

                        } else if (unitName === 'Zerg' && def.race === 'zerg') {
                            console.log('BONUS valide pour ZERG, figurine SOL uniquement')
                            result.atk.renfort.type.unit.push(unitName)
                            result.atk.renfort.type.by = 'sol'

                        } else if (conditionUnit.length === i + 1 && result.atk.renfort.type.unit.length === 0) {
                            console.log('BONUS non valide, aucune unitées ne correspond a la condition')

                        }
                    }
                } else {
                    console.log('La Figurine ne correspond pas, BONUS non valide')
                }

            }
        } else if (!renfortTech.condition && renfortTech.capacity) {
            console.log('Vérification de la Capacité sans Condition')
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
                    } else if (techCapacity.of === 'combat') {
                        console.log('BONUS Annulez ajouté dans Renfort')
                        result.atk.renfort.type = {
                            name: techCapacity.name,
                            of: techCapacity.of
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
                let figurineName = cardRenfortAtk.figurine

                if (figurineName === 'Reine' && figurineName === unitFrontAtk.name || figurineName === 'Reine' && figurineName === unitSoutienAtk.name) {
                    console.log('BONUS valide, capacité ajouter dans Type RENFORT')
                    result.atk.renfort.type = renfortTech.capacity
                    result.atk.renfort.def = renfortTech.result
                } else {
                    console.log('BONUS non valide, la figurine ne correspond pas')
                }
            } else if (capacityName === 'Stase') {
                console.log('Vérification de la figurine correspondante')
                let figurineName = cardRenfortAtk.figurine

                if (figurineName === unitFrontAtk.name ||figurineName === unitSoutienAtk.name) {
                    console.log('Figurine valide, BONUS ajouté dans type Renfort')
                    result.atk.renfort.type = renfortTech.capacity

                } else {
                    console.log('BONUS non valide, la figurine ne correspond pas')

                }
            }
        } else if (renfortTech.condition && renfortTech.capacity) {
            console.log('Vérification de la Capacité avec sa Condition')
            let figurineName = cardRenfortAtk.figurine

            if (figurineName === unitFrontAtk.name ||figurineName === unitSoutienAtk.name) {
                console.log('Vérification figurine valide, Condition en cours')
                let conditionName = cardRenfortAtk.Tech.condition.name

                if (conditionName === 'Peste') {
                    console.log('Peste envoyé dans Type Renfort')
                    let techCondition = cardRenfortAtk.Tech.condition
                    let techCapacity = cardRenfortAtk.Tech.capacity
                    result.atk.renfort.type = {
                        name: techCondition.name,
                        type: techCondition.type,
                        by: techCondition.by,
                        capacity : techCapacity.name
                    }

                } else if (conditionName === 'Tempête') {
                    console.log('Tempête envoyé dans Type Renfort')
                    let techCondition = cardRenfortAtk.Tech.condition
                    let techCapacity = cardRenfortAtk.Tech.capacity
                    result.atk.renfort.type = {
                        name: techCondition.name,
                        type: techCondition.type,
                        by: techCondition.by,
                        capacity : techCapacity.name
                    }
                    result.atk.renfort.atk = cardRenfortAtk.Tech.result
                }
            } else {
                console.log('BONUS non valide, la figurine ne correspond pas')
            }
        } else if (!renfortTech.condition && !renfortTech.capacity) {
            console.log('Vérification du BONUS sans Condition, ni Capacité')
            let figurineName = cardRenfortAtk.figurine

            if (figurineName === nameAtkFront || figurineName === unitSoutienAtk.name) {
                console.log('BONUS valide, ajout de degat dans Renfort')
                result.atk.renfort.atk = cardRenfortAtk.Tech.result

            } else {
                console.log('BONUS non valide, la figurine ne correspond pas')

            }
        }
    }

    // Prise en compte de la carte Zone de Jeu ATK
    if (zoneJeuAtk != '') {
        console.log('** Lecture de la carte Zone de Jeu ATK **')
        let zoneTech = zoneJeuAtk.Tech
        
        if (zoneTech.capacity && !zoneTech.condition) {
            console.log('Vérification de la Capacité sans Condition')
            let techCapacity = zoneJeuAtk.Tech.capacity

            if (techCapacity.name === 'Détecteur') {
                console.log('Détecteur ajouté dans ZoneJeu')
                result.atk.zoneJeu.type = techCapacity

            } else {
                console.log('Probleme dans la Capacité sans condition de Lecture de la carte Zone de Jeu')
            }

        } else if (!zoneTech.capacity && zoneTech.condition) {
            console.log('Vérification de la Condition sans Capacité')
            let techCondition = zoneJeuAtk.Tech.condition

            if (techCondition.type === 'renfort') {
                console.log('Vérification de la figurine correspondante en Soutien')
                let conditionUnit = techCondition.unit

                if (conditionUnit === unitSoutienAtk.name) {
                    console.log('BONUS valide, ajout de Condition dans Type ZoneJeu')
                    result.atk.zoneJeu.type = techCondition
                    result.atk.zoneJeu.def = zoneJeuAtk.Tech.result

                } else {
                    console.log('BONUS non valide, la figurine ne correspond pas en Soutien')
                }
            } else if (techCondition.type === 'front') {
                console.log('Vérification de la figurine correspondante en Front')
                let conditionUnit = techCondition.unit

                if (conditionUnit === unitFrontAtk.name) {
                    console.log('BONUS valide, ajout de Condition dans Type ZoneJeu')
                    result.atk.zoneJeu.type = techCondition
                    result.atk.zoneJeu.def = zoneJeuAtk.Tech.result

                } else {
                    console.log('BONUS non valide, la figurine ne correspond pas au Front')
                }

            } else {
                console.log('Probleme dans la Condition sans Capacité de Lecture de la carte Zone de Jeu')
            }

        } else if (zoneTech.capacity && zoneTech.condition) {
            console.log('Vérification de la Condition et de sa Capacité')
            let techCondition = zoneJeuAtk.Tech.condition

            if (techCondition.unit === unitSoutienAtk.name) {
                console.log('BONUS valide, ajout dans Type ZoneJeu')
                result.atk.zoneJeu.type = zoneJeuAtk.Tech.capacity

            } else {
                console.log('Probleme de lecture de la capacité avec condition')
            }
        } else {
            console.log('NE repond a aucune condition')
        }
    } 

    // Prise en compte de la Tourelle dans Base ATK
    if (atk.base) {
        console.log('** Base active dans la Bataille, vérification de la présence de Tourelle **')

        if (atk.turret) {
            console.log('Tourelle active, BONUS en cours')
            result.atk.turret.capacity = 'Détecteur'

            if (unitFrontDef.type === 'air') {
                console.log('BONUS valide, ajout dans Turret')
                result.atk.turret.atk = 1

            } else {
                console.log("BONUS ATK non valide, la condition n'est pas respectée")

            }
        } else {
            console.log('Tourelle non active, Aucun BONUS')

        }
    }

    ///////
    //
    // DEF
    //
    ///////
    console.log('-------------_ DEFENSEUR _-------------')

    // degats de DEF : MAX ou MIN
    let nameDefFront = unitFrontDef.name
    let combatNameFigurineDef = cardCombatDef.figurine
    let combatDegatsDef = cardCombatDef.degats

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
        logResult.def.target = "L'unité " + nameDefFront + " peut cibler " + nameAtkFront + " au front."

    } else if (unitSoutienAtk.length === 1) {

        if (unitFrontDef.atk === unitSoutienAtk[0].type || unitFrontDef.atk === 'sol_air') {
            result.def.target = unitSoutienAtk[0]
            logResult.def.target = "L'unité " + nameDefFront + " ne peut pas cibler " + nameAtkFront + " au front, mais il peut cibler " + unitSoutienAtk[0].name + " en soutien."
    
        } else {
            result.def.target = 'noTarget'
            logResult.def.target = "L'unité " + nameDefFront + " ne peut pas cibler " + nameAtkFront + " au front, ni cibler " + unitSoutienAtk[0].name + " en soutien."

        }
    } else if (unitSoutienAtk.length > 1) {
        let multiTarget = []
        logResult.def.target = {
            hit: '',
            lost: ''
        }
        let targetHit = []
        let targetLost = []

        for (let i = 0; i < unitSoutienAtk.length; i++) {
            let selectSoutien = unitSoutienAtk[i];

            if (unitFrontDef.atk === selectSoutien.type || unitFrontDef.atk === 'sol_air') {
                multiTarget[i] = selectSoutien
                targetHit.push(selectSoutien.name + ', ')
        
            } else {
                multiTarget[i] = 'noTarget'
                targetLost.push(selectSoutien.name + ', ')

            }
        }
        if (targetHit.length > 0) {
            let stringHit = "L'unité " + nameDefFront + " ne peut pas cibler " + unitFrontAtk.name + " au front, mais il peut cibler "
            stringHit = stringHit.concat(...targetHit)
            logResult.def.target.hit = stringHit + "en soutien."

        }
        if (targetLost.length > 0) {
            let stringLost = "L'unité " + nameDefFront + " ne peut pas cibler " + unitFrontAtk.name + " au front, ni cibler "
            stringLost = stringLost.concat(...targetLost)
            logResult.def.target.lost = stringLost + "en soutien."

        }
        if (multiTarget.length > 0) {
            let target = ''

            for (let i = 0; i < multiTarget.length; i++) {
                if (multiTarget[i] != 'noTarget' && target === '') {
                    target = multiTarget[i]
                
                }                
            }
            result.def.target = target
        }
    } else {
        result.def.target = 'noTarget'
        logResult.def.target = "L'unité " + nameDefFront + " ne peut pas cibler " + nameAtkFront + " au front."

    }

    // Ajout degat Soutien a Front DEF
    if (unitSoutienDef.length != 0) {
        
        if (result.def.target != 'noTarget') {
            console.log("Vérification de degats possible pour soutien")
    
            if (unitSoutienAtk.length === 1) {

                if (unitSoutienDef[0].atk === result.def.target.type || unitSoutienDef[0].atk === 'sol_air') {
                    // console.log('Soutien peut cibler, ajout degats soutien')
                    result.def.soutien = unitSoutienDef[0].soutien_value
                    logResult.def.soutien = "L'unité " + unitSoutienDef[0].name + " en soutien peut attaquer la cible, sa valeur d'attaque est ajouté."
        
                } else {
                    // console.log('Soutien ne peut pas cibler malgré la cible de la figurine au FRONT, aucun degats ajouté')
                    logResult.atk.soutien = "L'unité " + unitSoutienDef[0].name + " en soutien ne peut pas attaquer la cible."
        
                }
            } else if (unitSoutienAtk.length > 1) {

                logResult.def.soutien = {
                    hit: '',
                    miss: ''
                }
                let unitHit = []
                let unitMiss = []

                for (let i = 0; i < unitSoutienDef.length; i++) {

                    let selectSoutien = unitSoutienDef[i];
                    if (selectSoutien.atk === result.def.target.type || selectSoutien.atk === 'sol_air') {
                        result.def.soutien = result.def.soutien + selectSoutien.soutien_value
                        unitHit.push(selectSoutien.name + ', ')
            
                    } else {
                        unitMiss.push(selectSoutien.name + ', ')
            
                    }
                }
                if (unitHit.length != 0) {
                    let stringHit = "L'unité "
                    stringHit = stringHit.concat(...unitHit)
                    logResult.def.soutien.hit = stringHit + "en soutien peut attaquer la cible, sa valeur d'attaque est ajouté."

                }
                if (unitMiss.length != 0) {
                    let stringMiss = "L'unité "
                    stringMiss = stringMiss.concat(...unitMiss)
                    logResult.def.soutien.miss = stringMiss + "en soutien ne peut pas attaquer la cible."

                }
            }
        } else {
            // console.log("Soutien ne peut pas cibler - aucun degats n'est ajouté")
            logResult.atk.soutien = "Aucune cible disponible."

        }
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
            result.def.tech.type = combatTech.capacity.name
            let capacityFor = combatTech.capacity.for
            result.def.tech.unit = []
            for (let i = 0; i < capacityFor.length; i++) {
                let forName = capacityFor[i].name;
                if (forName === nameDefFront || forName === unitSoutienDef.name) {
                    console.log('Ajout de la figurine valide dans Renfort Unit')
                    result.def.tech.unit.push(forName)
                } else if (combatTech.length === i + 1 && result.def.tech.unit.length === 0) {
                    console.log('Aucune figurine ne correspond a la Capacitée, BONUS non valide')
                }
                
            }
        } else {
            console.log('Les figurines ne correspondent pas a la carte Combat')
        }
    }

    // Prise en compte de la carte Renfort DEF
    if (cardRenfortDef != '') {
        console.log('** Lecture de la carte Renfort DEF **')
        let renfortTech = cardRenfortDef.Tech

        if (renfortTech.condition && !renfortTech.capacity) {
            console.log('Vérification de la Condition sans Capacité')
            let techCondition = renfortTech.condition

            if (techCondition.type === 'soutien') {
                console.log('vérification de la Condition Soutien')

                if (techCondition.unit) {
                    console.log('vérification des UNITES valide sur FRONT uniquement')
                    let conditionUnit = techCondition.unit

                    for (let i = 0; i < conditionUnit.length; i++) {
                        let unit = conditionUnit[i].name

                        if (unit === nameDefFront) {
                            console.log ('BONUS valide - envoi dans Renfort')
                            result.def.renfort.def = renfortTech.result

                        } else if (conditionUnit.length === i + 1 && result.def.renfort.def === 0) {
                            console.log("BONUS non valide, la condition n'est pas respectée")
                        }
                        
                    }
                } else if (techCondition.by) {
                    console.log("vérification de la présence d'UNITE sur SOUTIEN uniquement")
                    
                    if (unitSoutienDef != '') {
                        console.log("BONUS valide, envoi dans Renfort")
                        result.def.renfort.atk = renfortTech.result

                    } else {
                        console.log("BONUS non valide, la condition n'est pas respectée")

                    }
                } else {
                    console.log('BONUS valide pour Protoss, sans condition')
                    result.def.renfort.def = renfortTech.result

                }
            } else if (techCondition.type === 'base') {
                console.log('vérification de la Condition base')
                let base = def.base
                let techType = renfortTech.type

                if (base && techType === 'def') {
                    console.log('BASE valide, vérification des conditions')
                    
                    if (techCondition.unit) {
                        console.log('Vérification des conditions UNITE')
                        let conditionUnit = techCondition.unit
                        for (let i = 0; i < conditionUnit.length; i++) {
                            let unitName = conditionUnit[i].name

                            if (unitName === nameDefFront) {
                                console.log('BONUS Valide, envoi dans Renfort')
                                result.def.renfort.def = renfortTech.result

                            } else if (conditionUnit.length === i + 1 && result.def.renfort.def === 0) {
                                console.log('BONUS non valide, condition non respectée')

                            }
                        }
                    } else {
                        console.log('BONUS valide pour Protoss, envoi dans Renfort')
                        result.def.renfort.def = renfortTech.result

                    }
                } else if (base && techType === 'atk') {
                    console.log('Vérification des conditions de Base')
                    let conditionBy = techCondition.by

                    if (conditionBy === unitFrontAtk.type) {
                        console.log('BONUS valide, envoi dans Renfort')
                        result.def.renfort.atk = renfortTech.result

                    } else {
                        console.log('BONUS non valide, condition non respectée')

                    }
                } else {
                    console.log('BONUS non valide pour Base, les conditions ne sont pas respectées')
                    
                }
            } else if (techCondition.type === 'répercutés') {
                console.log('Vérification de la Condition figurine de degats Répercutés')
                let figurineName = cardRenfortDef.figurine

                if (figurineName === unitFrontDef.name || figurineName === unitSoutienDef.name) {
                    console.log('Nom de la figurine vérifiée, la correspondance est bonne, BONUS valide')
                    result.def.renfort.type = techCondition

                    if (renfortTech.type) {
                        console.log("Ajout Supplémentaire de degats")
                        result.def.renfort.atk = renfortTech.result

                    }
                } else {
                    console.log('BONUS non valide, la figurine ne correspond pas')
                }

            } else if (!techCondition) {
                console.log('BONUS valide, sans condition')
                result.def.renfort.def = renfortTech.result
            } else if (techCondition.type === 'exception') {
                console.log("Vérification de la Condition figurine d'Exception")
                let figurineName = cardRenfortDef.figurine

                if (figurineName === unitFrontDef.name || figurineName === unitSoutienDef.name) {
                    console.log('BONUS ajouté Exception dans Type Renfort')
                    result.def.renfort.type = techCondition

                } else {
                    console.log('BONUS non valide, la figurine ne correspond pas')
                }
            } else if (techCondition.type === 'destroy') {
                console.log('Vérification de la Condition Destroy')
                let figurineName = cardRenfortDef.figurine

                if (figurineName === unitFrontDef.name || figurineName === unitSoutienDef.name) {
                    console.log('BONUS valide, vérification des conditions')
                    let conditionUnit = techCondition.unit
                    result.def.renfort.type = {
                        type: techCondition.type
                    }
                    result.def.renfort.type.unit = []
                    for (let i = 0; i < conditionUnit.length; i++) {
                        let unitName = conditionUnit[i].name;

                        if (unitName === unitFrontAtk.name || unitName === unitSoutienAtk.name) {
                            console.log('Unité valide, envoi dans Type Renfort')
                            result.def.renfort.type.unit.push(unitName)

                        } else if (unitName === 'Zerg' && atk.race === 'zerg') {
                            console.log('BONUS valide pour ZERG, figurine SOL uniquement')
                            result.def.renfort.type.unit.push(unitName)
                            result.def.renfort.type.by = 'sol'

                        } else if (conditionUnit.length === i + 1 && result.def.renfort.type.unit.length === 0) {
                            console.log('BONUS non valide, aucune unitées ne correspond a la condition')

                        }
                    }
                } else {
                    console.log('La Figurine ne correspond pas, BONUS non valide')
                }

            }
        } else if (!renfortTech.condition && renfortTech.capacity) {
            console.log('Vérification de la Capacité sans Condition')
            let capacityName = renfortTech.capacity.name

            if (capacityName === 'Camouflage') {
                console.log('Vérification de la capacitée Camouflage')
                let capacityUnit = renfortTech.capacity.unit
                result.def.renfort.type = capacityName
                result.def.renfort.unit = []
                for (let i = 0; i < capacityUnit.length; i++) {
                    let unitName = capacityUnit[i].name
                    if (unitName === nameDefFront || unitName === unitSoutienDef.name) {
                        console.log('Ajout du nom de la figurine pour la Capacitée Active')
                        result.def.renfort.unit.push(unitName)
    
                    } else if (capacityUnit.length === i + 1 && result.def.renfort.unit.length === 0) {
                        console.log('Aucune figurine ne correspond a la Capacitée, BONUS non valide')
    
                    }                
                }
            } else if (capacityName === 'Annulez') {
                console.log('Vérification de la capacitée Annulez')
                let techCapacity = renfortTech.capacity
                let figurineName = cardRenfortDef.figurine

                if (figurineName === unitFrontDef.name || figurineName === unitSoutienDef.name) {
                    console.log('Vérification de la figurine pour BONUS')
                    
                    if (techCapacity.of === 'renfort') {
                        console.log('BONUS Annulez ajouté dans Renfort')
                        result.def.renfort.type = {
                            name: techCapacity.name,
                            of: techCapacity.of
                        }
                        
                        if (techCapacity.for === result.def.target.name) {
                            console.log('BONUS SUPPLEMENTAIRE pour figurine spécifique ARCHONTE')
                            result.def.renfort.atk = renfortTech.result[0].number

                        } else if (atk.race === 'protoss') {
                            console.log('BONUS SUPPLEMENTAIRE pour Race spécifique PROTOSS')
                            result.def.renfort.atk = renfortTech.result[1].number

                        }
                    } else if (techCapacity.of === 'combat') {
                        console.log('BONUS Annulez ajouté dans Renfort')
                        result.def.renfort.type = {
                            name: techCapacity.name,
                            of: techCapacity.of
                        }

                    }
                } else {
                    console.log('la Figurine ne correspond pas, BONUS non valide')
                }
            } else if (capacityName === 'Verrou') {
                console.log('Vérification de la capacitée Verrou')
                let capacityUnit = renfortTech.capacity.unit

                if (cardRenfortDef.figurine === 'Fantôme') {
                    console.log('BONUS en cours, la figurine correspond')
                    result.def.renfort.unit = []
                    result.def.renfort.type = capacityName
                    for (let i = 0; i < capacityUnit.length; i++) {
                        let unitName = capacityUnit[i].name
                        if (unitName === unitFrontAtk.name || unitName === unitSoutienAtk.name ) {
                            console.log('Ajout du nom de la figurine valide dans Renfort Unit')
                            result.def.renfort.unit.push(unitName)

                        } else if (capacityUnit.length === i + 1 && result.def.renfort.unit.length === 0) {
                            console.log('Aucune figurine ne correspond a la Capacitée, BONUS non valide')
                        }
                    }
                }
            } else if (capacityName === 'Détecteur') {
                console.log('Vérification de la figurine correspondante')
                let figurineName = cardRenfortDef.figurine

                if (figurineName === 'Reine' && figurineName === unitFrontDef.name || figurineName === 'Reine' && figurineName === unitSoutienDef.name) {
                    console.log('BONUS valide, capacité ajouter dans Type RENFORT')
                    result.def.renfort.type = renfortTech.capacity
                    result.def.renfort.def = renfortTech.result
                } else {
                    console.log('BONUS non valide, la figurine ne correspond pas')
                }
            } else if (capacityName === 'Stase') {
                console.log('Vérification de la figurine correspondante')
                let figurineName = cardRenfortDef.figurine

                if (figurineName === unitFrontDef.name ||figurineName === unitSoutienDef.name) {
                    console.log('Figurine valide, BONUS ajouté dans type Renfort')
                    result.def.renfort.type = renfortTech.capacity

                } else {
                    console.log('BONUS non valide, la figurine ne correspond pas')

                }
            }
        } else if (renfortTech.condition && renfortTech.capacity) {
            console.log('Vérification de la Capacité avec sa Condition')
            let figurineName = cardRenfortDef.figurine

            if (figurineName === unitFrontDef.name ||figurineName === unitSoutienDef.name) {
                console.log('Vérification figurine valide, Condition en cours')
                let conditionName = cardRenfortDef.Tech.condition.name

                if (conditionName === 'Peste') {
                    console.log('Peste envoyé dans Type Renfort')
                    let techCondition = cardRenfortDef.Tech.condition
                    let techCapacity = cardRenfortDef.Tech.capacity
                    result.def.renfort.type = {
                        name: techCondition.name,
                        type: techCondition.type,
                        by: techCondition.by,
                        capacity : techCapacity.name
                    }

                } else if (conditionName === 'Tempête') {
                    console.log('Tempête envoyé dans Type Renfort')
                    let techCondition = cardRenfortDef.Tech.condition
                    let techCapacity = cardRenfortDef.Tech.capacity
                    result.def.renfort.type = {
                        name: techCondition.name,
                        type: techCondition.type,
                        by: techCondition.by,
                        capacity : techCapacity.name
                    }
                    result.def.renfort.atk = cardRenfortDef.Tech.result
                }
            } else {
                console.log('BONUS non valide, la figurine ne correspond pas')
            }
        } else if (!renfortTech.condition && !renfortTech.capacity) {
            console.log('Vérification du BONUS sans Condition, ni Capacité')
            let figurineName = cardRenfortDef.figurine

            if (figurineName === nameDefFront || figurineName === unitSoutienDef.name) {
                console.log('BONUS valide, ajout de degat dans Renfort')
                result.def.renfort.atk = cardRenfortDef.Tech.result

            } else {
                console.log('BONUS non valide, la figurine ne correspond pas')

            }
        }
    }

    // Prise en compte de la carte Zone de Jeu DEF
    if (zoneJeuDef != '') {
        console.log('** Lecture de la carte Zone de Jeu DEF **')
        let zoneTech = zoneJeuDef.Tech
        
        if (zoneTech.capacity && !zoneTech.condition) {
            console.log('Vérification de la Capacité sans Condition')
            let techCapacity = zoneJeuDef.Tech.capacity

            if (techCapacity.name === 'Détecteur') {
                console.log('Détecteur ajouté dans ZoneJeu')
                result.def.zoneJeu.type = techCapacity

            } else {
                console.log('Probleme dans la Capacité sans condition de Lecture de la carte Zone de Jeu')
            }

        } else if (!zoneTech.capacity && zoneTech.condition) {
            console.log('Vérification de la Condition sans Capacité')
            let techCondition = zoneJeuDef.Tech.condition

            if (techCondition.type === 'renfort') {
                console.log('Vérification de la figurine correspondante en Soutien')
                let conditionUnit = techCondition.unit

                if (conditionUnit === unitSoutienDef.name) {
                    console.log('BONUS valide, ajout de Condition dans Type ZoneJeu')
                    result.def.zoneJeu.type = techCondition
                    result.def.zoneJeu.def = zoneJeuDef.Tech.result

                } else {
                    console.log('BONUS non valide, la figurine ne correspond pas en Soutien')
                }
            } else if (techCondition.type === 'front') {
                console.log('Vérification de la figurine correspondante en Front')
                let conditionUnit = techCondition.unit

                if (conditionUnit === unitFrontDef.name) {
                    console.log('BONUS valide, ajout de Condition dans Type ZoneJeu')
                    result.def.zoneJeu.type = techCondition
                    result.def.zoneJeu.def = zoneJeuDef.Tech.result

                } else {
                    console.log('BONUS non valide, la figurine ne correspond pas au Front')
                }

            } else {
                console.log('Probleme dans la Condition sans Capacité de Lecture de la carte Zone de Jeu')
            }

        } else if (zoneTech.capacity && zoneTech.condition) {
            console.log('Vérification de la Condition et de sa Capacité')
            let techCondition = zoneJeuDef.Tech.condition

            if (techCondition.unit === unitSoutienDef.name) {
                console.log('BONUS valide, ajout dans Type ZoneJeu')
                result.def.zoneJeu.type = zoneJeuDef.Tech.capacity

            } else {
                console.log('Probleme de lecture de la capacité avec condition')
            }
        }
    } 

    // Prise en compte de la Tourelle dans Base DEF
    if (def.base) {
        console.log('** Base active dans la Bataille, vérification de la présence de Tourelle **')

        if (def.turret) {
            console.log('Tourelle active, BONUS en cours')
            result.def.turret.capacity = 'Détecteur'

            if (unitFrontAtk.type === 'air') {
                console.log('BONUS valide, ajout dans Turret')
                result.def.turret.atk = 1

            } else {
                console.log("BONUS ATK non valide, la condition n'est pas respectée")

            }
        } else {
            console.log('Tourelle non active, Aucun BONUS')

        }
    }

    ///////
    //
    // RESULTAT
    //
    ///////
    console.log('-------------_ RESULTAT _-------------')
    console.log('*** RESULTAT STEP 1 ***')
    console.log(result)

    // Calcul des valeurs Final
    let resultAtk = result.atk
    let resultDef = result.def

    const atkFinal = {
        atk: resultAtk.damage.atk + resultAtk.soutien + resultAtk.renfort.atk + resultAtk.tech.atk + resultAtk.turret.atk,
        def: resultAtk.damage.def + resultAtk.zoneJeu.def + resultAtk.renfort.def + resultAtk.tech.def
    }

    const defFinal = {
        atk: resultDef.damage.atk + resultDef.soutien + resultDef.renfort.atk + resultDef.tech.atk + resultDef.turret.atk,
        def: resultDef.damage.def + resultDef.zoneJeu.def + resultDef.renfort.def + resultDef.tech.def
    }

    console.log('*** RESULTAT STEP 2 ***')
    console.log(atkFinal)
    console.log(defFinal)

    // Comparaison des valeurs Final
    // ATK
    if (result.atk.target != 'noTarget') {

        if (atkFinal.atk >= defFinal.def) {
            logResult.atk.damage.info = "L'unité " + nameAtkFront + " a la force suffisante pour détruire " + resultAtk.target.name + "."
            logResult.atk.damage.statutAdv = 'destroy'
    
        } else if (atkFinal.atk < defFinal.def) {
            logResult.atk.damage.info = "L'unité " + nameAtkFront + " n'a pas la force suffisante pour détruire " + resultAtk.target.name + "."
    
        }
    } else if (result.atk.target === 'noTarget') {
        logResult.atk.damage.info = "L'unité " + nameAtkFront + " est incapable de cibler."

    }

    // DEF
    if (result.def.target != 'noTarget') {
        
        if (defFinal.atk >= atkFinal.def) {
            logResult.def.damage.info = "L'unité " + nameDefFront + " a la force suffisante pour détruire " + resultDef.target.name + "."
            logResult.def.damage.statutAdv = 'destroy'
    
        } else if (defFinal.atk < atkFinal.def) {
            logResult.def.damage.info = "L'unité " + nameDefFront + " n'a pas la force suffisante pour détruire " + resultDef.target.name + "."
    
        }
    } else if (result.def.target === 'noTarget') {
        logResult.def.damage.info = "L'unité " + nameDefFront + " est incapable de cibler."

    }

    console.log(logResult)
    return {logResult, atkFinal, defFinal};
};