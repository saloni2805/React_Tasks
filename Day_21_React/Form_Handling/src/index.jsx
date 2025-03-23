import React, { createContext, useState } from 'react'
import Layout from './Components/Layout'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2';
import { Button } from '@mui/material';
import CustomFormDialog from './Components/FormDialog';
import EmpForm from './EmpForm';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


export const EmpContext = createContext()


const EmpTask = () => {
    const [open, setOpen] = useState(false)

    const handleDialog = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen((prev) => { !prev });
        // getAllDepartments();
        // setDeleteDialog(false);
        // setSelectedData();
    };

    return (
        <Layout>
            <Grid container spacing={2} sx={{ padding: '20px' }}>
                <Grid size={6}>
                    <Typography variant="h5" component="h4">Employee</Typography>
                </Grid>
                <Grid size={6} align='end'>
                    <Button variant="contained" startIcon={<AddOutlinedIcon />} onClick={handleDialog}>Add</Button>
                </Grid>
            </Grid>
            <hr />
            <EmpContext.Provider value={{ onClose }}>
                <CustomFormDialog
                    open={open} onClose={onClose}
                >
                    <EmpForm />
                </CustomFormDialog>
            </EmpContext.Provider>


        </Layout>
    )
}

export default EmpTask