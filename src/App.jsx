import Coef from "./components/parameters/Coef"
import PrimeDeRes from "./components/parameters/PrimeDeRes"
import QuotitePercent from "./components/parameters/QuotitePercent"
import EtabRep from "./components/parameters/EtabRep"
import Psc from "./components/parameters/Psc"
import Sft from "./components/parameters/Sft"
import BuyCoffee from "./components/parameters/BuyCoffee"

function App() {
  return  (<div >
      <h1 className="bg-black text-green-700 text-center text-6xl font-bold h-20 mx-2 mt-4 rounded-lg leading-normal"> Vérificateur de fiche de paie AESH</h1>
    <div className="flex h-full">
      <div className="overflow-scroll flex-col w-1/4">
        <Coef />
        <QuotitePercent />
        <PrimeDeRes/>
        <EtabRep/>
        <Psc/>
        <Sft></Sft>
        <BuyCoffee></BuyCoffee>
      </div>
      <div className="bg-gray-400 border-solid border-4 w-full h-fit m-2  gap-y-96 rounded-tr-2xl rounded-bl-2xl">
          <h1 className="text-xl bg-zinc-200 border-solid border-2 border-gray-600 mx-2 mt-3 h-auto pl-2 rounded-tr-md">
            <p> Vous êtes <span className="font-bold">Echelon 1</span>  avec un un coefficient de <span className="font-bold"> 371</span> soit en equivalent temps plein un salaire de <span className="font-bold">1826,32 € brut</span></p>
            <p> Vous avez une quotité de <span className="font-bold">62%</span> soit un temps d'accompagnement de <span className="font-bold">24h</span> par semaine équivalent à un salaire de <span className="font-bold">1132,32€ brut</span></p>
            <p> Votre prime de résidence est calculée à hauteur de 1% de votre traitement brut</p>
            <p> Vous êtes affecté dans une établissement en <span className="font-bold">REP</span></p>
            <p> Vous avez demandé ou vous percevez la <span className="font-bold">PSC</span></p>
            <p>Vous ne percevez pas la <span className="font-bold">SFT</span></p>
          </h1>
          <div className="relative overflow-x-auto sm:rounded-lg mt-2 ml-2 mr-2">
                <table className="w-full text-sm text-left rtl:text-right text-black dark:text-gray-400">
                    <thead className=" text-center text-black uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="text-gray-200 text-center font-semibold text-sm">
                            <th scope="col" className="px-6 py-3">
                                Code
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Elément
                            </th>
                            <th scope="col" className="px-6 py-3">
                                A payer (€)
                            </th>
                            <th scope="col" className="px-6 py-3">
                                A déduire (€)
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Pour Information
                            </th>
                        </tr>
                    </thead>
                    <tbody className="font-bold text-black">
                        <tr className="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className=" px-6 py-4 font-bold text-base text-black whitespace-nowrap">
                                101000
                            </th>
                            <td className="px-6 py-4 pr-2  text-base text-right font-bold">
                                Traitement Brut : 
                            </td>
                            <td className="px-6 py-4">
                                
                            </td>
                            <td className="px-6 py-4 ">
                                
                            </td>
                            <td className="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr className="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-bold text-base text-black whitespace-nowrap">
                                102000
                            </th>
                            <td className="px-6 py-4  pr-2  text-base text-right font-bold">
                                Indemnité de résidence : 
                            </td>
                            <td className="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr class="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
                                201883
                            </th>
                            <td class="px-6 py-4  pr-2 md:text-base text-right font-bold">
                                Ind Sujetion REP (Part fixe) : 
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr class="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 text-base font-bold text-gray-900 whitespace-nowrap dark:text-white">
                                202354
                            </th>
                            <td class="px-6 py-4  pr-2 text-base text-right font-bold">
                                Participation PSC :
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr class="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 text-base font-bold text-gray-900 whitespace-nowrap dark:text-white">
                                202477
                            </th>
                            <td class="px-6 py-4  pr-2 text-base text-right font-boldd">
                                Indem. de fonction : 
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr class="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4  text-base font-bold text-gray-900 whitespace-nowrap dark:text-white">
                                401112
                            </th>
                            <td class="px-6 py-4 text-base pr-2 text-right font-bold">
                                Coti.s Sal. vieillesse Plaf:  
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr class="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 text-base font-bold text-gray-900 whitespace-nowrap dark:text-white">
                                401210
                            </th>
                            <td class="px-6 py-4 text-base pr-2 text-right font-bold">
                                C.S.G non déductible :   
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr class="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 text-base font-bold text-gray-900 whitespace-nowrap dark:text-white">
                                401310
                            </th>
                            <td class="px-6 py-4 text-base pr-2 text-right font-bold">
                                C.S.G déductible :   
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr class="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
                                401510
                            </th>
                            <td class="px-6 py-4 text-base pr-2 text-right font-bold">
                                C.R.D.S :   
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr class="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
                                402212
                            </th>
                            <td class="px-6 py-4 text-base pr-2 text-right font-bold">
                                Cotis Sal vieillesse Déplaf :   
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr class="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-base text-base text-gray-900 whitespace-nowrap dark:text-white">
                                403392
                            </th>
                            <td class="px-6 py-4 text-base pr-2 text-right font-bold">
                                Cotis Pat Alloc Familliale :   
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr class="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
                                403398
                            </th>
                            <td class="px-6 py-4 text-base pr-2 text-right font-bold">
                                Cotis. Pat. Alloc. Fam Majoration :  
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr class="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
                                403412
                            </th>
                            <td class="px-6 py-4 text-base pr-2 text-right font-bold">
                                Cotis. Pat. Accident Travail :
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr class="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
                                403512
                            </th>
                            <td class="px-6 py-4 text-base pr-2 text-right font-bold">
                                Cotis. Pat. FNAL déplafonnée :   
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr class="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
                                403612
                            </th>
                            <td class="px-6 py-4 text-base pr-2 text-right font-bold">
                                Cotis. Pat. vieillesse plafonnée:   
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr class="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
                                403712
                            </th>
                            <td class="px-6 py-4 text-base pr-2 text-right font-bold">
                                Cotis. Sal. vieillesse plafonnée :  
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr class="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
                                403812
                            </th>
                            <td class="px-6 py-4 text-base pr-2 text-right font-bold">
                                Contrib. Solid. Autonomie :  
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr class="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
                                404012
                            </th>
                            <td class="px-6 py-4 text-base pr-2 text-right font-bold">
                                Cotis. Pat. maladie Déplaf :  
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                  
                            </td>
                        </tr>
                        <tr class="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
                                404098
                            </th>
                            <td class="px-6 py-4 text-base pr-2 text-right font-bold">
                                Cotis. Pat. maladie Déplaf. :  
                            </td>
                            <td class="px-6 py-4">    
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">  
                            </td>
                        </tr>
                        <tr class="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
                                501010
                            </th>
                            <td class="px-6 py-4 text-base pr-2 text-right font-bold">
                                Cotis. Sal IRCANTEC Tr.A :  
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr class="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
                                501110
                            </th>
                            <td class="px-6 py-4 text-base pr-2 text-right font-bold">
                                Cotis. Pat. IRCANTEC Tr.A :  
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr class="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-bold text-base text-gray-900 whitespace-nowrap dark:text-white">
                                554500
                            </th>
                            <td class="px-6 py-4 text-base pr-2 text-right font-bold">
                                Cotis. Patro. VST Mobilité :   
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="relative overflow-x-auto  mt-2 ml-2 mr-2">
                <table class=" ml-auto mr-0.5 text-black dark:text-gray-400">
                    <thead class=" text-center uppercase text-black bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
                        <tr class="text-white text-center font-semibold text-base pl-20">
                            <th scope="col" class=" px-6 py-3 w-96">
                                Montant à percevoir :
                            </th>
                            <th scope="col" class=" px-6 py-3 w-80">
                                A payer (€) :
                            </th>
                            <th scope="col" class=" px-6 py-3 w-80">
                                A déduire (€) :
                            </th>
                            <th scope="col" class="px-6 py-3 w-80 break-before-left rounded-tr-md">
                                Pour Information :
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800  dark:border-gray-700">
                            <th scope="row" class=" text-center text-green-700 px-6 py-4 font-bold text-3xl whitespace-nowrap  border-l-gray-700 bg-gray-400">
                                XXX,XX€
                            </th>
                            <th  class=" text-center px-6 py-4 font-bold text-xl text-black whitespace-nowrap  border-l-gray-700 bg-green-700 rounded-bl-md">
                                XXX,XX€
                            </th>
                            
                            <td class="px-6 py-4 text-center text-xl text-white font-bold bg-red-600">
                                XXX,XX € 
                            </td>
                            <td class="px-6 py-4 text-center text-xl font-bold  text-black bg-purple-500">
                                XXX,XX €   
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="relative overflow-x-auto  mt-0.5 ml-2 mr-2 mb-2">
                <table class=" ml-auto mr-0.5 text-black dark:text-gray-400">
                    <thead class="  dark:bg-gray-700 dark:text-gray-400">
                        <tr class="text-white uppercase text-center font-semibold text-base pl-20">
                            <th scope="col" class=" px-6 py-3 w-96">

                            </th>
                            <th scope="col" class=" px-6 py-3 w-80">

                            </th>
                            <th scope="col" class=" px-6 py-3 text-center bg-gray-700 w-80">
                                Charges  Salarié :
                            </th>
                            <th scope="col" class="px-6 py-3 break-before-left bg-gray-700 w-80 rounded-tr-md">
                                Charges Patronnales : 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800  dark:border-gray-700">
                            <th scope="row" class=" text-center text-green-700 px-6 py-2 font-bold text-3xl whitespace-nowrap  border-l-gray-700 bg-gray-400">
                            </th>
                            <th  class=" text-center px-6 py-4 font-bold text-xl text-black whitespace-nowrap  border-l-gray-700 bg-gray-400">
                            </th>
                            
                            <td class="px-6 py-4 text-center text-xl text-black font-bold bg-red-600 rounded-bl-md">
                                XX,XX % 
                            </td>
                            <td class="px-6 py-4 text-center text-xl text-wrap font-bold  text-black bg-purple-500 w-70">
                                XX,XX %   
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
      </div>
      
    </div>
  </div>)
  }
  export default App
