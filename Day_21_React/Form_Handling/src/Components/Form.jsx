import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Button,
    TextField,
    FormControl,
    FormHelperText,
    Typography,
    Container,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    file: Yup.mixed().required('A file is required'),
});

const GridForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            file: null,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Form submitted:', values);
            // Handle file upload and form submission here
        },
    });

    return (
        <Container maxWidth="sm">
            <Typography variant="h5" gutterBottom align="center" sx={{ mt: 4 }}>
                Grid-Based Form with File Upload
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                    {/* Name Field */}
                    <Grid size={12}>
                        <TextField
                            fullWidth
                            id="name"
                            name="name"
                            label="Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                    </Grid>

                    {/* Email Field */}
                    <Grid size={12}>
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Grid>

                    {/* File Upload Field */}
                    <Grid size={12}>
                        <FormControl fullWidth>
                            <input
                                accept="image/*"
                                id="file"
                                name="file"
                                type="file"
                                onChange={(event) => {
                                    formik.setFieldValue('file', event.currentTarget.files[0]);
                                }}
                                onBlur={formik.handleBlur}
                                style={{ display: 'none' }}
                            />
                            <label htmlFor="file">
                                <Button
                                    variant="contained"
                                    component="span"
                                    startIcon={<CloudUploadIcon />}
                                    fullWidth
                                >
                                    Upload File
                                </Button>
                            </label>
                            {formik.touched.file && formik.errors.file && (
                                <FormHelperText error>{formik.errors.file}</FormHelperText>
                            )}
                        </FormControl>
                    </Grid>

                    {/* Submit Button */}
                    <Grid size={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default GridForm;