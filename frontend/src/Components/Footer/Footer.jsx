import React from "react";
import './Footer.css';
import logo from '../Assests/logo.png';
import whatsapp from '../Assests/whatsappicon.png';
import insta from '../Assests/insta.webp';
import twitter from '../Assests/twitter-icon.webp';
const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={logo}alt=""/>
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={whatsapp} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={insta} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={twitter} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright@2024 -All Righ Reserved.</p>
            </div>
        </div>
    )
}
export default Footer;