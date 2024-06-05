import React, { useState } from 'react';
import '../../Style/Header.css';
import { Link } from "react-router-dom";
import logo1 from '../../Assets/all-images/logo/white-logo.png';
import logo2 from '../../Assets/all-images/logo/blue-logo.png';


const Header = () => {

    const[Elvi, setElvi] = useState(true);

    
    //overlay
    const[Over, setOver] = useState(true);
    
    function Toggle(){
        setElvi((v) => !v);
        setOver((o) => !o);
    }


  return (
    <nav>
      {/* HEADER TOP */}
      <div className='header_top'>
        <div className='header_call'>
            <p>Need help?</p>
            <i className="ri-customer-service-line"></i>
            <p className='phonenum'>+2126655554</p>
        </div>
        <div className='header_email'>
            <i className="ri-mail-line"></i>
            <p>rentalcar@contact.com</p>

        </div>
        <div className='header_socialmedia'>
            <Link to="#"><i className="ri-instagram-line"></i></Link>
            <Link to="#"><i className="ri-facebook-line"></i></Link>
            <Link to="#"><i className="ri-twitter-x-line"></i></Link>
        </div>
      </div>
      {/* HEADER MIDDELE */}
      <div className='header_middele' >
        <div  className='menu-icon' style={{color:"#fff"}} onClick={Toggle}>
            <i className="ri-menu-line"></i>
        </div>
        <div className='logo'>
            <img src={logo1} alt="" />
            <h6>RentalCar<br/>Kach</h6>
        </div>
        <div className='hm-place'>
            <i className="ri-earth-line"></i>
            <div>
                <h6>Morocco</h6>
                <p>Marrakech, Morocco</p>
            </div>
        </div>
        <div className='Navbar'>
            <div className='register'>
                <button className='signin'>Sign in</button>
                <button className='getstarted'>Get Started</button>
            </div>
            <div className='Navbar-list'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/cars">Cars</Link></li>
                    <li><Link to="/blogs">News</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        </div>
        {/*mobile*/}
        
        <div className={Elvi ? "mobile-navbar" : "mobile_close"}>
            <div className='icon-logo'>
                <img src={logo2} alt='' />
                <i className="ri-close-large-line" onClick={Toggle}></i>
            </div>

            <div className='mobile-list'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/cars">Cars</Link></li>
                    <li><Link to="/blogs">News</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
        <div className={Over ? "overlay" : "overlayx"}></div>
      </div>
    </nav>
  )
}

export default Header
