import { useContext, useEffect, useState } from "react"
import Card from "../base/Card"
import InputSelection from "../base/InputSelection"
import SchoolData from "../../data/School"
import { DataDispatchContext } from "../../contexts/DataContext"
import Ivac from "../../data/Ivac"

function CodePostal() {
    const dispatch = useContext(DataDispatchContext)

    let [postalCode, setPostalCode] = useState("76350")
    let [schools, setSchools] = useState([])
    let [selectedSchool, setSelectedSchool] = useState(null)

    useEffect(() => {
        if (postalCode.length != 5) { return }

        fetch(
            `https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-annuaire-education/records?where=code_postal%20%3D%20%22${postalCode}%22&limit=100`
        ).then(r => r.json()).then((data) => {
            let schools = data.results.map((result) => {
                return new SchoolData(
                    result["identifiant_de_l_etablissement"],
                    result["nom_etablissement"],
                    result["type_etablissement"],
                    result["statut_public_prive"] === "Public",
                    result["adresse_1"],
                    result["adresse_2"],
                    result["code_postal"],
                    result["nom_commune"],
                    result["telephone"],
                    result["mail"],
                    result["web"],
                    result["restauration"] === 1,
                    result["ulis"] === 1,
                    result["segpa"] === "1",
                    result["appartenance_education_prioritaire"] === null ? false : true,
                    result["appartenance_education_prioritaire"] === "REP+" ? true : false,
                    result["nombre_d_eleves"]
                ) 
            })
            setSchools(schools)

            if (schools.length > 0) {
                setSelectedSchool(schools[0])
                dispatch({ type: "school", value: schools[0] })
            }
        })
        .catch((error) => {
            console.log("Ya eu un souci", error)
        })
    }, [postalCode])

    useEffect(() => {
        if (selectedSchool == null || selectedSchool == undefined) { return }
        if (selectedSchool.uai == null || selectedSchool.uai == undefined) { return }
        if (selectedSchool.type != "Collège") { return }

        const ipsFetch = fetch(`https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-ips-colleges-ap2022/records?where=uai%3D%22${selectedSchool.uai}%22&limit=20`)
        const ivacFetch = fetch(`https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-indicateurs-valeur-ajoutee-colleges/records?where=uai%3D%22${selectedSchool.uai}%22&limit=20`)
        
        Promise.all([ipsFetch, ivacFetch])
            .then((rs) => Promise.all(rs.map((r) => r.json())))
            .then((dataArray) => {
                let ipsData = dataArray[0]?.results[0]
                if (ipsData && ipsData.ips) {
                    dispatch({ type: "ips", value: ipsData.ips })
                }

                let ivacData = dataArray[1]?.results.sort((l, r) => r["session"] - l["session"])[0]
                if (ivacData) {
                    let ivacObject = new Ivac(ivacData["session"], ivacData["nb_mentions_tb_g"], ivacData["nb_mentions_b_g"], ivacData["nb_mentions_ab_g"],ivacData["taux_de_reussite_g"])
                    dispatch({ type: "ivac", value: ivacObject })
                }

            }).catch((error) => {
                console.log("Ya eu un souci", error)
                
            })

    }, [selectedSchool])
    
    function generateOptions() {
        return schools.map((school, index) => {
            return <option key={index} className="text-center" value={school.uai}>{school.name}</option>
        })
    }

    function findSelectedSchool(idSchool) {
        let school = schools.find((school) => school.uai == idSchool)
        setSelectedSchool(school)
        dispatch({ type: "school", value: school })
    } 

    return (<Card>
            <h2 className=" text-center font-extrabold mb-2">Saisie des Informations</h2>
            <div className="text-center text-2xl mb-2 pb-1">
            <InputSelection  textValue={postalCode} updateText={setPostalCode} className="mb-2" />
            </div>
            <div className="text-center">
            <select onChange={e => findSelectedSchool(e.target.value) } name="school" id="schoolSelect" className="bg-zinc-200 h-auto mb-2 w-5/6 rounded-lg  hover:bg-green-400">
                {
                    generateOptions()
                }
            </select>
            </div>
        </Card>
    )   
}

export default CodePostal