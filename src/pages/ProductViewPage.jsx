import { Section } from "../components/Section";
import { Layout } from "./Layout";
import { ProductListing } from "../components/ProductListing.jsx";
import { Gallery } from "../components/Gallery";
import { BuyBox } from "../components/BuyBox.jsx";

const images = [
  {"src": "/produc-image-1.jpeg"},
  {"src": "/produc-image-2.jpeg"},
  {"src": "/produc-image-3.jpeg"},
  {"src": "/produc-image-4.jpeg"},
  {"src": "/produc-image-5.jpeg"},
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

export function ProductViewPage () {
    return (
        <Layout>
            <div className="pt-5 px-5 md:px-28">

              <div className="mb-20 flex flex-col md:flex-row gap-10">
                <Gallery images={images} className='shrink-0' showThumbs radius={4} width={700} height={570}/>

                <BuyBox/>
              </div>


              <Section link={{title: 'Produtos em alta', href: '#'}} withCallToAction className='mb-28'>
                  <ProductListing products={products}/>
              </Section>
            </div>
        </Layout>
    )
}