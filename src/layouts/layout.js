import React, { Component } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

class Layout extends Component {
  render() {
    return (
      <div className="flex flex-col h-full bg-[#f2f5f7]">
          <Header/>
          <div className="w-full">
            {this.props.children}
          </div>
          <Footer />
    </div>
    )
  }
}

export default Layout