import React from 'react';
import '../../Style/AppsDown.css';
import android from '../../Assets/all-images/download/googleapp.png';
import ios from '../../Assets/all-images/download/appstore.png';
import phone from '../../Assets/all-images/download/phone.png';


const AppsDown = () => {
  return (
    <div className='containerapp'>
        <div className='Appsdown'>
            <div className='itemapp'>
                <h1>Download our app to get most out of it</h1>
                <p className='section_descriptionapp'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ut quo voluptatum adipisci eius labore cumque,
                    alias culpa assumenda magni ab
                    Ut quo voluptatum adipisci eius labore cumque,
                    alias culpa assumenda magni ab
                </p>
                <div className='imgdown'>
                    <img src={android} alt='' />
                    <img src={ios} alt='' />
                </div>
            </div>
            <div className='phoneimg'>
                <img src={phone} alt='' />
            </div>
        </div>
    </div>
  )
}

export default AppsDown
