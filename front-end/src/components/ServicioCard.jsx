function ServicioCard({ nombre, descripcion, etiqueta, icono }) {
    return (
        <>
            <div className="
            bg-white
            rounded-2xl
            shadow-lg
            hover:shadow-2xl
            hover:translate-y-2
            transition
            duration-300
            p-6"
            >
                <div className="text-6xl text-center">
                    {icono}
                </div>
                <h2 className="text-2xl font-bold text-center mt-4">
                    {nombre}
                </h2>
                <p className="text-gray-600 text-center mt-2">
                    {descripcion}
                </p>
                <div className="mt-4 text-center">
                    <span className="
                    bg-teal-100
                    text-teal-700
                    px-3
                    py-1
                    rounded-full
                    font-bold
                    text-sm">
                        {etiqueta}
                    </span>
                </div>
                <button className="
                w-full
                mt-5
                bg-blue-600
                hover:bg-blue-700
                text-white
                py-2
                rounded-lg
                font-semibold
                transition">
                    Solicitar Ayuda
                </button>
            </div>
        </>
    );
}

export default ServicioCard;