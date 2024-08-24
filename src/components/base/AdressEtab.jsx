function AdressEtab() {
    return(
        <div className="flex grid grid-cols-2 Border-solid border-t-2 border-gray-500/40 bg-zinc-300  items-center">
                <div className="flex-col text-center text-lg" id="police">
                    <p className="pl-2">
                        31, Av. de l'amitié
                    </p> {/*"adresse_1" */}
                    <p className="pl-2">
                        76350, Oissel
                    </p> {/*"code_postal" & "nom_commune" */}
                </div>
                <div className="Flex text-left">
                    <p className="pl-3">Mail : <a href="mailto:ce.0760083c@ac-normandie.fr" className="text-blue-600  visited:text-purple-600  pl-2 text-sm underline decoration-solid">Envoyer un message</a>
                    </p> {/*"mail" */}
                    <p className="pl-3">
                        Téléphone : <a className="pl-2 text-sm">02 35 65 01 49</a>
                    </p> {/*"telephone": */}
                    <p className="pl-3 pb-2">Site Internet : 
                        <a href="http://jeancharcot-oissel.arsene76.fr/" className="text-blue-600  visited:text-purple-600  pl-2 text-sm underline decoration-solid"> {/* "web" */}
                        Collège Jean Charcot 
                        </a> {/*"nom_etablissement"*/ }
                    </p>
                </div>
            </div>
    )
}
export default AdressEtab