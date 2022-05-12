import React from "react"
import logo from '../images/ui/logo.png'

function Off() {
    return (
      <div className="off">
          <img className='off__image' src={logo} alt='Лого' />
          <h1 className="off__text">App is sleeping now.</h1>
      </div>
    );
}

export default Off