class Ivac {
    session: string = "2023"
    mentionTresBien: number = 29
    mentionBien: number = 22
    mentionAssezBien : number = 26
    successRate : number = 85


    constructor(session: string = "2023", mentionTresBien : number =29, mentionBien : number = 22 , mentionAssezBien : number = 26, successRate : number = 85) {
        this.session = session
        this.mentionTresBien = mentionTresBien
        this.mentionBien = mentionBien
        this.mentionAssezBien = mentionAssezBien
        this.successRate = successRate
    }   
}

export default Ivac