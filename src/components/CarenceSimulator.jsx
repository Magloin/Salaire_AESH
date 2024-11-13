import MainPageCarence from "./base/MainPageCarence"
import React from 'react'
import { useReducer } from "react"
import dataReducer from "../reducers/DataReducer"
import { DataContext, DataDispatchContext } from "../contexts/DataContext"
import DataServiceCompute from "../services/DataService"
import InputData from "../data/InputData"

function CarenceSimulator() {
    const [data, dispatch] = useReducer(
        dataReducer,
        DataServiceCompute(new InputData())
    )

    return (
      <div>
        Coucou je suis le simulateur de carence !
        
        <DataContext.Provider value={ data }>
        <DataDispatchContext.Provider value={ dispatch }>
        <MainPageCarence/>
        </DataDispatchContext.Provider>
      </DataContext.Provider>
      </div>
    )
}

export default CarenceSimulator