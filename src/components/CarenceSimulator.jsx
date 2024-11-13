import MainPageCarence from "./base/MainPageCarence"
import React from 'react'
import { useReducer } from "react"
import dataReducer from "../reducers/DataReducer"
import { DataContext, DataDispatchContext } from "../contexts/DataContext"
import DataServiceCompute from "../services/DataService"
import InputData from "../data/InputData"

function CarenceSimulator() {
    return (
      <MainPageCarence/>
    )
}

export default CarenceSimulator