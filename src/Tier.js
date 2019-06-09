import React, { useContext } from 'react'
import { SelectorsContext, DispatchContext } from './App'

import TierElements from './TierElements'
import TierLetter from './TierLetter'
import Element from './Element'

const Tier = (props) => {
  const dispatch = useContext(DispatchContext)
  const { getGroup, allowSelect, isSelectedInGroup } = useContext(SelectorsContext)

  const group = getGroup(props.group)
  const elements = group.map(({ image, title }, index) => (
    <Element
      key={index}
      image={image}
      title={title}
      index={index}
      group={props.group}
    />
  ))

  let classes = 'tier ' + props.group
  if (allowSelect()) { classes += ' allow-select' }
  else {
    classes += ' allow-drop'
    if (isSelectedInGroup(props.group)) { classes += ' selected-in-group' }
  }

  function handleClick() {
    if (!allowSelect()) {
      dispatch({ type: 'TRANSFER', payload: { targetGroup: props.group } })
      dispatch({ type: 'DESELECT' })
    }
  }

  return (
    <div className={classes}>
      {props.group !== 'na' && <TierLetter group={props.group} />}
      <TierElements onClick={handleClick}>
        {elements}
      </TierElements>
    </div>
  )
}

export default Tier
