import React from 'react'
import Lcontent from './lcontent'
import Rcontent from './rcontent'


const pcontent = () => {
  return (
    <div className=' h-[90vh] p-10 flex gap-10 items-center '>
        <Lcontent/>
        <Rcontent/>
    </div>
  )
}

export default pcontent
