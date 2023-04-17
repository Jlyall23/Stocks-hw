import stocks from './pages/StockData';
import Dashboard from './components/Dashboard';
import Main from './components/Main';
import { withRouter } from 'react-router';


function App(props) {
  return (
    <div>
      <Dashboard />
      <Main StockData={stocks} />
    </div>
  );
}

export default App;
