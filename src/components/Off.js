import React from "react"
import logo from '../images/ui/logo.png'
import App from './App'

function Off() {
    const [clicks, setClick] = React.useState(0)

    const onImgCLick = (e) => {
        setClick(clicks+1)
    }



    return (
          clicks === 17
          ? <App />
          : <div className="off">
            <img className='off__image' src={logo} alt='Лого' onClick={onImgCLick} />
            <h1 className="off__text">App is sleeping now.</h1>
            </div>
    );
}

export default Off