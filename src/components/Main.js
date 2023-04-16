import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import About from '../pages/About';
import Stock from '../pages/Stocks';
import stocks from '../pages/Stock-Data';

function Main(props) {
  return (
    <main>
       <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/stocks/:symbol"
            render={props => <Stock stockData={stockData} {...props} />}
          /> 
          <Route
            path="/stocks"
            render={props => <Dashboard {...props} StockData={stockData} />}
          />
      </Switch>
    </main>
  );
}

export default Main;
