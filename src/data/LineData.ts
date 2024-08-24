class LineData {
    code: string
    element: string
    toPay: number
    toRemove: number
    info: number

    constructor(code: string, element: string, toPay: number, toRemove: number, info: number) {
        this.code = code
        this.element = element
        this.toPay = toPay
        this.toRemove = toRemove
        this.info = info
    }
}

export default LineData;