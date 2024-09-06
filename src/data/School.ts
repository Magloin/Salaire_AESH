class SchoolData {
    
    uai:string = "0760083C" //"identifiant_de_l_etablissement":"0312198W"
    name: string = "Collège Jean Charcot" //"nom_etablissement":"Ecole élémentaire publique Le Pilat",
    type: string = "Collège" //"type_etablissement":"Ecole",
    isPublic: boolean = true //statut_public_prive":"Public","statut_public_prive":"Privé",
    adressLine1: string = "31 rue de l'amitié" //"adresse_1":"3 rue du Docteur Charles Ferran",
    adressLine2: string = "" //"adresse_2":null,
    postalCode: string = "76350" //"code_postal":"31800",
    communeName: string = "Oissel" //"nom_commune":"Saint-Gaudens",
    phoneNumber: string = "02 35 65 01 49"//"telephone":"0562003359",
    mailAdress: string = "ce.0760083c@ac-normandie.fr" //"mail":"ce.0312198W@ac-toulouse.fr",
    webAdress: string ="http://jeancharcot-oissel.arsene76.fr/"//"web":"https://collegehenribarbusse.blogs.laclasse.com/",
    hasRestaurant: boolean = true //"restauration":1,
    hasUlisClass: boolean = true //"ulis":1,
    hasSegpaClass: boolean = true //"segpa":"1",
    isRep: boolean = true
    isRepPlus: boolean = false //"appartenance_education_prioritaire":"REP+",
    nbStudents: number = 547 //"nombre_d_eleves":629,
    
    
    
    
    
    constructor ( uai:string="0760083C",name: string = "Collège Jean Charcot",type: string = "Collège",isPublic: boolean = true,adressLine1: string = "31 rue de l'amitié",adressLine2: string = "",postalCode: string = "76350",communeName: string = "Oissel", phoneNumber: string = "02 35 65 01 49",mailAdress: string = "ce.0760083c@ac-normandie.fr",webAdress: string ="http://jeancharcot-oissel.arsene76.fr/",hasRestaurant: boolean = true, hasUlisClass: boolean = true, hasSegpaClass: boolean = false, isRep: boolean = true, isRepPlus: boolean = false, nbStudents: number = 547)
    {this.uai = uai
        this.name = name
        this.type = type
        this.isPublic = isPublic
        this.adressLine1 = adressLine1
        this.adressLine2 = adressLine2
        this.postalCode = postalCode
        this.communeName = communeName
        this.phoneNumber= phoneNumber
        this.mailAdress = mailAdress
        this.webAdress = webAdress
        this.hasRestaurant = hasRestaurant
        this.hasUlisClass = hasUlisClass
        this.hasSegpaClass = hasSegpaClass
        this.isRep = isRep
        this.isRepPlus = isRepPlus
        this.nbStudents = nbStudents
    }
    
}

export default SchoolData