import { useEffect, useState } from "react"
import Card from "../base/Card"
import InputSelection from "../base/InputSelection"

function CodePostal() {
    let [postalCode, setPostalCode] = useState("76350")
    let [schools, setSchools] = useState([])
    let [selectedSchool, setSelectedSchool] = useState(null)

    useEffect(() => {
        if (postalCode.length != 5) { return }

        fetch(
            `https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-annuaire-education/records?where=code_postal%20%3D%20%22${postalCode}%22&limit=100&refine=statut_public_prive%3A%22Public%22&refine=etat%3A%22OUVERT%22&refine=ministere_tutelle%3A%22MINISTERE%20DE%20L%27EDUCATION%20NATIONALE%22`
        ).then(r => r.json()).then((data) => {
            let schools = data.results
            setSchools(schools)

            if (schools.length > 0) {
                setSelectedSchool(schools[0])
            }
        })
        .catch((error) => {
            console.log("Ya eu un souci", error)
        })
    }, [postalCode])
    
    function generateOptions(schoolArray) {
        return schoolArray.map((school, index) => {
            return <option key={index} className="text-center" value={school["identifiant_de_l_etablissement"]}>{school["nom_etablissement"]}</option>
        })
    }

    function findSelectedSchool(schoolArray, idSchool) {
        let school = schoolArray.find((school) => school["identifiant_de_l_etablissement"] == idSchool)
        setSelectedSchool(school)
    } 

    return (<Card>
            <h2 className=" text-center font-extrabold mb-2">Saisie des Informations</h2>
            <div className="text-center text-2xl mb-2 pb-1">
            <InputSelection  textValue={postalCode} updateText={setPostalCode} className="mb-2" />
            </div>
            <div className="text-center">
            <select onChange={e => findSelectedSchool(schools, e.target.value) } name="school" id="schoolSelect" className="bg-zinc-200 h-auto mb-2 w-5/6 rounded-lg  hover:bg-green-400">
                {
                    generateOptions(schools)
                }
            </select>
            </div>
            
            <div>
                {
                    selectedSchool && 
                    JSON.stringify(selectedSchool)
                }
            </div>
        </Card>
    )   
}

export default CodePostal