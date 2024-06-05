import React from 'react';
import '../../Style/FindCarForm.css';

const FindCarForm = () => {
  return (
    <form>
        <section className='form'>
            {/*<h4>Book a car</h4>*/}
            <div className='form-group'>
                <div className='icon-label'>
                    <i class="ri-roadster-line"></i>
                    <label for="Pick-up">Select Your Car<span>*</span></label>
                </div>
                <select>
                    <option  value="car 1">Audi A1</option>
                    <option  value="car 1">Golf 6</option>
                    <option  value="car 1">Benz GLK</option>
                    <option  value="car 1">BMW X6</option>
                    <option  value="car 1">C-Class</option>
                    <option  value="car 1">Nissan Sentra</option>
                    <option  value="car 1">VW Passat CC</option>
                    <option  value="car 1">Yaris Sedan</option>
                </select>
            </div>

            <div className='form-group'>
                <div className='icon-label'>
                    <i class="ri-map-pin-line"></i>
                    <label for="Pick-up">Pick-up<span>*</span></label>
                </div>
                <input type="text" placeholder='Pick up location' id="Pick-up" className='widthpr' required></input>
            </div>

            <div className='form-group'>
                <div className='icon-label'>
                    <i class="ri-map-pin-line"></i>
                    <label for="Drop-off">Drop-off<span>*</span></label>
                </div>
                <input type="text" placeholder='Drop of location' id="Drop-off" className='widthpr'  required></input>
            </div>

            <div className='form-group'>
                <div className='icon-label'>
                    <i class="ri-calendar-line"></i>
                    <label for="datep">Pick-up<span>*</span></label>
                </div>
                <input type="date" id="datep" required className='journey_time'></input>
            </div>

            <div className='form-group'>
                <div className='icon-label'>
                    <i class="ri-calendar-line"></i>
                    <label for="datep">Drop-off<span>*</span></label>
                </div>
                <input type="date" id="dated" required className='journey_time'></input>
            </div>

            <div className='form-group'>
                <button className='btn-form' type='submit'>
                    Find Car
                </button>
            </div>

        </section>
    </form>
  )
}

export default FindCarForm
