import React from 'react';
import '../../Style/ServicesSection.css';
import servicesData from '../../Assets/data/serviceData';


const SrvicesSection = () => {
  return (
    <>
    {
      servicesData.map(item => (
        <ServiceItem item={item} key={item.id} />
      ))
    }
    </>
  )
}

const ServiceItem = ({item}) => (
    <div className='itemX'>
      <div className='service_item'>
        <span>
          <i className={item.icon} />
        </span>
        <h6>{item.title}</h6>
        <p className='section_description'>{item.desc}</p>
      </div>

    </div>
)

export default SrvicesSection
