import { useEffect, useRef, useState } from "react";
import { ProductListing } from "../components/ProductListing";
import { Layout } from "./Layout";
import { ArrowDown, ArrowDownAz, Filter } from "lucide-react";
import Arrow from '../assets/arrow-left.svg?react'
import { Button } from "../components/Button";

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

export function ProductListingPage() {
    const OrderBySelectRef = useRef(null)

    const [selectedOrderByOption, setSelectedOrderByOption] = useState(null)

    function findSeletedOptionText() {
        const select = OrderBySelectRef.current;
        const selectedText = select?.options[select.selectedIndex]?.text;
        setSelectedOrderByOption(selectedText)
    }

    useEffect(() => {
        findSeletedOptionText()
    }, [])

    return (
        <Layout>
            <div className="pt-7 md:pt-10 px-5 md:px-12 lg:px-24 mb-32 md:pb-36">
                <div className="flex flex-row md:flex-row items-center justify-baseline md:justify-between flex-wrap-reverse gap-y-5 gap-x-2 mb-7 md:mb-10 ">
                    <p className="text-dark-gray-2 text-sm sm:text-base shrink-0"><span className="font-bold">Resultados para “Tênis”</span> - 389 produtos</p> 


                    <div className="flex items-center justify-between grow lg:grow-0 gap-2.5 shrink-0">
                        <div className="flex items-center grow lg:grow-0 gap-2 md:gap-10 group border-2 rounded-sm p-3 md:p-4 border-dark-gray-2 hover:border-primary outline-primary transition-colors relative">

                            <p className="text-dark-gray-2 text-sm sm:text-base grow">
                                <label htmlFor="orderBy" className="font-bold">Ordernar por: </label>

                                <span>
                                    {selectedOrderByOption}
                                </span>
                            </p>

                            <Arrow className='-rotate-90 shrink-0 size-2 md:size-4 group-has-[select:focus]:rotate-90 transition-transform'/>

                            <select name="orderBy" id="orderBy" defaultValue={1} ref={OrderBySelectRef} onChange={findSeletedOptionText} className="outline-none appearance-none absolute inset-0 opacity-0">
                                <option value="1">Mais comprado</option>
                                <option value="2">Mais relevante</option>
                                <option value="3">Mais coisado</option>
                                <option value="4">Menos coisado</option>
                            </select>
                        </div>

                        <Button className='lg:hidden !p-4'>
                            <Filter className="size-4 sm:size-auto"/>
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-7">
                    <aside className="hidden lg:block col-span-3 bg-white rounded-sm p-8 space-y-5 h-fit">
                        <p className="font-bold text-dark-gray-2">Filtar por</p>

                        <hr />

                        <div className="space-y-5">
                            <div className="space-y-2.5">
                                <p className="text-dark-gray-2 font-bold capitalize">Marke</p>

                                <label htmlFor="tenis" className="flex items-center gap-2.5 text-dark-gray-2">
                                    <input type="checkbox" name="tenis" id="tenis" className="accent-primary size-5" /> Tenis
                                </label>
                                <label htmlFor="tenis" className="flex items-center gap-2.5 text-dark-gray-2">
                                    <input type="checkbox" name="tenis" id="tenis" className="accent-primary size-5" /> Tenis
                                </label>
                                <label htmlFor="tenis" className="flex items-center gap-2.5 text-dark-gray-2">
                                    <input type="checkbox" name="tenis" id="tenis" className="accent-primary size-5" /> Tenis
                                </label>
                            </div>
                            <div className="space-y-2.5">
                                <p className="text-dark-gray-2 font-bold capitalize">Marke</p>

                                <label htmlFor="tenis" className="flex items-center gap-2.5 text-dark-gray-2">
                                    <input type="radio" name="tenis" id="tenis" className="accent-primary size-5" /> Tenis
                                </label>
                                <label htmlFor="tenis" className="flex items-center gap-2.5 text-dark-gray-2">
                                    <input type="radio" name="tenis" id="tenis" className="accent-primary size-5" /> Tenis
                                </label>
                                <label htmlFor="tenis" className="flex items-center gap-2.5 text-dark-gray-2">
                                    <input type="radio" name="tenis" id="tenis" className="accent-primary size-5" /> Tenis
                                </label>
                            </div>
                        </div>

                    </aside>

                    <div className="col-span-12 lg:col-span-9">
                        <ProductListing products={products} className='md:!grid-cols-3' />
                    </div>

                </div>
            </div>
        </Layout>
    )
}