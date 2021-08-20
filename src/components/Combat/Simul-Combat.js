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
    let unitFrontDef = def.figurineFront

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
    let unitSoutienAtk = verifiedSupport(atk.figurineSoutien)

    // Vérification et modification du Soutien != undefined DEF
    let unitSoutienDef = verifiedSupport(def.figurineSoutien)

    // Récupération de toutes les unitées de cette escarmouche
    let unitAtk = {
        front : atk.figurineFront,
        soutien : atk.figurineSoutien,
        target : '',
        race: atk.race,
        degats: ''
    }
    let unitDef = {
        front : def.figurineFront,
        soutien : def.figurineSoutien,
        target : '',
        race: def.race,
        degats: ''
    }

    ///////
    //
    // ATK
    //
    ///////
    console.log('-------------_ ATTAQUANT _-------------')

    // degats de l'ATK : MAX ou MIN
    let nameAtkFront = unitFrontAtk.name

    result.atk.damage = damageMaxOrMin(atk.figurineFront.name ,atk.cardCombat)

    // ciblage de l'ATK vers DEF
    let tempoTargetAtk = target(unitFrontAtk, unitFrontDef, unitSoutienDef)
    unitAtk.target = tempoTargetAtk.unitTarget
    logResult.atk.target = tempoTargetAtk.logTarget
    result.atk.target = tempoTargetAtk.targetResult

    // Ajout degat Soutien a Front ATK 
    let tempoDamageSupportAtk = supportDamage(unitSoutienAtk, result.atk)
    result.atk.soutien = tempoDamageSupportAtk.resultSupport
    logResult.atk.soutien = tempoDamageSupportAtk.logSupport

    // prise en compte Tech de la carte Combat/Technologie ATK
    if (cardCombatAtk.Tech) {
        let tempoCardCombat = techCombatTechno(cardCombatAtk.Tech, result.atk.damage, unitAtk, unitDef)
        result.atk.tech = tempoCardCombat.resultTech

    }

    // Prise en compte de la carte Renfort ATK 
    if (cardRenfortAtk != '') {
        let tempoCardRenfort = techRenfort(cardRenfortAtk, unitAtk, unitDef, atk.base, def.race)
        result.atk.renfort = tempoCardRenfort.resultRenfort

    }

    // Prise en compte de la carte Zone de Jeu ATK
    if (zoneJeuAtk != '') {
        let tempoCardZone = techZone(zoneJeuAtk, unitAtk)
        result.atk.zoneJeu = tempoCardZone.resultZoneJeu

    }

    // Prise en compte de la Tourelle dans Base ATK
    let tempoTurretAtk = turretBase(atk.base, atk.turret, unitFrontDef.type)
    result.atk.turret = tempoTurretAtk.turretBase

    ///////
    //
    // DEF
    //
    ///////
    console.log('-------------_ DEFENSEUR _-------------')

    // degats de DEF : MAX ou MIN
    let nameDefFront = unitFrontDef.name

    result.def.damage = damageMaxOrMin(def.figurineFront.name ,def.cardCombat)

    // ciblage de DEF vers ATK
    let tempoTargetDef = target(unitFrontDef, unitFrontAtk, unitSoutienAtk)
    unitDef.target = tempoTargetDef.unitTarget
    logResult.def.target = tempoTargetDef.logTarget
    result.def.target = tempoTargetDef.targetResult

    // Ajout degat Soutien a Front DEF
    let tempoDamageSupportDef = supportDamage(unitSoutienDef, result.def)
    result.def.soutien = tempoDamageSupportDef.resultSupport
    logResult.def.soutien = tempoDamageSupportDef.logSupport

    // prise en compte Tech DEF de la carte Combat/Technologie
    if (cardCombatDef.Tech) {
        let tempoCardCombat = techCombatTechno(cardCombatDef.Tech, result.def.damage, unitDef, unitAtk)
        result.def.tech = tempoCardCombat.resultTech

    }

    // Prise en compte de la carte Renfort DEF
    if (cardRenfortDef != '') {
        let tempoCardRenfort = techRenfort(cardRenfortDef, unitDef, unitAtk, def.base, atk.race)
        result.def.renfort = tempoCardRenfort.resultRenfort

    }

    // Prise en compte de la carte Zone de Jeu DEF
    if (zoneJeuDef != '') {
        let tempoCardZone = techZone(zoneJeuDef, unitDef)
        result.def.zoneJeu = tempoCardZone.resultZoneJeu
        
    }

    // Prise en compte de la Tourelle dans Base DEF
    let tempoTurretDef = turretBase(def.base, def.turret, unitFrontAtk.type)
    result.def.turret = tempoTurretDef.turretBase

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

    let atkFinal = {
        atk : resultAtk.damage.atk + resultAtk.soutien + resultAtk.renfort.atk + resultAtk.tech.atk +  resultAtk.turret.atk,
        def : resultAtk.damage.def + resultAtk.zoneJeu.def + resultAtk.renfort.def + resultAtk.tech.def
    }

    let defFinal = {
        atk: resultDef.damage.atk + resultDef.soutien + resultDef.renfort.atk + resultDef.tech.atk + resultDef.turret.atk,
        def: resultDef.damage.def + resultDef.zoneJeu.def + resultDef.renfort.def + resultDef.tech.def
    }

    console.log('*** RESULTAT STEP 2 ***')
    // console.log(atkFinal)
    // console.log(defFinal)

    // Comparaison des valeurs Final ATK
    if (resultAtk.target != 'noTarget') {

        if (atkFinal.atk >= defFinal.def) {
            logResult.atk.damage.info = "L'unité " + nameAtkFront + " a la force suffisante pour détruire " + resultAtk.target.name + "."
            logResult.atk.damage.statutAdv = 'destroy'
    
        } else if (atkFinal.atk < defFinal.def) {
            logResult.atk.damage.info = "L'unité " + nameAtkFront + " n'a pas la force suffisante pour détruire " + resultAtk.target.name + "."
    
        }
    } else if (resultAtk.target === 'noTarget') {
        logResult.atk.damage.info = "L'unité " + nameAtkFront + " est incapable de cibler."

    }

    // Comparaison des valeurs Final DEF
    if (resultDef.target != 'noTarget') {
        
        if (defFinal.atk >= atkFinal.def) {
            logResult.def.damage.info = "L'unité " + nameDefFront + " a la force suffisante pour détruire " + resultDef.target.name + "."
            logResult.def.damage.statutAdv = 'destroy'
    
        } else if (defFinal.atk < atkFinal.def) {
            logResult.def.damage.info = "L'unité " + nameDefFront + " n'a pas la force suffisante pour détruire " + resultDef.target.name + "."
    
        }
    } else if (resultDef.target === 'noTarget') {
        logResult.def.damage.info = "L'unité " + nameDefFront + " est incapable de cibler."

    }

    // Résolution Destruction d'unités front/soutien ATK
    if (logResult.atk.damage.statutAdv === 'destroy') {
        let unitFinalDef = {}

        if (unitAtk.target === 'front') {
            unitFinalDef = {
                unit : unitDef.front,
                statut : 'dead'
            }
            unitDef.front = unitFinalDef

        } else if (unitAtk.target === 'soutien') {

            if (unitDef.soutien.length === 1) {
                unitFinalDef = {
                    unit : unitDef.soutien,
                    statut : 'dead'
                }
                unitDef.soutien = unitFinalDef

            } else if (unitDef.soutien.length > 1) {
                let targetName = resultAtk.target.name
                
                for (let i = 0; i < unitDef.soutien.length; i++) {
                    let selectUnitName = unitDef.soutien[i].name

                    if (selectUnitName === targetName) {
                        unitFinalDef = {
                            unit : unitDef.soutien[i],
                            statut : 'dead'
                        }
                        unitDef.soutien[i] = unitFinalDef
                    }
                    
                }
            }

        }
    }

    // Résolution Destruction d'unités front/soutien DEF
    if (logResult.def.damage.statutAdv === 'destroy') {
        let unitFinalAtk = {}

        if (unitDef.target === 'front') {
            unitFinalAtk = {
                unit : unitAtk.front,
                statut : 'dead'
            }
            unitAtk.front = unitFinalAtk

        } else if (unitDef.target === 'soutien') {

            if (unitAtk.soutien.length === 1) {
                unitFinalAtk = {
                    unit : unitAtk.soutien,
                    statut : 'dead'
                }
                unitAtk.soutien = unitFinalAtk

            } else if (unitAtk.soutien.length > 1) {
                let targetName = resultDef.target.name
                
                for (let i = 0; i < unitAtk.soutien.length; i++) {
                    let selectUnitName = unitAtk.soutien[i].name

                    if (selectUnitName === targetName) {
                        unitFinalAtk = {
                            unit : unitAtk.soutien[i],
                            statut : 'dead'
                        }
                        unitAtk.soutien[i] = unitFinalAtk
                    }
                    
                }
            }

        }
    }

    ///////
    //
    // ATK
    //
    ///////

    // Gestion des capacités Combat/Tech Escarmouche
    if (resultAtk.tech.type != '') {
        let tempoResult = capacityCombatTech(resultAtk.tech.type, resultDef, unitAtk, unitDef, logResult.atk, logResult.def)
        logResult.atk.tech = tempoResult.logResultAtk.tech
        { tempoResult.tempoUnitAtk.front != '' ? unitAtk.front = tempoResult.tempoUnitAtk.front : null }
        { tempoResult.tempoUnitAtk.tech != '' ? unitAtk.tech = tempoResult.tempoUnitAtk.tech : null }
        { tempoResult.tempoUnitDef.front != '' ? unitDef.front = tempoResult.tempoUnitDef.front : null }

    }

    ///////
    //
    // DEF
    //
    ///////

    // Gestion des capacités Combat/Tech Escarmouche
    if (resultDef.tech.type != '') {
        let tempoResult = capacityCombatTech(resultDef.tech.type, resultAtk, unitDef, unitAtk, logResult.def, logResult.atk)
        logResult.def.tech = tempoResult.logResultAtk.tech
        { tempoResult.tempoUnitAtk.front != '' ? unitDef.front = tempoResult.tempoUnitAtk.front : null }
        { tempoResult.tempoUnitAtk.tech != '' ? unitDef.tech = tempoResult.tempoUnitAtk.tech : null }
        { tempoResult.tempoUnitDef.front != '' ? unitAtk.front = tempoResult.tempoUnitDef.front : null }

    }

    // console.log(logResult)
    let resultat = {resultAtk, resultDef}
    unitAtk.degats = atkFinal
    unitDef.degats = defFinal
    let unites = {unitAtk, unitDef}
    
    return {logResult, resultat, unites};
};

// Vérification et modification du Soutien != undefined
const verifiedSupport = (supportFigurine) => {
    
    if (supportFigurine.length != 0) {
        let newUnitSoutien = []

        for (let i = 0; i < supportFigurine.length; i++) {

            if (supportFigurine[i] != undefined) {
                
                newUnitSoutien.push(supportFigurine[i])
            }
            
        }
        supportFigurine = newUnitSoutien
    } else {
        return supportFigurine;
    }
    return supportFigurine;
};

// degats MAX || MIN
const damageMaxOrMin = (unitName, cardCombat) => {
    let combatNameFigurine = cardCombat.figurine
    let combatDegats = cardCombat.degats

    let type = ''
    let atk = ''
    let def = ''

    for (let i=0; i < combatNameFigurine.length; i++) {
        let nameFigurine = combatNameFigurine[i].name

        if (nameFigurine === unitName) {
            type = 'max'
            atk = combatDegats.atk.max
            def = combatDegats.def.max

            return {type, atk, def}

        } else if (type != 'max' && i === combatNameFigurine.length ) {
            type = 'min'
            atk = combatDegats.atk.min
            def = combatDegats.def.min

            return {type, atk, def}
        }
    }
    
};

// ciblage
const target = (unitFrontAtk, unitFrontDef, unitSoutienDef) => {
    let unitTarget = ''
    let logTarget = ''
    let targetResult = ''

    if (unitFrontAtk.atk === unitFrontDef.type || unitFrontAtk.atk === 'sol_air') {
        targetResult = unitFrontDef
        unitTarget = {
            type : 'front',
            unit : unitFrontDef
        }
        logTarget = "L'unité " + unitFrontAtk.name + " peut cibler " + unitFrontDef.name + " au front."

    } else if (unitSoutienDef.length === 1) {

        if (unitFrontAtk.atk === unitSoutienDef[0].type || unitFrontAtk.atk === 'sol_air') {
            targetResult = unitSoutienDef[0]
            unitTarget = {
                type : 'soutien',
                unit : unitSoutienDef[0]
            }
            logTarget = "L'unité " + unitFrontAtk.name + " ne peut pas cibler " + unitFrontDef.name + " au front, mais il peut cibler " + unitSoutienDef[0].name + " en soutien."
    
        } else {
            targetResult = 'noTarget'
            logTarget = "L'unité " + unitFrontAtk.name + " ne peut pas cibler " + unitFrontDef.name + " au front, ni cibler " + unitSoutienDef[0].name + " en soutien."
        }
    } else if (unitSoutienDef.length > 1) {
        let multiTarget = []
        logTarget = {
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
            let stringHit = "L'unité " + unitFrontAtk.name + " ne peut pas cibler " + unitFrontDef.name + " au front, mais il peut cibler "
            stringHit = stringHit.concat(...targetHit)
            logTarget.hit = stringHit + "en soutien."
            unitTarget = {
                type : 'soutien',
                unit : unitSoutienDef[0]
            }
        }
        if (targetLost.length > 0) {
            let stringLost = "L'unité " + unitFrontAtk.name + " ne peut pas cibler " + unitFrontDef.name + " au front, ni cibler "
            stringLost = stringLost.concat(...targetLost)
            logTarget.lost = stringLost + "en soutien."

        }
        if (multiTarget.length > 0) {
            let target = ''
            unitTarget = {
                type : 'soutien',
                unit : unitSoutienDef[0]
            }

            for (let i = 0; i < multiTarget.length; i++) {
                if (multiTarget[i] != 'noTarget' && target === '') {
                    target = multiTarget[i]
                
                }                
            }
            targetResult = target
        }
    } else {
        targetResult = 'noTarget'
        logTarget = "L'unité " + unitFrontAtk.name + " ne peut pas cibler " + unitFrontDef.name + " au front."

    }
    
    return {unitTarget, logTarget, targetResult}
};

// Ajout degat Soutien
const supportDamage = (unitSoutienAtk, resultAtk) => {
    let resultSupport = 0
    let logSupport = ''

    if (unitSoutienAtk.length != 0) {

        if (resultAtk.target != 'noTarget') {
            console.log("Vérification de degats possible pour soutien")
    
            if (unitSoutienAtk.length === 1) {

                if (unitSoutienAtk[0].atk === resultAtk.target.type || unitSoutienAtk[0].atk === 'sol_air') {
                    // Soutien peut cibler, ajout degats soutien
                    resultSupport = unitSoutienAtk[0].soutien_value
                    logSupport = "L'unité " + unitSoutienAtk[0].name + " en soutien peut attaquer la cible, sa valeur d'attaque est ajouté."
        
                } else {
                    // Soutien ne peut pas cibler malgré la cible de la figurine au FRONT, aucun degats ajouté
                    logSupport = "L'unité " + unitSoutienAtk[0].name + " en soutien ne peut pas attaquer la cible."
        
                }
            } else if (unitSoutienAtk.length > 1) {
                logSupport = {
                    hit: '',
                    miss: ''
                }
                let unitHit = []
                let unitMiss = []

                for (let i = 0; i < unitSoutienAtk.length; i++) {

                    let selectSoutien = unitSoutienAtk[i];
                    if (selectSoutien.atk === resultAtk.target.type || selectSoutien.atk === 'sol_air') {
                        // Soutien peut cibler, ajout degats soutien
                        resultSupport = resultSupport + selectSoutien.soutien_value
                        unitHit.push(selectSoutien.name + ', ')
            
                    } else {
                        // Soutien ne peut pas cibler malgré la cible de la figurine au FRONT, aucun degats ajouté
                        unitMiss.push(selectSoutien.name + ', ')
            
                    }
                }
                if (unitHit.length != 0) {
                    let stringHit = "L'unité "
                    stringHit = stringHit.concat(...unitHit)
                    logSupport.hit = stringHit + "en soutien peut attaquer la cible, sa valeur d'attaque est ajouté."

                }
                if (unitMiss.length != 0) {
                    let stringMiss = "L'unité "
                    stringMiss = stringMiss.concat(...unitMiss)
                    logSupport.miss = stringMiss + "en soutien ne peut pas attaquer la cible."

                }
            }
        } else {
            // Soutien ne peut pas cibler - aucun degats n'est ajouté
            logSupport = "Aucune cible disponible."
    
        }
    }

    return {resultSupport, logSupport}
};

// prise en compte Tech de la carte Combat/Technologie
const techCombatTechno = (cardCombatTech, resultDamage, unitAtk, unitDef) => {
    let nameAtkFront = unitAtk.front.name
    let unitSoutienAtk = unitAtk.soutien
    let unitFrontDef = unitDef.front
    let resultTech = {
        atk: 0,
        def: 0,
        type: ''
    }

    if (cardCombatTech) {
        console.log('** Lecture Tech de cardCombat ATK **')
        let combatTech = cardCombatTech
        let verifTechCondition = resultDamage.type

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
                                resultTech.atk = combatTech.result

                            } else {
                                console.log('BONUS CONTRE NON validée condition non respectée')

                            }
                        } else {

                            if (techType === 'atk') {
                                console.log('Ajout Atk de la condition')
                                resultTech.atk = combatTech.result
    
                            } else if (techType === 'def') {
                                console.log('Ajout Def de la condition')
                                resultTech.def = combatTech.result
    
                            } else if (techType === 'atk_def') {
                                console.log('Ajout Def et Atk de la condition')
                                resultTech.atk = combatTech.result
                                resultTech.def = combatTech.result

                            }
                        }
                    } else if (!techCondition.unit && techCondition.by) {
                        console.log('La Condition est respecté - BONUS pour AIR en cours')
                        let targetATK = unitFrontDef
                        let conditionBy = techCondition.by

                        if (conditionBy === targetATK.type) {
                            console.log('BONUS CONTRE VALIDEE condition respecté')
                            resultTech.atk = combatTech.result
                            
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
                        resultTech.type = techCondition

                    } else if (typeOfTech ===  'string' && techCondition.unit === nameAtkFront) {
                        console.log('réception VALIDE de degat REPERCUTEE selon figurine par Type')
                        resultTech.type = techCondition

                    } else if (techCondition.byCondition) {
                        console.log('réception VALIDE de degat REPERCUTEE avec|sans condition par Type')
                        resultTech.type = techCondition

                    } else {
                        console.log("BONUS non validée la condition n'est pas respecté les Figurines ne correspondent pas")

                    }
                } else if (techCondition.type === 'suicide') {
                    console.log('réception VALIDE de degat SUICIDE par Type')
                    resultTech.type = techCondition

                } else if (techCondition.type === 'destroy') {
                    console.log('réception VALIDE de degat DESTROY par Type')
                    resultTech.type = techCondition
                    resultTech.number = combatTech.result

                } else {
                    console.log("BONUS non validée la condition n'est pas respecté les Figurines ne correspondent pas")
                    
                }
            }
        } else if (combatTech.capacity) {
            console.log('Lecture Capacity de cardCombat et Ajout de type')
            resultTech.type = combatTech.capacity.name
            let capacityFor = combatTech.capacity.for
            resultTech.unit = []

            for (let i = 0; i < capacityFor.length; i++) {
                let forName = capacityFor[i].name;

                if (forName === nameAtkFront || forName === unitSoutienAtk[i].name) {
                    console.log('Ajout de la figurine valide dans Renfort Unit')
                    resultTech.unit.push(forName)
                } else if (combatTech.length === i + 1 && resultTech.unit.length === 0) {
                    console.log('Aucune figurine ne correspond a la Capacitée, BONUS non valide')
                }
            }
        } else {
            console.log('Les figurines ne correspondent pas a la carte Combat')

        }
    }

    return {resultTech}
};

// Prise en compte de la carte Renfort
const techRenfort = (cardRenfortAtk, unitAtk, unitDef, base, race) => {
    let unitSoutienAtk = unitAtk.soutien
    let nameAtkFront = unitAtk.front.name
    let targetAtk = unitAtk.target
    let defFront = unitDef.front
    let defSoutien = unitDef.soutien
    let resultRenfort = {
        atk : 0,
        def : 0,
        type : ''
    }

    if (cardRenfortAtk != '') {
        console.log('** Lecture de la carte Renfort **')
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
                            resultRenfort.def = renfortTech.result

                        } else if (conditionUnit.length === i + 1 && resultRenfort.def === 0) {
                            console.log("BONUS non valide, la condition n'est pas respectée")
                        }
                        
                    }
                } else if (techCondition.by) {
                    console.log("vérification de la présence d'UNITE sur SOUTIEN uniquement")
                    
                    if (unitSoutienAtk != '') {
                        console.log("BONUS valide, envoi dans Renfort")
                        renfortTech.atk = renfortTech.result

                    } else {
                        console.log("BONUS non valide, la condition n'est pas respectée")

                    }
                } else {
                    console.log('BONUS valide pour Protoss, sans condition')
                    renfortTech.def = renfortTech.result

                }
            } else if (techCondition.type === 'base') {
                console.log('vérification de la Condition base')
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
                                resultRenfort.def = renfortTech.result

                            } else if (conditionUnit.length === i + 1 && resultRenfort.def === 0) {
                                console.log('BONUS non valide, condition non respectée')

                            }
                        }
                    } else {
                        console.log('BONUS valide pour Protoss, envoi dans Renfort')
                        resultRenfort.def = renfortTech.result

                    }
                } else if (base && techType === 'atk') {
                    console.log('Vérification des conditions de Base')
                    let conditionBy = techCondition.by

                    if (conditionBy === defFront.type) {
                        console.log('BONUS valide, envoi dans Renfort')
                        renfortTech.atk = renfortTech.result

                    } else {
                        console.log('BONUS non valide, condition non respectée')

                    }
                } else {
                    console.log('BONUS non valide pour Base, les conditions ne sont pas respectées')
                    
                }
            } else if (techCondition.type === 'répercutés') {
                console.log('Vérification de la Condition figurine de degats Répercutés')
                let figurineName = cardRenfortAtk.figurine

                if (figurineName === nameAtkFront) {
                    console.log('Nom de la figurine vérifiée, la correspondance est bonne, BONUS valide')
                    resultRenfort.type = techCondition

                    if (renfortTech.type) {
                        console.log("Ajout Supplémentaire de degats")
                        resultRenfort.atk = renfortTech.result

                    }
                } else if (unitSoutienAtk.length > 0) {

                    for (let i = 0; i < unitSoutienAtk.length; i++) {
                        let SoutienName = unitSoutienAtk[i].name;
    
                        if (figurineName === SoutienName) {
                            console.log('Nom de la figurine vérifiée, la correspondance est bonne, BONUS valide')
                            resultRenfort.type = techCondition
        
                            if (renfortTech.type) {
                                console.log("Ajout Supplémentaire de degats")
                                resultRenfort.atk = renfortTech.result
        
                            }
                        } else if (unitSoutienAtk.length === i + 1 && resultRenfort.type === '') {
                            console.log('BONUS non valide, la figurine ne correspond pas')
        
                        }
                    }
                } else {
                    console.log('BONUS non valide, la figurine ne correspond pas')
                }
            } else if (!techCondition) {
                console.log('BONUS valide, sans condition')
                resultRenfort.def = renfortTech.result
            } else if (techCondition.type === 'exception') {
                console.log("Vérification de la Condition figurine d'Exception")
                let figurineName = cardRenfortAtk.figurine

                if (figurineName === nameAtkFront) {
                    console.log('BONUS ajouté Exception dans Type Renfort')
                    resultRenfort.type = techCondition

                } else if (unitSoutienAtk.length > 0) {

                    for (let i = 0; i < unitSoutienAtk.length; i++) {
                        let SoutienName = unitSoutienAtk[i].name;

                        if (figurineName === SoutienName) {
                            console.log('BONUS ajouté Exception dans Type Renfort')
                            resultRenfort.type = techCondition

                        } else if (unitSoutienAtk.length === i + 1 && resultRenfort.type === '') {
                            console.log('BONUS non valide, la figurine ne correspond pas')
        
                        }
                    }
                } else {
                    console.log('BONUS non valide, la figurine ne correspond pas')
                }
            } else if (techCondition.type === 'destroy') {
                console.log('Vérification de la Condition Destroy')
                let figurineName = cardRenfortAtk.figurine
                let condition = false

                if (figurineName === nameAtkFront) {
                    condition = true

                } else if (unitSoutienAtk.length > 0) {

                    for (let i = 0; i < unitSoutienAtk.length; i++) {
                        let soutienName = unitSoutienAtk[i].name;

                        if (figurineName === soutienName) {
                            condition = true
                        }
                    }
                }

                if (condition) {
                    console.log('BONUS valide, vérification des conditions')
                    let conditionUnit = techCondition.unit
                    resultRenfort.type = {
                        type: techCondition.type
                    }
                    resultRenfort.type.unit = []

                    for (let i = 0; i < conditionUnit.length; i++) {
                        let unitName = conditionUnit[i].name;

                        if (unitName === defFront.name) {
                            console.log('Unité valide, envoi dans Type Renfort')
                            resultRenfort.type.unit.push(unitName)

                        } else if (defSoutien.length > 0) {

                            for (let i = 0; i < defSoutien.length; i++) {
                                let soutienName = defSoutien[i].name;
        
                                if (figurineName === soutienName) {
                                    console.log('Unité valide, envoi dans Type Renfort')
                                    resultRenfort.type.unit.push(unitName)
                                }
                            }
                        } else if (unitName === 'Zerg' && race === 'zerg') {
                            console.log('BONUS valide pour ZERG, figurine SOL uniquement')
                            resultRenfort.type.unit.push(unitName)
                            resultRenfort.type.by = 'sol'

                        } else if (conditionUnit.length === i + 1 && resultRenfort.type.unit.length === 0) {
                            console.log('BONUS non valide, aucune unitées ne correspond a la condition')

                        }
                    }
                } else if (!condition) {
                    console.log('La Figurine ne correspond pas, BONUS non valide')
                }
            }
        } else if (!renfortTech.condition && renfortTech.capacity) {
            console.log('Vérification de la Capacité sans Condition')
            let capacityName = renfortTech.capacity.name

            if (capacityName === 'Camouflage') {
                console.log('Vérification de la capacité Camouflage')
                let capacityUnit = renfortTech.capacity.unit
                resultRenfort.type = capacityName
                resultRenfort.unit = []

                for (let i = 0; i < capacityUnit.length; i++) {
                    let unitName = capacityUnit[i].name

                    if (unitName === nameAtkFront) {
                        console.log('Ajout du nom de la figurine pour la Capacité Active')
                        resultRenfort.unit.push(unitName)

                    } else if (unitSoutienAtk.length > 0) {

                        for (let i = 0; i < unitSoutienAtk.length; i++) {
                            let soutienName = unitSoutienAtk[i].name;
                            
                            if (unitName === soutienName) {
                                console.log('Ajout du nom de la figurine pour la Capacité Active')
                                resultRenfort.unit.push(unitName)

                            }
                        }
                    } else if (capacityUnit.length === i + 1 && resultRenfort.unit.length === 0) {
                        console.log('Aucune figurine ne correspond a la Capacité, BONUS non valide')
    
                    }                
                }
            } else if (capacityName === 'Annulez') {
                console.log('Vérification de la capacitée Annulez')
                let techCapacity = renfortTech.capacity
                let figurineName = cardRenfortAtk.figurine
                let condition = false

                if (figurineName === nameAtkFront) {
                    condition = true

                } else if (unitSoutienAtk.length > 0) {

                    for (let i = 0; i < unitSoutienAtk.length; i++) {
                        let soutienName = unitSoutienAtk[i].name;
                        
                        if (figurineName === soutienName) {
                            condition = true

                        }
                    }
                }

                if (condition) {
                    console.log('Vérification de la figurine pour BONUS')
                    
                    if (techCapacity.of === 'renfort') {
                        console.log('BONUS Annulez ajouté dans Renfort')
                        resultRenfort.type = {
                            name: techCapacity.name,
                            of: techCapacity.of
                        }
                        
                        if (techCapacity.for === targetAtk.unit.name) {
                            console.log('BONUS SUPPLEMENTAIRE pour figurine spécifique ARCHONTE')
                            resultRenfort.atk = renfortTech.result[0].number

                        } else if (race === 'protoss') {
                            console.log('BONUS SUPPLEMENTAIRE pour Race spécifique PROTOSS')
                            resultRenfort.atk = renfortTech.result[1].number

                        } else {
                            console.log('Probleme de BONUS dans renfort')
                        }
                    } else if (techCapacity.of === 'combat') {
                        console.log('BONUS Annulez ajouté dans Renfort')
                        resultRenfort.type = {
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
                let condition = false

                if (cardRenfortAtk.figurine === nameAtkFront) {
                    condition = true

                } else if (unitSoutienAtk.length > 0) {

                    for (let i = 0; i < unitSoutienAtk.length; i++) {
                        let supportName = unitSoutienAtk[i].name;

                        if (cardRenfortAtk.figurine === supportName) {
                            condition = true

                        }
                    }
                }

                if (condition) {
                    console.log('BONUS en cours, la figurine correspond')
                    resultRenfort.unit = []
                    resultRenfort.type = capacityName

                    for (let i = 0; i < capacityUnit.length; i++) {
                        let unitName = capacityUnit[i].name

                        if (unitName === defFront.name) {
                            console.log('Ajout du nom de la figurine valide dans Renfort Unit')
                            resultRenfort.unit.push(unitName)

                        } else if (defSoutien.length > 0 ) {

                            for (let i = 0; i < defSoutien.length; i++) {
                                let supportName = defSoutien[i].name;
                                
                                if (unitName === supportName) {
                                    console.log('Ajout du nom de la figurine valide dans Renfort Unit')
                                    resultRenfort.unit.push(unitName)

                                }
                            }
                        } else if (capacityUnit.length === i + 1 && resultRenfort.unit.length === 0) {
                            console.log('Aucune figurine ne correspond a la Capacitée, BONUS non valide')
                        }
                    }
                } else {
                    console.log('BONUS non valide, la figurine ne correspond pas')
                }
            } else if (capacityName === 'Détecteur') {
                console.log('Vérification de la figurine correspondante')
                let figurineName = cardRenfortAtk.figurine

                if (figurineName === nameAtkFront) {
                    console.log('BONUS valide, capacité ajouter dans Type RENFORT')
                    resultRenfort.type = renfortTech.capacity
                    resultRenfort.def = renfortTech.result

                } else if (unitSoutienAtk.length > 0) {

                    for (let i = 0; i < unitSoutienAtk.length; i++) {
                        let supportName = unitSoutienAtk[i].name;
                        
                        if (figurineName === supportName) {
                            console.log('BONUS valide, capacité ajouter dans Type RENFORT')
                            resultRenfort.type = renfortTech.capacity
                            resultRenfort.def = renfortTech.result

                        }
                    }
                } else {
                    console.log('BONUS non valide, la figurine ne correspond pas')
                }
            } else if (capacityName === 'Stase') {
                console.log('Vérification de la figurine correspondante')
                let figurineName = cardRenfortAtk.figurine

                if (figurineName === nameAtkFront) {
                    console.log('Figurine valide, BONUS ajouté dans type Renfort')
                    resultRenfort.type = renfortTech.capacity

                } else if (unitSoutienAtk.length > 0) {

                    for (let i = 0; i < unitSoutienAtk.length; i++) {
                        let supportName = unitSoutienAtk[i].name;

                        if (figurineName === supportName) {
                            console.log('Figurine valide, BONUS ajouté dans type Renfort')
                            resultRenfort.type = renfortTech.capacity

                        }
                    }
                } else {
                    console.log('BONUS non valide, la figurine ne correspond pas')

                }
            }
        } else if (renfortTech.condition && renfortTech.capacity) {
            console.log('Vérification de la Capacité avec sa Condition')
            let figurineName = cardRenfortAtk.figurine
            let condition = false

            if (figurineName === nameAtkFront) {
                condition = true

            } else if (unitSoutienAtk.length > 0) {
                
                for (let i = 0; i < unitSoutienAtk.length; i++) {
                    let supportName = unitSoutienAtk[i].name;
                    
                    if (figurineName === supportName) {
                        condition = true

                    }
                }
            }

            if (condition) {
                console.log('Vérification figurine valide, Condition en cours')
                let conditionName = cardRenfortAtk.Tech.condition.name

                if (conditionName === 'Peste') {
                    console.log('Peste envoyé dans Type Renfort')
                    let techCondition = cardRenfortAtk.Tech.condition
                    let techCapacity = cardRenfortAtk.Tech.capacity
                    resultRenfort.type = {
                        name: techCondition.name,
                        type: techCondition.type,
                        by: techCondition.by,
                        capacity : techCapacity.name
                    }

                } else if (conditionName === 'Tempête') {
                    console.log('Tempête envoyé dans Type Renfort')
                    let techCondition = cardRenfortAtk.Tech.condition
                    let techCapacity = cardRenfortAtk.Tech.capacity
                    resultRenfort.type = {
                        name: techCondition.name,
                        type: techCondition.type,
                        by: techCondition.by,
                        capacity : techCapacity.name
                    }
                    resultRenfort.atk = cardRenfortAtk.Tech.result
                }
            } else {
                console.log('BONUS non valide, la figurine ne correspond pas')
            }
        } else if (!renfortTech.condition && !renfortTech.capacity) {
            console.log('Vérification du BONUS sans Condition, ni Capacité')
            let figurineName = cardRenfortAtk.figurine

            if (figurineName === nameAtkFront) {
                console.log('BONUS valide, ajout de degat dans Renfort')
                resultRenfort.atk = cardRenfortAtk.Tech.result

            } else if (unitSoutienAtk.length > 0) {

                for (let i = 0; i < unitSoutienAtk.length; i++) {
                    let supportName = unitSoutienAtk[i].name;
                    
                    if (figurineName === supportName) {
                        console.log('BONUS valide, ajout de degat dans Renfort')
                        resultRenfort.atk = cardRenfortAtk.Tech.result

                    }
                }
            } else {
                console.log('BONUS non valide, la figurine ne correspond pas')

            }
        }
    }

    return {resultRenfort}
};

// Prise en compte de la carte Zone de Jeu
const techZone = (zoneJeuAtk, unitAtk) => {
    let unitSoutienAtk = unitAtk.soutien
    let unitFrontAtk = unitAtk.front
    let resultZoneJeu = {
        def : 0,
        type : ''
    }

    if (zoneJeuAtk != '') {
        console.log('** Lecture de la carte Zone de Jeu DEF **')
        let zoneTech = zoneJeuAtk.Tech
        
        if (zoneTech.capacity && !zoneTech.condition) {
            console.log('Vérification de la Capacité sans Condition')
            let techCapacity = zoneJeuAtk.Tech.capacity

            if (techCapacity.name === 'Détecteur') {
                console.log('Détecteur ajouté dans ZoneJeu')
                resultZoneJeu.type = techCapacity

            } else {
                console.log('Probleme dans la Capacité sans condition de Lecture de la carte Zone de Jeu')
            }

        } else if (!zoneTech.capacity && zoneTech.condition) {
            console.log('Vérification de la Condition sans Capacité')
            let techCondition = zoneJeuAtk.Tech.condition

            if (techCondition.type === 'renfort') {
                console.log('Vérification de la figurine correspondante en Soutien')
                let conditionUnit = techCondition.unit

                if (unitSoutienAtk.length > 0) {

                    for (let i = 0; i < unitSoutienAtk.length; i++) {
                        let unitSoutien = unitSoutienAtk[i];

                        if (conditionUnit === unitSoutien.name) {
                            console.log('BONUS valide, ajout de Condition dans Type ZoneJeu')
                            resultZoneJeu.type = techCondition
                            resultZoneJeu.def = zoneJeuAtk.Tech.result

                        } else {
                            console.log('BONUS non valide, la figurine ne correspond pas en Soutien')

                        }
                    }
                }
            } else if (techCondition.type === 'front') {
                console.log('Vérification de la figurine correspondante en Front')
                let conditionUnit = techCondition.unit

                if (conditionUnit === unitFrontAtk.name) {
                    console.log('BONUS valide, ajout de Condition dans Type ZoneJeu')
                    resultZoneJeu.type = techCondition
                    resultZoneJeu.def = zoneJeuAtk.Tech.result

                } else {
                    console.log('BONUS non valide, la figurine ne correspond pas au Front')
                }

            } else {
                console.log('Probleme dans la Condition sans Capacité de Lecture de la carte Zone de Jeu')
            }

        } else if (zoneTech.capacity && zoneTech.condition) {
            console.log('Vérification de la Condition et de sa Capacité')
            let conditionUnit = zoneJeuAtk.Tech.condition.unit

            if (unitSoutienAtk.length > 0) {

                for (let i = 0; i < unitSoutienAtk.length; i++) {
                    let unitSoutien = unitSoutienAtk[i];

                    if (conditionUnit === unitSoutien.name) {
                        console.log('BONUS valide, ajout dans Type ZoneJeu')
                        resultZoneJeu.type = zoneJeuAtk.Tech.capacity

                    } else {
                        console.log('Probleme de lecture de la capacité avec condition')
                    }
                }
            }
        }
    } 

    return {resultZoneJeu}
};

// Prise en compte de la Tourelle dans Base
const turretBase = (base, turret, unitFrontType) => {
    let turretBase = {
        atk : 0,
        capacity : ''
    }

    if (base) {
        console.log('** Base active dans la Bataille, vérification de la présence de Tourelle **')

        if (turret) {
            console.log('Tourelle active, BONUS en cours')
            turretBase.capacity = 'Détecteur'

            if (unitFrontType === 'air') {
                console.log('BONUS anti-Volant valide, ajout dans Turret')
                turretBase.atk = 1

            } else {
                console.log("BONUS anti-Volant non valide, la condition n'est pas respectée")

            }
        } else {
            console.log('Tourelle non active, Aucun BONUS')

        }
    }
    return {turretBase}
};

// Gestion des capacités Combat/Tech Escarmouche
    // TODO A CONTINUER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const capacityCombatTech = (resultTechType, resultDef, unitAtk, unitDef, logAtk, logDef) => {
    let logResultAtk = {
        tech : ''
    }
    let tempoUnitAtk = {
        front: '',
        tech: ''
    }
    let tempoUnitDef = {
        front: '',
    }

    // Validation des Degats Répercutés
    if (resultTechType.type === 'répercutés') {
        // Vérification de la cible détruite pour activer la compétance
        if (logAtk.damage.statutAdv === 'destroy') {
            // Vérification des conditions
            if (resultTechType.byCondition === 'noCondition') {
                // pas de condition, capacité valide
                tempoUnitAtk.tech = resultTechType
                logResultAtk.tech = "Dégats Répercutés " + resultTechType.by + " valide."

            } else if (resultTechType.byCondition === 'noDetecteur') {
                // vérification Détecteur adverse dans Renfort||ZoneCard
                if (resultDef.renfort.type.capacity === 'Détecteur'|| resultDef.renfort.type.name === 'Détecteur' || resultDef.zoneJeu.type.name === 'Détecteur') {
                    // Détecteur actif, capacité annulé
                    logResultAtk.tech = "Dégats Répercutés " + resultTechType.by + " non valide, Détecteur actif chez le Défenseur."

                } else {
                    // Détecteur non actif, capacité valide
                    tempoUnitAtk.tech = resultTechType
                    logResultAtk.tech = "Dégats Répercutés " + resultTechType.by + " valide."

                }
            } else if (resultTechType.byCondition === 'unitSpecifique') {
                // condition particuliere, capacité valide, activation lors de la phase final
                let unitCondition = resultTechType.unit
                tempoUnitAtk.tech = resultTechType
                logResultAtk.tech = "Dégats Répercutés " + resultTechType.by + " ne peut détruire qu'une seule unité " + unitCondition[0].name + ", " + unitCondition[1].name + "ou " + unitCondition[2].name + "."

            }
        } else {
            logResultAtk.tech = "Dégats Répercutés " + resultTechType.by + " non valide, la cible doit être détruite pour activer la capacité."

        }
    // Validation des Degats Suicide
    } else if (resultTechType.type === 'suicide') {
        // vérification de l'unite front encore vivante
        if (logDef.damage.statutAdv === 'alive') {
            // vérification de l'unité front adverse volant uniquement
            if (unitDef.front.type === 'air') {
                // les conditions sont valides, la capacité est accepté
                tempoUnitAtk.tech = resultTechType
                logResultAtk.tech = "La Destruction est valide, les deux unités en Front (la vôtre et celle du Défenseur) sont détruites."
                logResultAtk.damage.statutAdv = 'destroy'
                let unitFinalDef = {
                    unit : unitDef.front,
                    statut : 'dead'
                }
                tempoUnitDef.front = unitFinalDef
                let unitFinalAtk = {
                    unit : unitAtk.front,
                    statut : 'dead'
                }
                tempoUnitAtk.front = unitFinalAtk

            } else {
                // l'unité doit être volant
                logResultAtk.tech = "La Destruction n'est pas valide, l'unité Front Défenseur doit être volant uniquement."

            }
        } else {
            // l'unité doit être vivante
            logResultAtk.tech = "La Destruction n'est pas valide, l'unité doit être encore vivante."

        }
    } else if (resultTechType.type === 'destroy') {
        console.log('TODO DESTROY')
    }

    return {logResultAtk, tempoUnitAtk, tempoUnitDef}
};