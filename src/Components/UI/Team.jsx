import React from 'react';
import '../../Style/Team.css';
import teamData from '../../Assets/data/teamData';


const Members = () => { 
  return (
    <>
      {
        teamData.map(item => (
          <Memberitem item={item} key={item.id} />
        ))
      }
    </>
  )
}
const Memberitem = ({item}) => (
  <div className='Team'>
    <div className='Team-content'>
      <div className='img-team'>
        <img src={item.image} alt='team member'/>
      </div>
      <div className='content-card-team'>
        <h4 className='section_title'>{item.memberName}</h4>
        <p className='section_description'>{item.post}</p>
      </div>
    </div>
  </div>
)

export default Members
