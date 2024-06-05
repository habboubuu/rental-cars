import React from 'react';
import '../../Style/feedback.css';
import Slider from 'react-slick';
import ava1 from '../../Assets/all-images/people/ava-1.jpg';
import ava2 from '../../Assets/all-images/people/ava-2.jpg';
import ava3 from '../../Assets/all-images/people/ava-3.jpg';
import ava4 from '../../Assets/all-images/people/ava-4.jpg';

const feedback = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 575,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // initialSlide: 2
                },
            },
        ],

    };

  return (
    <Slider { ... settings} className='testSlider'>
        <div className='testimonial'>
            <p className='section_description'>"Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium repudiandae dolore incidunt reprehenderit
                eius corporis"
            </p>
            <div className='feedback-people'>
                <div className='imgfeedback'>
                    <img src={ava1} alt="" />
                </div>
                <div className='feedbackname'>
                    <h6>Ahmed Alami</h6>
                    <p className='section_description'>Customer</p>
                </div>
            </div>
        </div>
        <div className='testimonial'>
            <p className='section_description'>"Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium repudiandae dolore incidunt reprehenderit
                eius corporis"
            </p>
            <div className='feedback-people'>
                <div className='imgfeedback'>
                    <img src={ava2} alt="" />
                </div>
                <div className='feedbackname'>
                    <h6>Sara el</h6>
                    <p className='section_description'>Customer</p>
                </div>
            </div>
        </div>
        <div className='testimonial'>
            <p className='section_description'>"Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium repudiandae dolore incidunt reprehenderit
                eius corporis"
            </p>
            <div className='feedback-people'>
                <div className='imgfeedback'>
                    <img src={ava3} alt="" />
                </div>
                <div className='feedbackname'>
                    <h6>Ali wafiq</h6>
                    <p className='section_description'>Customer</p>
                </div>
            </div>
        </div>
        <div className='testimonial'>
            <p className='section_description'>"Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium repudiandae dolore incidunt reprehenderit
                eius corporis"
            </p>
            <div className='feedback-people'>
                <div className='imgfeedback'>
                    <img src={ava4} alt="" />
                </div>
                <div className='feedbackname'>
                    <h6>Salma Chid</h6>
                    <p className='section_description'>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default feedback
