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
          <div className="button">About</div>
          <div className="button">Share</div>
        </div>
        <div className="menu">
          <div className="button">Add images</div>
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
