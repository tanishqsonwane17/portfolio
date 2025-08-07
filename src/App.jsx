import React from 'react'
import Nav from './components/Nav'
import Sidenav from './components/Sidenav'
import Page1 from './screens/Page1'

const App = () => {
  return (
    <>
      <div className='flex'>
        <Sidenav />
        <div className='w-full flex flex-col'>
          <Nav />
          <Page1 />
          <Page1 />
        </div>
      </div>
    </>
  )
}

export default App
