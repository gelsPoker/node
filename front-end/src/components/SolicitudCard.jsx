function SolicitudCard({ nombre, categoria, descripcion, sector, estado, fecha }) {
    const coloresEstado = {
        "Pendiente": "bg-red-100 text-red-800 border-red-300",
        "En Proceso": "bg-yellow-100 text-yellow-800 border-yellow-300",
        "Completado": "bg-green-100 text-green-800 border-green-300"
    };

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 border border-gray-100 flex flex-col h-full">
            
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-gray-800">{nombre}</h3>
                    <p className="text-sm text-gray-500 font-medium flex items-center gap-1 mt-1">
                        📍 {sector}
                    </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${coloresEstado[estado]}`}>
                    {estado}
                </span>
            </div>

            <div className="mb-4 flex-grow">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-2 font-semibold">
                    {categoria}
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                    "{descripcion}"
                </p>
            </div>

            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium">📅 {fecha}</span>
                
                {estado !== "Completado" && (
                    <button className="bg-slate-900 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                        Atender Solicitud
                    </button>
                )}
            </div>
        </div>
    );
}

export default SolicitudCard;