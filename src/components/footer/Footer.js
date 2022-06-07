import React from 'react'
import './Footer.css'
import Header_Logo from '../../assets/footer/Header_Logo.png'
import Product from './products/Product'
import Company from './company/Company'
import Resourcess from './resourcess/Resourcess'
import Contact from './contact/Contact'
import FooterLogo from './logo/FooterLogo'
import Sociallinks from './sociallinks/Sociallinks'

function Footer() {
  return (
    <div className='footer_layout'>

        <div className="footer_wrapper">

          <div className='footer_logo'>
           
            <FooterLogo/>
            <p className='footer_info'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            <div>

              <Sociallinks/>

            </div>
          </div>

          <Product />

          <div>
            <Resourcess/>
          </div>

          <div>
            
            <Company/>
          </div>

          <div>
            <Contact/>
          </div>

          

        </div>


        <div className="copywrite__wrapper">
          Copyright 2021-22 www.kointrack.com
        </div>

    </div>
  )
}

export default Footer