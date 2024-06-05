import React from 'react';
import Helmet from '../Components/Helmet/Helmet';
import Hero from '../Components/UI/Hero';
import FindCarForm from '../Components/UI/FindCarForm';
import '../Style/FindCarForm.css';
import AboutSection from '../Components/UI/AboutSection';
import ServicesSection from '../Components/UI/ServicesSection';
import AppsDown from '../Components/UI/AppsDown';
import Caritem from '../Components/UI/CarItem';
import carData from '../../src/Assets/data/carData';
import Feedback from '../Components/UI/Feedback';
import BlogList from '../Components/UI/BlogList';
import  BlogData from '../../src/Assets/data/blogData';
import Ad from '../Components/UI/Ad';




const Home = () => {


  return (
    <Helmet title='Home'>
      {/*============ Section Hero ============*/}
        <dev className="hero-section">
          <Hero />
          <div className='hero-form'>
            <div className="row-form">
              <div className='left-dev'>
                <h2>Find Your Best Car Here</h2>
              </div>
              <FindCarForm />
            </div>
          </div>
        </dev>
        <div className='SolveErorr'></div>

      {/*=========== About ===============*/}
      <div style={{marginTop:"10rem"}}>
        <AboutSection />
      </div>
      {/* ======== AD ========== */}
      <div className='SectionAd'>
        <Ad />
      </div>
      {/*================= Section Services ================*/}
      <div className='services'>
        <div className='service_title' style={{textAlign:"center", marginBottom:"2rem"}}>
          <h5 className='.section_subtitle' style={{color:"#FFC436",}}>See our</h5>
          <h2 className='section_title' style={{color:"#222",}}>Popular Services</h2>
        </div>

        <div className='servx'>
          <ServicesSection />
        </div>

      </div>
      {/*=========== section Cars =============*/}
      <div className='services'>
        <div className='service_title' style={{textAlign:"center", marginBottom:"2rem"}}>
          <h5 className='.section_subtitle' style={{color:"#FFC436",}}>Come with</h5>
          <h2 className='section_title' style={{color:"#222",}}>Hot Offers</h2>
        </div>

          <div className='caritemx'>
              {
                carData.slice(0,6).map(item => (    //slice katkhli ghi 6 dyal li cars tal3in 
                  <Caritem item={item} key={item.id} />
                ))
              }
          </div>
          </div>
      {/*========= Apps Down  =========*/}
      <div>
        <AppsDown />
      </div>

      {/*========= feedback =========*/}
      <div className='feedbackParent'>
        <div className='service_title' style={{textAlign:"center", marginTop:"2rem", marginBottom:"2rem"}}>
          <h5 className='.section_subtitle' style={{color:"#FFC436",}}>Our clients says</h5>
          <h2 className='section_title' style={{color:"#222",}}>Feedback</h2>
        </div>

        <Feedback />
      </div>
      {/*============= Section Blog ============== */}
      <div className='BlogList'>
        <div className='service_title' style={{textAlign:"center", marginTop:"2rem", marginBottom:"2rem"}}>
          <h5 className='.section_subtitle' style={{color:"#FFC436",}}>Explore our News</h5>
          <h2 className='section_title' style={{color:"#222",}}>Latest News</h2>
        </div>

        <div className='blogs_parent'>
          {
            BlogData.slice(0,3).map(item => (  //slice katkhli ghi 3 dyal li cars tal3in 
                <BlogList item={item} key={item.id} />
            ))
          }
        </div>
      </div>
    </Helmet>
  )
}

export default Home
