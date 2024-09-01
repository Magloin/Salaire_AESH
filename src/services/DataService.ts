import { renderToStaticMarkup } from "react-dom/server";
import Data from "../data/Data";
import InputData from "../data/InputData";
import OutputData from "../data/OutputData";

function DataServiceCompute(input: InputData): Data {
    const salaire = (input.indPoint * input.coef)
    const salaireBrut = salaire * (input.quotite / 100) //brut avec quotité
    const indRes = salaireBrut * (1/100) // Indemnite de résidence
    const indFonct = (input.valPrimFonct/12) * (input.quotite/100) // indemnité de fonction
    const psc = !input.hasPsc ? 0 : 15// montant forfaitaire
    const montantPrimRep = !input.isRep ? 0 : (input.isRepPlus ? (3263/12) * ((input.quotite)/100) : (1106/12) * ((input.quotite)/100))
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






     const totalPercu = salaireBrut + indRes + indFonct + psc + montantPrimRep + sft

     // Cotisations Salariales

     const cotSalViePla = totalPercu * (6.9 / 100) // cotisation Salaraile Viellesse plafonnée
     const csgNonDed = (totalPercu * (98.25 / 100) * (2.4 / 100)) // CSG Non Déductible
     const csgDed = ((totalPercu * (98.25 / 100)) * (6.8 / 100)) // CSG Déductible
     const crds = ((totalPercu * (98.25 / 100)) * (0.5 / 100)) //CRDS
     const cotSalVieDepla = totalPercu * (0.4 / 100) // Cotisation Salariale Viellesse Déplafonnée
     const cotSalIrcTrA = totalPercu * (2.8 / 100) //cotisation salarial Ircantec Tranche A
     
     const aDeduire = cotSalViePla + csgNonDed + csgDed + crds + cotSalVieDepla + cotSalIrcTrA
    // Cotisations patronnales 
     const cotPatAlloFam = totalPercu * (3.45 / 100) // cotisation patronnale allocation familliale X
     const cotPatAlMaj = totalPercu * (1.8 / 100) // cotisation patronnale allocation majoré X
     const cotPatAccTra = totalPercu * (0.88 / 100) // cotisation patronnale accident du travail X
     const cotPatFnalDepl = totalPercu * (0.5 / 100) //cotisation patronnale FNAL déplafonnée X
     const cotPatViePlaf = totalPercu * (8.55 / 100) // cotisation Patronnale Viellesse Plafonnée X
     const cotPatVieDepl = totalPercu * (2.02 / 100) // cotisation Patronnale Viellesse Déplafonnée X
     const cotSolAuto = totalPercu * (0.3 / 100) // contribution solidarité autonomie X
     const cotPatMalDepla = totalPercu * (7 / 100) // cotisation patronnale Maladie Deplafonée X
     const cotPatMalMaj = totalPercu * (6 / 100) // cotisation patronalle Maladie Majorée X
     const cotPatIrcTraA = totalPercu * (4.2 / 100) // cotisation patronnale Ircantec Tranche A X
     const cotPatVstMob = totalPercu * (2 / 100) // cotisation patronnale VST Mobilité X


     const pourInfo = cotPatAlloFam + cotPatAlMaj + cotPatAccTra+ cotPatFnalDepl + cotPatViePlaf + cotPatVieDepl + cotSolAuto + cotPatMalDepla + cotPatMalMaj + cotPatIrcTraA + cotPatVstMob


     const aPercevoir = totalPercu - aDeduire
     const percentSalValue = (aDeduire / totalPercu) * 100
     const percentPatValue = (pourInfo / totalPercu) * 100

    const newOutput: OutputData = {
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

    return new Data(input, newOutput, [])
}

export default DataServiceCompute