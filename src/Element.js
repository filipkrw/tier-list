import React, { useState } from 'react'

const Element = (props) => {
  let [selected, setSelected] = useState(false)

  let classes = 'tier-element'
  if (selected) { classes += ' selected' }

  const image = { backgroundImage: `url(${props.image})` }

  return (
    <div
      className="tier-element-outer"
      onClick={() => setSelected(!selected)}
    >
      <div
        className={classes}
        style={image}
        title={props.title}
      />
    </div>
  )
}

export default Element
