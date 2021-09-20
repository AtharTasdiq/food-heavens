import React from 'react';
import logo from '../../../assets/images/Food_heavens_2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { slide as Menu } from 'react-burger-menu'
import "./Header.css";
import SocialNav from './SocialNav';

const header = () => {
  
  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '45px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      "&:hover": {
        background: "#Ce1"
      },
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em .5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
    return (

        //Navbar starts here
        <div>
          <SocialNav></SocialNav>
          <div className="nav-design">
            <nav class="navbar navbar-expand-lg nav-design">
              <div class="container-fluid">
                <a class="navbar-brand" href="/"><img className="logo" src={logo} alt=""></img></a>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  
                  
                  <div class="d-flex mx-auto w-25 search-bar">
                    <input class="form-control me-2" type="search" placeholder="Search by Postal Code" aria-label="Search"/>
                    <button class="btn btn-dark" type="submit">Search</button>
                  </div>

                    
                  <div class="d-flex ms-auto align-items-center justify-content-center blog-page-div">
                      <a className="blog-page mx-3" href="/social_media" >Social Media</a>
                      <a className="become-seller mx-3" href="/become_seller">Become Seller</a>
                      <a className="signin-btn mx-3" href="/login">Sign In</a>
                  </div>
                  
                </div>
                
                
              </div>
            </nav>
            <div className="hamburger-menu">
                <Menu styles={ styles }>
                      <a className="blog-page-mbl my-2 mx-2" href="/social_media" >Social Media</a>
                      <a className="become-seller-mbl my-2 mx-2" href="/become_seller">Become Seller</a>
                      
                      <div class="d-flex mt-3">
                        <a className="signin-btn-mbl mt-3 mx-2" href="/login">Sign In</a>
                        <a className="signin-btn-mbl mt-3 mx-2" href="/login">Sign up</a>
                      </div>
                      <div className="social-mbl">
                        <a className="mx-2 fb" href="www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a className="mx-2 insta" href="www.facebook.com"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a className="mx-2 tweet" href="www.facebook.com"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a className="mx-2 linkd" href="www.facebook.com"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a className="mx-2 google" href="www.facebook.com"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                      </div>
                </Menu>
            </div>
                

        </div>

        </div>
        
    )
}

export default header;
