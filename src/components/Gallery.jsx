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
                <a>
                    <img src={images[i].src} alt="" className='block h-12 object-cover' style={{borderRadius: radius}}/>
                </a>
            )
        } : {}),
    };

    return (
        <div 
            style={{height, width, borderRadius: radius, overflow: 'hidden'}}
        >
            <Slider {...settings} {...props}>
                {images.map((img, idx) => 
                    <div key={idx} style={{height}} className='!flex items-center justify-center'>
                        <img src={img.src} style={{borderRadius: radius}}  className='w-auto h-full text-center object-fit'/>
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