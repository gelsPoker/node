function ProductosCard({nombre,descripcion,cant}) {
    return(
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
                <h2 className="text-2xl font-bold text-center mt-4">
                    {nombre}
                </h2>
                <p className="text-gray-600 text-center mt-2">
                    {descripcion}
                </p>
                <div className="mt-4 text-center">
                    <span className="
                        bg-blue-100
                        text-blue-700
                        px-3
                        py-1
                        rounded-full
                        text-bold
                        text-sm">
                            {cant}
                    </span>
                </div>
                <button className="
                w-full
                mt-5
                bg-indigo-600
                hover:bg-indigo-700
                text-white
                py-2
                rounded-lg
                font-semibold">
                    Ver Mas
                </button>
            </div>
        </>
    )
}
export default ProductosCard