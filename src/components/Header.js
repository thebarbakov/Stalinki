import React from "react"
import logo from '../images/ui/logo.png'
import { useLocation } from 'react-router-dom'

function Header() {

  const nowRoute = useLocation();  

    return (
      <header className={`header ${nowRoute.pathname === '/' && 'header_main'}`}>
        {nowRoute.pathname === '/' && <h1 style={{display: 'none'}}>Сталинские высотки</h1>}
        <img className='header__image' src={logo} alt='Лого' />
        <p className="header__text">Сталинские высотки</p>
          
      </header>
    );
}

export default Header