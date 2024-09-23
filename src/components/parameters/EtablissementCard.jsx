import Card from "../base/Card";
import Pourtour from "../base/Pourtour";
import AdressEtab from "../base/AdressEtab";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import DonutChart from "react-donut-chart";

function EtablissementCard () {
    const data = useContext(DataContext)
    const school = data.input.school

    if (!school) {
        return
    }

    const donutData = [
        {
          label: 'Taux de réussite',
          value: 85,
        },
        {
          label: '',
          value: 15,
          isEmpty: true,
        },
      ]

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
            <div>
                <h3 className="text-xl font-bold m-auto p-6">Taux de réussite au DNB</h3>
                <div className="content-center flex flex-grid col-2  h-50">
                    <div className="w-80 content-center">
                        <div className="text-2xl font-bold flex flex-grid col-2 m-auto pb-2">
                            <img src="Pictures/icons8-position-48.png"/>
                            <span className="text-center pt-2">IPS :</span> 
                        </div>
                        <div className="text-2xl font-bold flex flex-grid col-2 m-auto">
                            <img src="Pictures/icons8-médaille-d'or-olympique-48.png"/>
                            <span className="text-center pt-2">Mention Très Bien :</span> 
                        </div>
                        <div className="text-2xl font-bold pt-2 flex flex-grid col-2 m-auto">
                            <img src="Pictures/icons8-médaille-d'argent-olympique-64.png" className="w-12 h-12"/>
                            <span className="text-center pt-2">Mention Bien : </span>
                        </div>
                        <div className="text-2xl font-bold pt-2 flex flex-grid col-2 m-auto">
                            <img src="Pictures/icons8-médaille-de-bronze-olympique-80.png"className="w-10 h-10"/>   
                            <span className="text-center pt-2"> Mention assez Bien :</span> 
                        </div>
                     </div>
                    <div className="w-1/2  mx-auto"> 
                        Taux de réussite: 85%
                        <div className="justify-center flex">
                            
                            <DonutChart data={donutData} height={200} width={200} legend={false} interactive={false} />
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
)
}

export default EtablissementCard