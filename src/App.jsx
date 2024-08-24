import { useReducer } from "react"
import MainPage from "./components/base/MainPage"
import dataReducer from "./reducers/DataReducer"
import Data from "./data/Data"
import { DataContext, DataDispatchContext } from "./contexts/DataContext"
import DataServiceCompute from "./services/DataService"

function App() {
  const [data, dispatch] = useReducer(
    dataReducer,
    DataServiceCompute(new Data())
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