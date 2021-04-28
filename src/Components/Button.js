import React from 'react'
import "./Button.css"

export default function Button(props) {
    const {children, handleClick} = props
    
    return (
        <div 
            className={`${parseInt(children) === 0 ? "zero" : "button"}`} 
            onClick={() => {handleClick(children)}}
        >
            {children}
        </div>
    )
}
