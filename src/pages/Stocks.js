import React from 'react';
import { useParams } from 'react-router-dom';
import stocks  from './StockData';
function Stock() {
  const { symbol } = useParams();
  const stock = stocks.find((stock) => stock.symbol === symbol);
  return (
    <div>
      <h1>{stock.name} ({stock.symbol})</h1>
      <p>Last Price: {stock.lastPrice}</p>
      <p>Change: {stock.change}</p>
      <p>High: {stock.high}</p>
      <p>Low: {stock.low}</p>
      <p>Open: {stock.open}</p>
    </div>
  );
}
export default stocks