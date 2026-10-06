import CursosCard from "../components/CursosCard"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {cursos} from "../data/cursos"

function Cursos() {
    return(
        <div className="min-h-screen bg-gray-100">
        <Header/>
        <main className="container mx-auto px-6 py-12">
            <h2 className="text-4xl font-bold text-center mb-10">
                Cursos Disponibles
             </h2>
        <div className="
            grid
            md:grid-cols-3
            gap-8"
        >
            {cursos.map((curso) => (
                <CursosCard
                key={curso.id}
                nombre={curso.nombre}
                descripcion={curso.desc}
                horas={curso.horas}
                icono={curso.icono}
                />
            ))}
        </div>
        </main>
        <Footer/>
        </div>
    )
}

export default Cursos