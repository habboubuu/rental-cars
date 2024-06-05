import React from 'react';
import '../../Style/Footer.css';
import logo from '../../Assets/all-images/logo/white-logo.png';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div style={{background:"#000"}}>
        <div className='footer'>
            <div className='footer-intro'>
                <div>
                    <img src={logo} alt='' />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis voluptates incidunt perferendis aspernatur iusto
                    quas illum nostrum
                </p>
                <div className='footerIcon'>
                    <i className="ri-facebook-line"></i>
                    <i className="ri-instagram-line"></i>
                    <i className="ri-twitter-x-line"></i>
                    <i className="ri-linkedin-line"></i>
                </div>
            </div>
            <div className='footerInformation'>
                <h6>Information</h6>
                    <ul>
                        <li><Link to="/#" className="footer-link">About Company</Link></li>
                        <li><Link to="/#" className="footer-link">Payment Type</Link></li>
                        <li><Link to="/#" className="footer-link">Media Partner</Link></li>
                        <li><Link to="/#" className="footer-link">Become an Agent</Link></li>
                        <li><Link to="/#" className="footer-link">Refund Policy</Link></li>
                    </ul>

            </div>
            <div className='footerNavbar'>
                <h6>Kech Things</h6>
                    <ul>
                        <li><Link to="/#" className="footer-link">Home Page</Link></li>
                        <li><Link to="/#" className="footer-link">About Us</Link></li>
                        <li><Link to="/#" className="footer-link">Cars</Link></li>
                        <li><Link to="/#" className="footer-link">News!</Link></li>
                        <li><Link to="/#" className="footer-link">Contact Us</Link></li>
                    </ul>
            </div>
            <div className='Newsletter'>
                <h6>Subscribe Newsletter</h6>
                <div>
                    <div className='footericonmail'>
                        <i className="ri-mail-line"></i>
                        <h6>Stay up to date</h6>
                    </div>
                    <p>Get notified when I publish something new, and unsubscribe at any time.</p>
                    <div className='mailbox'>
                        <input type="email" placeholder='Email' />
                        <button>
                            Join
                            <i className="ri-send-plane-line"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
            <div className='xbottom'>
                <div className='footer-bottom'>
                    <p>&copy; 2024 <span>Houssam Habboub</span>. All Rights Reserved </p>
                </div>
                <div className='loi'>
                    <ul>
                        <li><Link to="/#">Privacy Policy</Link></li>
                        <li><Link to="/#">Terms & Conditions</Link></li>
                        <li><Link to="/#">Sitemap</Link></li>
                    </ul>

                </div>
            </div>
    </div>
    )
}

export default Footer
