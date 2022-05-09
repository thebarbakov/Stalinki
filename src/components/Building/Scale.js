import React from "react"


function Scale(props) {
    return (
      <div className="scale">
          <div className={`scale__element ${props.size >= 1 && 'scale__element_active'}`}></div>
          <div className={`scale__element ${props.size >= 2 && 'scale__element_active'}`}></div>
          <div className={`scale__element ${props.size >= 3 && 'scale__element_active'}`}></div>
          <div className={`scale__element ${props.size >= 4 && 'scale__element_active'}`}></div>
          <div className={`scale__element ${props.size >= 5 && 'scale__element_active'}`}></div>
          <div className={`scale__element ${props.size >= 6 && 'scale__element_active'}`}></div>
          <div className={`scale__element ${props.size >= 7 && 'scale__element_active'}`}></div>
          <div className={`scale__element ${props.size >= 8 && 'scale__element_active'}`}></div>
          <div className={`scale__element ${props.size >= 9 && 'scale__element_active'}`}></div>
          <div className={`scale__element ${props.size >= 10 && 'scale__element_active'}`}></div>
      </div>
    )
}

export default Scale