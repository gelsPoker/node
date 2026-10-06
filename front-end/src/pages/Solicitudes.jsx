import Header from "../components/Header";
import Footer from "../components/Footer";
import SolicitudCard from "../components/SolicitudCard";
import { solicitudes } from "../data/solicitudes";

function Solicitudes() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            
            <main className="container mx-auto px-6 py-10 flex-grow">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-slate-900">Tablero de Solicitudes</h2>
                    <p className="text-gray-600 mt-2">
                        Revisa las necesidades de los adultos mayores de nuestra comunidad y ofrece tu apoyo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solicitudes.map((solicitud) => (
                        <SolicitudCard
                            key={solicitud.id}
                            nombre={solicitud.nombre}
                            categoria={solicitud.categoria}
                            descripcion={solicitud.descripcion}
                            sector={solicitud.sector}
                            estado={solicitud.estado}
                            fecha={solicitud.fecha}
                        />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Solicitudes;