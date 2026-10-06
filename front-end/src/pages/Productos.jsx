import ProductosCard from "../components/ProductosCard"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {productos} from "../data/productos"

function Productos() {
    return(
        <div className="min-h-screen bg-gray-100">
        <Header/>
        <main className="container mx-auto px-6 py-12">
            <h2 className="text-4xl font-bold text-center mb-10">
                Productos Disponibles
             </h2>
        <div className="
            grid
            md:grid-cols-3
            gap-8"
        >
            {productos.map((producto) => (
                <ProductosCard
                key={producto.id}
                nombre={producto.nombre}
                descripcion={producto.descripcion}
                cant={producto.cant}
                />
            ))}
        </div>
        </main>
        <Footer/>
        </div>
    )
}

export default Productos