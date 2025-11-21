import React from 'react'

const navbar = () => {
  return (
    <div className='flex justify-between items-center py-8 px-16'>
      <h4 className='bg-black text-white px-10 py-3 rounded-full uppercase text-xs'>Logo</h4>
      <button className='bg-gray-400 text-white px-6 py-3 rounded-full tracking-wider text-xs'>Contact US</button>
    </div>
  )
}

export default navbar
