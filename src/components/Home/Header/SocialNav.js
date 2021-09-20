import React from 'react';
import "./SocialNav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';



const SocialNav = () => {
    return (
        <div className="social-main">
            <div className="social-nav d-flex justify-content-around">
                <div className="text-center">
                    <span>Contact Us : contact@example.com</span>
                </div>
                {/* <div className="d-none justify-content-center align-items-center">
                    <span className="mx-2"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                    <span className="mx-2">11432</span>
                </div> */}
                <div className="text-center">
                    <a className="mx-2 fb" href="www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a className="mx-2 insta" href="www.facebook.com"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a className="mx-2 tweet" href="www.facebook.com"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a className="mx-2 linkd" href="www.facebook.com"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a className="mx-2 google" href="www.facebook.com"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                </div>
            </div>
            <div className="mobile-social-nav">
                <div className="text-center">
                    <span>Contact Us : contact@example.com</span>
                </div>
            </div>
        </div>
        
    );
};

export default SocialNav;