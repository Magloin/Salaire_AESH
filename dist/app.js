console.log('hello');
const pointDIndice = 4.9227;
const ValPrimFonct = 1529;
let montantPrimRep = 0;
let primeRep = 0;
let totalPercu = 0;
let indFonctCar = 0;
const divToggleRepRepPlus = document.getElementById('toggleRepRepPlus');
function toggleArretSection({ hide }) {
    let nbArretSection = 0;
    const divArretSection = document.getElementById('nbArretSection');
    if (nbArretSection < 0 && divArretSection != null) {
        divArretSection.hidden = hide;
    }
}
function toggleRepRepPlus({ hide }) {
    const divToggleRepRepPlus = document.getElementById('toggleRepRepPlus');
    if (toggleRepRepPlus < 0 && divToggleRepRepPlus != null) {
        divToggleRepRepPlus.hidden = hide;
    }
}
/* Calcul du salaire brut en fonction du coefficient*/
function compute() {
    let quotite = 0;
    const divCoef = document.querySelector('input[name="coef"]:checked');
    const coefficient = quotite = Number(divCoef.value);
    const divResultat = document.getElementById("resultat");
    if (isNaN(coefficient)) {
        divResultat.innerText = 'Merci de rentrer un entier';
        return;
    }
    const coef = Math.trunc(Number(coefficient));
    if (coef < 100 || coef > 999) {
        divResultat.innerText = 'Merci de rentrer un coef à 3 chiffre';
        return;
    }
    let resultat = 0;
    let salaireBrut = Math.round(coef * pointDIndice * 100) / 100;
    const divSalaireBrut = document.getElementById("salaireBrut");
    if (resultat < 0 && divResultat != null) {
        divResultat.innerHTML = `Votre Salaire Brut pour le coefficient 
    <span style='font-weight:bolder'> ${coef} </span> est de :
    <span style='font-weight : bolder;color:rgb(0,128,0);'>  
    ${salaireBrut.toLocaleString('fr-FR', {
            style: 'currency', currency: 'EUR'
        })} </span> ETP`;
        salaireBrut = Number(salaireBrut.valueOf);
    }
}
/* Calcul*/
function compute2() {
    /* selecteur  par bouton radio*/
    let quotite = 0;
    const inputQuotite = document.querySelector('input[name="quotite"]:checked');
    quotite = Number(inputQuotite.value);
    let divTraitBrut = document.getElementById("traitBrut : string");
    if (isNaN(quotite)) {
        divTraitBrut.innerText = 'Merci de rentrer un entier sans le pourcentage';
        return;
    }
    if (quotite < 50 || quotite > 100) {
        divTraitBrut.innerText = 'Merci de rentrer une quotité comprise entre 50 et 100 sans le pourcentage';
        return;
    }
    const divSalaireBrut = document.getElementById('salaireBrut');
    let salaireBrut = Number(divSalaireBrut.value);
    let traiteBrut = (quotite / 100) * salaireBrut;
    /* Numéro ligne fiche de paie : 101000*/
    divTraitBrut.innerHTML = `<span style ="font-weight:bold;">101000</span> Traitement Brut : <span style='color: red;'>${traiteBrut.toFixed(2)} €</span>  pour une quotité de ${quotite} %`;
    /* Indemnite de résidence*/
    // https://sgen-cfdt.fr/contenu/uploads/sites/3/2016/12/circulaire_fp_12_03_2001_ind_residence.pdf
    let indRes = traiteBrut * (1 / 100);
    /* Indemnité de fonction*/
    // texte mise en place : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000047826432
    // texte reglementaire : https://www.legifrance.gouv.fr/loda/id/LEGIARTI000047843858/#LEGIARTI000047843858
    let indFonct = (ValPrimFonct * (quotite / 100)) / 12;
    // Calcul de la prime REP ou REP+
    //document.getElementById('primRep').innerHTML=`<span style='font-weight:bold;">PRIM-REP</span> Prime REP : ${primRep.toFixed(2)} €`
    const divPrimRep = document.getElementById("primRep: number");
    const divRep = document.getElementById('rep');
    const divReep = document.getElementById('reep+');
    if (divRep.checked) {
        divToggleRepRepPlus.hidden = false;
        if (divReep.checked) {
            montantPrimRep = 3263; //montant REP+
            primeRep = (montantPrimRep * (quotite / 100)) / 12;
            //console.log(primeRep)
            divPrimRep.innerHTML = `<span style='font-weight:bold;'>201882&nbsp;&nbsp;&nbsp;
             </span>Ind. sujetion REP+ (part fixe) :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
             <span style='color:rgb(0,128,0); font-weight:bolder;'>${primeRep.toFixed(2)} €</span>`;
        }
        else {
            montantPrimRep = 1106; //montant prime REP
            primeRep = (montantPrimRep * (quotite / 100)) / 12;
            //console.log(primeRep)
            //const divPrimRep = document.getElementById("primRep: string") as HTMLDivElement
            divPrimRep.innerHTML = `<span style='font-weight:bold;'>201883&nbsp; &nbsp; &nbsp; 
             </span> Ind. Sujetion REP (part fixe) :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp 
             <span style='color:rgb(0,128,0); font-weight:bolder;'>${primeRep.toFixed(2)} €</span>`;
        }
    }
    // Jour de carence
    // formule utilisée : (Traitement brut /30)divNbArret
    let carence = 0;
    const divCarence = document.getElementById('carence');
    const divNbArret = document.getElementById('nbArret');
    if (divCarence.checked) {
        const divResultCarence = document.getElementById('resultCarence');
        let nbArret = Number(divNbArret.value);
        carence = (traiteBrut / 30) * nbArret;
        indFonctCar = (indFonct / 30) * nbArret;
        divResultCarence.hidden = false;
        divResultCarence.innerHTML = `<span style="font-weight:bold;">016052</span> Total Absence Carence : ${carence.toFixed(2)} € `;
        const divExplicationCarence = document.getElementById('explicationCarence');
        divExplicationCarence.innerHTML = `<div class="explicationCarence">Nb d'arrêt(s) : ${nbArret}\n</div> <div class="explicationCarence">x coût d'une journée retenue : ${(traiteBrut / 30).toFixed(2)} €\n</div> <div class="explicationCarence"> = Retenue sur salaire : ${carence.toFixed(2)} €</div> </span>`;
        // Calcul retenue jour de carence sur indemnite de fonction
        // indFonct
        const divIndFonctCar = document.getElementById('indFonctCar');
        divIndFonctCar.innerHTML = `<span style="font-weight:bold;"> 202477</span> Indemnité de fonction Carence : ${indFonctCar.toFixed(2)} €`;
        const divIndFonctCarExp = document.getElementById('indFonctCarExp');
        divIndFonctCarExp.innerHTML = `<div class="explicationCarence1">Nb d'arrêt(s) : ${nbArret}\n</div> <div class="explicationCarence">x coût retenue sur prime d'indemnite de fonction  : ${(indFonct / 30).toFixed(2)} €\n</div> <div class="explicationCarence"> = Retenue sur indemnité de fonction  : ${indFonctCar.toFixed(2)} €</div></span>`;
    }
    //Si prime REP = Oui et arrêt maladie = oui
    //alors
    //Prime REP = (PrimeRep/30)* nbArret 
    let nbArret = Number(divNbArret.value);
    if (divReep.checked) {
        montantPrimRep = 3263; //montant REP+
        let primeRep = (((montantPrimRep * (quotite / 100)) / 12) / 30) * nbArret;
        console.log(`la retenue rep+ est ${primeRep} €`);
        divPrimRep.innerHTML = `<span style='font-weight:bold;'>201882&nbsp;&nbsp;&nbsp;
             </span>Ind. sujetion REP+ (part fixe) :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
             <span style='color:rgb(0,128,0); font-weight:bolder;'>${primeRep.toFixed(2)} €</span>`;
    }
    else {
        montantPrimRep = 1106; //montant prime REP
        primeRep = (((montantPrimRep * (quotite / 100)) / 12) / 30) * nbArret;
        console.log(`la retenue rep est ${primeRep} €`);
        divPrimRep.innerHTML = `<span style='font-weight:bold;'>201883&nbsp; &nbsp; &nbsp; 
             </span> Ind. Sujetion REP (part fixe) :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp 
             <span style='color:rgb(0,128,0); font-weight:bolder;'>${primeRep.toFixed(2)} €</span>`;
    }
    // affichage de la PSC
    let psc = 15;
    const divPsc = document.getElementById('psc');
    if (divPsc.checked) {
        // console.log("case validé")
        const divShowPsc = document.getElementById('showPsc');
        divShowPsc.innerHTML = `<span  style="font-weight:bold;">202354&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         </span> Participation à la PSC :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
         <span style='color:rgb(0,128,8); font-weight:bolder;'>${psc.toFixed(2)} €</span>`;
    }
    /*Cotisation salariale vieillesse plafonné : Taux : 6.9%
    Formule utilisée : ((∑ des revenus)* 6.90% */
    totalPercu = traiteBrut + indRes + indFonct + primeRep + psc;
    const totalPercuFormate = (`${totalPercu.toLocaleString('fr-FR', {
        style: 'currency', currency: 'EUR'
    })}`);
    let cotSalViePla = (totalPercu) * (6.9 / 100);
    /* Calcul CSG non déductible*/
    /* Formule utilisée : ((∑ des revenus) * 98.25%) * 2.40% */
    let csgNonDed = (totalPercu * (98.25 / 100)) * (2.4 / 100);
    /* Calcul CSG déductible*/
    /* Formule utilisée : ((∑ des revenus) * 98.25%) * 6.80% */
    let csgDed = (totalPercu * (98.25 / 100)) * (6.8 / 100);
    /* Calcul CRDS */
    /* formule utilisée : ((∑ des revenus)*98.25%)* 0.50% */
    let crds = ((totalPercu) * (98.25 / 100)) * (0.5 / 100);
    // calcul cotisation salariale vieillesse deplafonné
    // Formule utilisée : ((∑ des revenus)* 0.4%
    let cotSalVieiDepla = totalPercu * (0.4 / 100);
    /* Calcul Cotisation salariale Ircantec Tranche A*/
    /* Formule utilisée : (∑ des revenus)*2.80% */
    let cotSalIrcanTrA = totalPercu * (2.80 / 100);
    /* Calcul des Charges Employeurs */
    // calcul cotisation allocation familliale 
    // formule de calcul utilisé : (∑ des revenus) * 3.45%
    let cotPatAlloFam = totalPercu * (3.45 / 100);
    // Calcul cotisation patronale Allocation patronnale majoration
    // formule de calcul utilisé : (∑ des revenus) * 1.80%
    let cotPatAfMaj = totalPercu * (1.80 / 100);
    // Calcul cotisation patronal accident du travail
    // formule utilisée : (∑ des revenus) * 1.02%
    //https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000046821482
    let cotPatAccTra = totalPercu * (1.02 / 100);
    //calcul cotisation patronal FNAL deplafonnée
    // formule utulisé : (∑ des revenus) * 0.5%
    let cotPatFnalDepl = totalPercu * (0.5 / 100);
    // calcul cotisation patronal Vieillesse plafonné
    // formule utilisée : (∑ des revenus) * 8.55%
    let cotPatVieiPlaf = totalPercu * (8.55 / 100);
    // calcul cotisation patranal viellesse deplafonné
    //formule utilisée : (∑ des revenus) * 1.9%
    let cotPatVieilDepl = totalPercu * (1.9 / 100);
    // calcul contribution solidarité autonomie
    //formule utilisée : (∑ des revenus) * 0.3%
    let contSolAuto = totalPercu * (0.3 / 100);
    // calcul cotisation patronal maladie déplafonné
    // formule utilisée : (∑ des revenus) * 7%
    let cotPatMalDepla = totalPercu * (7 / 100);
    // calcul cotisation patronal maladie Majoration
    //formule utilisée : (∑ des revenus) * 6%
    let cotPatMalMaj = totalPercu * (6 / 100);
    // calcul cotisation patronal Ircantec Tranche A
    // formule utilisée : (∑ des revenus) * 4.2%
    let cotPatIrcTraA = totalPercu * (4.2 / 100);
    // calcul cotisation patronal VST mobilité
    //formule utilisée : (∑ des revenus) * 2%
    let cotPatVstMob = totalPercu * (2 / 100);
    const divH2Title = document.querySelectorAll("h2.titleh2");
    divH2Title.hidden = false;
    // Affichage des indemnités perçues
    const divTraitBrut2 = document.getElementById("traitBrut2");
    divTraitBrut2.innerHTML = `<span style="font-weight:bold;">101000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </span> Traitement Brut : &nbsp;
     <span style='color: rgb(0,128,0);font-weight:bolder;'>${traiteBrut.toFixed(2)} €</span> `;
    /* Indemnite de résidence -> Numéro ligne fiche de paie : 102000*/
    const divIndeSalariale = document.getElementById('indeSalariale');
    divIndeSalariale.innerHTML = `<span style="font-weight:bold;">102000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </span> Indemnité de résidence :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <span style='color: rgb(0,128,0); font-weight:bolder;'> ${indRes.toFixed(2)} €</span>`;
    /*  Indemnite de Fonction -> Numéro ligne fiche de paie : 202477*/
    const divIndFonct = document.getElementById('indFonct');
    if (indFonct >= 100) {
        divIndFonct.innerHTML = `<span style="font-weight:bold;"> 202477&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;
     </span> Indemnité de fonction :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <span style='color: rgb(0,128,0); font-weight:bolder;'> ${indFonct.toFixed(2)} € </span>`;
    }
    else {
        divIndFonct.innerHTML = `<span style="font-weight:bold;"> 202477&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;
     </span> Indemnité de fonction :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <span style='color: rgb(0,128,0); font-weight:bolder;'> ${indFonct.toFixed(2)} € </span>`;
    }
    //Affichage des Charges
    /* Charges Salariales*/
    // Numero de ligne de paie : 016052 Total Absence Carence
    // équivaut à 1/30 retenu sur le traitement but
    // équivaut à 1/30 retenu sur l'indemnité de fonction 
    // equivaut à 1/30 retenue sur la prime REP
    // equivaut à 1/30 retenue sur la prime REP+
    /*Numéro ligne fiche de paie : 401112 Cotisation salariale vieillesse plafonnée */
    const divCotSalViePla = document.getElementById('cotSalViePla');
    divCotSalViePla.innerHTML = `<span style="font-weight:bold;">401112&nbsp;</span> 
     Cotisation salariale viellesse plafonnée :&nbsp;&nbsp; 
     <span style='color: rgb(255,0,0); font-weight:bolder;'>${cotSalViePla.toFixed(2)} €</span>`;
    /* Numero ligne fiche de paie : 401210 CSG non Déductible */
    const divCsgNonDed = document.getElementById('csgNonDed');
    divCsgNonDed.innerHTML = `<span style="font-weight:bold;">401210&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </span> C.S.G non déductible :&nbsp;&nbsp; 
     <span style='color: rgb(255,0,0); font-weight:bolder;'>${csgNonDed.toFixed(2)} € </span>`;
    /* Numéro de ligne fiche de paie :  401310 CSG déductible */
    const divCsgDed = document.getElementById('csgDed');
    divCsgDed.innerHTML = `<span style="font-weight:bold;">401310&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </span> C.S.G déductible :&nbsp;&nbsp; 
     <span style='color: rgb(255,0,0); font-weight:bolder;'>${csgDed.toFixed(2)} €</span>`;
    /* Numéro de ligne fiche de paie :  401510 CRDS */
    const divCrds = document.getElementById('crds');
    divCrds.innerHTML = `<span style="font-weight:bold;">401510&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </span> C.R.D.S :&nbsp;&nbsp;&nbsp;&nbsp; 
     <span style='color: rgb(255,0,0); font-weight:bolder;'>${crds.toFixed(2)} €</span>`;
    // numéro de ligne  fiche de paie  : 402112 Cot Sal Vieillesse Déplafonné
    const divCotSalVieiDepla = document.getElementById('cotSalVieiDepla');
    divCotSalVieiDepla.innerHTML = `<span style="font-weight:bold;">402212&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </span> cot SAL Viellesse Deplaf :&nbsp;&nbsp;&nbsp;&nbsp; 
     <span style='color: rgb(255,0,0); font-weight:bolder;'>${cotSalVieiDepla.toFixed(2)} € </span>`;
    /* Numéro de ligne fiche de paie : 501010 Cotisation salariale IRCANTEX tranche A */
    const divCotSalIrcantrA = document.getElementById('cotSalIrcantrA');
    divCotSalIrcantrA.innerHTML = `<span style="font-weight:bold;">501010&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </span> Cot Sal IRCANTEC TR.A :&nbsp;&nbsp; 
     <span style='color: rgb(255,0,0); font-weight:bolder;'>${cotSalIrcanTrA.toFixed(2)} €</span>`;
    /* Calcul du total Percu Brut*/
    const divTotalPer = document.getElementById("totalPer");
    divTotalPer.innerHTML = `Total Brut Perçu : <span style='color:rgb(0,128,0);font-weight:bolder;'> ${totalPercuFormate} </span>`;
    /*(`${salaireBrut.toLocaleString('fr-FR',{
        style:'currency', currency:'EUR'
    })}`)*/
    /*Calcul du charge Salariale*/
    let totalRetenu = cotSalViePla + csgNonDed + csgDed + crds + cotSalIrcanTrA + cotSalVieiDepla + carence + indFonctCar;
    const totalRetenuformate = (`${totalRetenu.toLocaleString('fr-FR', {
        style: 'currency', currency: 'EUR'
    })}`);
    let pourcentageSal = (totalRetenu / totalPercu) * 100;
    const divTotalRetenu = document.getElementById("totalRetenu");
    divTotalRetenu.innerHTML = `<span style="font-weight:bold;">Total retenue Salariale : </span>(${pourcentageSal.toFixed(2)} %) <span style='color:red;'>${totalRetenuformate} </span>`;
    // Affichage des Charges Patronales
    // Numéro de ligne fiche de paie : 403312 Cotisation Patronale Allocation Familliale
    const divCotPatAlloFam = document.getElementById("cotPatAlloFam");
    divCotPatAlloFam.innerHTML = `<span style ="font-weight:bold;">403312&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </span> 
     Cot Patronn. Alloc Famil :&nbsp;&nbsp;&nbsp;&nbsp; <span style='color:#c61ce8;font-weight:bold;'>${cotPatAlloFam.toFixed(2)}  €</span> `;
    // Numéro de ligne fiche de paie : 403398 Cotisation Patronale AF Majoration
    const divCotPatAfMaj = document.getElementById('cotPatAfMaj');
    divCotPatAfMaj.innerHTML = `<span style="font-weight:bold;">403398&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </span> Cot Pat AF Majoration :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color:#c61ce8;font-weight:bold;'>${cotPatAfMaj.toFixed(2)} €</span>`;
    // Numéro de ligne fiche de paie : 403412 Cotisation Patronale AF Majoration
    const divCotPatAccTra = document.getElementById('cotPatAccTra');
    divCotPatAccTra.innerHTML = `<span style="font-weight:bold;">403412&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </span> Cot Pat Accident Travail :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color:#c61ce8;font-weight:bold;'>${cotPatAccTra.toFixed(2)} €</span>`;
    // Numéro de ligne fiche de paie : 403512 Cotisation Patronale FNAL deplafonnée
    const divCotPatFnalDepl = document.getElementById('cotPatFnalDepl');
    divCotPatFnalDepl.innerHTML = `<span style="font-weight:bold;">403512</span> Cot Pat FNAL Déplafonnée :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color:#c61ce8;font-weight:bold;'>${cotPatFnalDepl.toFixed(2)} €</span>`;
    // Numéro de ligne fiche de paie : 403612 Cotisation Patronale Vieillesse Plafonnée
    const divCotPasVieiPlaf = document.getElementById('cotPatVieiPlaf');
    divCotPasVieiPlaf.innerHTML = `<span style="font-weight:bold;">403612&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </span> Cot Pat Vieillesse Plaf :&nbsp;&nbsp;&nbsp;<span style='color:#c61ce8;font-weight:bold;'>${cotPatVieiPlaf.toFixed(2)} €</span>`;
    // Numéro de ligne fiche de paie : 403712 Cotisation Patronale Vieillesse Déplafonnée
    const divCotPatVieilDepl = document.getElementById('cotPatVieilDepl');
    divCotPatVieilDepl.innerHTML = `<span style="font-weight:bold;">403712&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </span> Cot Pat Vieillesse Deplaf :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color:#c61ce8;font-weight:bold;'>${cotPatVieilDepl.toFixed(2)} €</span> `;
    // Numéro de ligne fiche de paie : 403812 Contribution Solidarité Autonomie
    const divContSolAuto = document.getElementById('contSolAuto');
    divContSolAuto.innerHTML = `<span style="font-weight:bold;">403812&nbsp;
     </span> Cont Solidarité Autonomie :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color:#c61ce8;font-weight:bold;'>${contSolAuto.toFixed(2)} €</span>`;
    // Numéro de ligne fiche de paie : 404012 Cotisation Patronale Maladie Deplafonnée
    const divCotPatMalDepla = document.getElementById('cotPatMalDepla');
    divCotPatMalDepla.innerHTML = `<span style="font-weight:bold;">404012&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </span> Cot Pat Maladie Deplaf :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style='color:#c61ce8;font-weight:bold;'>${cotPatMalDepla.toFixed(2)} €</span>`;
    // Numéro de ligne fiche de paie : 404098 Cotisation Patronale Mal Majoration
    const divCotPatMalMaj = document.getElementById('cotPatMalMaj');
    divCotPatMalMaj.innerHTML = `<span style="font-weight:bold;">404098&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </span> Cot Pat Maladie Deplaf :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style='color:#c61ce8;font-weight:bold;'>${cotPatMalMaj.toFixed(2)} €</span>`;
    // Numéro de ligne fiche de paie : 501110 Cotisation Patronale Ircantec Tranche A
    const divCotPatIrcTraA = document.getElementById('cotPatIrcTraA');
    divCotPatIrcTraA.innerHTML = `<span style="font-weight:bold;">501110&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </span> Cot Pat Ircantex TR.A :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style='color:#c61ce8;font-weight:bold;'>${cotPatIrcTraA.toFixed(2)} €</span>`;
    // Numéro de ligne fiche de paie : 554500 Cotisation Patronale VST Mobilité
    const divCotPatVstMob = document.getElementById('cotPatVstMob');
    divCotPatVstMob.innerHTML = `<span style="font-weight:bold;">554500&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </span> Cot Pat VST Mobilité :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color:#c61ce8;font-weight:bold;'>${cotPatVstMob.toFixed(2)} €</span> `;
    // Calcul Montant Total Charges Patronales
    let totalCharPatr = (cotPatAlloFam + cotPatAfMaj + cotPatAccTra + cotPatFnalDepl + cotPatVieiPlaf + cotPatVieilDepl + contSolAuto + cotPatMalDepla + cotPatMalMaj + cotPatIrcTraA + cotPatVstMob);
    let PourCharPart = (totalCharPatr / totalPercu) * 100;
    const divTotalCharPatr = document.getElementById("totalCharPatr");
    divTotalCharPatr.innerHTML = `<span style="font-weight:bold;">Total charges Patronales  :</span> (${PourCharPart.toFixed(2)} %) <span style="color:#c61ce8;">${totalCharPatr.toFixed(2)} € </span> `;
    // Calcul net à payer
    let NetAPayer = (totalPercu - totalRetenu);
    const divNetAPayer = document.getElementById('NetAPayer');
    divNetAPayer.hidden = false;
    divNetAPayer.innerHTML = `<span style="font-weight:bold;">Net à Payer :</span><br/> ${NetAPayer.toFixed(2)} €`;
    // récapitulatif (REvenue - Charges salariale)
    const divRecapi = document.getElementById('recapi');
    divRecapi.hidden = false;
    const divRecapPercu = document.getElementById('recapPercu');
    divRecapPercu.innerHTML = `Total Brut :<span style='color: rgb(0,128,0); font-weight:bolder;'>  ${totalPercuFormate}</span>`;
    const divRecapRetenu = document.getElementById('recapRetenu');
    divRecapRetenu.innerHTML = `- Total retenu : ${totalRetenu.toFixed(2)} €&nbsp;&nbsp;&nbsp;&nbsp;`;
    const divArrow = document.getElementById('arrow');
    divArrow.hidden = false;
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
compute();
export {};
