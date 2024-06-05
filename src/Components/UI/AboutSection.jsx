import React from 'react';
import '../../Style/AboutSection.css';
import golfimg from '../../Assets/all-images/cars-img/golf.png';
import { useState } from 'react';


const AboutSection = () => {

    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }else{
        setSelected(i);
        }
    };

  return (
    <section className='AboutSection'>
        <div className='flexdiv'>
            <div className='aboutContentdiv'>
                <h5>About Us</h5>
                <h1>Welcome to car rent service</h1>
                <p style={{color:"#000"}} className='section_description'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Explicabo eligendi voluptatem dolorem id quibusdam quasi
                    libero odio nobis deserunt totam, deleniti sint veritatis
                    corrupti iure! Laudantium at nulla quaerat facilis?
                </p>
                <div className='wrapper'>
                    <div className='accordion'>
                        {data.map((item, i) => (
                            <div className='item' key={i}>
                                <div className='titledown' onClick={() => toggle(i)}>
                                    <h2>{item.question}</h2>
                                    <i className={ selected === i ? "ri-arrow-up-wide-line" : "ri-arrow-down-wide-fill"}></i>
                                </div>
                                <div className={selected === i ? 'contentdown show' : 'contentdown'}>
                                    <p style={{color:"#222"}}>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
            <div className='imgdiv'>
                <img src={golfimg} alt='' className='w-50' />
            </div>

        </div>
        
    </section>
  )
}

const data = [
    {
        question: 'Question 1',
        answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, possimus aut at tempore eaque
        totam atque rem magni cupiditate! Dolorem vitae quae laborum nesciunt dolore fuga illum alias rem
        Veniam similique ad at quod nostrum? Error ipsum architecto, non voluptas numquam rem. Nam, consequatur!`
    },
    {
        question: 'Question 2',
        answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, possimus aut at tempore eaque
        totam atque rem magni cupiditate! Dolorem vitae quae laborum nesciunt dolore fuga illum alias rem
        Veniam similique ad at quod nostrum? Error ipsum architecto, non voluptas numquam rem. Nam, consequatur!`
    },
    {
        question: 'Question 3',
        answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, possimus aut at tempore eaque
        totam atque rem magni cupiditate! Dolorem vitae quae laborum nesciunt dolore fuga illum alias rem
        Veniam similique ad at quod nostrum? Error ipsum architecto, non voluptas numquam rem. Nam, consequatur!`
    },
    {
        question: 'Question 4',
        answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, possimus aut at tempore eaque
        totam atque rem magni cupiditate! Dolorem vitae quae laborum nesciunt dolore fuga illum alias rem
        Veniam similique ad at quod nostrum? Error ipsum architecto, non voluptas numquam rem. Nam, consequatur!`
    },
];

export default AboutSection
