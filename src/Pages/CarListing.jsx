import React from 'react';
import Helmet from '../Components/Helmet/Helmet';
import CommonSection from '../Components/UI/CommonSection';
import Ad2 from '../Components/UI/Ad2';
import carData from '../Assets/data/carData';
import Caritem from '../Components/UI/CarItem'
import '../Style/CarListing.css';
import { useState } from 'react';



const CarListing = () => {

    // useState dyal button effect
    const[btnActive, setbtnActive] = useState("all") //kan3ti l usestate "all" par default bach ykun on ready dyr effect 3la all cars
    // useState dyal 
    const[arr, setArr] = useState(carData) //value default carData bach yjib array kulha 

const handleClick = (ButtonCategory) => {
  setbtnActive(ButtonCategory);  //KAT3UD ButtonCategory fblasst feen kna kandiru "city" , wfee button kadir handleClick("smit category")
               //3andna juj array kandiru juj filter
              const newArr = carData.filter((item) => {   //filter lawel dyal array lkbira carData
  
                  //item.category raha array [css]
                  const zzz = item.status.filter((myItem) => {   //filter tani dyal array status
                      return myItem === ButtonCategory;
                  })
                  // zzz array ldakhel dyalha 3nser lil9atu fach dart filter
                  return zzz[0] === ButtonCategory; //mymknch ndir zzz === butuncategory 7ut array makysawix string  bach ykun string === string ndir zzz[0] === ButtonCategory
              })
              setArr(newArr);
  }



  return (
    <Helmet title='Cars'>
        <CommonSection title="Cars" />
        
        <section className='carlisting'>
          <div className='filterbtn'>
            {/*=========================*/}
            <button onClick={() => {
              setbtnActive("all")
              setArr(carData); // kan3tih smit array myProject bach yjib projects kulhum
            }} className={btnActive === "all" ? "active" : null} >All Cars</button>
            {/*=========================*/}

            {/*CODE 9BEL MAY3UD DYNAMIQUE
                    <button onClick={() => {
                    setbtnActive("city")
                    //
                    const newArr = carData.filter((item) => {
    
                        // item.status raha array [city]
                        const zzz = item.status.filter((myItem) => {
                            return myItem === "city"
                        })
                        return zzz[0] === "city"
                    })
                    setArr(newArr);
                setbtnActive("city")
            }} className={btnActive === "city" ? "active" :null}>city car</button>*/}


            {/*===============*/}
            <button onClick={() => {
              //setbtnActive("city")
              handleClick("city")
            }} className={btnActive === "city" ? "active" : null} >City car</button>

            {/*==========================*/}
            <button onClick={() => {
              //setbtnActive("electric")
              handleClick("electric")
            }} className={btnActive === "electric" ? "active" : null}>Electric</button>
            {/*============================*/}
            <button onClick={() => {
              //setbtnActive("prestige")
              handleClick("prestige")
            }} className={btnActive === "prestige" ? "active" : null}>Prestige</button>
            {/*============================*/}
            <button onClick={() => {
              //setbtnActive("family")
              handleClick("family")
            }} className={btnActive === "family" ? "active" : null}>Family car</button>
            {/*============================*/}

          </div>

          <div className='flexcar'>
              {
                /*kandiru arr makan carData (line 18) y3ni fach katkhdem function handleClick  
                hadak setArr(newArr) huwa li kaytaficha f makan arr.map*/
                arr.map(item => <Caritem item={item} key={item.id} />) 
              }
          </div>
        </section>
        <Ad2 />
    </Helmet>
  )
}

export default CarListing
