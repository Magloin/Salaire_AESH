import React from 'react'
import { useReducer } from "react"
import MainPage from "./base/MainPage"
import dataReducer from "../reducers/DataReducer"
import { DataContext, DataDispatchContext } from "../contexts/DataContext"
import DataServiceCompute from "../services/DataService"
import InputData from "../data/InputData"

function SalarySimulator() {
    const [data, dispatch] = useReducer(
        dataReducer,
        DataServiceCompute(new InputData())
    )

    return (
        <DataContext.Provider value={ data }>
        <DataDispatchContext.Provider value={ dispatch }>
          <MainPage />
        </DataDispatchContext.Provider>
      </DataContext.Provider>
    )
}

export default SalarySimulator