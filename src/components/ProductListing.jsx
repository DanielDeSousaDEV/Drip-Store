import { ProductCard } from "./ProductCard";

export function ProductListing({products}) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 place-items-center items-stretch">
            {products.map(
                product => (
                    <ProductCard product={product}/>
                )
            )}
        </div>
    )
}