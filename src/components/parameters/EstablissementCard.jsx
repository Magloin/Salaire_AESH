import Card from "../base/Card";
import Pourtour from "../base/Pourtour";

function EstablissementCard () {
    return (<div className="w-2/5 content-center">
        <div className="Border-solid  border-4 border-gray-500/100 bg-zinc-300 ml-2 text-center rounded-tr-lg rounded-bl-lg">
            <h2 className=" text-xl font-bold  m-auto" id="police">Collège Jean Charcot</h2>
            <h3 className="text-sm font-bold m-auto ">Pial de rattachement : 
                <a href="#" className=" pl-2 text-xs italic font-bold text-blue-600 font-bold visited:text-purple-600 underline decoration-solid">
                    Plus d'informations
                </a>
            </h3>
            
            <div className="flex grid grid-cols-3 m-2 p-2 justify-center">
                 <div className="Flex">
                        <Pourtour>
                            <h3 className="">Publique</h3>
                        </Pourtour>
                        <Pourtour>
                            <h3 className="">Privé</h3>
                        </Pourtour>
                </div>
                 <div className=" Flex">
                    <Pourtour>
                        <h3>
                            <span className="font-bold">545</span> élèves
                        </h3>
                    </Pourtour>
                    <Pourtour>
                        <h3 ClassName="">Restauration</h3>
                     </Pourtour>
                 </div>
                <div className="Flex">
                    <Pourtour>
                        <h3 ClassName="">ULIS</h3>
                    </Pourtour>
                    <Pourtour>
                        <h3>SEGPA</h3>
                    </Pourtour>
                </div>
            </div>
            <div className="flex grid grid-cols-2 Border-solid border-t-2 border-gray-500/40 bg-zinc-300  items-center">
                <div className="flex-col text-center text-lg" id="police">
                    <p className="pl-2">
                        31, Av. de l'amitié
                    </p> {/*"adresse_1" */}
                    <p className="pl-2">
                        76350, Oissel
                    </p> {/*"code_postal" & "nom_commune" */}
                </div>
                <div className="Flex-col text-left">
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
         </div>
    </div>
)
}

export default EstablissementCard