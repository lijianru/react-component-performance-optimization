import React from 'react'
import Counter from './MemoAndUseMemo'
import Counter1 from './UseReducer'

function App() {
  return (
    <div style={{ margin: '50px' }}>
      <Counter />
      <hr />
      <Counter1 initialCount={10} />
    </div>
  )
}

export default App
