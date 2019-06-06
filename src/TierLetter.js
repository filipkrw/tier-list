import React from 'react'

const TierLetter = (props) => {
  return (
    <div id={props.letter} className="tier-letter">
      {props.letter}
    </div>
  )
}

export default TierLetter
