import { Link } from "react-router-dom";
function Header(){
    return(
        <>
            <header className="text-white py-10 shadow-lg
            bg-gradient-to-r from-red-600 to-indigo-700">
                <div className="container mx-auto text-center">
                <h1 className="text-5xl font-bold">
                    📖 Academia REACT</h1>
                </div>
                <nav className="flex gap-4 p-4 bg-gradient-to-r from-blue-600 to-indigo-700 justify-center">
                    <Link to="/"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Cursos
                    </Link>
                    <Link to="/Producto"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                        Productos
                    </Link>
                    <Link to="/Cliente"
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700">
                        Clientes
                    </Link>
                </nav>

            </header>
        </>
    )
}
export default Header

//1.05.32