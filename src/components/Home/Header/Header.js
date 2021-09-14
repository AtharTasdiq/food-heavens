import React from 'react';
import logo from '../../../assets/images/Food_heavens_2.png';
import "./Header.css";

const header = () => {
    
    return (

        //Navbar starts here
        <div>
            <nav class="navbar navbar-expand-lg nav-design">
              <div class="container-fluid">
                <a class="navbar-brand" href="/"><img className="logo" src={logo} alt=""></img></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  
                  {/* Search */}
                  <div class="d-flex ms-auto">
                    <input class="form-control me-2" type="search" placeholder="Search by Postal Code" aria-label="Search"/>
                    <button class="btn btn-dark" type="submit">Search</button>
                  </div>

                   {/* Menus */}   
                  <div class="d-flex ms-auto align-items-center justify-content-center blog-page-div">
                      <a className="blog-page mx-3" href="/" >Social Media</a>
                      <a className="become-seller mx-3" href="/">Become Seller</a>
                      <a className="signin-btn mx-3" href="/">Sign In</a>
                  </div>
                </div>
              </div>
            </nav>
                      
        </div>
    )
}

export default header;
