import React, { Component } from 'react'

import Header from '../components/Header'
import Footer2 from '../components/Footer2'

class Layout extends Component {
  render() {
    return (
      <div className="flex flex-col h-full bg-[#f2f5f7]">
          <Header/>
          <div className="w-full">
            {this.props.children}
          </div>
          <Footer2 />
    </div>
    )
  }
}

export default Layout