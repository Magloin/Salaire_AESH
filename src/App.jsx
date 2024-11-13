import SalarySimulator from "./components/SalarySimulator"
import CarenceSimulator from "./components/CarenceSimulator"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <Navbar/>
      <div>
        <Routes>        
          <Route path="/" element={<SalarySimulator/>} />
          <Route path="/carence" element={<CarenceSimulator />}/>
        </Routes>
      </div>
    </>
  )
}
export default App