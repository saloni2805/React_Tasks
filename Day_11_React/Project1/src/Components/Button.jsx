import React from 'react'

const Button = (prop) => {
    return (
        <>
            <button type={prop.type} className={prop.className} onClick={prop.onClick} style={{ maxWidth: '170px', minWidth: '100px', ...prop.style }}  >

                {prop.icon} {prop.name}

            </button>
        </>
    )
}

export default Button