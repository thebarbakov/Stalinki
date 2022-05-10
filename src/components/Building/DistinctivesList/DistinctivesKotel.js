import React from "react"


function DistinctivesKotel(props) {

    const handlePopup = (e) => {
      props.popup(props.data.distinctives[e.target.getAttribute('fact')])
    }

    return (
      <div className="distinctives_kotel distinctives">
        <div className="distinctives__element one" onClick={handlePopup} fact="1"></div>
          <div className="distinctives__element two" onClick={handlePopup} fact="2"></div>
          <div className="distinctives__element three" onClick={handlePopup} fact="3"></div>
          <div className="distinctives__element four" onClick={handlePopup} fact="4"></div>
          <img className='distinctives__image' src={props.data.pictures[3].image} alt="Жилой дом на Котельнической набережной"/>
      </div>
    )
}

export default DistinctivesKotel