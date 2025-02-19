
import React, { useState } from "react";
import { FaPen, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import LimeRoad from "../assets/pictures/Limeroad.jpg";
import "./css/Nav.css";
import { Link } from "react-router-dom";

export default function CustomNavbar() {
  const [dropdown, setDropdown] = useState(null);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const categories = [
    {
      name: "Women",
      link: "/women",
      sections: [
        { title: "Ethnic Wear", items: ["Kurta Kurtis", "Sarees", "Lehengas", "Ethnic Dresses"] },
        { title: "Western Wear", items: ["Dresses", "Tops", "Jeans & Jeggings", "T-Shirts"] },
        { title: "Sports & Activewear", items: ["Swim Wear", "Tights", "Track Pants", "Sports Bra"] },
      ],
    },
    {
      name: "Men",
      link: "/men",
      sections: [
        { title: "Top Wear", items: ["Shirts", "T-Shirts", "Jackets", "Sweatshirts"] },
        { title: "Bottom Wear", items: ["Jeans", "Trousers", "Shorts", "Track Pants"] },
      ],
    },
    {
      name: "Kids",
      link: "/kids",
      sections: [
        { title: "Boys Clothing", items: ["T-Shirts", "Jeans", "Shorts"] },
        { title: "Girls Clothing", items: ["Dresses", "Skirts", "Tops"] },
      ],
    },
    {
      name: "Home",
      link: "/homeproducts",
      sections: [
        { title: "Decor", items: ["Wall Art", "Clocks", "Lamps"] },
        { title: "Furniture", items: ["Sofas", "Tables", "Chairs"] },
      ],
    },
  ];

  return (
    <header className="navbar">
      <div className="container">
        <Link to="/">
          <img src={LimeRoad} alt="LimeRoad Logo" className="logo" />
        </Link>

        <nav className="nav-links">
          {categories.map((category) => (
            <div
              key={category.name}
              className="nav-item dropdown"
              onMouseEnter={() => setDropdown(category.name)}
              onMouseLeave={() => setDropdown(null)}
            >
              <Link to={category.link} className="nav-link">{category.name}</Link>
              {dropdown === category.name && (
                <div className="dropdown-menu multi-column">
                  {category.sections.map((section) => (
                    <div key={section.title} className="dropdown-column">
                      <div className="dropdown-header">{section.title}</div>
                      {section.items.map((item) => (
                        <Link key={item} href="#" className="dropdown-item">{item}</Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="#" className="nav-link highlight">Offers</Link>
          <Link href="#" className="nav-link highlight">Vmart</Link>
        </nav>

        <div className="icons">
          <Link href="#" className="icon-item">
            <FaPen size={22} />
            <span className="icon-text">SCRAPBOOK</span>
          </Link>
          <Link href="#" className="icon-item">
            <FaSearch size={22} />
            <span className="icon-text">SEARCH</span>
          </Link>
          <Link to="/cart" className="icon-item">
            <FaShoppingCart size={22} />
            <span className="icon-text">CART</span>
          </Link>
          <div 
            className="profile-container"
            onMouseEnter={() => setProfileDropdown(true)}
            onMouseLeave={() => setProfileDropdown(false)}
          >
            <div className="icon-item profile-icon">
              <FaUser size={22} />
              <span className="icon-text">PROFILE</span>
            </div>

            {profileDropdown && (
              <div className="dropdown-menu profile-menu">
                <div className="profile-header">
                  <strong>WELCOME!</strong>
                  <p>To view account details</p>
                  <Link to="/login" className="login-button">LOGIN</Link>

                  <Link to="/signup" className="dropdown-item">Sign Up</Link>


                  <div className="dropdown-divider"></div>
                <Link to="#" className="dropdown-item">ORDERS</Link>
                <Link to="#" className="dropdown-item">RETURN REPLACEMENT</Link>
                <Link to="#" className="dropdown-item">LR CREDITS</Link>
                <div className="dropdown-divider"></div>
                <Link to="#" className="dropdown-item">CUSTOMER SUPPORT</Link>
                <Link to="#" className="dropdown-item">FAQ & HELP</Link>
                <div className="dropdown-divider"></div>
                <button className="language-button">हिन्दी</button>
                </div>
                
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}