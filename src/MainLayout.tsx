import React from 'react'
import Navbar from './components/common/Navbar'
import {Analytics} from '@vercel/analytics/react'

function MainLayout({children}) {
  return (
    <div>
      <Navbar />
      <main>
        {children}
        <Analytics />
      </main>
    </div>
  )
}

export default MainLayout