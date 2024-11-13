import React from 'react'
import MainPage from "./base/MainPage"
import { useReducer } from "react"
import dataReducer from "../reducers/DataReducer"
import { DataContext, DataDispatchContext } from "../contexts/DataContext"
import DataServiceCompute from "../services/DataService"
import InputData from "../data/InputData"

function SalarySimulator() {
    

    return (
        <MainPage />
    )
}

export default SalarySimulator