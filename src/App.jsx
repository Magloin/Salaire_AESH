import { useReducer } from "react"
import MainPage from "./components/base/MainPage"
import dataReducer from "./reducers/DataReducer"
import { DataContext, DataDispatchContext } from "./contexts/DataContext"
import DataServiceCompute from "./services/DataService"
import InputData from "./data/InputData"

function App() {
  const [data, dispatch] = useReducer(
    dataReducer,
    DataServiceCompute(new InputData())
  )

  console.log("DATA", data)

  return (
    <DataContext.Provider value={ data }>
      <DataDispatchContext.Provider value={ dispatch }>
        <MainPage />
      </DataDispatchContext.Provider>
    </DataContext.Provider>
  )
}
export default App