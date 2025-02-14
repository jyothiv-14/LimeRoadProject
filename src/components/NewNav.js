import React from "react";
import "./Navbar.css";
import LimeRoad from "../assets/Limeroad.jpg"; 
import { BsFillPencilFill } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

const NavbarMain = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        <img width={129} src={LimeRoad} alt="logo" />
        </Link>
        <nav className="navbar-menu">
          <ul>
            <li><Link to="/women">WOMEN</Link></li>
            <li><Link to="/men">MEN</Link></li>
            <li><Link to="/kids">KIDS</Link></li>
            <li><Link to="/home">HOME</Link></li>
            <li className="highlight"><Link to="/offers">OFFERS</Link></li>
            <li className="highlight"><Link to="/vmart">VMART</Link></li>
          </ul>
        </nav>
        <div className="navbar-icons">
          <span className="icon"><BsFillPencilFill />ScrapBook</span>
          <span className="icon"><AiOutlineSearch />Search</span>
          <span className="icon"><HiShoppingCart />Cart</span>
          <span className="icon"><AiOutlineUser />Profile</span>
        </div>
      </div>
    </header>
  );
};

export default NavbarMain;

































// import React from "react";
// import "./Navbar.css";
// import {  Nav } from "react-bootstrap";
// import { FaPen, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

// const Navbar = () => {
//   return (<>
//             <nav className="navbar">
//             <div className="logo">LimeRoad</div>
//             <ul className="nav-links">
//                 <li>WOMEN</li>
//                 <li>MEN</li>
//                 <li>KIDS</li>
//                 <li>HOME</li>
//                 <li className="offers">OFFERS</li>
//                 <li className="vmart">VMART</li>
//             </ul>
//             <div className="icons">
//             <Nav className="d-flex align-items-center">
//             <Nav.Link href="#" className="text-dark mx-3 d-flex flex-column align-items-center">
//               <FaPen size={22} />
//               <span className="small">SCRAPBOOK</span>
//             </Nav.Link>
//             <Nav.Link href="#" className="text-dark mx-3 d-flex flex-column align-items-center">
//               <FaSearch size={22} />
//               <span className="small">SEARCH</span>
//             </Nav.Link>
//             <Nav.Link href="#" className="text-dark mx-3 d-flex flex-column align-items-center">
//               <FaShoppingCart size={22} />
//               <span className="small">CART</span>
//             </Nav.Link>
//             <Nav.Link href="#" className="text-dark mx-3 d-flex flex-column align-items-center">
//               <FaUser size={22} />
//               <span className="small">PROFILE</span>
//             </Nav.Link>
//         </Nav>
//             </div>
//             </nav>
            
//         </>
//   );
// };

// export default Navbar;