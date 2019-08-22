import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import '../style.css'

const App = () => {
  const [count, setCount] = useState(0)
  return <div className='hello' />
}

export default hot(App)
