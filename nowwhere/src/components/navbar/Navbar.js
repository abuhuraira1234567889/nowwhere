import React from 'react';
import "./navbar.css"
import {Link} from "react-router-dom";



const Navbar = () => {
    return (

<nav className="navbar navbar-expand-lg navbar-light ">
  <div className='container'>
    <Link className="navbar-brand" to="/">
        <img src="https://eadn-wc03-4642427.nxedge.io/cdn/wp-content/uploads/2021/06/logo.svg" alt="" />
    </Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mr-auto" id="navbarNavAltMarkup">
     
        <ul className='navbar-nav ' >
        <li className='nav-item '>
            <Link className='nav-link' to="/card2"> Farm</Link>
          </li>
        <li className='nav-item trade-button'>
            <Link className='nav-link' to="/card"> Trade</Link>
          </li>

          <li className='nav-item'>
          <a className="nav-link" aria-current="page" href="#">
            Join Our team on Discord
        </a>
          </li>
          <li className='nav-item'>
          <a className="nav-link" href="#">
            <img src="https://eadn-wc03-4642427.nxedge.io/cdn/wp-content/uploads/2021/06/instagram.svg" alt="" />
        </a>

          </li>
          <li className='nav-item'>
          <a className="nav-link" href="#">
        <img src="https://eadn-wc03-4642427.nxedge.io/cdn/wp-content/uploads/2021/06/twitter.svg" className="img-fluid" alt="NOWwhere"/>
        </a>
          </li>
          <li className='nav-item'>
          <a className="nav-link" href="#">
        <img src="https://eadn-wc03-4642427.nxedge.io/cdn/wp-content/uploads/2021/06/youtube.svg" className="img-fluid" alt="NOWwhere"/>
        </a>
          </li>
        </ul>
        
        
        
        
        
      
    </div>
    </div>
    <hr/>
</nav>



/*
<nav>
  <div className="logo">
  <a className="logo-img" href="#">
        <img src="https://eadn-wc03-4642427.nxedge.io/cdn/wp-content/uploads/2021/06/logo.svg" alt="" />
    </a>
  </div>
  <ul className='links'>
    <li>
    <a className="links-text" href="#"><img src="" alt="" />
            Join Our team on Discord
        </a>
    </li>
    <li>
    <a className="links-text" href="#">
            <img src="https://eadn-wc03-4642427.nxedge.io/cdn/wp-content/uploads/2021/06/instagram.svg" alt="" />
        </a>
      
      </li>
      <li>
      <a className="links-text" href="#">
        <img src="https://eadn-wc03-4642427.nxedge.io/cdn/wp-content/uploads/2021/06/twitter.svg" className="img-fluid" alt="NOWwhere"/>
        </a>
    </li>
    <li>
    <a className="links-text" href="#">
        <img src="https://eadn-wc03-4642427.nxedge.io/cdn/wp-content/uploads/2021/06/youtube.svg" className="img-fluid" alt="NOWwhere"/>
        </a>
    </li>
  </ul>
  </nav>
 */
    );
}


export default Navbar;