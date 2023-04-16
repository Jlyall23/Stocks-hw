import React from 'react'

const Stock = props => {
  const stock = props.StockData.filter( d => d.symbol === props.match.params.symbol)[0]
  return (
    <div>
      <h1>Stonks</h1>
      <h3>Name: {stock.name}</h3>
      <h3 className="price">Price: {stock.lastPrice}</h3>
    </div>
  )
}


export default Stock