import React from 'react'
import './bulle.css'

const BullePink = (props) => {
    return (
        <div className='bulle-pink'>
            <p>{props.content}</p>
        </div>
    )
}

export default BullePink
