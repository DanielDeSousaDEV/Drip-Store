import { Layout } from "./Layout";
import { Section } from "../components/Section.jsx";
import { ProductCard } from "../components/ProductCard.jsx";
import { ProductListing } from "../components/ProductListing.jsx";
import { Gallery } from "../components/Gallery.jsx";
import { Button } from "../components/Button.jsx";
import ShirtIcon from "../assets/shirt.svg?react"
import PantsIcon from "../assets/pants.svg?react"
import CapIcon from "../assets/cap.svg?react"
import ShoesIcon from "../assets/shoes.svg?react"
import HeadphoneIcon from "../assets/headphone.svg?react"
import { NavLink } from "react-router-dom";

const images = [
  {"src": "/home-slide-1.jpeg"},
  {"src": "/home-slide-2.jpeg"},
  {"src": "/home-slide-3.jpeg"},
  {"src": "/home-slide-4.jpeg"},
  {"src": "/home-slide-5.jpeg"},
  {"src": "/home-slide-6.jpeg"},
  {"src": "/home-slide-7.jpeg"},
  {"src": "/home-slide-8.jpeg"},  
]

const products = [
  {
    id: 1,
    name: "Camiseta Oversize Preta",
    category: "Camisetas",
    price: 79.90,
    priceDiscount: 59.90,
    discount: 25,
  },
  {
    id: 2,
    name: "Calça Cargo Verde Oliva",
    category: "Calças",
    price: 129.90,
    priceDiscount: 99.90,
    discount: 23,
  },
  {
    id: 3,
    name: "Jaqueta Corta Vento",
    category: "Jaquetas",
    price: 159.90,
    priceDiscount: 129.90,
    discount: 18,
  },
  {
    id: 4,
    name: "Boné Snapback Preto",
    category: "Acessórios",
    price: 39.90,
  },
  {
    id: 5,
    name: "Tênis Chunky Branco",
    category: "Calçados",
    price: 299.90,
    priceDiscount: 219.90,
    discount: 27,
  },
  {
    id: 6,
    name: "Moletom Canguru Cinza",
    category: "Moletons",
    price: 189.90,
    priceDiscount: 149.90,
    discount: 21,
  },
  {
    id: 7,
    name: "Bermuda Jeans Claro",
    category: "Bermudas",
    price: 109.90,
  },
  {
    id: 8,
    name: "Camisa Polo Marinho",
    category: "Camisas",
    price: 79.90,
    priceDiscount: 64.90,
    discount: 19,
  },
]

export function HomePage() {
    return (
        <>
            <Layout>
                <Gallery images={images}  height={681}/>

                <div className="px-5 md:px-24 mb-32">
                  <Section className='mb-28' link={{title: 'Coleções em destaque', href: '#'}}>
                    <div className="grid  md:grid-cols-3 gap-3">
                      <div className="relative">
                        <div className="absolute top-3 left-6 bg-[#E7FF86] py-1.5 px-4 rounded-4xl">
                          <p className="font-bold">
                              30% OFF
                          </p>
                        </div>
                      <img src="/collection-1.png" alt="" />
                        <div className="absolute bottom-3 left-6">
                          <Button variant='secondary'>Comprar</Button>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute top-3 left-6 bg-[#E7FF86] py-1.5 px-4 rounded-4xl">
                          <p className="font-bold">
                              30% OFF
                          </p>
                        </div>
                      <img src="/collection-2.png" alt="" />
                        <div className="absolute bottom-3 left-6">
                          <Button variant='secondary'>Comprar</Button>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute top-3 left-6 bg-[#E7FF86] py-1.5 px-4 rounded-4xl">
                          <p className="font-bold">
                              30% OFF
                          </p>
                        </div>
                      <img src="/collection-3.png" alt="" />
                        <div className="absolute bottom-3 left-6">
                          <Button variant='secondary'>Comprar</Button>
                        </div>
                      </div>
                    </div>
                  </Section>

                  <Section className='mb-32' link={{title: 'Coleções em destaque', href: '#'}} titleAlign="center">
                    <div className="flex items-center justify-center overflow-x-auto gap-12">
                      <NavLink className="w-fit flex items-center justify-center flex-col gap-3">
                        {({isActive}) => (
                          <>
                            <div className={`bg-white rounded-full p-5 shadow-lg`}>
                              <ShirtIcon className={`size-16 ${isActive ? 'stroke-primary' : ''}`}/>
                            </div>
                            <p className="font-bold text-center">Camisetas</p>
                          </>
                        )}
                      </NavLink>

                      <NavLink className="w-fit flex items-center justify-center flex-col gap-3">
                        {({isActive}) => (
                          <>
                            <div className={`bg-white rounded-full p-5 shadow-lg`}>
                              <PantsIcon className={`size-16 ${isActive ? 'fill-primary' : ''}`}/>
                            </div>
                            <p className="font-bold text-center">Calças</p>
                          </>
                        )}
                      </NavLink>

                      <NavLink className="w-fit flex items-center justify-center flex-col gap-3">
                        {({isActive}) => (
                          <>
                            <div className={`bg-white rounded-full p-5 shadow-lg`}>
                              <CapIcon className={`size-16 ${isActive ? 'fill-primary' : ''}`}/>
                            </div>
                            <p className="font-bold text-center">Bonés</p>
                          </>
                        )}
                      </NavLink>

                      <NavLink className="w-fit flex items-center justify-center flex-col gap-3">
                        {({isActive}) => (
                          <>
                            <div className={`bg-white rounded-full p-5 shadow-lg`}>
                              <HeadphoneIcon className={`size-16 ${isActive ? 'stroke-primary' : ''}`}/>
                            </div>
                            <p className="font-bold text-center">Headphones</p>
                          </>
                        )}
                      </NavLink>

                      <NavLink className="w-fit flex items-center justify-center flex-col gap-3">
                        {({isActive}) => (
                          <>
                            <div className={`bg-white rounded-full p-5 shadow-lg`}>
                              <ShoesIcon className={`size-16 ${isActive ? 'stroke-primary' : ''}`}/>
                            </div>
                            <p className="font-bold text-center">Sapatos</p>
                          </>
                        )}
                      </NavLink>
                    </div>
                  </Section>

                  <Section link={{title: 'Produtos em alta', href: '#'}} withCallToAction>
                      <ProductListing products={products}/>
                  </Section>
                </div>
                      
                <div className="flex items-center justify-between flex-col lg:flex-row gap-16 p-5 md:px-24 pb-28 pt-24 bg-white">
                  <div className="relative">
                    <div className="absolute -top-10 h-72 md:h-100 w-72 md:w-100 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#4200FF40]/50 to-white/0 rounded-full z-10"></div>
                    <img src="/shoes.png" className="z-20 relative w-full"/>
                  </div>
                  <div>
                    <small className="block font-bold transition-colors text-warning md:text-primary mb-4">Oferta especial</small>
                    <h4 className="text-3xl md:text-5xl font-bold mb-5 text-dark-gray-2">Air Jordan edição de colecionador</h4>
                    <p className="text-dark-gray-2 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    <Button>Ver Oferta</Button>
                  </div>
                </div>
            </Layout>
        </>
    )
}