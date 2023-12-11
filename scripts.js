// valeur des constantes
const pointDIndice = 4.9227
const ValPrimFonct = 1529
let primRep = 0
let totalPercu = 0

function toggleArretSection(hide){
    document.getElementById('nbArretSection').hidden = hide
}

/* Calcul du salaire brut en fonction du coefficient*/
function compute() {
    
    const coefficient = document.getElementById("coef").value
    
    if (isNaN(coefficient)) {
        document.getElementById("resultat").innerText = 'Merci de rentrer un entier'
        return
    }
    
    const coef = Math.trunc(Number(coefficient))
    
    if (coef <100 || coef>999){
        document.getElementById("resultat").innerText = 'Merci de rentrer un coef à 3 chiffre'
        return
    }
    
    let salaireBrut = Math.round(coef * pointDIndice * 100) / 100
    document.getElementById("resultat").innerText = `Votre Salaire Brut pour le coefficient ${coef} est de : ${salaireBrut} € en équivalent temps plein (ETP)`
    document.getElementById("salaireBrut").value = salaireBrut
}

/* Calcul*/

function compute2() {
    let quotite = Number(document.getElementById("quotite").value)

    //var valeur = document.querySelector('input[name=choix]:checked').value;
    
    if (isNaN(quotite)) {
        document.getElementById("traitBrut").innerText = 'Merci de rentrer un entier sans le pourcentage'
        return
    } 
    
    
    if (quotite <50 || quotite>100){
        document.getElementById("traitBrut").innerText = 'Merci de rentrer une quotité comprise entre 50 et 100 sans le pourcentage'
        return
    }
    
    let salaireBrut = Number(document.getElementById("salaireBrut").value)
    /*console.log(document.getElementById("salaireBrut").value)*/
    let traiteBrut = (quotite/100) * salaireBrut
    //console.log(traiteBrut)
    
    /* Numéro ligne fiche de paie : 101000*/
    document.getElementById("traitBrut").innerHTML = `<span style ="font-weight:bold;">101000</span> Traitement Brut <span style='color: red;font-weight : bold;'>${traiteBrut.toFixed(2)} €</span>  pour une quotité de ${quotite} %`
    
    
    /* Indemnite de résidence*/
    let indRes = traiteBrut *(1/100)
    
    /* Indemnité de fonction*/
    let indFonct = (ValPrimFonct*(quotite/100))/12
    
    
    // Jour de carence
    // formule utilisé : Traitement brut /30
    //let carence1 = document.getElementById('carence1').checked = true
    let carence = 0
    if (document.getElementById('carence').checked){
        let nbArret = document.getElementById('nbArret').value
        carence = (traiteBrut / 30) * nbArret
        document.getElementById('resultCarence').hidden=false    
        document.getElementById('resultCarence').innerHTML = `<span style="font-weight:bold;">016052</span> Total Absence Carence : ${carence.toFixed(2)} €`
        console.log (`Votre journee de carence vous coûte ${carence.toFixed(2)}`)
    }
    /*Cotisation salariale vieillesse plafonné : Taux : 6.9%
    Formule utilisée : ((∑ des revenus)* 6.90% */
    totalPercu = traiteBrut + indRes + indFonct + primRep
    let cotSalViePla = (totalPercu)*(6.9/100)
    
    /* Calcul CSG non déductible*/
    /* Formule utilisée : ((∑ des revenus) * 98.25%) * 2.40% */
    let csgNonDed = (totalPercu * (98.25/100)) * (2.4/100)
    
    /* Calcul CSG déductible*/
    /* Formule utilisée : ((∑ des revenus) * 98.25%) * 6.80% */
    let csgDed = (totalPercu *(98.25/100))*(6.8/100)
    
    
    /* Calcul CRDS */
    /* formule utilisée : ((∑ des revenus)*98.25%)* 0.50% */
    let crds = ((totalPercu)*(98.25/100))*(0.5/100)
    

    // calcul cotisation salariale vieillesse deplafonné
    // Formule utilisée : ((∑ des revenus)* 0.4%
   let cotSalVieiDepla = totalPercu * (0.4/100)
    
    /* Calcul Cotisation salariale Ircantec Tranche A*/
    /* Formule utilisée : (∑ des revenus)*2.80% */
    let cotSalIrcanTrA = totalPercu * (2.80/100)
    
     /* Calcul des Charges Employeurs */
     // calcul cotisation allocation familliale 
     // formule de calcul utilisé : (∑ des revenus) * 3.45%
     let cotPatAlloFam = totalPercu * (3.45/100)

     // Calcul cotisation patronale Allocation patronnale majoration
     // formule de calcul utilisé : (∑ des revenus) * 1.80%
    let cotPatAfMaj = totalPercu * (1.80/100)


    // Calcul cotisation patronal accident du travail
    // formule utilisée : (∑ des revenus) * 1.02%
    //https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000046821482
    let cotPatAccTra = totalPercu* (1.02/100)

    //calcul cotisation patronal FNAL deplafonnée
    // formule utulisé : (∑ des revenus) * 0.5%
    let cotPatFnalDepl = totalPercu * (0.5/100)

    // calcul cotisation patronal Vieillesse plafonné
    // formule utilisée : (∑ des revenus) * 8.55%
    let cotPatVieiPlaf = totalPercu * (8.55/100)

    // calcul cotisation patranal viellesse deplafonné
    //formule utilisée : (∑ des revenus) * 1.9%
    let cotPatVieilDepl = totalPercu*(1.9/100)

    // calcul contribution solidarité autonomie
    //formule utilisée : (∑ des revenus) * 0.3%
    let contSolAuto = totalPercu * (0.3/100)

    // calcul cotisation patronal maladie déplafonné
    // formule utilisée : (∑ des revenus) * 7%
    let cotPatMalDepla = totalPercu * (7/100)

    // calcul cotisation patronal maladie Majoration
    //formule utilisée : (∑ des revenus) * 6%
    let cotPatMalMaj = totalPercu * (6/100)

    // calcul cotisation patronal Ircantec Tranche A
    // formule utilisée : (∑ des revenus) * 4.2%
    let cotPatIrcTraA = totalPercu * (4.2/100)

    // calcul cotisation patronal VST mobilité
    //formule utilisée : (∑ des revenus) * 2%
    let cotPatVstMob = totalPercu * (2/100)

    
    
    // Affichage des indemnités perçues
    
    document.getElementById("traitBrut2").innerHTML = `<span style="font-weight:bold;">101000</span> Traitement Brut <span style='color: red;font-weight : bold;'>${traiteBrut.toFixed(2)} €</span> `

    /* Numéro ligne fiche de paie : 102000*/
    document.getElementById('indeSalariale').innerHTML = `<span style="font-weight:bold;">102000</span> Indemnite de résidence :</span> ${indRes.toFixed(2)} €`
 
    /* Numéro ligne fiche de paie : 202477*/
    document.getElementById('indFonct').innerHTML = `<span style="font-weight:bold;"> 202477</span> Indemnité de fonction : ${indFonct.toFixed(2)} €`
    
    //Affichage des Charges
    /* Charges Salariales*/
    
    // Numero de ligne de paie : 016052 Total Absence Carence
    // équivaut à 1/30 retenu sur le traitement but
    

    // équivaut à 1/30 retenu sur l'indemnité de fonction 
    // equivaut à 1/30 retenue sur la prime REP
    // equivaut à 1/30 retenue sur la prime REP+

    /*Numéro ligne fiche de paie : 401112 Cotisation salariale vieillesse plafonnée */
    document.getElementById('cotSalViePla').innerHTML = `<span style="font-weight:bold;">401112</span> Cotisation salariale viellesse plafonnée : ${cotSalViePla.toFixed(2)} €`
    
    /* Numero ligne fiche de paie : 401210 CSG non Déductible */
    document.getElementById('csgNonDed').innerHTML = `<span style="font-weight:bold;">401210</span> C.S.G non déductible ${csgNonDed.toFixed(2)} €`
    
    /* Numéro de ligne fiche de paie :  401310 CSG déductible */
    document.getElementById('csgDed').innerHTML = `<span style="font-weight:bold;">401210</span> C.S.G déductible ${csgDed.toFixed(2)} €`
    
    /* Numéro de ligne fiche de paie :  401510 CRDS */
    document.getElementById('crds').innerHTML = `<span style="font-weight:bold;">401510</span> C.S.G non déductible ${crds.toFixed(2)} €`

    // numéro de ligne  fiche de paie  : 402112 Cot Sal Vieillesse Déplafonné
    document.getElementById('cotSalVieiDepla').innerHTML =`<span style="font-weight:bold;">402212</span> cot SAL Viellesse Deplaf ${cotSalVieiDepla.toFixed(2)} €`
    
    /* Numéro de ligne fiche de paie : 501010 Cotisation salariale IRCANTEX tranche A */
    document.getElementById('cotSalIrcantrA').innerHTML = `<span style="font-weight:bold;">501010</span> Cot Sal IRCANTEC TR.A ${cotSalIrcanTrA.toFixed(2)} €`
    
    
    /* Calcul du total Percu Brut*/
     document.getElementById("totalPer").innerHTML = `Total Brut Perçu : ${totalPercu.toFixed(2)} €`
    
    /*Calcul du charge Salariale*/
    let totalRetenu = cotSalViePla + csgNonDed + csgDed + crds + cotSalIrcanTrA + cotSalVieiDepla + carence
    let pourcentageSal = (totalRetenu / totalPercu) * 100
    document.getElementById("totalRetenu").innerHTML = `<span style="font-weight:bold;">Total retenue Salariale :</span> ${totalRetenu.toFixed(2)} € soit ${pourcentageSal.toFixed(2)} %`
    
    // Affichage des Charges Patronales

    // Numéro de ligne fiche de paie : 403312 Cotisation Patronale Allocation Familliale
    document.getElementById("cotPatAlloFam").innerHTML = `<span style ="font-weight:bold;">403312</span> Cot Patronn. Alloc Famil : ${cotPatAlloFam.toFixed(2)} € `
    
    // Numéro de ligne fiche de paie : 403398 Cotisation Patronale AF Majoration
    document.getElementById('cotPatAfMaj').innerHTML =`<span style="font-weight:bold;">403398</span> Cot Pat AF Majoration : ${cotPatAfMaj.toFixed(2)} €`

    // Numéro de ligne fiche de paie : 403412 Cotisation Patronale AF Majoration
    document.getElementById('cotPatAccTra').innerHTML = `<span style="font-weight:bold;">403412</span> Cot Pat Accident Travail : ${cotPatAccTra.toFixed(2)} €`

    // Numéro de ligne fiche de paie : 403512 Cotisation Patronale FNAL deplafonnée
    document.getElementById('cotPatFnalDepl').innerHTML = `<span style="font-weight:bold;">403512</span> Cot Pat FNAL DEPLAFONNEE : ${cotPatFnalDepl.toFixed(2)} €`

    // Numéro de ligne fiche de paie : 403612 Cotisation Patronale Vieillesse Plafonnée
    document.getElementById('cotPatVieiPlaf').innerHTML = `<span style="font-weight:bold;">403612</span> Cot Pat Vieillesse Plaf : ${cotPatVieiPlaf.toFixed(2)} €`

    // Numéro de ligne fiche de paie : 403712 Cotisation Patronale Vieillesse Déplafonnée
    document.getElementById('cotPatVieilDepl').innerHTML = `<span style="font-weight:bold;">403712</span> Cot Pat Vieillesse Deplaf  : ${cotPatVieilDepl.toFixed(2)} € `

    // Numéro de ligne fiche de paie : 403812 Contribution Solidarité Autonomie
    document.getElementById('contSolAuto').innerHTML = `<span style="font-weight:bold;">403812</span> Cont SOLIDARITE AUTONOMIE : ${contSolAuto.toFixed(2)} €`

    // Numéro de ligne fiche de paie : 404012 Cotisation Patronale Maladie Deplafonnée
    document.getElementById('cotPatMalDepla').innerHTML = `<span style="font-weight:bold;">404012</span> Cot Pat MALADIE Deplaf : ${cotPatMalDepla.toFixed(2)} €`

    // Numéro de ligne fiche de paie : 404098 Cotisation Patronale Mal Majoration
    document.getElementById('cotPatMalMaj').innerHTML = `<span style="font-weight:bold;">404098</span> Cot Pat Maladie Deplaf : ${cotPatMalMaj.toFixed(2)} €`

    // Numéro de ligne fiche de paie : 501110 Cotisation Patronale Ircantec Tranche A
    document.getElementById('cotPatIrcTraA').innerHTML = `<span style="font-weight:bold;">501110</span> Cot Pat Ircantex TR.A : ${cotPatIrcTraA.toFixed(2)} €`

    // Numéro de ligne fiche de paie : 554500 Cotisation Patronale VST Mobilité
    document.getElementById('cotPatVstMob').innerHTML = `<span style="font-weight:bold;">554500</span> Cot Pat VST Mobilité :${cotPatVstMob.toFixed(2)} € `

    // Calcul Montant Total Charges Patronales
    let totalCharPatr = (cotPatAlloFam + cotPatAfMaj + cotPatAccTra + cotPatFnalDepl + cotPatVieiPlaf + cotPatVieilDepl + contSolAuto +cotPatMalDepla +cotPatMalMaj + cotPatIrcTraA + cotPatVstMob)
    let PourCharPart = (totalCharPatr /totalPercu) * 100
    document.getElementById("totalCharPatr").innerHTML = `<span style="font-weight:bold;">Total charges Patronales  :</span> ${totalCharPatr.toFixed(2)} € soit ${PourCharPart.toFixed(2)} %`

    // Calcul net à payer
    let NetAPayer = (totalPercu - totalRetenu)
    document.getElementById('NetAPayer').hidden=false
    document.getElementById('NetAPayer').innerHTML = `<span style="font-weight:bold;">Net à Payer :</span> ${NetAPayer.toFixed(2)}`

    // récapitulatif (REvenue - Charges salariale)
    document.getElementById('recapi').hidden=false
    
    document.getElementById('recapPercu').innerHTML = `Total Brut :  ${totalPercu.toFixed(2)} €`
    

    document.getElementById('recapRetenu').innerHTML=`- Total Brut : ${totalRetenu.toFixed(2)} €`
    document.getElementById('emote').hidden=false

    
    /* Calcul jour de carence */
    /* équivaut à 1/30 retenu sur le traitement but */
    /* équivaut à 1/30 retenu sur l'indemnité de fonction */
    /* equivaut à 1/30 retenue sur la prime REP*/
    /** equivaut à 1/30 retenue sur la prime REP+ **/
    
    /* Calcul jour non rémunéré (GREVE)*/
    /* équivaut à 1/30 retenu sur le traitement brut */
    /* équivaut à 1/30 retenue sur l'indemnité de fonction*/
    /* équivaut à 1/30 retenue sur la prime REP*/
    /** equivaut à 1/30 retenue sur la prime REP+ **/
    
    /* Calcul jour non rémunéré (journée sans solde)*/
    /* équivaut à 1/30 retenu sur le traitement brut */
    /* équivaut à 1/30 retenue sur l'indemnité de fonction*/
    /* équivaut à 1/30 retenue sur la prime REP*/
    /** equivaut à 1/30 retenue sur la prime REP+ **/
}

compute()