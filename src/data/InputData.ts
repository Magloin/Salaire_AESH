import Psc from "../components/parameters/Psc"

class InputData {
    coef: number = 375
    quotite: number = 62
    indPoint: number = 4.92278

    hasResidencePrime: boolean = false
    residenceValue: number | null = null
    isRep: boolean = false
    isRepPlus: boolean = false
    hasPsc: boolean = false
    hasSft: boolean = false
    childNb: number = 2

    constructor(coef: number = 375, quotite: number = 62, indPoint: number = 4.92278, hasResidencePrime: boolean = false, residenceValue: number | null = null,isRep:boolean = false,isRepPlus: boolean = false ,hasPsc: boolean = false, hasSft: boolean = false, childNb: number = 2) {
        this.coef = coef
        this.quotite = quotite
        this.indPoint = indPoint

        this.hasResidencePrime = hasResidencePrime
        this.residenceValue = residenceValue
        this.isRep = isRep
        this.isRepPlus = isRepPlus
        this.hasPsc = hasPsc
        this.hasSft = hasSft
        this.childNb = childNb
    }
}

export default InputData;