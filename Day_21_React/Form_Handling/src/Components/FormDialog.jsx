import { Dialog, DialogContent } from '@mui/material';
import React from 'react';

const CustomFormDialog = ({ open, children, maxWidth, ...otherProps }) => {
    // console.log(onClose);
    return (
        <>
            <Dialog
                open={open}
                fullWidth
                maxWidth={maxWidth != undefined ? maxWidth : 'sm'}
                sx={{ '& .MuiDialog-paper': { height: otherProps?.height } }}
                {...otherProps}
            >
                <DialogContent>{children}</DialogContent>
            </Dialog>
        </>
    );
};

export default CustomFormDialog;
