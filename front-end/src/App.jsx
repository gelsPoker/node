import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Solicitudes from "./pages/Solicitudes"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/solicitudes' element={<Solicitudes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;