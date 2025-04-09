import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='flex flex-row gap-4 place-content-evenly'>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to="/pastes">
                Pastesuu
            </NavLink>
        </div>
    )
}

export default NavBar