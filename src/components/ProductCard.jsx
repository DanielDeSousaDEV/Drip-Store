import { useNavigate } from "react-router-dom"

export function ProductCard({product}) {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/produtos/1')
        
    }
    
    console.log(product.image);
    return (
        <div className="w-fit rounded-sm cursor-pointer" onClick={handleClick}>
            <div className="relative w-fit mx-auto">
                {product.discount &&
                    (
                        <div className="absolute top-1 md:top-3 left-1 md:left-3 bg-[#E7FF86] py-1 md:py-1.5 px-3.5 md:px-4 rounded-4xl">
                            <p className="font-bold text-xs md:text-base">
                                {product.discount}% OFF
                            </p>
                        </div>
                    )
                }
                <img src={product.image} alt="" className="w-40 sm:w-72 h-44 sm:h-80 object-cover rounded-sm mb-4 bg-white shadow-lg"/>
            </div>
            <small className="text-xs text-light-gray font-bold">{product.category}</small>
            <p className=" text-base lg:text-lg md:text-2xl text-dark-gray-2 line-clamp-1 md:line-clamp-none">{product.name}</p>
            {product.priceDiscount ? (
                <p className="space-x-2.5 text-sm lg:text-lg md:text-2xl">
                    <span className="line-through text-light-gray">R$ {product.price}</span>
                    <span className="font-bold">R$ {product.priceDiscount}</span>
                </p>
            ) : (
                <p>
                    <span className=" text-sm lg:text-lg md:text-2xl">R$ {product.price}</span>
                </p>
            )}
        </div>
    )
}