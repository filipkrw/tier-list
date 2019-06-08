import React, { useContext } from 'react'
import { SelectedContext } from './App'

const Element = ({ image, title, group, index }) => {
  let [selected, setSelected] = useContext(SelectedContext)
  const currentSelected = selected.group === group && selected.index === index;

  let classes = 'tier-element'
  if (currentSelected) { classes += ' selected' }

  const select = () => {
    if (currentSelected) {
      setSelected({})
    } else {
      setSelected({ group, index, flag: true })
    }
  }

  return (
    <div
      className="tier-element-outer"
      onClick={select}
    >
      <div
        title={title}
        className={classes}
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  )
}

export default Element
