import React,{useEffect} from 'react';
//import Header from '../Components/Header/Header';
//import Footer from '../Components/Footer/Footer';
import carData from '../Assets/data/carData';
import Helmet from '../Components/Helmet/Helmet';
import { useParams } from "react-router-dom";
import '../Style/CarDetails.css';
import BookingForm from '../Components/UI/BookingForm';
import '../Style/BookingForm.css';
import PaymentMethod from '../Components/UI/PaymentMethod';
import '../Style/PaymentMethode.css';

const CarDetails = () => {

  const { slug } = useParams();
  const singleCarItem = carData.find((item) => item.carName === slug);

  // 7alat derti refresh wla bdlti ongle w rja3ti kaydik scroll lbdya dyal saf7a
  useEffect(() => {
    window.scrollTo(0,0)
  },[singleCarItem])


  return (
    <Helmet title={singleCarItem.carName}>
        <section>
          <div className='CarDetails'>
            <div className='imgdetails'>
              <img src={singleCarItem.imgUrl} alt="" /*className="w-100"*/ />
            </div>
            <div className='details-items'>
              <h1>{singleCarItem.carName}</h1>
              <div className='price-stars'>
                <h4>${singleCarItem.price}.00 /Day</h4>
                <div>
                  <span className='ratings'>
                    <span className='starsicons'>
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-fill"></i>
                    </span>
                     ({singleCarItem.rating} ratings)
                  </span>
                </div>
              </div>
              <p className='section_description '>
                {singleCarItem.description}
              </p>
              <div className='caroptions'>
                <span className='section_description'>
                  <i class="ri-roadster-line"></i> {singleCarItem.model}
                </span>
                <span className='section_description'>
                  <i class="ri-settings-2-line"></i> {singleCarItem.automatic}
                </span>
                <span className='section_description'>
                  <i class="ri-timer-flash-line"></i> {singleCarItem.speed}
                </span>
                <span className='section_description'>
                  <i class="ri-map-pin-line"></i> {singleCarItem.gps}
                </span>
                <span className='section_description'>
                  <i class="ri-wheelchair-line"></i> {singleCarItem.seatType}
                </span>
                <span className='section_description'>
                  <i class="ri-building-2-line"></i> {singleCarItem.brand}
                </span>
              </div>
            </div>

          </div>
          <div className='booking-payment'>
            <div className='booking-part part1book'>
              <h5>Booking Infomation</h5>
              <BookingForm />
            </div>
            <div className='booking-part part2book'>
              <h5>Payment Infomation</h5>
              <PaymentMethod />
            </div>
          </div>
        </section>
    </Helmet>
  )
}

export default CarDetails
