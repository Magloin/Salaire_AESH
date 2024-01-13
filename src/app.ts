
// console.log('hello')

// git add . 
// git commit -m "third commit"
// git push origin main


// creation d'un branche de travail
    //git add .
    // git stash (pour mettre les dernière modificaiton en attente)
    //git checkout -b [nom de la branche] -> sft
    //git stash apply (recupération des modification en attente)

    // realiser le git push avec origine sft
    // git push origin sftx


// type script
//  initialisation 
//npm init -y -> creation d'un fichier package.json
// istallation type script
// npm install typescript --save-dev -> création fichier nodemodule

// creation du fichier App.ts

//taper la commande : npx tsc [nom du fichier] -> npx tsc app.ts => generation du fichier app.js (contenant le même code)
// charger le fichier app.js dans le fichier HTML => <script src="dist/app.js"></script>
// creer dossier dist
// creer dossier src avec le fichier App.ts à l'interieur -> npx tsc src/app.ts --outdir dist

// création dossier de configuration :
// creer dossier tsconfig.json
// {
// "compilerOptions":{
// "outdir":"dist"
//} ,
// "files": ["src/app.ts"]
//}

//-> pour lancer la compilation taper la commande  : npx tsc

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
//@ts-ignore
// export{}

//@ts-ignore
const pointDIndice: number = 4.9227
//@ts-ignore
const ValPrimFonct: number = 1529
//@ts-ignore
let montantPrimRep: number = 0
//@ts-ignore
let primeRep: number = 0
//@ts-ignore
let totalPercu: number = 0
//@ts-ignore
let indFonctCar: number = 0
//@ts-ignore
const divToggleRepRepPlus = document.getElementById('toggleRepRepPlus') as HTMLInputElement

//@ts-ignore
function toggleArretSection({ hide }: { hide: any; }): void {
    let nbArretSection: number = 0
    const divArretSection = document.getElementById('nbArretSection')
    if (nbArretSection < 0 && divArretSection != null) {
        divArretSection.hidden = hide
    }
}


//@ts-ignore
function toggleRepRepPlus({ hide }: { hide: any; }): void {
    const divToggleRepRepPlus = document.getElementById('toggleRepRepPlus') as HTMLInputElement
    if (divToggleRepRepPlus != null) {
        divToggleRepRepPlus.hidden = hide
    }
}
/* Calcul du salaire brut en fonction du coefficient*/
//@ts-ignore
function compute() {
    const divCoef = document.querySelector('input[name="coef"]:checked') as HTMLInputElement
    const coefficient: number = Number(divCoef.value);

    const divResultat = document.getElementById("resultat") as HTMLDivElement
    if (isNaN(coefficient)) {
        divResultat.innerText = 'Merci de rentrer un entier'
        return
    }

    const coef = Math.trunc(Number(coefficient))
    if (coef < 100 || coef > 999) {
        divResultat.innerText = 'Merci de rentrer un coef à 3 chiffre'
        return
    }

    let salaireBrut = Math.round(coef * pointDIndice * 100) / 100

    const divSalaireBrut = document.getElementById("salaireBrut") as HTMLInputElement

    if (salaireBrut > 0) {
        divResultat.innerHTML = `Votre Salaire Brut pour le coefficient 
        <span style='font-weight:bolder'> ${coef} </span> 
        est de : <span style='font-weight : bolder;color:rgb(0,128,0);'>  
        ${salaireBrut.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })} 
        </span> ETP`
        divSalaireBrut.value = salaireBrut.toString()
    } else {
        divResultat.innerHTML = "Erreur lors du calcul du salaire brut"
    }
}

/* Calcul*/
//@ts-ignore
function compute2() {
    /* selecteur  par bouton radio*/
    let quotite: number = 0
    const inputQuotite = document.querySelector('input[name="quotite"]:checked') as HTMLInputElement
    quotite = Number(inputQuotite.value)

    let divTraitBrut = document.getElementById("traitBrut") as HTMLDivElement
    if (isNaN(quotite)) {
        divTraitBrut.innerText = 'Merci de rentrer un entier sans le pourcentage'
        return
    }

    if (quotite < 50 || quotite > 100) {
        divTraitBrut.innerText = 'Merci de rentrer une quotité comprise entre 50 et 100 sans le pourcentage'
        return
    }

    const divSalaireBrut = document.getElementById('salaireBrut') as HTMLInputElement
    let salaireBrut = Number(divSalaireBrut.value)

    let traiteBrut = (quotite / 100) * salaireBrut


    /* Numéro ligne fiche de paie : 101000*/
    divTraitBrut.innerHTML = `<span style ="font-weight:bold;">101000</span>
     Traitement Brut : <span style='color: red;'>${traiteBrut.toFixed(2)} €
    </span>  pour une quotité de ${quotite} %`


    /* Indemnite de résidence*/
    // https://www.fonction-publique.gouv.fr/files/files/Statut%20et%20r%C3%A9mun%C3%A9rations/circulaire_fp_12_03_2001_ind_residence.pdf
    let indRes = 0
    const divIndResUnPour = document.querySelector('#indResUnPour') as HTMLInputElement
    if (divIndResUnPour.checked){
        indRes = traiteBrut * (1 / 100)
        //console.log (indRes)
    } else {
        indRes = traiteBrut * (3 / 100)
        //console.log (indRes)
    }

    /* Indemnité de fonction*/
    // texte mise en place : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000047826432
    // texte reglementaire : https://www.legifrance.gouv.fr/loda/id/LEGIARTI000047843858/#LEGIARTI000047843858
    let indFonct = (ValPrimFonct * (quotite / 100)) / 12

    // Calcul de la prime REP ou REP+
    //document.getElementById('primRep').innerHTML=`<span style='font-weight:bold;">PRIM-REP</span> Prime REP : ${primRep.toFixed(2)} €`
    const divPrimRep = document.getElementById('primRep') as HTMLInputElement
    const divRep = document.getElementById('rep') as HTMLInputElement
    const divReep = document.getElementById('reep+') as HTMLInputElement

    if (divRep.checked) {
        divToggleRepRepPlus.hidden = false
        if (divReep.checked) {
            montantPrimRep = 3263 //montant REP+
            primeRep = (montantPrimRep * (quotite / 100)) / 12
            //console.log(primeRep)
            divPrimRep.innerHTML = `<span style='font-weight:bold;'>
            201882&nbsp;&nbsp;&nbsp;</span>
            Ind. sujetion REP+ (part fixe) :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <span style='color:rgb(0,128,0); font-weight:bolder;'>${primeRep.toFixed(2)} €</span>`
        } else {
            montantPrimRep = 1106 //montant prime REP
            primeRep = (montantPrimRep * (quotite / 100)) / 12
            //console.log("Ma prime rep", primeRep)
            //const divPrimRep = document.getElementById("primRep: string") as HTMLDivElement
            divPrimRep.innerHTML = `<span style='font-weight:bold;'>
            201883&nbsp; &nbsp; &nbsp; </span> 
            Ind. Sujetion REP (part fixe) :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp 
            <span style='color:rgb(0,128,0); font-weight:bolder;'>${primeRep.toFixed(2)} €</span>`
        }
    }

    // Jour de carence
    // formule utilisée : (Traitement brut /30)divNbArret
    let carence: number = 0
    const divCarence = document.getElementById('carence') as HTMLInputElement
    const divNbArret = document.getElementById('nbArret') as HTMLInputElement

    if (divCarence.checked) {
        const divResultCarence = document.getElementById('resultCarence') as HTMLInputElement
        let nbArret: number = Number(divNbArret.value)
        carence = (traiteBrut / 30) * nbArret
        indFonctCar = (indFonct / 30) * nbArret

        divResultCarence.hidden = false

        divResultCarence.innerHTML = `<span style="font-weight:bold;">016052</span> Total Absence Carence : <span style='color:rgb(255,0,8); font-weight:bolder;'>${carence.toFixed(2)} € </span>`

        const divExplicationCarence = document.getElementById('explicationCarence') as HTMLDivElement
        divExplicationCarence.innerHTML = `<div class="explicationCarence">Nb d'arrêt(s) : ${nbArret}\n</div> <div class="explicationCarence">x coût d'une journée retenue : ${(traiteBrut / 30).toFixed(2)} €\n</div> <div class="explicationCarence"> = Retenue sur salaire : ${carence.toFixed(2)} €</div> </span>`
       
        // Calcul retenue jour de carence sur indemnite de fonction
        // indFonct
        const divIndFonctCar = document.getElementById('indFonctCar') as HTMLDivElement
        divIndFonctCar.innerHTML = `<span style="font-weight:bold;"> 202477</span> Indemnité de fonction Carence :<span style='color:rgb(255,0,8);font-weight:bolder;'> ${indFonctCar.toFixed(2)} €</span>`
        const divIndFonctCarExp = document.getElementById('indFonctCarExp') as HTMLDivElement
        divIndFonctCarExp.innerHTML = `<div class="explicationCarence1">Nb d'arrêt(s) : ${nbArret}\n</div> <div class="explicationCarence">x coût retenue sur prime d'indemnite de fonction  : ${(indFonct / 30).toFixed(2)} €\n</div> <div class="explicationCarence"> = Retenue sur indemnité de fonction  : ${indFonctCar.toFixed(2)} €</div></span>`
    }

    //Si prime REP = Oui et arrêt maladie = oui
    //alors
    //Prime REP = (PrimeRep/30)* nbArret 
    let primeRepRet: number = 0
    let nbArret: number = Number(divNbArret.value)
    if (divReep.checked) {
        montantPrimRep = 3263 //montant REP+
        primeRepRet = (((montantPrimRep * (quotite / 100)) / 12) / 30) * nbArret
        //console.log(`la retenue rep+ est ${primeRep} €`)
    } else {
        montantPrimRep = 1106 //montant prime REP
        primeRepRet = (((montantPrimRep * (quotite / 100)) / 12) / 30) * nbArret
        //console.log(`la retenue rep est ${primeRep} €`)
    }

    if (divCarence.checked && divRep.checked) {
        const divPrimeRepExp = document.getElementById("primRepExp") as HTMLDivElement
        // divPrimeRepExp.innerHTML=`<div class="explicationCarence1">Nb d'arrêt(s) : ${primeRepRet.toFixed(2)} €</div>`
        divPrimeRepExp.innerHTML = `<div class="explicationCarence1">Nb d'arrêt(s) : ${nbArret}\n</div> <div class="explicationCarence">x coût retenue sur prime Rep  : ${(primeRepRet).toFixed(2)} €\n</div> <div class="explicationCarence"> = Retenue sur Prime Rep  : ${primeRepRet.toFixed(2)} €</div></span>`
        const divCarenceRep = document.querySelector('#carenceRep') as HTMLDivElement
        divCarenceRep.innerHTML =`<span style="font-weight:bold;"> XXXXXX </span>
        <span>Prime REP retenue : </span>
        <span style='color:rgb(255,0,8); font-weight:bolder;'> ${primeRepRet.toFixed(2)} € </span>`
    
    }


    // affichage de la PSC
    let psc: number = 15
    const divPsc = document.getElementById('psc') as HTMLInputElement
    if (divPsc.checked) {
        // console.log("case validé")
        const divShowPsc = document.getElementById('showPsc') as HTMLDivElement
        divShowPsc.innerHTML = `<span  style="font-weight:bold;">
        202354&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span> Participation à la PSC :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <span style='color:rgb(0,128,8); font-weight:bolder;'>${psc.toFixed(2)} €</span>`
    }

    //Supplement Familial Traitement (SFT) -> numero ligne de paiement 104000

    const inputSftOui = document.querySelector('#sftOui') as HTMLInputElement
    
    const nbEnfants  = (document.querySelector('#nbEnfant')) as HTMLInputElement
    const inputNbEnfant = Number(nbEnfants.value)
    
    const inputMoins20Ans : number = Number(document.querySelector('moins20Ans'))

    const divPrimeSft = document.querySelector('#primeSft') as HTMLInputElement
    const plus20ans =document.querySelector('#plus20ans') as HTMLInputElement
    const inputPlus20ans = Number(plus20ans.value)

     // calcul nombre enfant total Eligible
     let totalEnfantEligible : number = inputNbEnfant-inputPlus20ans
     console.log(totalEnfantEligible)
    // refaire saisir les informations 

     if (totalEnfantEligible<0){
        'Merci de resaisire vos information, il y a une erreur'
        return
    }
     // fixe et variable  pour un enfant
        let partFixeUnEnf: number = 2.29
        let partVariableUnEnf: number = 0
        let primeUnEnfant:number = partFixeUnEnf + partVariableUnEnf
   
        // fixe et variable pour deux Enfants    
        let partFixeDeuxEnf : number =0 
        let partVariableDeuxEnf : number = 0
        let primeDeuxEnfants:number = partFixeDeuxEnf + partVariableDeuxEnf
    
        // fixe et variable pour trois enfants
        let partFixeTroisEnf : number = 0
        let partVariableTroisEnf : number = 0
        let primeTroisEnfants:number = partFixeTroisEnf +partVariableTroisEnf 

    // fixe et variable pour plus de trois enfant
        let partfixePlustroisEnf : number = 0
        let partVariablePlusTroisEnf : number = 0
        let primePlusTroisEnfants : number = partfixePlustroisEnf +partVariablePlusTroisEnf
       

    if (inputSftOui.checked ){
        if (totalEnfantEligible ===0){
            // message affichahe à l'ecran type prompt
            window.prompt("desolé vous n'etes pas élégible au SFT")
            return
        } else if (totalEnfantEligible===1){
        divPrimeSft.innerHTML =`<span style='font-weight:bolder;'>104000</span>
        Supplément Familliale traitement
        <span style='color : rgb(0,128,0); font-weight:bolder;'>${primeUnEnfant.toFixed(2)} € </span>`
        }
    } else {

    }

    // somme total perçue formaté au format €uro
    totalPercu = traiteBrut + indRes + indFonct + primeRep + psc //ajouter prime SFT
    const totalPercuFormate = (`${totalPercu.toLocaleString('fr-FR', {
        style: 'currency', currency: 'EUR'
    })}`)

    /*40112 Cotisation salariale vieillesse plafonné : Taux : 6.9%
    Formule utilisée : ((∑ des revenus)* 6.90% */
    let cotSalViePla = (totalPercu) * (6.9 / 100)

    /* 401210 Calcul CSG non déductible*/
    /* Formule utilisée : ((∑ des revenus) * 98.25%) * 2.40% */
    let csgNonDed = (totalPercu * (98.25 / 100)) * (2.4 / 100)

    /*401310  Calcul CSG déductible*/
    /* Formule utilisée : ((∑ des revenus) * 98.25%) * 6.80% */
    let csgDed = (totalPercu * (98.25 / 100)) * (6.8 / 100)


    /* 501510 Calcul CRDS */
    /* formule utilisée : ((∑ des revenus)*98.25%)* 0.50% */
    let crds = ((totalPercu) * (98.25 / 100)) * (0.5 / 100)


    // 402212 calcul cotisation salariale vieillesse deplafonné
    // Formule utilisée : ((∑ des revenus)* 0.4%
    let cotSalVieiDepla = totalPercu * (0.4 / 100)

    /* Calcul Cotisation salariale Ircantec Tranche A*/
    /* Formule utilisée : (∑ des revenus)*2.80% */
    let cotSalIrcanTrA = totalPercu * (2.80 / 100)

    /* Calcul des Charges Employeurs */
    // calcul cotisation allocation familliale 
    // formule de calcul utilisé : (∑ des revenus) * 3.45%
    let cotPatAlloFam = totalPercu * (3.45 / 100)

    // Calcul cotisation patronale Allocation patronnale majoration
    // formule de calcul utilisé : (∑ des revenus) * 1.80%
    let cotPatAfMaj = totalPercu * (1.80 / 100)


    // Calcul cotisation patronal accident du travail
    // formule utilisée : (∑ des revenus) * 1.02%
    //https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000046821482
    let cotPatAccTra = totalPercu * (1.02 / 100)

    //calcul cotisation patronal FNAL deplafonnée
    // formule utulisé : (∑ des revenus) * 0.5%
    let cotPatFnalDepl = totalPercu * (0.5 / 100)

    // calcul cotisation patronal Vieillesse plafonné
    // formule utilisée : (∑ des revenus) * 8.55%
    let cotPatVieiPlaf = totalPercu * (8.55 / 100)

    // calcul cotisation patranal viellesse deplafonné
    //formule utilisée : (∑ des revenus) * 1.9%
    let cotPatVieilDepl = totalPercu * (1.9 / 100)

    // calcul contribution solidarité autonomie
    //formule utilisée : (∑ des revenus) * 0.3%
    let contSolAuto = totalPercu * (0.3 / 100)

    // calcul cotisation patronal maladie déplafonné
    // formule utilisée : (∑ des revenus) * 7%
    let cotPatMalDepla = totalPercu * (7 / 100)

    // calcul cotisation patronal maladie Majoration
    //formule utilisée : (∑ des revenus) * 6%
    let cotPatMalMaj = totalPercu * (6 / 100)

    // calcul cotisation patronal Ircantec Tranche A
    // formule utilisée : (∑ des revenus) * 4.2%
    let cotPatIrcTraA = totalPercu * (4.2 / 100)

    // calcul cotisation patronal VST mobilité
    //formule utilisée : (∑ des revenus) * 2%
    let cotPatVstMob = totalPercu * (2 / 100)

    const divH2Title = document.querySelectorAll("h2.titleh2") as unknown as HTMLInputElement
    divH2Title.hidden = false

    // Affichage des indemnités perçues
    const divTraitBrut2 = document.getElementById("traitBrut2") as HTMLDivElement
    divTraitBrut2.innerHTML = `<span style="font-weight:bold;">
    101000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span> 
    Traitement Brut : &nbsp;
    <span style='color: rgb(0,128,0);font-weight:bolder;'>${traiteBrut.toFixed(2)} €</span> `

    /* Indemnite de résidence -> Numéro ligne fiche de paie : 102000*/
    const divIndeSalariale = document.getElementById('indeSalariale') as HTMLDivElement
    divIndeSalariale.innerHTML = `<span style="font-weight:bold;">
    102000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
    Indemnité de résidence :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style='color: rgb(0,128,0); font-weight:bolder;'> ${indRes.toFixed(2)} €</span>`

    
    /*  Indemnite de Fonction -> Numéro ligne fiche de paie : 202477*/
    const divIndFonct = document.getElementById('indFonct') as HTMLDivElement
    if (indFonct >= 100) {

        divIndFonct.innerHTML = `<span style="font-weight:bold;"> 
        202477&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;
        </span> Indemnité de fonction :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span style='color: rgb(0,128,0); font-weight:bolder;'> ${indFonct.toFixed(2)} € </span>`
    } else {
        divIndFonct.innerHTML = `<span style="font-weight:bold;"> 
        202477&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;
        </span> Indemnité de fonction :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span style='color: rgb(0,128,0); font-weight:bolder;'> ${indFonct.toFixed(2)} € </span>`
    }

    //Affichage des Charges
    /* Charges Salariales*/

   

    // équivaut à 1/30 retenu sur l'indemnité de fonction 
    // equivaut à 1/30 retenue sur la prime REP
    // equivaut à 1/30 retenue sur la prime REP+

    /*Numéro ligne fiche de paie : 401112 Cotisation salariale vieillesse plafonnée */
    const divCotSalViePla = document.getElementById('cotSalViePla') as HTMLDivElement
    divCotSalViePla.innerHTML = `<span style="font-weight:bold;">401112&nbsp;</span> 
    Cotisation salariale viellesse plafonnée :&nbsp;&nbsp; 
    <span style='color: rgb(255,0,0); font-weight:bolder;'>${cotSalViePla.toFixed(2)} €</span>`

    /* Numero ligne fiche de paie : 401210 CSG non Déductible */
    const divCsgNonDed = document.getElementById('csgNonDed') as HTMLDivElement
    divCsgNonDed.innerHTML = `<span style="font-weight:bold;">
    401210&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span> C.S.G non déductible :&nbsp;&nbsp; 
    <span style='color: rgb(255,0,0); font-weight:bolder;'>${csgNonDed.toFixed(2)} € </span>`

    /* Numéro de ligne fiche de paie :  401310 CSG déductible */
    const divCsgDed = document.getElementById('csgDed') as HTMLDivElement
    divCsgDed.innerHTML = `<span style="font-weight:bold;">
    401310&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span> C.S.G déductible :&nbsp;&nbsp; 
    <span style='color: rgb(255,0,0); font-weight:bolder;'>${csgDed.toFixed(2)} €</span>`

    /* Numéro de ligne fiche de paie :  401510 CRDS */
    const divCrds = document.getElementById('crds') as HTMLDivElement
    divCrds.innerHTML = `<span style="font-weight:bold;">
    401510&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span> C.R.D.S :&nbsp;&nbsp;&nbsp;&nbsp; 
    <span style='color: rgb(255,0,0); font-weight:bolder;'>${crds.toFixed(2)} €</span>`

    // numéro de ligne  fiche de paie  : 402112 Cot Sal Vieillesse Déplafonné
    const divCotSalVieiDepla = document.getElementById('cotSalVieiDepla') as HTMLDivElement
    divCotSalVieiDepla.innerHTML = `<span style="font-weight:bold;">
    402212&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span> cot SAL Viellesse Deplaf :&nbsp;&nbsp;&nbsp;&nbsp; 
    <span style='color: rgb(255,0,0); font-weight:bolder;'>${cotSalVieiDepla.toFixed(2)} € </span>`

    /* Numéro de ligne fiche de paie : 501010 Cotisation salariale IRCANTEX tranche A */
    const divCotSalIrcantrA = document.getElementById('cotSalIrcantrA') as HTMLDivElement
    divCotSalIrcantrA.innerHTML = `<span style="font-weight:bold;">
    501010&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span> Cot Sal IRCANTEC TR.A :&nbsp;&nbsp; 
    <span style='color: rgb(255,0,0); font-weight:bolder;'>${cotSalIrcanTrA.toFixed(2)} €</span>`


    /* Calcul du total Percu Brut*/
    const divTotalPer = document.getElementById("totalPer") as HTMLInputElement
    divTotalPer.innerHTML = `Total Brut Perçu : <span style='color:rgb(0,128,0);font-weight:bolder;'> ${totalPercu.toLocaleString('fr-FR', {style:'currency', currency:'EUR' })} </span>`;
    
    (`${totalPercu.toLocaleString('fr-FR',{style:'currency', currency:'EUR'})}`)
    /*Calcul du charge Salariale*/
    let totalRetenu = cotSalViePla + csgNonDed + csgDed + crds + cotSalIrcanTrA + cotSalVieiDepla + carence + indFonctCar + primeRepRet
    const totalRetenuformate = (`${totalRetenu.toLocaleString('fr-FR', {
        style: 'currency', currency: 'EUR'
    })}`)
    let pourcentageSal = (totalRetenu / totalPercu) * 100
    const divTotalRetenu = document.getElementById("totalRetenu") as HTMLDivElement
    divTotalRetenu.innerHTML = `<span style="font-weight:bold;">
    Total retenue Salariale : </span>
    (${pourcentageSal.toFixed(2)} %) <span style='color:red;'>${totalRetenuformate} </span>`

    // Affichage des Charges Patronales

    // Numéro de ligne fiche de paie : 403312 Cotisation Patronale Allocation Familliale
    const divCotPatAlloFam = document.getElementById("cotPatAlloFam") as HTMLDivElement
    divCotPatAlloFam.innerHTML = `<span style ="font-weight:bold;">
    403312&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
    Cot Patronn. Alloc Famil :&nbsp;&nbsp;&nbsp;&nbsp; 
    <span style='color:#c61ce8;font-weight:bold;'>${cotPatAlloFam.toFixed(2)}  €</span> `

    // Numéro de ligne fiche de paie : 403398 Cotisation Patronale AF Majoration
    const divCotPatAfMaj = document.getElementById('cotPatAfMaj') as HTMLDivElement
    divCotPatAfMaj.innerHTML = `<span style="font-weight:bold;">
    403398&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
    Cot Pat AF Majoration :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style='color:#c61ce8;font-weight:bold;'>${cotPatAfMaj.toFixed(2)} €</span>`

    // Numéro de ligne fiche de paie : 403412 Cotisation Patronale AF Majoration
    const divCotPatAccTra = document.getElementById('cotPatAccTra') as HTMLDivElement
    divCotPatAccTra.innerHTML = `<span style="font-weight:bold;">
    403412&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
    Cot Pat Accident Travail :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style='color:#c61ce8;font-weight:bold;'>${cotPatAccTra.toFixed(2)} €</span>`

    // Numéro de ligne fiche de paie : 403512 Cotisation Patronale FNAL deplafonnée
    const divCotPatFnalDepl = document.getElementById('cotPatFnalDepl') as HTMLDivElement
    divCotPatFnalDepl.innerHTML = `<span style="font-weight:bold;">403512</span> 
    Cot Pat FNAL Déplafonnée :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style='color:#c61ce8;font-weight:bold;'>${cotPatFnalDepl.toFixed(2)} €</span>`

    // Numéro de ligne fiche de paie : 403612 Cotisation Patronale Vieillesse Plafonnée
    const divCotPasVieiPlaf = document.getElementById('cotPatVieiPlaf') as HTMLDivElement
    divCotPasVieiPlaf.innerHTML = `<span style="font-weight:bold;">
    403612&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span> Cot Pat Vieillesse Plaf :&nbsp;&nbsp;&nbsp;
    <span style='color:#c61ce8;font-weight:bold;'>${cotPatVieiPlaf.toFixed(2)} €</span>`

    // Numéro de ligne fiche de paie : 403712 Cotisation Patronale Vieillesse Déplafonnée
    const divCotPatVieilDepl = document.getElementById('cotPatVieilDepl') as HTMLDivElement
    divCotPatVieilDepl.innerHTML = `<span style="font-weight:bold;">
    403712&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span> Cot Pat Vieillesse Deplaf :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style='color:#c61ce8;font-weight:bold;'>${cotPatVieilDepl.toFixed(2)} €</span> `

    // Numéro de ligne fiche de paie : 403812 Contribution Solidarité Autonomie

    const divContSolAuto = document.getElementById('contSolAuto') as HTMLDivElement
    divContSolAuto.innerHTML = `<span style="font-weight:bold;">403812&nbsp;
    </span> Cont Solidarité Autonomie :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style='color:#c61ce8;font-weight:bold;'>${contSolAuto.toFixed(2)} €</span>`

    // Numéro de ligne fiche de paie : 404012 Cotisation Patronale Maladie Deplafonnée

    const divCotPatMalDepla = document.getElementById('cotPatMalDepla') as HTMLDivElement
    divCotPatMalDepla.innerHTML = `<span style="font-weight:bold;">
    404012&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span> Cot Pat Maladie Deplaf :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    <span style='color:#c61ce8;font-weight:bold;'>${cotPatMalDepla.toFixed(2)} €</span>`

    // Numéro de ligne fiche de paie : 404098 Cotisation Patronale Mal Majoration

    const divCotPatMalMaj = document.getElementById('cotPatMalMaj') as HTMLDivElement
    divCotPatMalMaj.innerHTML = `<span style="font-weight:bold;">
    404098&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span> Cot Pat Maladie Deplaf :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    <span style='color:#c61ce8;font-weight:bold;'>${cotPatMalMaj.toFixed(2)} €</span>`

    // Numéro de ligne fiche de paie : 501110 Cotisation Patronale Ircantec Tranche A

    const divCotPatIrcTraA = document.getElementById('cotPatIrcTraA') as HTMLDivElement
    divCotPatIrcTraA.innerHTML = `<span style="font-weight:bold;">
    501110&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span> Cot Pat Ircantex TR.A :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    <span style='color:#c61ce8;font-weight:bold;'>${cotPatIrcTraA.toFixed(2)} €</span>`

    // Numéro de ligne fiche de paie : 554500 Cotisation Patronale VST Mobilité

    const divCotPatVstMob = document.getElementById('cotPatVstMob') as HTMLDivElement
    divCotPatVstMob.innerHTML = `<span style="font-weight:bold;">554500&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span> Cot Pat VST Mobilité :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style='color:#c61ce8;font-weight:bold;'>${cotPatVstMob.toFixed(2)} €</span> `

    // Calcul Montant Total Charges Patronales
    let totalCharPatr: number = (cotPatAlloFam + cotPatAfMaj + cotPatAccTra + cotPatFnalDepl + cotPatVieiPlaf + cotPatVieilDepl + contSolAuto + cotPatMalDepla + cotPatMalMaj + cotPatIrcTraA + cotPatVstMob)
    let PourCharPart: number = (totalCharPatr / totalPercu) * 100

    const divTotalCharPatr = document.getElementById("totalCharPatr") as HTMLDivElement
    divTotalCharPatr.innerHTML = `<span style="font-weight:bold;">
    Total charges Patronales  :</span> (${PourCharPart.toFixed(2)} %) 
    <span style="color:#c61ce8;">${totalCharPatr.toFixed(2)} € </span> `

    // Calcul net à payer
    let NetAPayer: number = (totalPercu - totalRetenu)
    const divNetAPayer = document.getElementById('NetAPayer') as HTMLInputElement
    divNetAPayer.hidden = false


    divNetAPayer.innerHTML = `<span style="font-weight:bold;">Net à Payer :</span><br/> ${NetAPayer.toFixed(2)} €`

    // récapitulatif (REvenue - Charges salariale)
    const divRecapi = document.getElementById('recapi') as HTMLInputElement
    divRecapi.hidden = false



    const divRecapPercu = document.getElementById('recapPercu') as HTMLDivElement
    divRecapPercu.innerHTML = `Total Brut :<span style='color: rgb(0,128,0); font-weight:bolder;'>  ${totalPercuFormate}</span>`
    const divRecapRetenu = document.getElementById('recapRetenu') as HTMLDivElement
    divRecapRetenu.innerHTML = `- Total retenu : ${totalRetenu.toFixed(2)} €&nbsp;&nbsp;&nbsp;&nbsp;`
    const divArrow = document.getElementById('arrow') as HTMLInputElement
    divArrow.hidden = false

    document.querySelectorAll(".titleh2").forEach((titleElement) => {
        titleElement.removeAttribute("hidden")
    })


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