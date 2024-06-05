import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const ScrollUp = () => {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 400){
                setshowScroll(true)
            }else{
                setshowScroll(false)
            }
            //console.log(window.scrollY); //kay3tina ra9m bch7al hbat scroll
        })
    }, []);

    const[showScroll, setshowScroll] = useState(false);

  return (
    <div className='ScrollUp'>
        <a style={{opacity: showScroll? 1 : 0 , transition: ".3s"}}  href='#up'>
            <i class="ri-arrow-up-s-line"></i>
        </a>
      
    </div>
  )
}

export default ScrollUp
