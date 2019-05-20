import React from 'react'

const TierLetter = (props) => {
  return (
    <div id={props.letter} className="tier-letter">
      {props.letter}
    </div>
  )
}

// <img style={{
//     width: 'auto',
//     height: 26,
//     padding: '26px 26px 21px 26px'
//   }} src={"https://svgshare.com/i/D6Y.svg"} alt="" />

export default TierLetter
