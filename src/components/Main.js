import React from 'react';
import { Route} from 'react-router-dom';
import { Routes} from 'react-router-dom'
import About from '../pages/About';
import Stock from '../pages/Stock';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';

function Main(props) {
  return (
    <main id='MAIN'>
     
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/stock/:symbol" element={<Stock/>}/>  
              
      </Routes>
    </main>
  );
}

export default Main;
