import { ProductCard } from "./ProductCard";

export function ProductListing({products, className}) {
    return (
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 md:gap-x-6 gap-y-10 place-items-center items-stretch ${className ?? ''}`}>
            {products.map(
                (product, index) => (
                    <ProductCard product={product} key={index}/>
                )
            )}
        </div>
    )
}