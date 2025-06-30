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
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/df8471dab7fa4d3e89a88572f3bbab83_9366/Tenis_Park_Street_Branco_IG9849.jpg',
    price: 79.90,
    priceDiscount: 59.90,
    discount: 25,
  },
  {
    id: 2,
    name: "Calça Cargo Verde Oliva",
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/df8471dab7fa4d3e89a88572f3bbab83_9366/Tenis_Park_Street_Branco_IG9849.jpg',
    category: "Calças",
    price: 129.90,
    priceDiscount: 99.90,
    discount: 23,
  },
  {
    id: 3,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/df8471dab7fa4d3e89a88572f3bbab83_9366/Tenis_Park_Street_Branco_IG9849.jpg',
    name: "Jaqueta Corta Vento",
    category: "Jaquetas",
    price: 159.90,
    priceDiscount: 129.90,
    discount: 18,
  },
  {
    id: 4,
    name: "Boné Snapback Preto",
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/df8471dab7fa4d3e89a88572f3bbab83_9366/Tenis_Park_Street_Branco_IG9849.jpg',
    category: "Acessórios",
    price: 39.90,
  },
  {
    id: 5,
    name: "Tênis Chunky Branco",
    category: "Calçados",
    price: 299.90,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/df8471dab7fa4d3e89a88572f3bbab83_9366/Tenis_Park_Street_Branco_IG9849.jpg',
    priceDiscount: 219.90,
    discount: 27,
  },
  {
    id: 6,
    name: "Moletom Canguru Cinza",
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/df8471dab7fa4d3e89a88572f3bbab83_9366/Tenis_Park_Street_Branco_IG9849.jpg',
    category: "Moletons",
    price: 189.90,
    priceDiscount: 149.90,
    discount: 21,
  },
  {
    id: 7,
    name: "Bermuda Jeans Claro",
    category: "Bermudas",
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/df8471dab7fa4d3e89a88572f3bbab83_9366/Tenis_Park_Street_Branco_IG9849.jpg',
    price: 109.90,
  },
  {
    id: 8,
    name: "Camisa Polo Marinho",
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/df8471dab7fa4d3e89a88572f3bbab83_9366/Tenis_Park_Street_Branco_IG9849.jpg',
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
          <Gallery images={images} showThumbs radius={4} width={700} height={570}/>

          <BuyBox/>
        </div>


        <Section link={{title: 'Produtos em alta', href: '#'}} withCallToAction className='mb-28'>
            <ProductListing products={products}/>
        </Section>
      </div>
    </Layout>
  )
}