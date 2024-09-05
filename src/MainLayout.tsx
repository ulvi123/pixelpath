import React from 'react'
import Navbar from './components/common/Navbar'

function MainLayout({children}) {
  return (
    <div>
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  )
}

export default MainLayout