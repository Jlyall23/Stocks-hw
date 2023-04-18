import { Link } from "react-router-dom";

export default function Nav (props){
    return (
        <div className="nav">
          <div className="navItem"><Link to="/"><span className='navWords'>Home</span></Link></div>
          <div className="navItem"><Link to="/About"><span className='navWords'>About</span></Link></div>
          <div className="navItem"><Link to="/Dashboard"><span className='navWords'>Dashboard</span></Link></div>
          
       </div>
      );
    }
    
