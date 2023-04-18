import React from 'react';
import { Route} from 'react-router-dom';
import { Routes} from 'react-router-dom'
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import About from '../pages/About';
import Stock from '../pages/Stocks';
import stocks from '../pages/StockData';
import Home from '../pages/Home';

function Main(props) {
  return (
    <main>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/stocks" element={<Stock/>}
          render={props => <Dashboard {...props} StockData={stocks} />}
          />
      
            { <Route
              path="/stocks/:symbol"
              render={props => <Stock Stocks={stocks} {...props} />}
               />  }
      </Routes>
    </main>
  );
}

export default Main;
