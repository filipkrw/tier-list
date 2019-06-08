import React from 'react'
import Filler from './Filler'

const TierElements = (props) => {
  return (
    <div className="tier-bucket">
      {props.elements}
      <Filler />
    </div>
  )
}

export default TierElements
