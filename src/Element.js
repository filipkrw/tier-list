import React, { useContext } from 'react'
import { DispatchContext, SelectorsContext } from './App'

const Element = ({ image, title, group, index }) => {
  const dispatch = useContext(DispatchContext)
  const { isSelected, allowSelect } = useContext(SelectorsContext)

  let innerClasses = 'tier-element-inner'
  if (isSelected(group, index)) { innerClasses += ' selected' }

  function handleClick() {
    if (allowSelect()) {
      dispatch({ type: 'SELECT', payload: { group, index } })
    }
  }

  return (
    <div
      className="tier-element member"
      onClick={handleClick}
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
