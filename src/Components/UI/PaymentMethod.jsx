import React from 'react';
import '../../Style/PaymentMethode.css';
import mastercard from '../../Assets/all-images/master-card.jpg';
import paypal from '../../Assets/all-images/paypal.jpg'

const PaymentMethod = () => {
  return (
    <>
        <form>
            <div className='payment payment-1'>
                <label htmlFor=''>
                    <input type="radio" name="group1" value="option1"/> Dricect Bank Transfer
                </label>
                <p className='section_description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta suscipit sunt deserunt eum accusantium doloribus
                    ad provident laboriosam cupiditate a.
                </p>
            </div>
            <div className='payment cheque-payment'>
                <label htmlFor=''>
                    <input type="radio" name="group1" value="option2"/> Chaque Payment
                </label>
            </div>
            <div className='payment master-card'>
                <label htmlFor=''>
                    <input type="radio" name="group1" value="option3"/> Master Card
                </label>
                <img src={mastercard} alt='' />
            </div>
            <div className='payment paypal'>
                <label htmlFor=''>
                    <input type="radio" name="group1" value="option4"/> paypal
                </label>
                <img src={paypal} alt='' />
            </div>
            <button className='btnContact btnbookform' type='submit'>
                Reserve Now
            </button>
        </form>

    </>
  )
}

export default PaymentMethod
