import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import img1 from '../../../src/assets/home/slide1.jpg'
import img2 from '../../../src/assets/home/slide2.jpg'
import img3 from '../../../src/assets/home/slide3.jpg'
import img4 from '../../../src/assets/home/slide4.jpg'
import img5 from '../../../src/assets/home/slide5.jpg'

const Outline = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: {
            perView: 4,
            spacing: 0, 
        },
    })
    return (
        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide2">
                <img src={img1} alt="" />
                <h3 className='text-4xl uppercase -mt-32 shadow-xl font-bold text-center'>Salads</h3>
            </div>
            <div className="keen-slider__slide number-slide3">
                <img src={img2} alt="" />
                <h3 className='text-4xl uppercase -mt-32 font-bold text-white text-center'>Soups</h3>
            </div>
            <div className="keen-slider__slide number-slide4">
                <img src={img3} alt="" />
                <h3 className='text-4xl uppercase -mt-32 font-bold text-white text-center'>Pizzas</h3>
            </div>
            <div className="keen-slider__slide number-slide5">
                <img src={img4} alt="" />
                <h3 className='text-4xl uppercase -mt-32 font-bold text-white text-center'>DESSERTS</h3>
            </div>
            <div className="keen-slider__slide number-slide6">
                <img src={img5} alt="" />
                <h3 className='text-4xl uppercase -mt-32 font-bold text-white text-center'>Salads</h3>
            </div>
        </div>
    )
};

export default Outline;