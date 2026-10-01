import Header from "./components/Header"
import Footer from "./components/Footer"
import CursosCard from "./components/CursosCard"

function App() {
  return (
    <>
      <Header/>
      <CursosCard
        nombre="React basico"
        desc="Introduccion al react"
        horas="20"
      />
      <CursosCard
        nombre="React Intermedio"
        desc="Programacion en React"
        horas="32"
      />
      <CursosCard
        nombre="React Avanzado"
        desc="React para expertos"
        horas="40"
      />
      <Footer/>
    </>
  )
}

export default App