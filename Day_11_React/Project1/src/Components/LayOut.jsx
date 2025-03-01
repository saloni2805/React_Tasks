import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const LayOut = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet />

        </>
    )
}

export default LayOut