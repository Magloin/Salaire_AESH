class Ivac {
    session: string
    mentionTresBien: number
    mentionBien: number
    mentionAssezBien : number
    successRate : number


    constructor(session: string , mentionTresBien : number , mentionBien : number  , mentionAssezBien : number , successRate : number) {
        this.session = session
        this.mentionTresBien = mentionTresBien
        this.mentionBien = mentionBien
        this.mentionAssezBien = mentionAssezBien
        this.successRate = successRate
    }   
}

export default Ivac