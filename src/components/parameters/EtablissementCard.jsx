import Card from "../base/Card";
import Pourtour from "../base/Pourtour";
import AdressEtab from "../base/AdressEtab";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

function EtablissementCard () {
    const data = useContext(DataContext)
    const school = data.input.school

    if (!school) {
        return
    }

    return (<div className="content-center">
        <div className="Border-solid  border-4 border-gray-600 bg-zinc-300 ml-2 text-center rounded-tr-lg rounded-bl-lg">
            <h2 className=" text-xl font-bold  m-auto" id="police">{school.name}</h2>
            <h3 className="text-sm font-bold m-auto ">Pial de rattachement : 
                <a href="#" className=" pl-2 text-xs italic font-bold text-blue-600 font-bold visited:text-purple-600 underline decoration-solid">
                    Plus d'informations
                </a>
            </h3>
            
            <div className="flex grid grid-cols-3 m-2 p-2 justify-center">
                <div className="Flex">
                    <Pourtour>
                        <h3>{ school.isPublic ? 'Public' : 'Privé' }</h3>
                    </Pourtour>
                </div>
                 <div className=" Flex">
                    <Pourtour>
                        <h3>
                            <span className="font-bold">{ school.nbStudents}</span> élèves
                        </h3>
                    </Pourtour>
                    { school.hasRestaurant &&
                        <Pourtour>
                            <h3>Restauration</h3>
                        </Pourtour>
                    }
                 </div>
                <div className="Flex">
                    { school.hasUlisClass &&
                    <Pourtour>
                        <h3 className="">ULIS</h3>
                    </Pourtour>
                    }
                    { school.hasSegpaClass &&
                    <Pourtour>
                        <h3>SEGPA</h3>
                    </Pourtour>
                    }
                </div>
            </div>
            <AdressEtab/>
            
         </div>
    </div>
)
}

export default EtablissementCard