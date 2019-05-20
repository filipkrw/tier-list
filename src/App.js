import React, { Fragment } from 'react'
import TierList from './TierList'
import Sidebar from './Sidebar'
import './App.scss'

function App() {
  return (
    <Fragment>
      <TierList />
      <Sidebar />
    </Fragment>
  )
}

export default App
