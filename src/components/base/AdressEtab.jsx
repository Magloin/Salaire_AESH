import { useContext } from "react"
import { DataContext } from "../../contexts/DataContext"

function AdressEtab() {
    const data = useContext(DataContext)
    const school = data.input.school
    if (!school) {
        return
    }

    return(
        <div className="flex grid grid-cols-2 Border-solid border-t-2 border-gray-500/40 bg-zinc-300  items-center">
                <div className="flex-col text-center text-lg" id="police">
                    <p className="pl-2">
                       {school.adressLine1}
                    </p> {/*"adresse_1" */}
                    <p className="pl-2">
                       {school.postalCode}, {school.communeName}
                    </p> {/*"code_postal" & "nom_commune" */}
                </div>
                <div className="Flex text-left">
                    <p className="pl-3">Mail : <a href={"mailto:" + school.mailAdress} className="text-blue-600  visited:text-purple-600  pl-2 text-sm underline decoration-solid">Envoyer un message</a>
                    </p> 
                    { school.phoneNumber &&
                    <p className="pl-3">
                        Téléphone : <a className="pl-2 text-sm">{school.phoneNumber}</a>
                    </p>
                    }

                    { school.webAdress &&
                        <p className="pl-3 pb-2">Site Internet : 
                            <a href={school.webAdress}  target="_ blank" className="text-blue-600  visited:text-purple-600  pl-2 text-sm underline decoration-solid">
                                {school.name} 
                            </a>
                    </p>
                    }
                </div>
            </div>
    )
}
export default AdressEtab