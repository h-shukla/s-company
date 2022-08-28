import React from 'react'
import playStore from '../../../images/playstore.png'
import appStore from '../../../images/Appstore.png'
import logo from '../../../images/logo.png'
import './Footer.css'

const Footer = () => {
    // generating current year for copyright notice
    const year = new Date().getFullYear();
    return (
        <footer id='footer'>
            <div className="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download app for Android and IOS mobile phone</p>
                <img src={playStore} alt="playstore" />
                <img src={appStore} alt="appStore" />
            </div>

            <div className="midFooter">
                <img src={logo} alt="logo" />
                <p className='slogan'>High quality is our first priority</p>
                <p>Copyright {year} &copy; Himanshu Shukla</p>
            </div>

            <div className="rightFooter">
                <h4>Follow me</h4>
                <a href='http://instagram.com/that.original.hybrid'>Instagram</a>
                <a href="https://twitter.com/Himansh90910181">Twitter</a>
                <a href="https://www.linkedin.com/in/himanshu-shukla-377780226/">LinkedIn</a>
            </div>
        </footer>
    )
}

export default Footer
