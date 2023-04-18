import { Link } from "react-router-dom";

export default function Dashboard (props){
    return (
        <div className="nav">
          <div><Link to="/">Home</Link></div>
          <div><Link to="/About">About</Link></div>
          <div><Link to="/Stocks">Stocks</Link></div>
          
       </div>
      );
    }
    
