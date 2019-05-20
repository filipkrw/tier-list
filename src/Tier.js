import React from 'react'
import TierElements from './TierElements'
import TierLetter from './TierLetter'
import Element from './Element'
import gothic from './images/g1.jpg'
import gothic2 from './images/g2.jpg'
import gothic3 from './images/g3.jpg'

const Tier = (props) => {
  const elements = []

  if (props.letter === 'S') {
    elements.push(<Element image={gothic} alt="Gothic" />)
    elements.push(<Element image={gothic2} alt="Gothic 2" />)
  }

  if (props.letter === 'C') {
    elements.push(<Element image={gothic3} alt="Gothic 3" />)
  }

  let classes = props.letter + ' tier'

  if (
    props.letter === 'A' ||
    props.letter === 'B' ||
    props.letter === 'D' ||
    props.letter === 'E' ||
    props.letter === 'F'
  ) {
    classes += ' no-extra-border'
  }

  return (
    <div className={classes}>
      <TierLetter letter={props.letter} />
      <TierElements elements={elements} />
    </div>
  )
}

export default Tier
