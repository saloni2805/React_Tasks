import React from 'react'
import Paper from '@mui/material/Paper';

const Layout = ({ children }) => {
    return (
        <Paper elevation={3} sx={{ width: '100%' }}  >
            {children}
        </Paper >
    )
}

export default Layout