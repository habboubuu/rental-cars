import React from 'react';
import Slider from "react-slick";
import '../../Style/Hero.css';
import { Link } from "react-router-dom";

const Hero = () => {
    const settings = {
        fade:true, //hada kay3ti effect dyal transistion
        speed: 1000,
        infinite: true,
        autoplay:true,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:true, //false y3ud slider yduz bzrba
    }
  return (
    <div>
        <Slider {...settings} className='hero_slider'>
            <div className='slider_item slider_item-01'>
                <div className='slider-content'>
                    <h4>Plan your trip now</h4>
                    <h1>Save <span>Big</span> With Our Car Rental</h1>
                    <button>
                        <Link to='/cars'>Reserve Now</Link>
                    </button>
                </div>
            </div>
            <div className='slider_item slider_item-02'>
                <div className='slider-content'>
                    <h4>Plan your trip now</h4>
                    <h1>Save <span>Big</span> With Our Car Rental</h1>
                    <button>
                        <Link to='/cars'>Reserve Now</Link>
                    </button>
                </div>
            </div>
            <div className='slider_item slider_item-03'>
                <div className='slider-content'>
                    <h4>Plan your trip now</h4>
                    <h1>Save <span>Big</span> With Our Car Rental</h1>
                    <button>
                        <Link to='/cars'>Reserve Now</Link>
                    </button>
                </div>
            </div>
            
        </Slider>
    </div>
  );
}

export default Hero
