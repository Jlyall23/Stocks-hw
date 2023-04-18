import { Link } from "react-router-dom";

export default function Dashboard (props){
    return (
        <div className="nav">
          <div className="navItem"><Link to="/"><span className='navWords'>Home</span></Link></div>
          <div className="navItem"><Link to="/About"><span className='navWords'>About</span></Link></div>
          <div className="navItem"><Link to="/Stocks"><span className='navWords'>Stocks</span></Link></div>
          
       </div>
      );
    }
    
