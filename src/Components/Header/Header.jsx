import React from 'react';
import './header.css'
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
const Header = () => {
    return ( 
    <header id="home">
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Ehsan Naderi</h1>
          <h5 className="text-light">Computer science student</h5>
          <CTA />
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
          <HeaderSocials />
        </div>
      </header>
     );
}
 
export default Header;