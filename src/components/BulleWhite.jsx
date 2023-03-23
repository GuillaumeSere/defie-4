import React from 'react'
import './bulle.css'

const BulleWhite = (props) => {
  return (
    <div className='bulle-white small'>
      <p>{props.content}</p>
    </div>
  )
}

export default BulleWhite
