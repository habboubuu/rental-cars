import React from 'react';
import Helmet from '../Components/Helmet/Helmet';
import CommonSection from '../Components/UI/CommonSection';
import Ad2 from '../Components/UI/Ad2';
import '../Style/Contact.css';


const Contact = () => {
  return (
    <Helmet title='Contact'>
        <CommonSection title="Contact Us" />
        <div  className='contact'>
          <div className='formxx'>
            <form className='contactForm'>
              <div className='contact_form'>
                <h6>Full Name <span>*</span></h6>
                <input placeholder='E.g:"Joe Shmoe"' type='text' required></input>
              </div>
              <div className='contact_form'>
                <h6>Email <span>*</span></h6>
                <input placeholder='youremail@example.com' type='text' required></input>
              </div>
              <div className='contact_form'>
                <h6>Tell us about it <span>*</span></h6>
                <textarea  placeholder='Write here..' className='textareaconact'  required></textarea>
              </div>
              <button type='submit' className='btnContact'>
                <i class="ri-mail-open-line"></i>
                <span>  Send Message</span>
              </button>
            </form>

            <div className='more-information'>
              <div className='info-itemss'>
                <h1 className='section_title'>Need additional information?</h1>
                <p className='section_description'>A multifaceted professional skilled in multiple fields of research,
                  development as well as a learning specialist.
                  Over 15 years of experience.
                </p>
                <div className='info-iconss'>
                  <span><i class="ri-phone-line"></i> +2126655554 </span>
                  <span><i class="ri-mail-line"></i> rentalcar@contact.com</span>
                  <span><i class="ri-send-plane-line"></i> Marrakech, Morocco</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Ad2 />
    </Helmet>
  )
}

export default Contact
