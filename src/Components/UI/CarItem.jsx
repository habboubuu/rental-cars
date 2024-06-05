import React from 'react';
import '../../Style/Caritem.css';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, spring } from "framer-motion"


const Caritem = (props) => {


    const {imgUrl, model, price, speed, carName, automatic} = props.item

    
  return (
    <AnimatePresence>
        <motion.div
        layout
        initial={{ transform: "scale(0)" }}
        animate={{ transform: "scale(1)" }}
        transition={{dumping:5, type: spring, stiffness: 60}}
        className='car_item'>
            <div className='car_img'>
                <img src={imgUrl} alt='' />
            </div>
            <div className='car_item-content'>
                <h4 className='section_title'>{carName}</h4>{/* text align */}
                <div className='titleCar'>
                    <h6 className='rent_price'>${price}.00
                    <span>/ Day</span></h6>
                </div>
            </div>
            
            <div className='car_item-info'> {/*d-flex alignitems justify*/}
                {/* dar l kula span display flex */}
                <span><i class="ri-roadster-line"></i>{model}</span>
                <span><i class="ri-settings-2-line"></i>{automatic}</span>
                <span><i class="ri-timer-flash-line"></i>{speed}</span>
            </div>
            <div className="buttonItem">
                <button className='car_item-btn car_btn-rent'>
                    <Link to={`/cars/${carName}`}>Book Ride</Link>
                </button>
            </div>
        </motion.div>
    </AnimatePresence>
  )
}

export default Caritem
