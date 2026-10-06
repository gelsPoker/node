import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-slate-900 shadow-lg sticky top-0 z-50 border-b border-slate-800">
            <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
                
                <Link to="/" className="flex items-center gap-2 mb-4 md:mb-0 group">
                    <span className="text-3xl transition-transform group-hover:scale-110">🤝</span> 
                    <h1 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-slate-200 transition-colors">
                        Red de Apoyo Mayor
                    </h1>
                </Link>

                <nav className="flex items-center gap-6 md:gap-8">
                    <Link 
                        to="/" 
                        className="text-slate-300 font-medium hover:text-white transition-colors border-b-2 border-transparent hover:border-slate-400 pb-1"
                    >
                        Inicio
                    </Link>
                    
                    <Link 
                        to="/solicitudes" 
                        className="text-slate-300 font-medium hover:text-white transition-colors border-b-2 border-transparent hover:border-slate-400 pb-1"
                    >
                        Ver Solicitudes
                    </Link>
                    
                    <Link 
                        to="/pedir-ayuda" 
                        className="bg-teal-500 text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:bg-teal-400 hover:shadow-lg hover:-translate-y-0.5 transition-all transform"
                    >
                        Pedir Ayuda
                    </Link>
                </nav>
                
            </div>
        </header>
    );
}

export default Header;
//1.05.32