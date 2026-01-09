import logo from '../assets/Images/bakerylogo.png'
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    return(
        <header className='navbar'>
            <div className='logo'>
                <img src={logo} alt="Bakery Logo" />
            </div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/" >Menu</Link></li>
                    <li><Link to="/" >Contact Us</Link></li>
                    <li><Link to="/" >Find Store</Link></li>
                </ul>
            </nav>
              {/* Icons Section */}
              <div className="icons">
                  
                    <i className="fas fa-search" title="Search"></i>
                    <i className="fas fa-shopping-cart" title="Cart"></i>
                    <Link to="/signup"><i className="fas fa-user" title="User"></i></Link>
                </div>



        </header>
    )
}
export default Navbar;
