import React, { useContext } from 'react'
import TierElements from './TierElements'
import TierLetter from './TierLetter'
import Element from './Element'

import { MoveContext } from './App'

const Tier = (props) => {
  let classes = 'tier'

  const letter = props.letter !== 'na'
  if (letter) { classes += ' ' + props.letter }

  const elements = props.elements.map(({ image, title }, index) => (
    <Element
      key={index}
      image={image}
      title={title}
      index={index}
      group={props.letter}
    />
  ))

  let move = useContext(MoveContext)

  return (
    <div className={classes}>
      {letter && <TierLetter letter={props.letter} />}
      <TierElements elements={elements} onClick={() => move(props.letter)} />
    </div>
  )
}

export default Tier
