import Coef from "../parameters/Coef"
import PrimeDeRes from "../parameters/PrimeDeRes"
import QuotitePercent from "../parameters/QuotitePercent"
import Psc from "../parameters/Psc"
import Sft from "../parameters/Sft"
import BuyCoffee from "../parameters/BuyCoffee"
import TableRow from "../base/TableRow"
import UseFetch from "../parameters/SchoolFetcher"
import CodePostal from "../parameters/CodePostal"
import Card from "../base/Card"
import EtablissementCard from "../parameters/EtablissementCard"
import DescriptionPoste from "../parameters/DescriptionPoste"
import AdressEtab from "../base/AdressEtab"
import { useContext } from "react"
import { DataContext } from "../../contexts/DataContext"
import SalaryOutputData from "../../data/SalaryOutputData"
import EtablissementCardLight from "../parameters/EtablissementCardLight"
import CarenceNow from "../parameters/CarenceNow"
import KasbarianCarence from "../parameters/KasbarianCarence"
import HealDay from "../parameters/HealDay"



function MainPageCarence() {
  const data = useContext(DataContext)
 
  

  return (<div >
      <h1 className="bg-black text-indigo-400 text-center text-6xl font-bold h-20 mx-2 mt-4 rounded-lg leading-normal max-sm:text-lg max-sm:h-10 ">Simulateur de Jour de carence AESH</h1>
    <div className="flex h-full">
      <div className=" w-1/4 max-sm:w-2/5 ">
        <div className="">
          <HealDay />
          <Coef />
          <QuotitePercent />
          <CodePostal />
          <PrimeDeRes/>
          <Psc/>
          <Sft/>
          <BuyCoffee/>
          <UseFetch />
        </div>
      </div>
      <div className="bg-gray-00 border-gray-700 border-solid border-4 w-full h-fit m-2   rounded-tr-2xl rounded-bl-2xl">
        
        <div className="flex flex-row gap-x-5 m-2 p-2 justify-center max-sm:flex-row">
          <CarenceNow />
          <KasbarianCarence />
        </div>  
      </div>
      
    </div>
  </div>)
}

export default MainPageCarence;