import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function first() {
  return (
    <div style={{
        backgroundImage: `url('https://media.istockphoto.com/id/483277718/photo/multiracial-group-of-children-in-preschool-hallway.jpg?s=612x612&w=0&k=20&c=_rV5MiszExeidEd4HyGqrgjaDctD2ogh3bI5yCC0jPg=')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}>
    <div  style={{ textAlign: 'center', padding: '100px' }}>
    <Typography variant="h3" gutterBottom color="white">
       Student Grade Book!!
      </Typography>
      <br/><br/>
      <Link to={'/second'}>
    <Button variant="contained"style={{ width: '400px',textAlign:'center' }}>Click Here</Button>
    </Link>
    </div>
    </div>
  )
}
