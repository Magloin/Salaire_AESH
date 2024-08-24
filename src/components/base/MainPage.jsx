import Coef from "../parameters/Coef"
import PrimeDeRes from "../parameters/PrimeDeRes"
import QuotitePercent from "../parameters/QuotitePercent"
import EtabRep from "../parameters/EtabRep"
import Psc from "../parameters/Psc"
import Sft from "../parameters/Sft"
import BuyCoffee from "../parameters/BuyCoffee"
import TableRow from "../base/TableRow"
import UseFetch from "../parameters/UseFetch"
import CodePostal from "../parameters/CodePostal"
import Card from "../base/Card"
import EstablissementCard from "../parameters/EstablissementCard"
import DescriptionPoste from "../parameters/DescriptionPoste"
import AdressEtab from "../base/AdressEtab"

const indPoint = 4.92278
const divCoef = document.querySelector('input[name="coef"]:checked');

const salaireBrut = indPoint*divCoef


function MainPage() {
    return (<div >
      <h1 className="bg-black text-indigo-400 text-center text-6xl font-bold h-20 mx-2 mt-4 rounded-lg leading-normal ">Simulateur de fiche de paie AESH</h1>
    <div className="flex h-full">
      <div className="overflow-scroll flex-col w-1/4">
        <Coef />
        <QuotitePercent />
        <CodePostal />
        <PrimeDeRes/>
        <EtabRep/>
        <Psc/>
        <Sft/>
        <BuyCoffee/>
        <UseFetch />
      </div>
      
      <div className="bg-gray-00 border-gray-700 border-solid border-4 w-full h-fit m-2  gap-y-96 rounded-tr-2xl rounded-bl-2xl">
        
        <div className="flex grid grid-cols-2 m-2 p-2 justify-center">
        <DescriptionPoste salaireBrut={salaireBrut} />
        <EstablissementCard/>
        
        </div>
        <div className=" m-2 w-1/2"> 
          <Card>
            <Card>
              <div className="bg-zinc-300">
                <h1 className="text-center text-2xl">Pial de  :<a className="font-bold pl-2">Saint Etienne du rouvray</a> </h1>
                <h2 className="text-center text-center text-xl font-bold" >Collège Pablo Picasso</h2>
                <AdressEtab/>
              </div>
            </Card>
            <div className=" flex">
              <div className="w-1/2">
                <Card>{/* card second degrés */}
                  <h2 className=" text-center">Collège <a className="font-bold">Jean Charcot</a></h2>
                  <h3 className="pl-2"><p>Commune :<a className="font-bold capitalize pl-1">oissel </a></p></h3>
                </Card>
              </div>
              <div className=" pl-2 w-1/2">
                <Card>
                  <h2 className="text-center">Primaire <a className="font-bold capitalize">Louis Pasteur</a></h2>
                  <h3 className="pl-2"><p>Commune :<a className="font-bold capitalize pl-1">oissel </a></p></h3>
                </Card>
              </div>
              </div>
        </Card>
        </div>



          <div className="relative overflow-x-auto sm:rounded-lg mt-2 ml-2 mr-2">
                <table className="w-full text-sm rtl:text-right text-black dark:text-gray-400">
                    <thead className=" text-center font-semibold text-gray-200 uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3 w-44">Code</th>
                        <th scope="col" className="px-6 py-3 w-72">Elément</th>
                        <th scope="col" className="px-6 py-3 w-72">A payer (€) </th>
                        <th scope="col" className="px-6 py-3 w-72">A déduire (€)</th>
                        <th scope="col" className="px-6 py-3 w-72">Pour Information</th>
                      </tr>
                    </thead>
                    
                    <tbody className="font-bold text-black text-base">
                      <TableRow>
                        <td scope="row" className="px-6 py-4 whitespace-nowrap">101000</td>
                        <td scope="row" className="px-6 py-4 pr-2 text-right">Traitement Brut :</td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                      </TableRow>
                      <TableRow>
                        <td scope="row" className="px-6 py-4  whitespace-nowrap">102000</td>
                        <td scope="row" className="px-6 py-4  pr-2 text-right">Indemnité de résidence :</td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                      </TableRow>
                      <TableRow>
                        <td scope="row" className="px-6 py-4 whitespace-nowrap">201883</td>
                        <td scope="row" className="px-6 py-4 pr-2 text-right">Ind. Sujetion REP (Part fixe) :</td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                      </TableRow>
                      <TableRow>
                        <td scope="row" className="px-6 py-4 whitespace-nowrap">202354</td>
                        <td scope="row" className="px-6 py-4 pr-2 text-right">Participation PSC :</td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                      </TableRow>
                      <TableRow>
                        <td scope="row" className="px-6 py-4 whitespace-nowrap">202477</td>
                        <td scope="row" className="px-6 py-4 pr-2 text-right">Indem. de fonction :</td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                      </TableRow>
                      <TableRow>
                        <td scope="row" className="px-6 py-4 whitespace-nowrap">401112</td>
                        <td scope="row" className="px-6 py-4 pr-2 text-right">Cotis. Sal. vieillesse Plaf :</td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                      </TableRow>
                      <TableRow>
                        <td scope="row" className="px-6 py-4 whitespace-nowrap">401210</td>
                        <td scope="row" className="px-6 py-4 pr-2 text-right">C.S.G non déductible :</td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                      </TableRow>
                      <TableRow>
                        <td scope="row" className="px-6 py-4 whitespace-nowrap">401310</td>
                        <td scope="row" className="px-6 py-4 pr-2 text-right">C.S.G déductible :</td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                      </TableRow>
                      <TableRow>
                        <td scope="row" className="px-6 py-4 whitespace-nowrap">401510</td>
                        <td scope="row" className="px-6 py-4 pr-2 text-right">C.R.D.S :</td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                      </TableRow>
                      <TableRow>
                        <td scope="row" className="px-6 py-4 whitespace-nowrap">404212</td>
                        <td scope="row" className="px-6 py-4 pr-2 text-right">Cotis. Sal. vieillesse Déplaf. :</td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                      </TableRow>
                      <TableRow>
                        <td scope="row" className="px-6 py-4 whitespace-nowrap">403392</td>
                        <td scope="row" className="px-6 py-4 pr-2 text-right">Cotis. Pat. Alloc. Familliale :</td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"> </td>
                      </TableRow>
                      <TableRow>
                        <td scope="row" className=" px-6 py-4 whitespace-nowrap">403398</td>
                        <td scope="row" className="px-6 py-4 pr-2 text-right">Cotis. Pat. Alloc. Fam. Majoration :</td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                      </TableRow>
                      <TableRow>
                        <td scope="row" className="px-6 py-4 whitespace-nowrap">403412</td>
                        <td scope="row" className="px-6 py-4 pr-2 text-right">Cotis. Pat. Accident Travail :</td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"> </td>
                      </TableRow>
                      <TableRow>
                        <td scope="row" className="px-6 py-4 whitespace-nowrap">403512</td>
                        <td scope="row" className="px-6 py-4 pr-2 text-right">Cotis. Pat. FNAL déplafonnée :</td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                      </TableRow>
                      <TableRow>
                        <td scope="row" className=" px-6 py-4 whitespace-nowrap">403612</td>
                        <td scope="row" className="px-6 py-4 pr-2 text-right"> Cotis. Pat. vieillesse Plafonnée :</td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                      </TableRow>
                      <TableRow>
                        <td scope="row" className=" px-6 py-4 whitespace-nowrap">403712</td>
                        <td scope="row" className="px-6 py-4 pr-2 text-right">Cotis. Sal. vieillesse Plafonnée :</td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                      </TableRow>
                      <TableRow>
                        <td scope="row" className=" px-6 py-4 whitespace-nowrap">403812</td>
                        <td scope="row" className="px-6 py-4 pr-2 text-right">Contrib. Solid. Autonomie :</td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                      </TableRow>
                      <TableRow>
                        <td scope="row" className="px-6 py-4 whitespace-nowrap">404012</td>
                        <td scope="row" className="px-6 py-4 pr-2 text-right">Cotis. Pat. maladie Déplaf. :</td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                      </TableRow>
                      <TableRow>
                        <td scope="row" className="px-6 py-4 whitespace-nowrap">404098</td>
                        <td scope="row" className="px-6 py-4 pr-2 text-right">Cot. Pat. Mal. majoration :</td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                      </TableRow>
                      <TableRow>
                        <td scope="row" className=" px-6 py-4 whitespace-nowrap">501010</td>
                        <td scope="row" className="px-6 py-4 pr-2 text-right">Cotis. Sal. IRCANTEC Tr.A :</td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                      </TableRow>
                      <TableRow>
                        <td scope="row" className="px-6 py-4 font-bold whitespace-nowrap">501110</td>
                        <td scope="row" className="px-6 py-4 pr-2 text-right">Cotis. Pat. IRCANTEC Tr.A :</td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                      </TableRow>
                      <TableRow>
                        <td scope="row" className=" px-6 py-4 whitespace-nowrap">554500</td>
                        <td scope="row" className="px-6 py-4 pr-2 text-right">Cot. Pat. VST mobilité :</td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                        <td scope="row" className="px-6 py-4"></td>
                      </TableRow>
                    </tbody>
                </table>
            </div>
            
            <div className="relative overflow-x-auto  mt-2 ml-2 mr-2">
                <table className=" ml-auto mr-0.5 text-black dark:text-gray-400">
                    <thead className=" text-center uppercase text-black bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="text-white text-center font-semibold text-base pl-20">
                            <td scope="row" className="px-6 py-3 w-96">Montant à percevoir :</td>
                            <td scope="row" className="px-6 py-3 w-80">A payer (€) :</td>
                            <td scope="row" className="px-6 py-3 w-80">A déduire (€) :</td>
                            <td scope="row" className="px-6 py-3 w-80 rounded-tr-md">Pour Information :</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800  dark:border-gray-700">
                            <td scope="row" className="px-6 py-4 text-center text-green-700  font-bold text-3xl whitespace-nowrap  border-l-gray-700 bg-gray-400">XXX,XX€</td>
                            <td scope="row" className="px-6 py-4 text-center font-bold text-xl text-black whitespace-nowrap bg-green-700 rounded-bl-md">XXX,XX€</td>
                            <td scope="row" className="px-6 py-4 text-center text-xl text-white font-bold bg-red-600">XXX,XX €</td>
                            <td scope="row" className="px-6 py-4 text-center text-xl font-bold  text-black bg-purple-500">XXX,XX €</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="relative overflow-x-auto  mt-0.5 ml-2 mr-2 mb-2">
                <table className="ml-auto text-black dark:text-gray-400">
                    <thead className="dark:bg-gray-700 dark:text-gray-400">
                        <tr className="text-white uppercase text-center font-semibold text-base">
                            <td scope="col" className=" px-1.5 pt-4 w-96 whitespace-nowrap text-lg text-red-700 font-bold align-baseline">Ce simulateur ne remplace pas les informations fournis par le rectorat</td>
                            <td scope="col" className=" py-3"> </td>
                            <td scope="col" className=" py-3 w-80 bg-gray-700 ">Charges  Salarié :</td>
                            <td scope="col" className=" pr-1 py-3 w-80 bg-gray-700 rounded-tr-md">Charges Patronnales :</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-gray-100  odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800  dark:border-gray-700">
                            <td scope="row" className="px-1 text-center text-3xl text-red-700 font-bold align-top text-wrap  border-l-gray-700 bg-gray-400">et n'a qu'un but informatif</td>
                            <td scope="row" className="px-0 py-3 text-center text-xl text-black font-bold whitespace-nowrap  border-l-gray-700 bg-gray-400"></td>
                            <td scope="row" className="px-6 py-3 text-center text-xl text-black font-bold bg-red-600 rounded-bl-md">XX,XX % </td>
                            <td scope="row" className="px-6 py-3 text-center text-xl text-black font-bold   bg-purple-500"> XX,XX %</td>    
                        </tr>
                    </tbody>
                </table>
            </div>
      </div>
      
    </div>
  </div>)
}

export default MainPage;