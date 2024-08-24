class InputData {
    coef: number = 375
    quotite: number = 62
    indPoint: number = 4.92278

    hasResidencePrime: boolean = false
    residenceValue: number | null = null

    constructor(coef: number = 375, quotite: number = 62, indPoint: number = 4.92278, hasResidencePrime: boolean = false, residenceValue: number | null = null) {
        this.coef = coef
        this.quotite = quotite
        this.indPoint = indPoint

        this.hasResidencePrime = hasResidencePrime
        this.residenceValue = residenceValue
    }
}

export default InputData;