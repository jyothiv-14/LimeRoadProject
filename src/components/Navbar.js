import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaPen, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import LimeRoad from "../assets/Limeroad.jpg"; 
import "../css/navbar.css";



export default function CustomNavbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-2 fixed-top" style={{paddingTop:'0px',margin:'0px 0px 0px 0px'}}>
      <Container>
        
        <Navbar.Brand href="/">
          <img src={LimeRoad} alt="LimeRoad Logo" width="150" height="auto" />
        </Navbar.Brand>


        
        <Nav className="mx-auto fw-semibold text-uppercase">
          
          <Nav.Link href="/women" className="text-dark mx-2">
          <NavDropdown
            title="Women"
            className="text-dark mx-2"
            show={showDropdown}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div className="dropdown-mega-menu p-3">
              <Container className="d-flex" >
                
                <div className="me-4">
                  <h6 className="fw-bold">Ethnic Wear</h6>
                  <NavDropdown.Item href="#">Kurta Kurtis</NavDropdown.Item>
                  <NavDropdown.Item href="#">Sarees</NavDropdown.Item>
                  <NavDropdown.Item href="#">Lehengas</NavDropdown.Item>
                  <NavDropdown.Item href="#">Ethnic Dresses</NavDropdown.Item>
                  <h6 className="fw-bold mt-3">Winter Wear</h6>
                  <NavDropdown.Item href="#">Accessories Combo</NavDropdown.Item>
                </div>

                
                <div className="me-4">
                  <h6 className="fw-bold">Western Wear</h6>
                  <NavDropdown.Item href="#">Dresses</NavDropdown.Item>
                  <NavDropdown.Item href="#">T-Shirts</NavDropdown.Item>
                  <NavDropdown.Item href="#">Jeans & Jeggings</NavDropdown.Item>
                  <NavDropdown.Item href="#">Jackets & Coats</NavDropdown.Item>
                </div>

                
                <div className="me-4">
                  <h6 className="fw-bold">Sports & Activewear</h6>
                  <NavDropdown.Item href="#">Swim Wear</NavDropdown.Item>
                  <NavDropdown.Item href="#">Track Pants</NavDropdown.Item>
                  <h6 className="fw-bold mt-3">Lingerie</h6>
                  <NavDropdown.Item href="#">Bra</NavDropdown.Item>
                  <NavDropdown.Item href="#">Panties</NavDropdown.Item>
                </div>

                
                <div className="me-4">
                  <h6 className="fw-bold">Jewellery</h6>
                  <NavDropdown.Item href="#">Earrings</NavDropdown.Item>
                  <NavDropdown.Item href="#">Rings</NavDropdown.Item>
                  <h6 className="fw-bold mt-3">Footwear</h6>
                  <NavDropdown.Item href="#">Flats</NavDropdown.Item>
                  <NavDropdown.Item href="#">Heels</NavDropdown.Item>
                </div>

                
                <div className="me-4">
                  <h6 className="fw-bold">Brands</h6>
                  <NavDropdown.Item href="#">Aurelia</NavDropdown.Item>
                  <NavDropdown.Item href="#">Baggit</NavDropdown.Item>
                  <NavDropdown.Item href="#">Globus</NavDropdown.Item>
                </div>
              </Container>
            </div>
          </NavDropdown>
          </Nav.Link>

          
          <Nav.Link href="/men" className="text-dark mx-2">Men</Nav.Link>
          <Nav.Link href="/kids" className="text-dark mx-2">Kids</Nav.Link>
          <Nav.Link href="/home" className="text-dark mx-2">Home</Nav.Link>
          <Nav.Link href="#" className="text-danger mx-2 fw-bold">Offers</Nav.Link>
          <Nav.Link href="#" className="text-danger mx-2 fw-bold">Vmart</Nav.Link>
        </Nav>

        
        <Nav className="d-flex align-items-center">
            <Nav.Link href="#" className="text-dark mx-3 d-flex flex-column align-items-center">
              <FaPen size={22} />
              <span className="small">SCRAPBOOK</span>
            </Nav.Link>
            <Nav.Link href="#" className="text-dark mx-3 d-flex flex-column align-items-center">
              <FaSearch size={22} />
              <span className="small">SEARCH</span>
            </Nav.Link>
            <Nav.Link href="#" className="text-dark mx-3 d-flex flex-column align-items-center">
              <FaShoppingCart size={22} />
              <span className="small">CART</span>
            </Nav.Link>
            <Nav.Link href="#" className="text-dark mx-3 d-flex flex-column align-items-center">
              <FaUser size={22} />
              <span className="small">PROFILE</span>
            </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
