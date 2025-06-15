import { Layout } from "./Layout";
import { Section } from "../components/Section.jsx";
import { ProductCard } from "../components/ProductCard.jsx";
import { ProductListing } from "../components/ProductListing.jsx";
import { Gallery } from "../components/Gallery.jsx";

const products = [
  {
    id: 1,
    name: "Camiseta Básica Preta",
    category: "Roupas",
    price: 79.90,
    priceDiscount: 59.90,
    discount: 25,
    image: "https://via.placeholder.com/300x400?text=Camiseta+Preta",
  },
  {
    id: 2,
    name: "Calça Jeans Slim",
    category: "Roupas",
    price: 129.90,  
    image: "https://via.placeholder.com/300x400?text=Calça+Jeans+Slim",
  },
  {
    id: 3,
    name: "Tênis Esportivo",
    category: "Calçados",
    price: 299.90,
    priceDiscount: 249.90,
    discount: 17,
    image: "https://via.placeholder.com/300x400?text=Tênis+Esportivo",
  },
  {
    id: 4,
    name: "Relógio Digital",
    category: "Acessório",
    price: 199.90,
    priceDiscount: 149.90,
    discount: 25,
    image: "https://via.placeholder.com/300x400?text=Rel%C3%B3gio+Digital",
  },
  {
    id: 5,
    name: "Boné Estiloso",
    category: "Acessório",
    price: 59.90,
    priceDiscount: 39.90,
    discount: 33,
    image: "https://via.placeholder.com/300x400?text=Bon%C3%A9+Estiloso",
  },
]

const images = [
  {src: "https://placehold.co/500x300?text=Imagem+1"},
  {src: "https://placehold.co/500x300?text=Imagem+2"},
  {src: "https://placehold.co/500x300?text=Imagem+3"},
  {src: "https://placehold.co/500x300?text=Imagem+4"},
  {src: "https://placehold.co/500x300?text=Imagem+10"},
]

export function HomePage() {
    return (
        <>
            <Layout>
                <div className="h-screen bg-light-gray-2 flex items-center justify-center">
                    <h1 className="text-5xl font-bold">Danoi</h1>  
                </div>
                <Gallery showThumbs images={images} radius={3}/>
                <Gallery  images={images} radius={3}/>
            </Layout>
        </>
    )
}