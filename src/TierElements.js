import React from 'react'

const TierElements = (props) => {
  return (
    <div className="tier-bucket-outer">
      <div className="tier-bucket-middle">
          <div className="tier-bucket-inner">
            <div className="tier-bucket">{props.elements}</div>
          </div>
      </div>
    </div>
  )
}

export default TierElements
