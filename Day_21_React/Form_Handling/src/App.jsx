import './App.css'
import Grid from '@mui/material/Grid2';
import FileUpload from './FileUpload';
import { useState } from 'react';
import { Button } from '@mui/material';


function App() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [filename, setFilename] = useState('')
  const [contact, setContact] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form reload

    // Display form data in console (You can replace this with API call)
    alert("Form Submitted!");
    console.log("Name:", username);
    console.log("Email:", email);
    console.log("Contact:", contact);
    console.log("File:", filename);
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container columnSpacing={3} rowSpacing={2} sx={{ padding: '30px 30px 40px 30px', border: '1px solid black', borderRadius: '20px', margin: '30px' }}>
          <Grid size={6}>
            {/* <TextField sx={{ width: '80%' }} id="standard-basic" label="Name" variant="standard" /> */}
            <FileUpload label="Name" variant="standard" type='text' value={username} onChange={(e) => { setUsername(e.target.value) }} />
          </Grid>
          <Grid size={6}>
            <FileUpload label="Email" variant="standard" type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} />
          </Grid>
          <Grid size={6}>
            <FileUpload label="Contact" variant="standard" type='text' value={contact} onChange={(e) => { setContact(e.target.value) }} />
          </Grid>
          <Grid size={6}>
            <FileUpload type='file' value={filename} onChange={(e) => { setFilename(e.target.files[0].name) }} />
          </Grid>
          <Grid size={12} sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>

    </>
  )
}

export default App
