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
      <h1 className="bg-black text-indigo-400 text-center text-6xl font-bold h-22 my-2 mr-6 rounded-lg leading-normal p-2 max-sm:text-lg max-sm:h-6  max-sm:pt-0.5 max-sm:mr-1 max-sm:mt-0 max-sm:leading-none md:text-4xl md:h-12 max-sm:rounded-md lg:text-7xl md:h-32 md:pt-6 md:ml-4 md:mr-3">Jour de carence AESH</h1>
    <div className="w-full">
      <div className="flex h-full max-sm:m-0">
        <div className="flex w-1/4 max-sm:w-2/5 max-sm:m-0">
          <div className="max-sm:pl-0.5">
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
          <div className="bg-gray-00 border-gray-700 border-solid border-4 w-auto max-md:h-max max-sm:h-fit pr-2 mr-6 mt-2.5 rounded-tr-2xl rounded-bl-2xl max-sm:mt-0 max-sm:mr-2 w-3/4 max-sm:border-none max-sm:pt-0  ">
            <div className="flex  gap-x-5 m-2 p-2 justify-center max-sm:flex-row max-sm:gap-x-0.5 max-sm:p-0 max-sm:mt-2 max-sm:mr-0 max-sm:ml-0.5 max-md:pt-4 ">
              <CarenceNow />
              <KasbarianCarence />
            </div>  
          </div>
      </div>
    </div>
  </div>)
  
}

export default MainPageCarence