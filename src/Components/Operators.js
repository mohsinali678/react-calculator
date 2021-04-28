import React from 'react'
import "./Operators.css"

export default function Operators(props) {
    const {children, handleClick} = props
    
    return (
        <div 
            className="operator"
            onClick={() => {handleClick(children)}}
        >
            {children}
        </div>
    )
}
