  import "./Cards.css"
import {Link} from "react-router-dom"
  const Nav =()=>{
    return(
        <div className="NavbarDinesh" style={{fontSize:"15px"}}>
           <Link to="/Feed">Feed</Link>
           <Link to="/people">People</Link>
           <Link to="/new">New</Link>
           <Link to="/polls">Polls</Link>
           <Link to="/videos">Videos</Link>
           <Link to="/cricket">Cricket</Link>
           <Link to="/following">Following</Link>
           <Link to="/popular">Popular</Link>
        </div>
    )
  }
  export default Nav;