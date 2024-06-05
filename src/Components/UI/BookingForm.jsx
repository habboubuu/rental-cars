import React from 'react';
import '../../Style/CarDetails.css';

const BookingForm = () => {
  return (
      <form className='centerform'>
        <div>
                <div className='bookink-content'>
                    <input type='text'  placeholder="First Name" />
                    <input type='text'  placeholder="Last Name" />
                </div>
                <div className='bookink-content'>
                    <input type='email'  placeholder="Email" />
                    <input type='text'  placeholder="Phone Number" />
                </div>
                <div className='bookink-content'>
                    <input type='text'  placeholder="From Address" />
                    <input type='text'  placeholder="To Address" />
                </div>
                <div className='bookink-content'>
                    <select>
                        <option value="1 Person" >1 Person</option>
                        <option value="2 Person" >2 Person</option>
                        <option value="3 Person" >3 Person</option>
                        <option value="4 Person" >4 Person</option>
                        <option value="5+ Person" >5+ Person</option>
                    </select>
                    <select>
                        <option value="1 luggage">1 luggage</option>
                        <option value="2 luggage">2 luggage</option>
                        <option value="3 luggage">3 luggage</option>
                        <option value="4 luggage">4 luggage</option>
                        <option value="5+ luggage">5+ luggage</option>
                    </select>
                </div>
                <div className='bookink-content'>
                    <input type='date'  placeholder="Journey Date" className='dateinput' />
                    <input type='time'  placeholder="Journey Time"  className='timeinput'/>
                </div>
                <div className='bookink-content'>
                    <textarea rows="8" placeholder='Write...'/>
                </div>
        </div>
      </form>
  )
}

export default BookingForm
