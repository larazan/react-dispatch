import React, { Component } from 'react'

class Dashboard extends Component {
  render() {
    return (
      <div className="flex flex-col h-screen max-h-screen">
          <div className="">
            {this.props.children}
          </div>
    </div>
    )
  }
}

export default Dashboard