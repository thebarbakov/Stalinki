import React from "react"


function Info(props) {
    return (
      <div className="building__info" dangerouslySetInnerHTML={{__html: props.data.fullDescription}}>
      </div>
    )
}

export default Info