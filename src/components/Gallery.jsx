import Slider from 'react-slick';
import leftArrow from '../assets/arrow-left.svg'
import rightArrow from '../assets/arrow-right.svg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Gallery({className, width, height, radius, showThumbs=false, images, ...props}) {
    var settings = {
        infinite: true,
        speed: 500,
        dots: true,
        slidesToShow: 1,
        dotsClass: showThumbs ? '!flex flex-warp gap-4 items-cente justify-center mt-4' : 'slick-dots !bottom-2 !flex justify-center mt-4',
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        
        ...(showThumbs ? {
            className: `mb-10 ${className ?? ''}`,
            customPaging: (i) => (
                <a className='cursor-pointer bg-red-500 shrink-0'>
                    <img src={images[i].src} alt="" className='block h-12 object-cover shrink-0' style={{borderRadius: radius}}/>
                </a>
            )
        } : {
            className: '!h-full ' + className
        }),
    };

    return (
        <div 
            style={{minHeight: height, maxWidth: width, borderRadius: radius, overflow: 'hidden'}}
            className='shrink-0'
        >
            <Slider {...settings} {...props}> 
                {images.map((img, idx) => 
                    <div key={idx} className='!flex items-center justify-center !h-full'>
                        <img src={img.src} style={{borderRadius: radius}} className='w-auto !h-full text-center object-cover bg-dark-gray-2 grayscale-25'/>
                    </div>
                )}
            </Slider>
        </div>
    )
}

function PrevArrow(props) {
    const { onClick } = props;

    return (
        <div
            onClick={onClick}
            className='z-10 block cursor-pointer p-2 rounded-full absolute top-1/2 left-1 transform -translate-y-1/2'
        >
            <img src={leftArrow} alt="seta para trás" />
        </div>
    )
}

function NextArrow(props) {
    const { onClick } = props;

    return (
        <div
            onClick={onClick}
            className='z-10 block cursor-pointer p-2 rounded-full absolute top-1/2 right-1 transform -translate-y-1/2'
        >
            <img src={rightArrow} alt="seta para frente" />
        </div>
    )
}