import ServicioCard from "../components/ServicioCard";
import Header from "../components/Header";
import { servicios } from "../data/servicios";
import Footer from "../components/Footer"; 

function Inicio() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            
            <main className="container mx-auto px-6 py-12">
                
                <section className="bg-white p-8 rounded-2xl shadow-md mb-12 border-t-4 border-blue-500">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                        Red de Coordinación Social
                    </h2>
                    <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-4">
                        Nuestra organización comunitaria y municipal busca apoyar a personas adultas mayores que viven solas o requieren ayuda. 
                        <strong> El valor de este servicio</strong> consiste en registrar necesidades, asignar voluntarios, coordinar visitas y dar seguimiento para evitar que se pierdan antecedentes o se dupliquen ayudas.
                    </p>
                </section>

                <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    ¿En qué podemos ayudar hoy?
                </h2>
                
                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-4
                    gap-8"
                >
                    {servicios.map((servicio) => (
                        <ServicioCard
                            key={servicio.id}
                            nombre={servicio.nombre}
                            descripcion={servicio.descripcion}
                            etiqueta={servicio.etiqueta}
                            icono={servicio.icono}
                        />
                    ))}
                </div>

            </main>
            <Footer />
            
        </div>
    );
}

export default Inicio;