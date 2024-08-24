import Card from "../base/Card"


function DescriptionPoste ({ salaireBrut }) {
    return (<div className="Flex self-center">
        <h2 className="text-xl bg-zinc-300 border-solid border-4 border-gray-600  pl-2 rounded-tr-md">
           <Card>
            <div className="flex grid grid-cols-2 items-center ">
                <div className="text-center">

                    <p className="pl-2">Vous êtes <span className="font-bold">Echelon 2</span></p>
                    <p className="pl-2">Votre coefficient est de  <span className="font-bold"> 375</span></p> 
                </div>
                <div>
                    <p className="text-center"> <span className="font-bold">{salaireBrut} 1846,04 BRUT €</span> de salaire</p>
                    <p className="text-center"> en Equivalent Temps Plein</p> 
                 </div>
            </div>
                
            </Card>
                <Card>
                    <div className="flex grid grid-cols-2 justify-center">
                        <div className="text-center">
                             <p>Temps de service :  <span className="font-bold">62%</span> </p>
                            <p><span className="font-bold">24h </span>d'accompagnement</p>
                        </div>
                        <div className="text-center">
                        <p> <span className="font-bold">1144,55 € BRUT</span></p>
                            <p>de salaire</p> 
                            
                        </div>
                    </div>
                </Card>
            <div className="py-0,5">
                
                    <Card>
                        <div className="Flex items-center " >
                            <p className="text-center">Vous êtes affecté dans une établissement en zone <span className="font-bold">REP</span></p>
                        </div>
                    </Card>
                
            </div>
      </h2>
    </div>)
}

export default DescriptionPoste