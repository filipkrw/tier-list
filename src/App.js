import React, { Fragment, useState, createContext } from 'react'

import TierList from './TierList'
import Sidebar from './Sidebar'

import './App.scss'

export const MoveContext = createContext()
export const SelectedContext = createContext()

function App() {
  let [elements, setElements] = useState({
    s: [{}, {}, {}, {}, {}, {}, {}],
    na: [{}],
    a: [],
    b: [{}, {}, {}, {}, {}],
    c: [],
    d: [],
    e: [],
    f: []
  })

  let [selected, setSelected] = useState({})

  const move = (targetGroup) => {
    if (selected.flag === undefined) { return }
    if (selected.group === targetGroup) { setSelected({}); return }

    let origin = [...elements[selected.group]]
    let target = [...elements[targetGroup]]

    target.push(origin.splice(selected.index, 1)[0])

    setElements({
      ...elements,
      [selected.group]: origin,
      [targetGroup]: target
    })

    setSelected({})
  }

  return (
    <Fragment>
      <div className="header">
        <div className="menu">
          <div className="button">tierlist.io</div>
          <div className="button">About</div>
          <div className="button">Share</div>
        </div>
        <div className="menu">
          <div className="button">Add images</div>
        </div>
      </div>

      <div className="content">
        <MoveContext.Provider value={move}>
          <SelectedContext.Provider value={[selected, setSelected]}>
            <TierList elements={elements} />
            <Sidebar elements={elements} />
          </SelectedContext.Provider>
        </MoveContext.Provider>
      </div>
    </Fragment>
  )
}

export default App
