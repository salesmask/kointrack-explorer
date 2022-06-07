import React from 'react'
import FB_Logo from "../../../assets/footer/FB.png"
import Insta_Logo from "../../../assets/footer/Insta.png"
import Link_Logo from "../../../assets/footer/Link.png"
import Twitter_Logo from "../../../assets/footer/Twitter.png"
import './Sociallinks.css'

const Sociallinks = () => {
  return (
    <div className='social_links'>
    <a href="" >
    <img src={FB_Logo} className='FB_logo'/>
    </a> 
    <a href="" >
    <img src={Insta_Logo} className='Insta_logo'/>
    </a> 
    <a href="" >
    <img src={Link_Logo} className='Link_logo'/>
    </a> 
    <a href="" >
    <img src={Twitter_Logo} className='Twitter_logo'/>
    </a> 


    </div>
  )
}

export default Sociallinks