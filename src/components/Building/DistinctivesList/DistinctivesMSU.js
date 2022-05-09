import React from "react"
import image from '../../../images/buildings/mgu/mgu_2.jpg'


function DistinctivesMSU(props) {

    const handlePopup = (e) => {
        props.popup(props.data.distinctives[e.target.getAttribute('fact')])
    }
    
    return (
      <div className="distinctives_msu distinctives">
          <div className="distinctives__element one" onClick={handlePopup} fact="0"></div>
          <div className="distinctives__element two" onClick={handlePopup} fact="2"></div>
          <div className="distinctives__element three" onClick={handlePopup} fact="3"></div>
          <div className="distinctives__element four" onClick={handlePopup} fact="4"></div>
          <img className='distinctives__image' src={image} />
      </div>
    )
}

export default DistinctivesMSU