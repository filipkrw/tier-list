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
    elements.push(<Element image={gothic2} alt="Gothic" />)
    elements.push(<Element image={gothic} alt="Gothic 2" />)
    elements.push(<Element image={gothic2} alt="Gothic" />)
  }

  if (props.letter === 'A') {
    elements.push(<Element image={gothic3} alt="Gothic 3" />)
    elements.push(<Element image={gothic} alt="Gothic" />)
    elements.push(<Element image={gothic3} alt="Gothic 3" />)
    elements.push(<Element image={gothic} alt="Gothic" />)
    elements.push(<Element image={gothic3} alt="Gothic 3" />)
    elements.push(<Element image={gothic3} alt="Gothic 3" />)
    elements.push(<Element image={gothic} alt="Gothic" />)

    elements.push(<Element image={gothic3} alt="Gothic 3" />)
    elements.push(<Element image={gothic} alt="Gothic" />)
  }

  if (props.letter === 'C') {
    elements.push(<Element image={gothic2} alt="Gothic" />)
    elements.push(<Element image={gothic} alt="Gothic 2" />)
  }

  return (
    <div className={props.letter + ' tier'}>
      <TierLetter letter={props.letter} />
      <TierElements elements={elements} />
    </div>
  )
}

export default Tier
