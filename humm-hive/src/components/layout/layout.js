import React, { useEffect } from 'react'
import Navibar from '../navibar/navibar'
import Footer from '../footer/footer'

import 'modern-normalize/modern-normalize.css'
import '../../scss/gatstrap.scss'

const Layout = ({children}) => {

  return (
    <div>
      <Navibar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
