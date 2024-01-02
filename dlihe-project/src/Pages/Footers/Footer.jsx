import React from 'react'
import Lowerfoot from './Lowerfoot'
import Upperfoot from './Upperfoot'

const Footer = () => {
  return (
    <div className=' flex flex-col items-center '>
      <Upperfoot/>
     <Lowerfoot/>
    </div>
  )
}

export default Footer