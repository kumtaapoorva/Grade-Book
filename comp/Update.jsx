
import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';

export default function Update({setOpen,selectedUser,data,setData}) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'grey',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

const [updatedUser,setUpdatedUser]=useState(selectedUser);
const [index,setIndex]=useState('');

useEffect(()=>{
    const index=(data.findIndex((e)=>e.u_id == selectedUser.u_id))
    setIndex(index);
})

const handleChange=(e)=>{
    setUpdatedUser({
        ...updatedUser,
        [e.target.name]: e.target.value,
    });
}; 
const handleClose = () => {
    setOpen(false);
}
const handleSubmit=async(e)=>{
    // e.preventDefault()
    const updatedData =[...data];
    updatedData.splice (index,1,updatedUser);
    console.log(updatedData);
    setData(updatedData);
    localStorage.setItem("Stud",JSON.stringify(updatedData))
    await setOpen(false);
};

  return (
     <div style={{ ...style, backgroundColor: '#F1F0E8', padding:'30px' }}>
        <div style={{textAlign:'center',bgcolor:'grey' ,maxWidth:'10'}}>
        <Typography variant="h5" gutterBottom>
        Inserting Form
      </Typography>
      <TextField name='username' onChange={handleChange} id="outlined-basic" label="Full Name*" variant="outlined" style={{ width: '400px', textAlign:'center' }} /><br/><br />
     
         <TextField onChange={handleChange} name="usn" id="outlined-number" label="Roll no*" type="number" value={updatedUser.phone} style={{width:'400px'}}/><br/>  <br/>
       
        <TextField onChange={handleChange} name="total" id="outlined-basic" label="Total*" variant="outlined" value={updatedUser.address} style={{width:'400px'}}/><br/>  <br/>
        
        <TextField onChange={handleChange} name="average" id="outlined-basic" label="Average*" variant="outlined" value={updatedUser.address} style={{width:'400px'}}/><br/>  <br/>
        
        <TextField onChange={handleChange} name="grade" id="outlined-basic" label="Grade*" variant="outlined" value={updatedUser.address} style={{width:'400px'}}/><br/>  <br/>
      
        <Button onClick={handleSubmit} variant="contained" style={{width:'400px'}}>UPDATE</Button><br/>  <br/>
        
        <Button onClick={()=>handleClose()} variant="outlined" style={{width:'400px'}}>CANCEL</Button>
    </div> 
    </div>
  )
}