import SchoolData from "./School"

class InputData {
    coefValues = [371, 375, 380, 385, 395, 405, 415, 425, 435, 445, 455]
    coef: number = 375
    quotite: number = 62
    indPoint: number = 4.92278
    valPrimFonct : number = 1529
    totalPercu : number = 0
    primeRep : number = 0
    healDayValues = [5,10,15,20]
    heal:number = 5


    hasResidencePrime: boolean = false
    residenceValue: number | null = null
    hasPsc: boolean = false
    hasSft: boolean = false
    
    childNbUnder20: number = 0

    school: SchoolData

    constructor(coef: number = 375, quotite: number = 62,indPoint: number = 4.92278, valPrimFonct: number =1529 ,totalPercu : number = 0, primeRep : number = 0, hasResidencePrime: boolean = false, residenceValue: number | null = null,hasPsc: boolean = false, hasSft: boolean = false, childNb: number = 2, childNbUnder20: number = 0, heal: number = 5) {
        this.coefValues = [371, 375, 380, 385, 395, 405, 415, 425, 435, 445, 455]
        this.coef = coef
        this.healDayValues = [5,10,15,20]
        this.heal = heal
        this.quotite = quotite
        this.indPoint = indPoint
        this.valPrimFonct = valPrimFonct
        this.totalPercu = totalPercu
        this.primeRep = primeRep

        this.hasResidencePrime = hasResidencePrime
        this.residenceValue = residenceValue
        this.hasPsc = hasPsc
        this.hasSft = hasSft
        
        this.childNbUnder20 = childNbUnder20
    }
}

export default InputData;