import SalarySimulator from "./components/SalarySimulator"
import CarenceSimulator from "./components/CarenceSimulator"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import React from 'react'
import { useReducer } from "react"
import dataReducer from "./reducers/DataReducer"
import { DataContext, DataDispatchContext } from "./contexts/DataContext"
import DataServiceCompute from "./services/DataService"
import InputData from "./data/InputData"

function App() {
  const [data, dispatch] = useReducer(
    dataReducer,
    DataServiceCompute(new InputData())
  )

  return (
    <>
    <Navbar/>
      <div>
      <DataContext.Provider value={ data }>
        <DataDispatchContext.Provider value={ dispatch }>
          <Routes>        
          {/*<Route path="/" element={<SalarySimulator/>} />*/}
          <Route path="/" element={<CarenceSimulator />}/>
        </Routes>
        </DataDispatchContext.Provider>
      </DataContext.Provider>
      </div>
    </>
  )
}
export default App