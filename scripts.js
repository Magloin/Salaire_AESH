// git add . 
// git commit -m "third commit"
// git push origin main


//Catalogue des établissements
// https://data.education.gouv.fr/explore/dataset/fr-en-etablissements-ep/table/?disjunctive.ep_2022_2023&disjunctive.type_etablissement&disjunctive.libelle_academie&disjunctive.libelle_departement&disjunctive.nom_commune&disjunctive.libelle_region&disjunctive.uai_tete_de_reseau&disjunctive.qp_a_proximite_o_n&refine.ep_2022_2023=REP%2B


//circulaire coefficient indemnite de residence
// https://sgen-cfdt.fr/contenu/uploads/sites/3/2016/12/circulaire_fp_12_03_2001_ind_residence.pdf


// Methode calcul SFT
// https://www.fonction-publique.gouv.fr/files/files/Publications/Publications%20DGAFP/2022/guide_SFT.pdf


// taux prime REP  et REP+ pour 2023
// texte reglementtaire :  https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000046711260
// texte reglementaire initiale : https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031113279
// texte reglementaire avec montant part fixe et part varialble : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000046711303
// Liste des etablissements classés REP : https://cache.media.education.gouv.fr/file/6/58/8/ensel0057_annexe_listeREP_388588.pdf
//pour mémoire : En REP 1106 euros bruts annuels pour un temps plein 
//pour mémoire : En REP+ 3263 euros bruts annuels pour un temps plein



// valeur des constantes
const pointDIndice = 4.9227
const ValPrimFonct = 1529
let montantPrimRep = 0
let primeRep =0
let totalPercu = 0
let indFonctCar =0

function toggleArretSection(hide){
    document.getElementById('nbArretSection').hidden = hide
}

function toggleRepRepPlus(hide){
    document.getElementById('toggleRepRepPlus').hidden = hide
}

/* Calcul du salaire brut en fonction du coefficient*/
function compute() {
    
    const coefficient = quotite = Number(document.querySelector('input[name="coef"]:checked').value);

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
    document.getElementById("resultat").innerHTML = `Votre Salaire Brut pour le coefficient 
    <span style='font-weight:bolder'> ${coef} </span> est de :
    <span style='font-weight : bolder;color:rgb(0,128,0);'>  
    ${salaireBrut.toLocaleString('fr-FR',{
        style:'currency', currency:'EUR'
    })} </span> ETP`
    document.getElementById("salaireBrut").value = salaireBrut


   
  
}

/* Calcul*/

function compute2() {
    //document.querySelectorAll('.h2title').hidden=false


   /* selecteur  par bouton radio*/
    let quotite = 0
    quotite = Number(document.querySelector('input[name="quotite"]:checked').value);
   

    if (isNaN(quotite)) {
        document.getElementById("traitBrut").innerText = 'Merci de rentrer un entier sans le pourcentage'
        return
    } 
    
    
    if (quotite <50 || quotite>100){
        document.getElementById("traitBrut").innerText = 'Merci de rentrer une quotité comprise entre 50 et 100 sans le pourcentage'
        return
    }
   
    let salaireBrut = Number(document.getElementById("salaireBrut").value)
    
    let traiteBrut = (quotite/100)*salaireBrut
    
    
    /* Numéro ligne fiche de paie : 101000*/
    document.getElementById("traitBrut").innerHTML = `<span style ="font-weight:bold;">101000</span> Traitement Brut : <span style='color: red;'>${traiteBrut.toFixed(2)} €</span>  pour une quotité de ${quotite} %`
    
    
    /* Indemnite de résidence*/
    // https://sgen-cfdt.fr/contenu/uploads/sites/3/2016/12/circulaire_fp_12_03_2001_ind_residence.pdf
    let indRes = traiteBrut *(1/100)
    
    /* Indemnité de fonction*/
    // texte mise en place : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000047826432
    // texte reglementaire : https://www.legifrance.gouv.fr/loda/id/LEGIARTI000047843858/#LEGIARTI000047843858
    let indFonct = (ValPrimFonct*(quotite/100))/12
    
    // Calcul de la prime REP ou REP+
    //document.getElementById('primRep').innerHTML=`<span style='font-weight:bold;">PRIM-REP</span> Prime REP : ${primRep.toFixed(2)} €`

    if(document.getElementById('rep').checked){
        document.getElementById('toggleRepRepPlus').hidden=false
        if(document.getElementById('reep+').checked){
            montantPrimRep = 3263 //montant REP+
            primeRep = (montantPrimRep * (quotite/100))/12
            //console.log(primeRep)
            document.getElementById('primRep').innerHTML=`<span style='font-weight:bold;'>201882&nbsp;&nbsp;&nbsp;
            </span>Ind. sujetion REP+ (part fixe) :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <span style='color:rgb(0,128,0); font-weight:bolder;'>${primeRep.toFixed(2)} €</span>`
        } else {
            montantPrimRep = 1106 //montant prime REP
            primeRep = (montantPrimRep * (quotite/100))/12
            //console.log(primeRep)
            document.getElementById('primRep').innerHTML=`<span style='font-weight:bold;'>201883&nbsp; &nbsp; &nbsp; 
            </span> Ind. Sujetion REP (part fixe) :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp 
            <span style='color:rgb(0,128,0); font-weight:bolder;'>${primeRep.toFixed(2)} €</span>`
        }
    }

    // Jour de carence
    // formule utilisée : (Traitement brut /30)
    let carence = 0
    if (document.getElementById('carence').checked){
        let nbArret = document.getElementById('nbArret').value
        carence = (traiteBrut / 30) * nbArret
        indFonctCar = (indFonct/30) *nbArret
        
        document.getElementById('resultCarence').hidden=false    
        document.getElementById('resultCarence').innerHTML = `<span style="font-weight:bold;">016052</span> Total Absence Carence : ${carence.toFixed(2)} € `
        document.getElementById('explicationCarence').innerHTML =`<div class="explicationCarence">Nb d'arrêt(s) : ${nbArret}\n</div> <div class="explicationCarence">x coût d'une journée retenue : ${(traiteBrut/30).toFixed(2)} €\n</div> <div class="explicationCarence"> = Retenue sur salaire : ${carence.toFixed(2)} €</div> </span>`
        // Calcul retenue jour de carence sur indemnite de fonction
        // indFonct
        document.getElementById('indFonctCar').innerHTML= `<span style="font-weight:bold;"> 202477</span> Indemnité de fonction Carence : ${indFonctCar.toFixed(2)} €`
        document.getElementById('indFonctCarExp').innerHTML =`<div class="explicationCarence1">Nb d'arrêt(s) : ${nbArret}\n</div> <div class="explicationCarence">x coût retenue sur prime d'indemnite de fonction  : ${(indFonct/30).toFixed(2)} €\n</div> <div class="explicationCarence"> = Retenue sur indemnité de fonction  : ${indFonctCar.toFixed(2)} €</div></span>`
    }
    /*
        Si prime REP = Oui et arrêt maladie = oui
            alors
        Prime REP = (PrimeRep/30)* nbArret 
        if(document.getElementById('reep+').checked){
            montantPrimRep = 3263 //montant REP+
            primeRep = (((montantPrimRep * (quotite/100))/12)/30)* nbArret
            console.log(`la retenue rep+ est ${primeRep} €`)
           /* document.getElementById('primRep').innerHTML=`<span style='font-weight:bold;'>201882&nbsp;&nbsp;&nbsp;
            </span>Ind. sujetion REP+ (part fixe) :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <span style='color:rgb(0,128,0); font-weight:bolder;'>${primeRep.toFixed(2)} €</span>`
        } else {
            montantPrimRep = 1106 //montant prime REP
            primeRep = (((montantPrimRep * (quotite/100))/12)/30)* nbArret
            console.log(`la retenue rep est ${primeRep} €`)
         /*   document.getElementById('primRep').innerHTML=`<span style='font-weight:bold;'>201883&nbsp; &nbsp; &nbsp; 
            </span> Ind. Sujetion REP (part fixe) :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp 
            <span style='color:rgb(0,128,0); font-weight:bolder;'>${primeRep.toFixed(2)} €</span>` 
        } */
    
    
    // affichage de la PSC
    let psc = 15
    if(document.getElementById('psc').checked){
       // console.log("case validé")
        document.getElementById('showPsc').innerHTML=`<span  style="font-weight:bold;">202354&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span> Participation à la PSC :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <span style='color:rgb(0,128,8); font-weight:bolder;'>${psc.toFixed(2)} €</span>`
    }
    /*Cotisation salariale vieillesse plafonné : Taux : 6.9%
    Formule utilisée : ((∑ des revenus)* 6.90% */
    
    totalPercu = traiteBrut + indRes + indFonct + primeRep + psc
    const totalPercuFormate = (`${totalPercu.toLocaleString('fr-FR',{
        style:'currency', currency:'EUR'
    })}`)
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

    document.getElementById("traitBrut2").innerHTML = `<span style="font-weight:bold;">101000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span> Traitement Brut : &nbsp;
    <span style='color: rgb(0,128,0);font-weight:bolder;'>${traiteBrut.toFixed(2)} €</span> `

    /* Indemnite de résidence -> Numéro ligne fiche de paie : 102000*/
    document.getElementById('indeSalariale').innerHTML = `<span style="font-weight:bold;">102000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span> Indemnité de résidence :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style='color: rgb(0,128,0); font-weight:bolder;'> ${indRes.toFixed(2)} €</span>`
 
    /*  Indemnite de Fonction -> Numéro ligne fiche de paie : 202477*/
    if (indFonct>=100){
        document.getElementById('indFonct').innerHTML = `<span style="font-weight:bold;"> 202477&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;
    </span> Indemnité de fonction :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style='color: rgb(0,128,0); font-weight:bolder;'> ${indFonct.toFixed(2)} € </span>`
    } else {
        document.getElementById('indFonct').innerHTML = `<span style="font-weight:bold;"> 202477&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;
    </span> Indemnité de fonction :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style='color: rgb(0,128,0); font-weight:bolder;'> ${indFonct.toFixed(2)} € </span>`
    }
    
    //Affichage des Charges
    /* Charges Salariales*/

    // Numero de ligne de paie : 016052 Total Absence Carence
    // équivaut à 1/30 retenu sur le traitement but
    

    // équivaut à 1/30 retenu sur l'indemnité de fonction 
    // equivaut à 1/30 retenue sur la prime REP
    // equivaut à 1/30 retenue sur la prime REP+

    /*Numéro ligne fiche de paie : 401112 Cotisation salariale vieillesse plafonnée */
    document.getElementById('cotSalViePla').innerHTML = `<span style="font-weight:bold;">401112&nbsp;</span> 
    Cotisation salariale viellesse plafonnée :&nbsp;&nbsp; 
    <span style='color: rgb(255,0,0); font-weight:bolder;'>${cotSalViePla.toFixed(2)} €</span>`
    
    /* Numero ligne fiche de paie : 401210 CSG non Déductible */
    document.getElementById('csgNonDed').innerHTML = `<span style="font-weight:bold;">401210&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span> C.S.G non déductible :&nbsp;&nbsp; 
    <span style='color: rgb(255,0,0); font-weight:bolder;'>${csgNonDed.toFixed(2)} € </span>`
    
    /* Numéro de ligne fiche de paie :  401310 CSG déductible */
    document.getElementById('csgDed').innerHTML = `<span style="font-weight:bold;">401310&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span> C.S.G déductible :&nbsp;&nbsp; 
    <span style='color: rgb(255,0,0); font-weight:bolder;'>${csgDed.toFixed(2)} €</span>`
    
    /* Numéro de ligne fiche de paie :  401510 CRDS */
    document.getElementById('crds').innerHTML = `<span style="font-weight:bold;">401510&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span> C.R.D.S :&nbsp;&nbsp;&nbsp;&nbsp; 
    <span style='color: rgb(255,0,0); font-weight:bolder;'>${crds.toFixed(2)} €</span>`

    // numéro de ligne  fiche de paie  : 402112 Cot Sal Vieillesse Déplafonné
    document.getElementById('cotSalVieiDepla').innerHTML =`<span style="font-weight:bold;">402212&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span> cot SAL Viellesse Deplaf :&nbsp;&nbsp;&nbsp;&nbsp; 
    <span style='color: rgb(255,0,0); font-weight:bolder;'>${cotSalVieiDepla.toFixed(2)} € </span>`
    
    /* Numéro de ligne fiche de paie : 501010 Cotisation salariale IRCANTEX tranche A */
    document.getElementById('cotSalIrcantrA').innerHTML = `<span style="font-weight:bold;">501010&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span> Cot Sal IRCANTEC TR.A :&nbsp;&nbsp; 
    <span style='color: rgb(255,0,0); font-weight:bolder;'>${cotSalIrcanTrA.toFixed(2)} €</span>`
    
    
    /* Calcul du total Percu Brut*/
     document.getElementById("totalPer").innerHTML = `Total Brut Perçu : <span style='color:rgb(0,128,0);font-weight:bolder;'> ${totalPercuFormate} </span>`
    /*(`${salaireBrut.toLocaleString('fr-FR',{
        style:'currency', currency:'EUR'
    })}`)*/
    /*Calcul du charge Salariale*/
    let totalRetenu = cotSalViePla + csgNonDed + csgDed + crds + cotSalIrcanTrA + cotSalVieiDepla + carence + indFonctCar
    const totalRetenuformate = (`${totalRetenu.toLocaleString('fr-FR',{
        style:'currency', currency:'EUR'
    })}`)
    let pourcentageSal = (totalRetenu / totalPercu) * 100
    document.getElementById("totalRetenu").innerHTML = `<span style="font-weight:bold;">Total retenue Salariale : </span>(${pourcentageSal.toFixed(2)} %) <span style='color:red;'>${totalRetenuformate} </span>`
    
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
    document.getElementById('NetAPayer').innerHTML = `<span style="font-weight:bold;">Net à Payer :</span><br/> ${NetAPayer.toFixed(2)} €`

    // récapitulatif (REvenue - Charges salariale)
    document.getElementById('recapi').hidden=false
    
    document.getElementById('recapPercu').innerHTML = `Total Brut :<span style='color: rgb(0,128,0); font-weight:bolder;'>  ${totalPercuFormate}</span>`
    document.getElementById('recapRetenu').innerHTML=`- Total retenu : ${totalRetenu.toFixed(2)} €&nbsp;&nbsp;&nbsp;&nbsp;`
    document.getElementById('arrow').hidden=false

    
    /* Calcul jour de carence */
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