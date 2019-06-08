import React from 'react'
import Tier from './Tier'

const TierList = (props) => {
  return (
    <div id="tier-list">
      <Tier letter="s" elements={props.elements.s} />
      <Tier letter="a" elements={props.elements.a} />
      <Tier letter="b" elements={props.elements.b} />
      <Tier letter="c" elements={props.elements.c} />
      <Tier letter="d" elements={props.elements.d} />
      <Tier letter="e" elements={props.elements.e} />
      <Tier letter="f" elements={props.elements.f} />
    </div>
  )
}

export default TierList
