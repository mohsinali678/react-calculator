import React from 'react'
import "./Input.css"

export default function Input(props) {
    const {children} = props;

    return (
        <div className="input">
            {children}
        </div>
    )
}
