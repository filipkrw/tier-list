import React from 'react'

const TierLetter = (props) => {
  return (
    <div id={props.group} className="tier-letter">
      {props.group}
    </div>
  )
}

export default TierLetter
