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
import ContactUs from "./ContactUs"



function MainPageCarence() {
  const data = useContext(DataContext)
  const heal = data.input.heal
  const carenceOutput = data.carenceOutput
  const diffRetenues = carenceOutput.threeDayCarenceSalaryNetLost - carenceOutput.OneDayCarenceSalaryNetLost
  
  return (<div >
   
    <div className="">
    <h1 className=" text-center text-3xl text-indigo-400 bg-black/60 font-bold h-12 py-1 rounded-lg mx-1 lg:h-20 lg:text-5xl lg:py-4 lg:mx-4 xl:text-7xl xl:h-28 xl:py-4 xl:mx-4">Jour de carence AESH</h1>
    </div>
    {/*-- Cadre de selection des informations */}
      <div className="w-full">
        <div className="flex h-full max-sm:m-0 pt-2">
          <div className="flex w-1/4 max-sm:w-2/5 max-sm:m-0">
            <div className="max-sm:pl-0.5">
              <HealDay />
              <Coef />
              <QuotitePercent />
              <CodePostal />
              <PrimeDeRes/>
              <Psc/>
              <Card hidden> 
              <h2 className="text-lg text-left pl-1.5 font-extrabold max-sm:text-xs md:text-sm lg:text-xl xl:text-2xl xl:pl-3">SFT</h2>
               <h3 className="px-1.5 py-1  text-left text-xs  italic text-red-700/80 min-md:text-sm lg:text-sm xl:text-base"> "En cas de congé de maladie, de longue maladie ou de longue durée et de grève, le SFT est maintenu en totalité."</h3>
              </Card>
              <BuyCoffee/>
              <ContactUs/>
              <UseFetch />
            </div>
          </div>
          {/* Cadre de visualisation de données */}
          
          <div className=" border-gray-700 border-solid border-4 w-auto max-md:h-max max-sm:h-fit my-1 mt-2.5 rounded-tr-2xl rounded-bl-2xl max-sm:mt-0 max-sm:mr-2 w-3/4 max-sm:border-none max-sm:pt-0 ">
          
            <Card>
              <div className=" bg-gray-700/30 max-sm:text-base  text-lg">
                <p className=" text-center md:text-3xl md:py-1 font-bold text-indigo-600 lg:text-4xl xl:text-5xl md:py-3 xl:py-2 py-1.5"> Pour {heal} jours de maladie</p>
              </div>
            </Card>
            <div className="flex  gap-x-2 mx-1 px-3 justify-center max-sm:flex-row max-sm:gap-x-0.5 max-sm:p-0 max-sm:mt-0 max-sm:mr-0 max-sm:ml-0.5 max-md:pt-4 ">
              <CarenceNow />
              <KasbarianCarence />
            </div>
            {/*-- cadre recapitulatif --*/}
            
            <Card>
            <div className="bg-gray-300">
              <div className="flex flex-row gap-x-2 md:mt-0 mt-3 xl:mt-0 p-0 justify-center max-sm:flex-row max-sm:gap-x-3.5 max-sm:p-0 max-sm:mt-0 max-sm:mr-0 max-sm:ml-0.5 max-md:pt-4 text-xl w-full lg:mt-0">
              
                <div className="w-1/2">
                <Card>
                  
                    <div className="bg-yellow-600 text-left lg:text-2xl xl:text-2xl xl:font-semibold">
                      <p className="font-medium font-medium text-slate-100 text-center">Perte salaire</p> 
                    </div>
                    <div className="bg-yellow-600/30 text-right pr-1 lg:text-2xl xl:text-2xl xl:font-semibold">
                      <p className="text-yellow-600 font-extrabold">{data.carenceOutput.oneDayCarenceLost.toFixed(2)} %</p> 
                    </div>
                  </Card>
                  </div>
                  <div className="w-1/2 pr-1">
                    <Card>
                      <div className="bg-yellow-600 text-left lg:text-2xl xl:text-2xl xl:font-semibold">
                        <p className="font-medium text-slate-100 text-center">Perte salaire</p>
                      </div>
                      <div className="bg-yellow-600/30 text-right pr-1">
                        <p className="text-yellow-600 font-extrabold lg:text-2xl xl:text-2xl xl:font-semibold">{data.carenceOutput.TreeDayCarenceLost.toFixed(2)} %</p> 
                      </div>
                    </Card>
                  </div>
              </div> 
                <p className="font-black px-1 text-base md:text-lg lg:text-3xl lg:py-1.5 xl:text-3xl xl:font-bold xl:mx-3">Une retenue en sus de <span className="text-red-600">{diffRetenues.toFixed(2)} €</span>  pour {heal} jours de maladie.</p> 
              </div>
            </Card>
          </div> 
        </div>
      </div>
    </div>)  
  }
  
  export default MainPageCarence