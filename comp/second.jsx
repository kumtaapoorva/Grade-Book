
import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function second() {
    let navigate = useNavigate;
    
// Retrieve existing data from localStorage and calculate the highest u_id
const storedData = localStorage.getItem("Stud");
let initialValue;
let highestUId = 0;

if (storedData) {
  initialValue = JSON.parse(storedData);
  highestUId = initialValue.reduce((maxUId, item) => Math.max(maxUId, item.u_id), 0);
} else {
  initialValue = [];
}

const [value, setValue] = useState(initialValue);
const [user, setUser] = useState({});

  

    const handleSubmit = async (event) => {
        // event.preventDefault();
        const newUserId = value.length === 0 ? 1 : value[value.length - 1].u_id + 1;
        console.log(newUserId, 'idd');
        const details = {
          u_id: newUserId,
          ...user
        };
        const updateValue = [...value, details];
        setValue(updateValue);
        localStorage.setItem("Stud", JSON.stringify(updateValue));
         await  navigate('/table');
    };


    const [user1, setUser1] = useState({});
      const [marks1, setMarks1] = useState('');
      const [marks2, setMarks2] = useState('');
      const [marks3, setMarks3] = useState('');
      const [marks4, setMarks4] = useState('');
      const [tot, setTot] = useState('');
      const [average, setAverage] = useState('');
      const [gradeee, setGradeee] = useState('');

     
        const handleChange = (e) => {
          setUser({
            ...user,
            [e.target.name]: e.target.value
          });
          console.log(user, 'Data');
        const { name, value } = e.target;           // Update the respective state based on the input field name
        switch (name) {
          case 'marks1':
            setMarks1(value);
            break;
          case 'marks2':
            setMarks2(value);
            break;
          case 'marks3':
            setMarks3(value);
            break;
          case 'marks4':
            setMarks4(value);
            break;
          default:
            break;
        }
      };

      const handleTotalClick = () => {
        const total = Number(marks1) + Number(marks2) + Number(marks3) + Number(marks4);
        setTot(total);
        console.log('Total:',total);
      };
     
      const handleAverageClick = () => {
        if (tot !== undefined) {
          const avg = Number(tot / 4);
          setAverage(avg);
          console.log('Average:',avg);
        }
      };
    
      const handleGradeClick = () => {
        if (average !== undefined) {
          let gradeValue;
          if (average >= 70) {
            gradeValue = 'A';
          } else if (average >= 50) {
            gradeValue = 'B';
          } else if (average > 35) {
            gradeValue = 'C';
          } else {
            gradeValue = 'F';
          }
          setGradeee(gradeValue);
          console.log('Grade:',gradeValue);
        }
      };
    
      const submit = () => {
        const newUserId = highestUId + 1;
        // Calculate total, average, and grade using the existing values
        const total = Number(marks1) + Number(marks2) + Number(marks3) + Number(marks4);
        const avg = total / 4;
    
        let gradeValue;
        if (avg >= 70) {
          gradeValue = 'A';
        } else if (avg >= 50) {
          gradeValue = 'B';
        } else if (avg > 35) {
          gradeValue = 'C';
        } else {
          gradeValue = 'F';
        }
    
        const newUserData = {
            u_id: newUserId,
          ...user,
          marks1: Number(marks1),
          marks2: Number(marks2),
          marks3: Number(marks3),
          marks4: Number(marks4),
          total: Number(total),
          average: Number(avg),
          grade: gradeValue,
        };
    
        // Combine newUserData with existing data and update state
        const updatedData = [...value, newUserData];
        setValue(updatedData);
        localStorage.setItem('Stud', JSON.stringify(updatedData));
    
        // Display all data in the browser console
        console.log('All Data:', updatedData);
      };
     

  return (
    <div style={{
      backgroundImage: `url('https://assets.goodereader.com/blog/uploads/images/2023/08/08063902/Global-book-sales.jpg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
    }}>
    <div  style={{ textAlign: 'center',padding:'200px' }} >
      <TableContainer component={Paper}>
      <Table aria-label="result table"><br/><br/>
     <TableRow><TextField name='username' onChange={handleChange} id="outlined-basic" label="Full Name*" variant="outlined" style={{ width: '400px', textAlign:'center' }} /><br/><br /></TableRow>
     <TableRow ><TextField  name='usn' onChange={handleChange} id="outlined-number" label="Roll no*" type="number" style={{ width: '400px' }} /><br /><br /></TableRow>
     {/* <TableRow > <TextField name='dept' onChange={handleChange} id="outlined-basic" label="Department*" variant="outlined" style={{ width: '400px' }} /><br /><br /></TableRow> */}
            <TableRow>
                <TableCell><h2>Subject</h2></TableCell>
                <TableCell><h2>Marks</h2></TableCell>
              </TableRow>
            <TableBody>
              <TableRow>
                <TableCell>Subject 1</TableCell>
                <TextField name='marks1' id="outlined-number" label="Enter Marks" type="number" onChange={handleChange} style={{ width: '300px' }} /><br /><br />
              </TableRow>
              <TableRow>
                <TableCell>Subject 2</TableCell>
                <TextField name='marks2' id="outlined-number" label="Enter Marks" type="number" onChange={handleChange} style={{ width: '300px' }} /><br /><br />
              </TableRow>
              <TableRow>
                <TableCell>Subject 3</TableCell>
                <TextField name='marks3' id="outlined-number" label="Enter Marks" type="number"  onChange={handleChange} style={{ width: '300px' }} /><br /><br />
              </TableRow>
              <TableRow>
                <TableCell>Subject 4</TableCell>
                <TextField name='marks4' id="outlined-number" label="Enter Marks" type="number"  onChange={handleChange} style={{ width: '300px' }} /><br /><br />
              </TableRow>
              <TableRow>
                <TableCell><Button onClick={handleTotalClick} variant="contained" color="success" style={{ textAlign: 'center', width: '100px' }}>Total</Button></TableCell>
                <TableCell className='total' style={{fontSize:20}} >{tot}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Button onClick={handleAverageClick} variant="contained" color="success" style={{ textAlign: 'center', width: '100px' }}>Average</Button></TableCell>
                <TableCell className='average'style={{fontSize:20}}>{average}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Button onClick={handleGradeClick}   variant="contained" color="success" style={{ textAlign: 'center', width: '100px' }}>Grade</Button></TableCell>
                <TableCell className='grade' style={{ color: gradeee === 'F' ? 'red' : 'inherit',fontSize:20 }}>{gradeee}</TableCell>
                  {/* <TableCell style={{ color: gradeee === 'F' ? 'red' : 'inherit' }}>{gradeee}</TableCell> */}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <Link to ={'/table'}>
        <Button onClick={submit} variant="contained" color="primary" style={{ textAlign: 'center', width: '600px' }}>View</Button><br /><br />
    </Link>
    
    </div>
    </div>
  )
}