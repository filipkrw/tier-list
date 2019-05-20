import React, { useState, useEffect } from 'react'

const Element = (props) => {
  let [selected, setSelected] = useState(false)

  let classes = 'tier-element'
  if (selected) { classes += ' selected' }

  return (
    <div
      className="tier-element-outer"
      onClick={() => setSelected(!selected)}
    >
      <div className={classes}>
        <img src={props.image} alt={props.alt} />
      </div>
    </div>
  )
}

export default Element
