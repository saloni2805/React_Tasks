import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import { BsArrowLeft } from "react-icons/bs"


const GoBackBtn = () => {
    let nav = useNavigate()
    let GoBack = () => {
        nav("/")
    }

    return (
        <>
            <div className="container mt-3 ">
                <Button
                    onClick={GoBack}
                    icon={<BsArrowLeft />}
                    className="btn btn-outline-secondary d-flex align-items-center justify-content-evenly"
                    name="Back"
                />
            </div>
        </>
    )
}

export default GoBackBtn