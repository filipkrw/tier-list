import React, { useContext } from 'react'
import { SelectedContext } from './App'

const Element = ({ image, title, group, index }) => {
  const [selected, setSelected] = useContext(SelectedContext)
  const currentlySelected = selected.group === group && selected.index === index

  const select = () => {
    if (currentlySelected) { setSelected({}) }
    else { setSelected({ group, index, flag: true }) }
  }

  let innerClasses = 'tier-element-inner'
  if (currentlySelected) { innerClasses += ' selected' }

  return (
    <div
      className="tier-element member"
      onClick={select}
    >
      <div
        title={title}
        className={innerClasses}
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  )
}

export default Element
