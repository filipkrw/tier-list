import React from 'react'
import Tier from './Tier'

const TierList = (props) => {
  return (
    <div id="tier-list">
      <Tier group="s" />
      <Tier group="a" />
      <Tier group="b" />
      <Tier group="c" />
      <Tier group="d" />
      <Tier group="e" />
      <Tier group="f" />
    </div>
  )
}

export default TierList
