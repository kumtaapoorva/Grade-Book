
import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Deletee({setOpen2,selectedUser,data,setData}) {
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
      
    const handleDelete = async (id) => {
        const updatedData = data.filter((e) => e.u_id !== id);
        console.log(updatedData);
        setData(updatedData);
        localStorage.setItem("Stud",JSON.stringify(updatedData));
        await setOpen2(false);
    } 
    const handleClose = () => {
        setOpen2(false);
    } 
  return (
    <Card sx={style}>
      <CardContent>
        <h4>Attempting to delete!</h4>
        <Typography variant="body2" color="text.secondary" >
        Are you sure, you want to delete the record?
        </Typography>
      </CardContent>
      <CardActions>
      <Button  color = 'error' onClick={()=> handleClose()}  size="small">Cancel</Button><br/><br/>
    <Button color = 'primary' onClick={()=> handleDelete(selectedUser)}  size="small">Yes,Delete</Button>
      </CardActions>
    </Card>
  )
}
