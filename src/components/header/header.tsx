import * as React from "react";

import Container from "../container/container";

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <Container>
        <div className="header__header">
          <img className="header__logo" src={require('../../img/logo.png')} alt="Логотип Agency"></img>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item"><a href="#">About</a></li>
              <li className="header__nav-item"><a href="#">Services</a></li>
              <li className="header__nav-item"><a href="#">Pricing</a></li>
              <li className="header__nav-item"><a href="#">Blog</a></li>
            </ul>
          </nav>
          <button className="header__contact">Contact</button>
        </div>

        <div className="header__body">
          <h1 className="header__title">Portfolio</h1>
          <p className="header__text">Agency provides a full service range including technical skills, design, business understanding.</p>
        </div>          
      </Container>
    </div>
  );
};

export default Header;