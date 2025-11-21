import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

const App = () => {
  return (
    <div>
      <h1 className='h-screen w-screen'>
        <Section1/>
        <Section2/>
      </h1>
    </div>
  )
}

export default App
