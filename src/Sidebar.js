import React from 'react'
import Tier from './Tier'

const Sidebar = (props) => {
  return (
    <div id="sidebar">
      <Tier letter="na" elements={props.elements.na} />
    </div>
  )
}

export default Sidebar
