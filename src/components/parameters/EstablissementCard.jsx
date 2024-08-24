import Card from "../base/Card";
import Pourtour from "../base/Pourtour";
import AdressEtab from "../base/AdressEtab";

function EstablissementCard () {
    return (<div className="content-center">
        <div className="Border-solid  border-4 border-gray-600 bg-zinc-300 ml-2 text-center rounded-tr-lg rounded-bl-lg">
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
                        <h3 className="">Restauration</h3>
                     </Pourtour>
                 </div>
                <div className="Flex">
                    <Pourtour>
                        <h3 className="">ULIS</h3>
                    </Pourtour>
                    <Pourtour>
                        <h3>SEGPA</h3>
                    </Pourtour>
                </div>
            </div>
            <AdressEtab/>
            
         </div>
    </div>
)
}

export default EstablissementCard