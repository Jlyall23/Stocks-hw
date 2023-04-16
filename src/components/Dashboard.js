import { Link } from "react-router-dom";

export default function Dashboard (props){
    return (
        <div className="nav">
          <div className="nav-item"><span className="nav-logo"><Link to="/">Home</Link></span></div>
          <div className="nav-item"><Link to="/About">About</Link></div>
          <div className="nav-item"><Link to="/Stocks">Stocks</Link></div>
       </div>
      );
    }
    
