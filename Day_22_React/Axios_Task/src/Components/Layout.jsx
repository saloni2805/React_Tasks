import React from 'react'
import NAvBar from './NAvBar'
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <NAvBar />
            <Outlet />
        </>
    )
}

export default Layout