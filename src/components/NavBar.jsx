import { NavLink } from "react-router-dom";

export function NavBar() {
    return (
        <nav className="hidden md:flex items-center gap-8">
            <NavLink 
                className={
                    ({isActive}) => `border-b-2 leading-7 transition-colors ${isActive ? 'font-bold border-primary text-primary capitalize' : 'border-transparent text-dark-gray-2 hover:border-dark-gray-2'}`
                }
                to='/'
            >
                Home
            </NavLink>

            <NavLink 
                className={
                    ({isActive}) => `border-b-2 leading-7 transition-colors ${isActive ? 'font-bold border-primary text-primary capitalize' : 'border-transparent text-dark-gray-2 hover:border-dark-gray-2'}`
                }
                to='/produtos'
            >
                Produtos
            </NavLink>

            <NavLink 
                className={
                    ({isActive}) => `border-b-2 leading-7 transition-colors ${isActive ? 'font-bold border-primary text-primary capitalize' : 'border-transparent text-dark-gray-2 hover:border-dark-gray-2'}`
                }
                to='/logo'
            >
                Categorias
            </NavLink>
            
            <NavLink 
                className={
                    ({isActive}) => `border-b-2 leading-7 transition-colors ${isActive ? 'font-bold border-primary text-primary capitalize' : 'border-transparent text-dark-gray-2 hover:border-dark-gray-2'}`
                }
                to='/logo'
            >
                Meus pedidos
            </NavLink>
        </nav>
    )
}