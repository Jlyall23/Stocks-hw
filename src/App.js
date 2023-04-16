import stocks from './pages/Stock-Data';
import Dashboard from './components/Dashboard';
import Main from './components/Main';
import { withRouter } from 'react-router';


function App(props) {
  return (
    <div>
      <Dashboard />
      <Main stocks={StockData} />
    </div>
  );
}

export default App;
