import StarIcon from "../assets/star-icon.svg?react"
import { Button } from "./Button"
import { ProductOptions } from "./ProductOptions"

const colors = [
    '#a8c078',
    '#a89048',
    '#a84818',
    '#61290e',
    '#330c0c',
]

const sizes = [
    '36',
    '37',
    '38',
    '39',
    '40',
]

export function BuyBox() {
    return(
        <div>
            <h3 className="font-bold text-2xl md:text-4xl text-dark-gray mb-2.5">Tênis Nike Revolution 6 Next Nature Masculino</h3>
            <p className="text-xs text-dark-gray-3 mb-2.5">Casual | Nike | REF:38416711</p>

            <div className="flex flex-wrap gap-3.5 mb-5">
                <div className="flex gap-1">
                    {renderStarRating(3.4)}
                </div>
                <div className="flex gap-2.5">
                    <span className="px-3.5 py-1.5 inline-flex items-center justify-center leading-2 gap-1 rounded-sm text-white font-black text-sm bg-warning">4,7 <StarIcon className='stroke-white fill-white'/></span>
                    <span className="text-light-gray">(90 avaliações )</span>
                </div>
            </div>

            <p className="mb-6">
                <span className="text-dark-gray-2 text-lg">R$</span>
                <span className="text-dark-gray-2 text-3xl font-bold mr-2.5">250,00</span>

                <span className="text-light-gray-2 line-through">250,00</span>
            </p>

            <h4 className="text-sm text-light-gray font-bold mb-1.5">Descrição do produto</h4>
            <p className="leading-6 text-dark-gray-2 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga commodi tempore iure illo! Sunt molestias architecto dolor ratione sequi eaque in iste! Iure iste ex officiis praesentium deserunt nam!</p>

            <div className="flex flex-col gap-7 md:gap-2.5 mb-12 md:mb-7">
                <div>
                    <p className="text-light-gray font-bold mb-2.5">Tamanho</p>
                    <div className="flex gap-2.5">
                        <ProductOptions options={sizes} type="text"/>
                    </div>
                </div>  

                <div>
                    <p className="text-light-gray font-bold mb-2.5">Cor</p>
                    <div className="flex gap-2.5">
                        <ProductOptions options={colors} shape="cicle" type="color"/>
                    </div>
                </div>
            </div>

            <Button variant='shop' className='!w-full md:!w-fit uppercase'>
                Comprar
            </Button>
        </div>
    )
}

function renderStarRating(rating, max = 5) {
    return (
        <>
            {Array.from({ length: max }, (_, i) => {
                if (i + 1 <= rating) {
                    return <StarIcon className='size-6 text-light-gray fill-warning stroke-warning' key={i} />;
                } else if (i < rating) {
                    return (
                        <div key={i} className="relative">
                            <StarIcon className="absolute size-6 inset-0 text-light-gray fill-warning stroke-warning [clip-path:inset(0_50%_0_0)]" />
                            <StarIcon className="size-6 inset-0 text-light-gray stroke-warning fill-none" />
                        </div>
                    );
                } else {
                    return <StarIcon className='size-6 text-light-gray stroke-warning' key={i} />;
                }
            })}
        </>
    )
}