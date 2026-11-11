import logo from '../assets/Images/bakerylogo.png'
import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart"
import "./Navbar.css";

const Navbar = () => {
    const [showCart, setShowCart] = useState(false)
    const [navDrawer, setNavDrawer] = useState(false)

    const toggleCart = () => {
    setShowCart(!showCart)
    }

    const toggleNavDrawer = ()=> {
        setNavDrawer(!navDrawer)

    }

    return(
        <header className='navbar'>
            <div className='logo'>
                <img src={logo} alt="Bakery Logo" />
            </div>
            <nav>
                <ul className={`nav-links ${navDrawer ? "active" : ""}`}>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/" >Menu</Link></li>
                    <li><Link to="/" >Contact Us</Link></li>
                    <li><Link to="/" >Find Store</Link></li>
                </ul>
            </nav>
              {/* Icons Section */}
              <div className="icons">
                  
                    <i className="fas fa-search" name="Search"></i>
                    <i className="fas fa-shopping-cart" name="Cart" onClick={toggleCart}></i>
                    <Cart showCart={showCart} toggleCart={toggleCart} />
                    <Link to="/signup"><i className="fas fa-user" name="User"></i></Link>
                </div>
                {/*Mobile Navigation */}
                <div>
                    <button className="hamburger"
                        onClick={toggleNavDrawer}
                    >
                    <i className="fas fa-bars"></i>
                    </button>
                    {navDrawer && (
                    <div
                        className="overlay"
                        onClick={() => setNavDrawer(false)}
                    />
                    )}
                </div>


        </header>
    )
}
export default Navbar;
