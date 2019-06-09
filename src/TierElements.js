import React from 'react'
import Filler from './Filler'

const TierElements = (props) => {
  return (
    <div
      className="tier-bucket"
      onClick={props.onClick}
    >
      {props.children}
      <Filler />
    </div>
  )
}

export default TierElements
