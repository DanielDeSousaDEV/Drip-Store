export function ProductCard({product}) {
    return (
        <div className="bg-light-gray-3 w-fit">
            <div className="relative">
                {product.discount &&
                    (
                        <div className="absolute top-3 left-3 bg-[#E7FF86] py-1.5 px-4 rounded-4xl">
                            <p className="font-bold">
                                {product.discount}% OFF
                            </p>
                        </div>
                    )
                }
                <img src="https://cdn-images.dzcdn.net/images/artist/9d8a9be7640f1c7f62ac651cc304a2d4/500x500.jpg" alt="" className="w-72 h-80 object-cover rounded-sm mb-4"/>
            </div>
            <small className="text-xs text-light-gray font-bold">{product.category}</small>
            <p className="text-2xl text-dark-gray-2">{product.name}</p>
            {product.priceDiscount ? (
                <p className="space-x-2.5">
                    <span className="line-through text-light-gray text-2xl">R$ {product.price}</span>
                    <span className="font-bold text-2xl">R$ {product.priceDiscount}</span>
                </p>
            ) : (
                <p>
                    <span className="text-2xl">R$ {product.price}</span>
                </p>
            )}
        </div>
    )
}