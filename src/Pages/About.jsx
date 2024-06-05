import React from 'react';
import Helmet from '../Components/Helmet/Helmet';
import CommonSection from '../Components/UI/CommonSection';
import AboutSection from '../Components/UI/AboutSection';
import Ad2 from '../Components/UI/Ad2';
import Team from '../Components/UI/Team';

const About = () => {
  return (
    <Helmet title='About'>
        <CommonSection title="About Us" />
        <AboutSection  />
        <div className='service_title' style={{textAlign:"center", marginBottom:"2rem"}}>
          <h5 className='.section_subtitle' style={{color:"#FFC436",}}>Experts</h5>
          <h2 className='section_title' style={{color:"#222",}}>Our Team</h2>
        </div>
        
        <div className='teamdiv'>
          <Team />
        </div>

        <Ad2 />
    </Helmet>
  )
}

export default About
