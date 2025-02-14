import React, { useState } from "react";
import { FaPen, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import LimeRoad from "../assets/pictures/Limeroad.jpg";
import "./css/Nav.css";
import { Link } from "react-router-dom";

export default function CustomNavbar() {
  const [dropdown, setDropdown] = useState(null);

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
      link: "/home",
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
          <Link href="#" className="icon-item">
            <FaShoppingCart size={22} />
            <span className="icon-text">CART</span>
          </Link>
          <Link href="#" className="icon-item">
            <FaUser size={22} />
            <span className="icon-text">PROFILE</span>
          </Link>
        </div>
      </div>
    </header>
  );
}





























// import React, { useState } from "react";
// import { FaPen, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
// import LimeRoad from "../assets/Limeroad.jpg";
// import { Link } from "react-router-dom";
// import "./Nav.css";

// export default function CustomNavbar() {
//   const [showDropdown, setShowDropdown] = useState(false);

//   return (
//     <header className="navbar">
//       <div className="container">
        
//         <Link href="/">
//           <img src={LimeRoad} alt="LimeRoad Logo" className="logo" />
//         </Link>
        
//         <nav className="nav-links">
//           <div
//             className="nav-item dropdown"
//             onMouseEnter={() => setShowDropdown(true)}
//             onMouseLeave={() => setShowDropdown(false)}
//           >
//             <Link href="/women" className="nav-link">Women</Link>
//             {showDropdown && (
//               <div className="dropdown-menu">

//                 <div className="me-4">
//                     <div className="dropdown-header">Ethnic Wear</div>
//                     <Link href="#" className="dropdown-item">Kurta Kurtis</Link>
//                     <Link href="#" className="dropdown-item">Sarees</Link>
//                     <Link href="#" className="dropdown-item">Lehengas</Link>
//                     <Link href="#" className="dropdown-item">Ethnic Dresses</Link>
//                     <h6 className="fw-bold mt-3">Winter Wear</h6>
//                 </div>

                

//                 <div className="me-4">
//                   <h6 className="fw-bold">Western Wear</h6>
//                   <Link href="#">Dresses</Link>
//                   <Link href="#">T-Shirts</Link>
//                   <Link href="#">Jeans & Jeggings</Link>
//                   <Link href="#">Jackets & Coats</Link>
//                 </div>

//                 <div className="me-4">
//                   <h6 className="fw-bold">Sports & Activewear</h6>
//                   <Link href="#">Swim Wear</Link>
//                   <Link href="#">Track Pants</Link>
//                   <h6 className="fw-bold mt-3">Lingerie</h6>
//                   <Link href="#">Bra</Link>
//                   <Link href="#">Panties</Link>
//                 </div>

                
//                 <div className="me-4">
//                   <h6 className="fw-bold">Jewellery</h6>
//                   <Link href="#">Earrings</Link>
//                   <Link href="#">Rings</Link>
//                   <h6 className="fw-bold mt-3">Footwear</h6>
//                   <Link href="#">Flats</Link>
//                   <Link href="#">Heels</Link>
//                 </div>

                
//                 <div className="me-4">
//                   <h6 className="fw-bold">Brands</h6>
//                   <Link href="#">Aurelia</Link>
//                   <Link href="#">Baggit</Link>
//                   <Link href="#">Globus</Link>
//                 </div>

                
//               </div>
//             )}
//           </div>
//           <Link href="/men" className="nav-link">Men</Link>
//           <Link href="/kids" className="nav-link">Kids</Link>
//           <Link href="/home" className="nav-link">Home</Link>
//           <Link href="#" className="nav-link highlight">Offers</Link>
//           <Link href="#" className="nav-link highlight">Vmart</Link>
//         </nav>
        
//         <div className="icons">
//           <Link href="#" className="icon-item">
//             <FaPen size={22} />
//             <span className="icon-text">SCRAPBOOK</span>
//           </Link>
//           <Link href="#" className="icon-item">
//             <FaSearch size={22} />
//             <span className="icon-text">SEARCH</span>
//           </Link>
//           <Link href="#" className="icon-item">
//             <FaShoppingCart size={22} />
//             <span className="icon-text">CART</span>
//           </Link>
//           <Link href="#" className="icon-item">
//             <FaUser size={22} />
//             <span className="icon-text">PROFILE</span>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }
