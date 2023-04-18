import stocks from './pages/Dashboard';
import Nav from './components/Nav';
import Main from './components/Main';



function App(props) {
  return (
    <div>
      <Nav />
      <Main StockData={stocks} />
    </div>
  );
}

export default App;
