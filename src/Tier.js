import React from 'react'
import TierElements from './TierElements'
import TierLetter from './TierLetter'

const Tier = (props) => {
  const letter = props.letter !== undefined

  let classes = 'tier'
  if (letter) { classes += ' ' + props.letter }

  return (
    <div className={classes}>
      {letter && <TierLetter letter={props.letter} />}
      <TierElements elements={props.elements} />
    </div>
  )
}

export default Tier
