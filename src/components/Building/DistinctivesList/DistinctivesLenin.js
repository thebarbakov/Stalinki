import React from "react"


function DistinctivesLenin(props) {

    const handlePopup = (e) => {
      props.popup(props.data.distinctives[e.target.getAttribute('fact')])
    }

    return (
      <div className="distinctives_lenin distinctives">
        <div className="distinctives__element one" onClick={handlePopup} fact="0"></div>
          <div className="distinctives__element two" onClick={handlePopup} fact="1"></div>
          <img className='distinctives__image' src={props.data.pictures[1].image} alt="Жилой дом на Котельнической набережной"/>
      </div>
    )
}

export default DistinctivesLenin