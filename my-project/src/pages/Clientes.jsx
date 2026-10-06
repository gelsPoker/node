import ClientesCard from "../components/ClientesCard"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {clientes} from "../data/clientes"

function Clientes() {
    return(
        <div className="min-h-screen bg-gray-100">
        <Header/>
        <main className="container mx-auto px-6 py-12">
            <h2 className="text-4xl font-bold text-center mb-10">
                Clientes Disponibles
             </h2>
        <div className="
            grid
            md:grid-cols-3
            gap-8"
        >
            {clientes.map((cliente) => (
                <ClientesCard
                key={cliente.id}
                nombre={cliente.nombre}
                rut={cliente.rut}
                dir={cliente.horas}
                />
            ))}
        </div>
        </main>
        <Footer/>
        </div>
    )
}

export default Clientes