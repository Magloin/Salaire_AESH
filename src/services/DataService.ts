import { renderToStaticMarkup } from "react-dom/server";
import Data from "../data/Data";
import InputData from "../data/InputData";
import SalaryOutputData from "../data/SalaryOutputData";
import CarenceOutputData from "../data/CarenceOutputData";
// "../data/CarenceOutputData"
function DataServiceCompute(input: InputData): Data {
    const heal = input.heal
    const salaire = (input.indPoint * input.coef)
    const salaireBrut = salaire * (input.quotite / 100) //brut avec quotité
    const indRes = salaireBrut * (1/100) // Indemnite de résidence
    const indFonct = (input.valPrimFonct/12) * (input.quotite/100) // indemnité de fonction
    const psc = !input.hasPsc ? 0 : 15// montant forfaitaire
    const montantPrimRep = !input.school?.isRep ? 0 : (input.school?.isRepPlus ? (3263/12) * ((input.quotite)/100) : (1106/12) * ((input.quotite)/100))
    const workTime = ((((input.quotite) / 100) * 1607 ) / 41)
    // const primeRep = (montantPrimRep * (quotite/100))/12
    let sft = 0 //revoir le calcul
    if (input.hasSft && input.childNbUnder20 > 0) {
        let nbChild = input.childNbUnder20
        if (nbChild == 1) {
            sft = 2.29
        } else if (nbChild == 2) {
            sft = 10.67 + (input.coef * ((3 / 100) * 4.85))
        } else if (nbChild == 3) {
            sft = 15.25 + (input.coef * ((8 / 100) * 4.85))
        } else {
            let base = 15.25 + (input.coef * ((8 / 100) * 4.85))
                let remaining = (4.57 + input.coef * ((6 / 100) * 4.85))
                let nbRemainingChild = nbChild - 3
                sft = base + (remaining * nbRemainingChild)
        }


        switch (nbChild) {
            case 1:  // === 1
                sft = 2.29
                break
            case 2: // === 2
                sft = 10.67 + (input.coef * ((3 / 100) * 4.85))
                break;
            case 3: // === 3
                sft = 15.25 + (input.coef * ((8 / 100) * 4.85))
                break;
            default: // > 3
                let base = 15.25 + (input.coef * ((8 / 100) * 4.85))
                let remaining = (4.57 + input.coef * ((6 / 100) * 4.85))
                let nbRemainingChild = nbChild - 3
                sft = base + (remaining * nbRemainingChild)
                
                break;
        }


    }






     const totalPercu = salaireBrut + indRes + indFonct + psc + montantPrimRep // ok
     //console.log('salaire psc',totalPercu)
     const totalPercuMoinsPsc = totalPercu-psc //ok
    //console.log ('slaire - psc',totalPercuMoinsPsc)
     // Cotisations Salariales

     const cotSalViePla = totalPercuMoinsPsc * (6.9 / 100) // cotisation Salaraile Viellesse plafonnée
     const csgNonDed = (totalPercu * (98.25 / 100) * (2.4 / 100)) // CSG Non Déductible
     const csgDed = ((totalPercu * (98.25 / 100)) * (6.8 / 100)) // CSG Déductible
     const crds = ((totalPercu * (98.25 / 100)) * (0.5 / 100)) //CRDS
     const cotSalVieDepla = totalPercuMoinsPsc * (0.4 / 100) // Cotisation Salariale Viellesse Déplafonnée
     const cotSalIrcTrA = totalPercuMoinsPsc * (2.8 / 100) //cotisation salarial Ircantec Tranche A

     const aDeduire = cotSalViePla + csgNonDed + csgDed + crds + cotSalVieDepla + cotSalIrcTrA //OK
     
    // Cotisations patronnales 
     const cotPatAlloFam = totalPercuMoinsPsc * (3.45 / 100) // cotisation patronnale allocation familliale X
     const cotPatAlMaj = totalPercuMoinsPsc * (1.8 / 100) // cotisation patronnale allocation majoré X
     const cotPatAccTra = totalPercuMoinsPsc * (0.88 / 100) // cotisation patronnale accident du travail X
     const cotPatFnalDepl = totalPercuMoinsPsc * (0.5 / 100) //cotisation patronnale FNAL déplafonnée X
     const cotPatViePlaf = totalPercuMoinsPsc * (8.55 / 100) // cotisation Patronnale Viellesse Plafonnée X
     const cotPatVieDepl = totalPercuMoinsPsc * (2.02 / 100) // cotisation Patronnale Viellesse Déplafonnée X
     const cotSolAuto = totalPercuMoinsPsc * (0.3 / 100) // contribution solidarité autonomie X
     const cotPatMalDepla = totalPercuMoinsPsc * (7 / 100) // cotisation patronnale Maladie Deplafonée X
     const cotPatMalMaj = totalPercuMoinsPsc * (6 / 100) // cotisation patronalle Maladie Majorée X
     const cotPatIrcTraA = totalPercuMoinsPsc * (4.2 / 100) // cotisation patronnale Ircantec Tranche A X
     const cotPatVstMob = totalPercuMoinsPsc * (2 / 100) // cotisation patronnale VST Mobilité X
     const forfaitSocial = psc * (8 / 100) // participation à la PSC

     const pourInfo = cotPatAlloFam + cotPatAlMaj + cotPatAccTra+ cotPatFnalDepl + cotPatViePlaf + cotPatVieDepl + cotSolAuto + cotPatMalDepla + cotPatMalMaj + cotPatIrcTraA + cotPatVstMob + forfaitSocial

       

     const aPercevoir = totalPercu - aDeduire //net à payer
     const percentSalValue = (aDeduire / totalPercu) * 100
     const percentPatValue = (pourInfo / totalPercu) * 100

    const newSalaryOutput: SalaryOutputData = {
        salaire,
        salaireBrut,
        indRes,
        indFonct,
        psc,
        sft,
        totalPercu,
        montantPrimRep,
        cotSalViePla,
        csgNonDed,
        csgDed,
        crds,
        cotSalVieDepla,
        cotSalIrcTrA,
        cotPatAlloFam,
        cotPatAlMaj,
        cotPatAccTra,
        cotPatFnalDepl,
        cotPatViePlaf,
        cotPatVieDepl,
        cotSolAuto,
        cotPatMalDepla,
        cotPatMalMaj,
        cotPatIrcTraA,
        cotPatVstMob,
        aDeduire,
        pourInfo,
        aPercevoir,
        percentSalValue,
        percentPatValue,
        workTime,
    }

    // Calculs
    //1 jour de Carence
    const oneDayCarence = (1/30)* totalPercuMoinsPsc
    console.log ('Jour de carence',oneDayCarence)
    const oneDayCarenceSalaireBrut = (totalPercu )-oneDayCarence //OK
    
        // // Cotisations Salariales

     const oneDayCarenceCotSalViePla = totalPercuMoinsPsc * (6.9 / 100) // cotisation Salaraile Viellesse plafonnée
     const trentiemeOneDayCarenceCotSalViePla = (1/30)*oneDayCarenceCotSalViePla // 30 eme retenu cotisation Salaraile Viellesse plafonnée
    
     const oneDayCarenceCsgNonDed = (totalPercu * (98.25 / 100) * (2.4 / 100)) // CSG Non Déductible
     const trentiemeOneDayCarenceCsgNonDed = (1/30) * oneDayCarenceCsgNonDed // 30 eme retenu CSG Non Déductible
     

     const oneDayCarenceCsgDed = ((totalPercu * (98.25 / 100)) * (6.8 / 100)) // CSG Déductible
     const trentiemeOneDayCarenceCsgDed = (1/30) * oneDayCarenceCsgDed // 30 eme retenu CSG déductible
     
     const oneDayCarenceCrds = ((totalPercu * (98.25 / 100)) * (0.5 / 100)) //CRDS retenu
     const trentiemeOneDayCarnceCrds = (1/30) * oneDayCarenceCrds //30 eme CRDS retenu
     
     const OneDayCarenceCotSalVieDepla = totalPercuMoinsPsc * (0.4 / 100) // Cotisation Salariale Viellesse Déplafonnée
     const trentiemeOneDayCarenceCotSalViedepla = (1/30) * OneDayCarenceCotSalVieDepla //30 eme retenu Cotisation Salariale Viellesse Déplafonnée
     

     const oneDayCarenceCotSalIrcTrA = totalPercuMoinsPsc * (2.8 / 100) //cotisation salarial Ircantec Tranche A
     const trentiemeOneDayCarenceCotSalIrcTrA = (1/30) * oneDayCarenceCotSalIrcTrA //30 eme retenue Ircantec
     

    const oneDayCarenceCotisation = oneDayCarenceCotSalViePla + oneDayCarenceCsgNonDed + oneDayCarenceCsgDed + oneDayCarenceCrds + OneDayCarenceCotSalVieDepla + oneDayCarenceCotSalIrcTrA // Calcul retenu carence 1 jour

    

    const totalTrentiemeRetenu = trentiemeOneDayCarenceCotSalViePla + trentiemeOneDayCarenceCsgNonDed + trentiemeOneDayCarenceCsgDed +trentiemeOneDayCarenceCotSalViedepla + trentiemeOneDayCarnceCrds + trentiemeOneDayCarenceCotSalIrcTrA //calcul 30 eme retenu
    

    const oneDayCarenceRealSalary = oneDayCarenceSalaireBrut-(oneDayCarenceCotisation - totalTrentiemeRetenu) //Calcul salaire Percu
    
    const oneDayCarenceLost =Math.abs (((oneDayCarenceRealSalary-aPercevoir)/aPercevoir)*100) // calcul pourcentage de perte
    const OneDayCarenceSalaryNetLost = aPercevoir-oneDayCarenceRealSalary // perte nette entre sans carence et avec carence


    // Ancien 3 jours de Carence qui repasse à 1
    const threeDayCarence =  totalPercuMoinsPsc / 30 // Calcul  jours de carence
    //console.log('calcul retenu carence',threeDayCarence)

    const threeDayTenPurcentLost = threeDayCarence * (10/100)*(heal-1) //10% de perte de salaire par jour
    //console.log('Cout jour de carence',threeDayCarence ,'perte 10 poucent de salaire / jour', threeDayTenPurcentLost)
    const threeDayCarenceSalaireBut = totalPercuMoinsPsc - threeDayCarence - threeDayTenPurcentLost + psc
    console.log('Salaire Brut',threeDayCarenceSalaireBut )
    
    
    // cotisations Salariale
    const threeDayCarenceCotSalViePla = (totalPercuMoinsPsc) *(6.9/100) //cotisation Salaraile Viellesse plafonnée
    const trentiemeThreeDayCarenceSalViePla = threeDayCarenceCotSalViePla / 30
    const dixPurcentCarenceSalViePla = trentiemeThreeDayCarenceSalViePla / 10
    //console.log('Carence Cot Sal Vie Pla',threeDayCarenceCotSalViePla,'30 eme vie pla',trentiemeThreeDayCarenceSalViePla,'10 poucent retenue',dixPurcentCarenceSalViePla )
    
    const threeDayCarenceCsgNonDed = (totalPercu * (98.25 / 100) * (2.4 / 100)) // CSG Non Déductible
    const trentiemeThreeDayCarenceCsgNonDed = threeDayCarenceCsgNonDed / 30
    const dixPurcentCarenceCsgNonDed = trentiemeThreeDayCarenceCsgNonDed / 10
    //console.log('Carence Cot Csg Non Ded',threeDayCarenceCsgNonDed,'30 eme Csg Non Ded',trentiemeThreeDayCarenceCsgNonDed,'10 poucent retenue',dixPurcentCarenceCsgNonDed ) 
    
    const threeDayCarenceCsgDed = ((totalPercu * (98.25 / 100)) * (6.8 / 100)) // CSG Déductible
    const trentiemeThreeDayCarenceCsgDed = threeDayCarenceCsgDed / 30
    const dixPurcentCarenceCsgDed = trentiemeThreeDayCarenceCsgDed / 10
    //console.log('Carence Cot Csg  Ded',threeDayCarenceCsgDed,'30 eme Csg Non Ded',trentiemeThreeDayCarenceCsgDed,'10 poucent retenue',dixPurcentCarenceCsgDed )


    const threeDayCarenceCrds = ((totalPercu * (98.25 / 100)) * (0.5 / 100)) //CRDS
    const trentiemeThreeDayCarenceCrds = threeDayCarenceCrds /30
    const dixPurcentCarenceCrds = trentiemeThreeDayCarenceCrds / 10
    //console.log('Carence Crds',threeDayCarenceCrds,'30 eme Crds',trentiemeThreeDayCarenceCrds,'10 poucent retenue crds',dixPurcentCarenceCrds )

    const threeDayCarenceCotSalVieDepla = totalPercuMoinsPsc * (0.4 / 100) // Cotisation Salariale Viellesse Déplafonnée
    const trentiemeThreeDayCarenceCotSalVieDepla = threeDayCarenceCotSalVieDepla / 30
    const dixPurcentCarenceCotSalVieDepla = trentiemeThreeDayCarenceCotSalVieDepla / 10
    //console.log('Carence Cot Sal Vie Depla',threeDayCarenceCotSalVieDepla,'30 eme Csg Non Ded',trentiemeThreeDayCarenceCotSalVieDepla,'10 poucent retenue',dixPurcentCarenceCotSalVieDepla )

    const threeDayCarenceCotSalIrcTrA = totalPercuMoinsPsc * (2.8 / 100) //cotisation salarial Ircantec Tranche A
    const trentiemeThreeDayCarenceCotSalIrcTrA = threeDayCarenceCotSalIrcTrA / 30
    const dixPurcentCarenceCotSalIrcTrA = trentiemeThreeDayCarenceCotSalIrcTrA / 10
    //console.log('Carence Cot Sal Irc TrA',threeDayCarenceCotSalIrcTrA,'30 eme Cot Sal Irc TrA',trentiemeThreeDayCarenceCotSalIrcTrA,'10 poucent retenue',dixPurcentCarenceCotSalIrcTrA )

    const cotisationSalariale = threeDayCarenceCotSalViePla + threeDayCarenceCsgNonDed + threeDayCarenceCsgDed + threeDayCarenceCrds + threeDayCarenceCotSalVieDepla + threeDayCarenceCotSalIrcTrA // calcul retenue carence 3 jours

    console.log('3 jourde arence', cotisationSalariale)


    const CarenceCotSalariale= trentiemeThreeDayCarenceSalViePla + trentiemeThreeDayCarenceCsgNonDed + trentiemeThreeDayCarenceCsgDed + trentiemeThreeDayCarenceCrds + trentiemeThreeDayCarenceCotSalVieDepla + trentiemeThreeDayCarenceCotSalIrcTrA
    //console.log(trentiemeThreeDayCarenceSalViePla,trentiemeThreeDayCarenceCsgNonDed , trentiemeThreeDayCarenceCsgDed , trentiemeThreeDayCarenceCrds , trentiemeThreeDayCarenceCotSalVieDepla ,trentiemeThreeDayCarenceCotSalIrcTrA)
    
    
    //console.log('retenu jour de carence',CarenceCotSalariale)


    const tenPurcentRetenue = (heal-1)*(dixPurcentCarenceSalViePla+dixPurcentCarenceCsgNonDed+dixPurcentCarenceCsgDed+dixPurcentCarenceCrds+dixPurcentCarenceCotSalVieDepla+dixPurcentCarenceCotSalIrcTrA)
    console.log('10 % de retenue cotisation',tenPurcentRetenue)

    const cotisationSalarialeTotale= cotisationSalariale - CarenceCotSalariale - tenPurcentRetenue
    
    console.log('total cotiasation salarial',cotisationSalariale)
    console.log('Carence Salariale',CarenceCotSalariale)
    console.log('10 pourcent de retenue',tenPurcentRetenue)
    console.log('Total cotisation socila',cotisationSalarialeTotale)
    
    const threeDayCarenceRealSalary = totalPercu - cotisationSalarialeTotale - oneDayCarence - threeDayTenPurcentLost
    console.log('percu',threeDayCarenceRealSalary,totalPercu)
    const threeDayCarenceSalaryNetLost = aPercevoir - threeDayCarenceRealSalary
    const TreeDayCarenceLost =Math.abs (((threeDayCarenceRealSalary-aPercevoir)/aPercevoir)*100)

 



    

    // Définition des valeurs finales
    const newCarenceOutput : CarenceOutputData = {
        oneDayCarence,
        oneDayCarenceSalaireBrut,
        oneDayCarenceRealSalary,
        psc,
        oneDayCarenceLost,
        threeDayCarence,
        OneDayCarenceSalaryNetLost,
        TreeDayCarenceLost,
        threeDayCarenceSalaryNetLost,
        threeDayCarenceRealSalary,
    }
    
    return new Data(input, newSalaryOutput, newCarenceOutput, [])
}


export default DataServiceCompute