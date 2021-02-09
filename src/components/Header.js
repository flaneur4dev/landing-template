import { memo } from 'react';
import logo from '../images/logo/b-logo.jpg';

function Header() {
  return (
    <header id="header" className="header">
      <div>
        <img src={logo} alt="Логотип" className="header__logo" />
        <div className="header__wrapper">
          <h3 className="header__title">BLA BLA</h3>
          <p className="header__description">One Page Flat Template</p>
        </div>
      </div>
      <nav>
        <ul className="header__nav-links">
          <li><a href="/" className="header__nav-link">HOME</a></li>
          <li><a href="#portfolio" className="header__nav-link">PORTFOLIO</a></li>
          <li><a href="#about" className="header__nav-link">ABOUT</a></li>
          <li><a href="#contact" className="header__nav-link">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default memo(Header)
