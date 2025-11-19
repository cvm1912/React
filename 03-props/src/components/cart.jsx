import React from 'react'

const cart = (props) => {
  console.log(props.user)
  return (
    <>
      <div className='parent'>
      <div className='cart'>
          <img src='https://images.unsplash.com/photo-1762088776943-28a9fbadcec4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D'/>
          <h1>{props.user}</h1>
          <p>{props.role}</p>
          <button>View Profile</button>
      </div>
      </div>
     </>
  )
}

export default cart
