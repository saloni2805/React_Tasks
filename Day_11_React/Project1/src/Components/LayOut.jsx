import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Foother from './Footer'

const LayOut = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet />
            <Foother />

        </>
    )
}

export default LayOut