import React from 'react'

const Helmet = (props) => {
    document.title = 'Renta Cars Service - ' + props.title
  return (
    <div className='w100'>
      {props.children}
    </div>
  )
}

export default Helmet
