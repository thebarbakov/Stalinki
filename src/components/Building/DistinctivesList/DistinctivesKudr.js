import React from "react"


function DistinctivesKudr(props) {

    const handlePopup = (e) => {
      props.popup(props.data.distinctives[e.target.getAttribute('fact')])
    }

    return (
      <div className="distinctives_kudr distinctives">
        <div className="distinctives__element one" onClick={handlePopup} fact="0"></div>
          <div className="distinctives__element two" onClick={handlePopup} fact="1"></div>
          <div className="distinctives__element three" onClick={handlePopup} fact="2"></div>
          <div className="distinctives__element four" onClick={handlePopup} fact="3"></div>
          <img className='distinctives__image' src={props.data.pictures[2].image} alt="Жилой дом на Котельнической набережной"/>
      </div>
    )
}

export default DistinctivesKudr