import React from 'react'

const TierElements = (props) => {
  const extraBorder = <div className="tier-bucket-bottom-border" />

  return (
    <div className="tier-bucket-outer" onClick={props.onClick}>
      <div className="tier-bucket-middle">
        <div className="tier-bucket">{props.elements}</div>
        {props.elements.length > 0 && extraBorder}
      </div>
    </div>
  )
}

export default TierElements
