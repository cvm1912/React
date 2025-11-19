import React from 'react'
import Cart from './components/cart'

const App = () => {
  return (
    <div className='main'>
       <Cart user="sarthak" role="software developer"/>
       <Cart user="shivam"  role = "full stack developer"/>
    </div>
  )
}

export default App
