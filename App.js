import logo from './logo.svg';
import './App.css';
import First from './comp/first';
import Second from './comp/second';
import Table from './comp/table';
import Update from './comp/Update';
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<First/>}></Route>
        <Route exact path='/second' element={<Second/>}></Route>
        <Route exact path='/table' element={<Table/>}></Route>
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
