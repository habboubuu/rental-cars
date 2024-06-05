import React from 'react';
import '../Style/err404.css';
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <div className='err'>
        <div className='itemerr'>
          <h1>Error 404</h1>
          <div className='itemerr22'>
            <p>page not found</p>
            <Link to='/home'>Back To Home Page</Link>
          </div>
          
        </div>
    </div>
  )
}

export default NotFound
