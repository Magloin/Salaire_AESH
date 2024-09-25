import { useFetch } from "../hooks/usefetch";

function IvacFetcher ({ uai }) {
    const url = `https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-indicateurs-valeur-ajoutee-colleges/records?where=uai%3D%22${uai}%22&limit=20`
    const {loading, data, errors} = useFetch(url)

    let ivacs = data?.map((uai)=>{
        return <li key={uai["session"] + "_" + uai["uai"]}>
            Session: {uai["session"]} 
            - Nombre de candidat : {uai["nb_candidats_g"]} 
            - Taux de reussite : {uai["taux_de_reussite_g"]} 
            - Mention TB: {uai["nb_mentions_tb_g"]} 
            - Mention B : {uai["nb_mentions_b_g"]} 
            - Mention AB: {uai["nb_mentions_ab_g"]}
        </li>
    })

    let ivac = data?.sort((l, r) => r["session"] - l["session"])[0]

    return <div>
        {uai}

        <br />

        {loading && <div>Chargement...</div>}
        {data && <div>
            <ul>{ivacs}</ul>
        </div>}

        {errors && <div> 
            ERROR
            <ul>
                errors.map((error) { <li>{error}</li> })
            </ul>
        </div>}
    </div>
}
 export default IvacFetcher

/* session
nb_candidats_g
taux_de_reussite_g
nb_mentions_tb_g
nb_mentions_b_g
nb_mentions_ab_g
*/