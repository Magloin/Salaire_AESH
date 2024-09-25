import { useFetch } from "../hooks/usefetch";

function IpsFetcher ({ uai }) {
    const url = `https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-ips-colleges-ap2022/records?where=uai%3D%22${uai}%22&limit=20`
    const {loading, data, errors} = useFetch(url)

    let ipsList = data?.map((ips) => {
        return <li key={ips["ips"]}> IPS - {ips["ips"]} </li>
    })

    let ips = data?.sort ((l, r)=> r["rentree_scolaire"] - l["rentree_scolaire"])[0]

    return <div>
        {ips && <div>
            { JSON.stringify(ips) }
        </div>}

        <br />

        {loading && <div>Chargement...</div>}
        {ipsList && <div>
            <ul>{ipsList}</ul>
        </div>}

        {errors && <div>
            ERROR
            <ul>
                errors.map((error) { <li>{}error</li>})
            </ul>
        </div>}

    </div>
}
export default IpsFetcher