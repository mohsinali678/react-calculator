import React from 'react'
import "./Peripherals.css"

export default function Peripherals(props) {
    const {children, handleClick} = props
    
    return (
        <div 
            className="peripherals"
            onClick={() => {handleClick(children)}}
        >
            {children}
        </div>
    )
}
