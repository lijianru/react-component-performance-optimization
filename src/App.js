import React from 'react'
import { MouseAdd, MouseText } from './pages/renderProps'
import { MouseTextHOC } from './pages/hoc'

function App() {
  return (
    <div style={{ margin: '50px' }}>
      <h3>HOC</h3>
      <MouseTextHOC />
      <hr />
      <h3>Render Props</h3>
      <MouseText />
      <MouseAdd />
    </div>
  )
}

export default App
