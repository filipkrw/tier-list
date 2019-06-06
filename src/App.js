import React, { Fragment } from 'react'
import TierList from './TierList'
import Sidebar from './Sidebar'
import './App.scss'

function App() {
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
        <TierList />
        <Sidebar />
      </div>
    </Fragment>
  )
}

export default App
