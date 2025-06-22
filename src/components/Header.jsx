import { Menu, Search, Star} from "lucide-react";
import { Logo } from "./Logo";
import MiniCart from '../assets/mini-cart.svg';
import { NavBar } from "./NavBar";
import { Button } from "./Button";


export function Header() {
    return (
        <header className="p-5 md:px-12 lg:px-24 md:py-8 md:space-y-10 bg-white">
            <div className="flex items-center justify-evenly gap-8">
                <Menu className="md:hidden"/>

                <Logo className="w-32 md:w-40 lg:w-auto"/>

                <div className="bg-dark-gray-2/4 hidden  p-4 rounded-lg grow md:flex gap-2 has-[input:focus]:bg-light-gray-2/30 transition-colors">
                    <input type="text" id="search" placeholder="Pesquisar produto..." className="grow outline-none placeholder:text-dark-gray-3 opacity-60"/>
                    
                    <label htmlFor="search">
                        <Search className="opacity-50 has-[input:focus]:text-blue-500"/>
                    </label>
                </div>


                <a href="#" className="text-dark-gray-2 underline hidden lg:block">Cadastre-se</a>

                <Button className='hidden lg:block'>Entrar</Button>

                <div className="relative p-1 cursor-pointer shrink-0 flex gap-3">
                    <Search className="shrink-0 md:none"/>

                    <img src={MiniCart} className="shrink-0"/>
                    <span className="bg-primary shrink-0 text-white rounded-full absolute -top-1 text-xs -right-1 size-3.5 text-center leading-3.25">2</span>
                </div>

            </div>

            <NavBar/>
        </header>
    )
}