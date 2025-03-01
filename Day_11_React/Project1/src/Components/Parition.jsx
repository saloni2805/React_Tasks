import React from 'react'

const Parition = (props) => {
    return (
        <>
            <h2 className='mt-4 d-flex justify-content-center'>{props.name}</h2>
            <hr style={{ width: "50%", border: "3px solid rgb(209, 24, 24)", margin: "auto" }} />

        </>
    )
}

export default Parition