import React from 'react'

const Button = (prop) => {
    return (
        <>
            <button type={prop.type} className="btn" onClick={prop.onClick} style={{ maxWidth: '150px', minWidth: '100px', ...prop.style }} >{prop.name}
            </button>
        </>
    )
}

export default Button