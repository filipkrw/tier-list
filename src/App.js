import React, { Fragment, createContext, useReducer } from 'react'
import { reducer, initialState } from './store/index'
import { useSelectors, mapStateToSelectors } from './store/selectors'

import TierList from './TierList'
import Sidebar from './Sidebar'

import './App.scss'

export const DispatchContext = createContext()
export const SelectorsContext = createContext()

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const selectors = useSelectors(state, mapStateToSelectors)

  return (
    <Fragment>
      <div className="header">
        <div className="menu">
          <div className="button">tierlist.io</div>
        </div>
        <div className="menu messenger">
          <p>Go ahead, and start by <span className="button">adding images</span>.</p>
        </div>
        <div className="menu align-right">
          <div className="button"><span class="oi" data-glyph="menu" title="Menu" aria-hidden="true"></span>
          </div>
        </div>
      </div>

      <div className="content">
          <DispatchContext.Provider value={dispatch}>
            <SelectorsContext.Provider value={selectors}>
              <TierList />
              <Sidebar />
            </SelectorsContext.Provider>
          </DispatchContext.Provider>
      </div>
    </Fragment>
  )
}

export default App
