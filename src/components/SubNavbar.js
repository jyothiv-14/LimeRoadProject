import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../css/subnav.css"; // Import CSS for styling
import images from  '../assets/images'

const categories = [
  { name: "MY FEED", img: images.Myfeed },
  { name: "KURTAS", img: images.kurtas },
  { name: "TOPS", img:  images.tops},
  { name: "DRESSES", img: images.dresses },
  { name: "SAREES", img: images.sarees },
  { name: "SUITS", img: images.suits},
  { name: "ETHNIC SETS", img: images.ethnicSets },
  { name: "BOTTOMS", img: images.bottoms },
  { name: "BAGS", img: images.bags },
  { name: "FOOTWEAR", img: images.footwear },
  { name: "ADD ONS", img: images.addon },
  { name: "HOME", img: images.home},
  { name: "WINTER", img: images.winter },
];

const SubNavbar = () => {
  return (
    <>
    <Container>

              
              <Navbar bg="white" expand="lg" className="shadow-sm py-2">
                <Container>
                  <Nav className="me-auto"> 
                    <Nav.Link href="/" className="nav-link ">WOMEN</Nav.Link>
                    <Nav.Link href="/" className="nav-link">MEN</Nav.Link>
                    <Nav.Link href="/" className="nav-link">KIDS</Nav.Link>
                    
                  </Nav>
                </Container>
              </Navbar>

              
              <div className="category-scroll">
                {categories.map((category, index) => (
                  <div key={index} className="category-item">
                    <img src={category.img} alt={category.name} className="category-img" />
                    <p className="category-label">{category.name}</p>
                  </div>
                ))}
              </div>
    </Container>
    </>
  );
};

export default SubNavbar;
