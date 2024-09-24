import { useFetch } from "../hooks/usefetch";

function SchoolFetcher ({ postalCode }) {
    // const filteredURL = 'https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-annuaire-education/records?where=code_postal%20%3D%20%2276410%22&refine=statut_public_prive%3A%22Public%22&refine=etat%3A%22OUVERT%22&refine=ministere_tutelle%3A%22MINISTERE%20DE%20L%27EDUCATION%20NATIONALE%22'
    // const adresse = 'https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-annuaire-education/records?limit=100&refine=statut_public_prive%3A%22Public%22&refine=etat%3A%22OUVERT%22&refine=ministere_tutelle%3A%22MINISTERE%20DE%20L%27EDUCATION%20NATIONALE%22'
    
    const url = `https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-annuaire-education/records?where=code_postal%20%3D%20%22${postalCode}%22&refine=statut_public_prive%3A%22Public%22&refine=etat%3A%22OUVERT%22&refine=ministere_tutelle%3A%22MINISTERE%20DE%20L%27EDUCATION%20NATIONALE%22`
    const {loading, data, errors} = useFetch(url)

    
    let schools = data?.map((school) => {
        return <li>{school["nom_etablissement"]} - Code Postal : {school["code_postal"]}</li>
    })

    return <div>
        {postalCode}

        <br />

        {loading && <div>Chargenemnt...</div>}
        {data && <div>
            <ul>{schools}</ul>
        </div>}
        
        {errors && <div>
            ERROR
            <ul>
                errors.map((error) { <li>{error}</li> })
            </ul>
        </div>}
    </div>
}
export default SchoolFetcher