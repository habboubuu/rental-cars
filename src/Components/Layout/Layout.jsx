import React from 'react';
import { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routers from '../../Routers/Routers';
import ScrollUp from '../UI/ScrollUp';

const Layout = () => {
  return (
    <Fragment>
      <div id='up'>
        <Header/>
            <div>
                <Routers/>
            </div>
            <ScrollUp />
        <Footer/>
      </div>
  </Fragment>
  )
}

export default Layout
