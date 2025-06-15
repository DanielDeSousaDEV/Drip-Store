import { Logo } from "./Logo";
import FacebookLogo from '../assets/facebook.svg'
import InstagramLogo from '../assets/instagram.svg'
import TwitterLogo from '../assets/twitter.svg'
import { Informations } from "./Informations";

const links = [
    {
        title: 'Informação',
        informations: [
            {
                text: 'Sobre drip store',
                link: '#'
            },
            {
                text: 'Segurança',
                link: '#'
            },
            {
                text: 'Wishlist',
                link: '#'
            },
            {
                text: 'Blog',
                link: '#'
            },
            {
                text: 'Trabalhe conosco',
                link: '#'
            },
            {
                text: 'Meus pedidos',
                link: '#'
            },
        ]
    },
    {
        title: 'Categorias',
        informations: [
            {
                text: 'Camisetas',
                link: '#'
            },
            {
                text: 'Calças',
                link: '#'
            },
            {
                text: 'Bonés',
                link: '#'
            },
            {
                text: 'Headphones',
                link: '#'
            },
            {
                text: 'Tênis',
                link: '#'
            },
        ]
    },
    {
        title: 'Contato',
        informations: [
            {
                text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161',
                link: '#'
            },
            {
                text: '(85) 3051-3411',
                link: '#'
            },
        ]
    },
]

export function Footer() {
    return (
        <footer className="bg-dark-gray px-5 md:px-24 pt-12 md:pt-20">
            <div className="pb-8 flex flex-col lg:flex-row gap-10 lg:gap-48">
                <div className="w-full md:w-auto space-y-5 md:space-y-10 shrink-0">
                    <Logo className='w-42 md:w-auto' isWhite/>
                    <p className="max-w-80 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className="flex gap-8">
                        <img src={FacebookLogo} alt="logo do facebook" className="cursor-pointer"/>
                        <img src={InstagramLogo} alt="logo do instagram" className="cursor-pointer"/>
                        <img src={TwitterLogo} alt="logo do twitter" className="cursor-pointer"/>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 grow gap-8 lg:gap-4">
                    {links.map(
                        (link, index) => <Informations key={index} title={link.title} informations={link.informations} />
                    )}
                </div>

            </div>
            <div className="border-t-2 border-white/30 py-6 flex items-center justify-center">
                <p className="text-white text-sm">@ 2022 Digital College</p>
            </div>
        </footer>
    )
}