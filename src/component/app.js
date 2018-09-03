import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import '../style.css'

class App extends Component {
  render () {
    return <div className='hello'>
      Fresh and minimalist webpack boilerplate
    </div>
  }
}

export default hot(module)(App)