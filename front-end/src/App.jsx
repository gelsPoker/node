import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom"
import Cursos from "./pages/Cursos"
import Clientes from "./pages/Clientes"
import Productos from "./pages/Productos"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Cursos/>}/>
      <Route path='/cliente' element={<Clientes/>}/>
      <Route path='/producto' element={<Productos/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App