import React from 'react'
import { useEffect ,useState} from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Update from './Update';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import Modal from '@mui/material/Modal';
import Deletee from './Deletee';
// import { Link } from '@mui/material';
 import { Link } from 'react-router-dom';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export default function table() {

    const [data, setData]=useState([]);
    const [open, setOpen] = React.useState(false);
const [open2, setOpen2] = React.useState(false);
const [selectedUser,setSelectedUser]=useState('');

    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem("Stud")));
      },[])
      console.log(data,'Data');

      const handleUpdate=(id)=>{
        setOpen(true)
        setSelectedUser(id)
      
        console.log(selectedUser,'selected');
      };
      const handleDelete=(id)=>{
        setOpen2(true)
        setSelectedUser(id)
      }
      
  return (
    <div><TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
        <StyledTableCell >SL.NO</StyledTableCell>
          <StyledTableCell >Name</StyledTableCell>
          <StyledTableCell >Roll no</StyledTableCell>
          {/* <StyledTableCell align="right">Subject1</StyledTableCell>
          <StyledTableCell align="right">Subject2</StyledTableCell>
          <StyledTableCell align="right">Subject3</StyledTableCell>
          <StyledTableCell align="right">Subject4</StyledTableCell> */}
          <StyledTableCell align="right">Total</StyledTableCell>
          <StyledTableCell align="right">Average</StyledTableCell>
          <StyledTableCell align="right">Grade</StyledTableCell>
          <StyledTableCell align="center" colSpan={2}>Action</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((i,index) => (
          <StyledTableRow key={i.index} style={{ backgroundColor: i.grade === 'F' ? 'red' : 'inherit', color: i.grade === 'F' ? 'white' : 'inherit' }} >
            <StyledTableCell component="th" scope="row" style={{ color: i.grade === 'F' ? 'white' : 'inherit' }}>
                  {index + 1} 
                </StyledTableCell>
            <StyledTableCell style={{ color: i.grade === 'F' ? 'white' : 'inherit' }} >{i.username}</StyledTableCell>
            <StyledTableCell style={{ color: i.grade === 'F' ? 'white' : 'inherit' }} >{i.usn}</StyledTableCell>
            {/* <StyledTableCell align="right">{i.marks1}</StyledTableCell>
            <StyledTableCell align="right">{i.marks2}</StyledTableCell>
            <StyledTableCell align="right">{i.marks3}</StyledTableCell>
            <StyledTableCell align="right">{i.marks4}</StyledTableCell> */}
            <StyledTableCell align="right" style={{ color: i.grade === 'F' ? 'white' : 'inherit' }}>{i.total}</StyledTableCell>
            <StyledTableCell align="right" style={{ color: i.grade === 'F' ? 'white' : 'inherit' }}>{i.average}</StyledTableCell>
            <StyledTableCell align="right" style={{ color: i.grade === 'F' ? 'white' : 'inherit' }}>{i.grade}</StyledTableCell>
            <StyledTableCell align="right"><IconButton aria-label="Update" onClick={()=>handleUpdate(i)}><UpdateIcon /></IconButton></StyledTableCell>
              <StyledTableCell align="right"><IconButton aria-label="Delete" onClick={()=>handleDelete(i.u_id)}><DeleteIcon /></IconButton></StyledTableCell>
          </StyledTableRow>
        ))} 
      </TableBody>
    </Table>
  </TableContainer>
    <Modal
    open={open}
    // onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    > 
    <>
    <Update setData={setData} data={data} setOpen={setOpen} selectedUser={selectedUser} />
    </></Modal>

        <Modal
        open={open2}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        > 
        <>
        <Deletee setData={setData} data={data} setOpen2={setOpen2} selectedUser={selectedUser} />
        </></Modal><br/><br/>

        
        <div style={{ textAlign: 'center' }}>
          <Link to = {'/second'}>
        <Button variant="contained" style={{ width: '1190px' }}>INSERT NEW</Button>
        </Link>
      </div>
  </div>
  )
}