import React from 'react'
import { Button } from '@mui/material'
import { EmpContext } from '.'
import { useContext } from 'react'

const EmpForm = () => {
    const { onClose } = useContext(EmpContext)
    return (
        <form>
            <Button onClick={onClose}>Close</Button>
        </form>
    )
}

export default EmpForm