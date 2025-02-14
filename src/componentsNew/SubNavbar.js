import React, { useState } from "react";
import "./css/subnav.css";
import images from '../assets/pictures/images'

const categories = [
  { name: "Women", active: true },
  { name: "Men", active: false },
  { name: "Kids", active: false },
];

const subCategories = {
  Women: [
    { name: "MY FEED", img: images.Myfeed },
    { name: "KURTAS", img: images.kurtas },
    { name: "TOPS", img: images.tops },
    { name: "DRESSES", img: images.dresses },
    { name: "SAREES", img: images.sarees },
    { name: "SUITS", img: images.suits },
    { name: "ETHNIC SETS", img: images.ethnicSets },
    { name: "BOTTOMS", img: images.bottoms },
    { name: "BAGS", img: images.bags },
    { name: "FOOTWEAR", img: images.footwear },
    { name: "ADD ONS", img: images.addon },
    { name: "HOME", img: images.home },
    { name: "WINTER", img: images.winter },
    
  ],
  Men: [
    { name: "MY FEED", img: images.Myfeed },
    { name: "SHIRTS", img: images.menshirts },
    { name: "T-SHIRTS", img: images.mentshirt },
    { name: "JEANS", img: images.mentjeans },
    { name: "TROUSERS", img: images.mentrousers },
    { name: "ETHNIC SETS", img: images.menethnic },
    { name: "FOOTWEAR", img: images.menfootwear },
    { name: "HOME", img: images.home },
    { name: "ACCESSORIES", img: images.mentaccessories },
    { name: "WINTER", img: images.menwinter },
  ],
  Kids: [
    { name: "MY FEED", img: images.Myfeed },
    { name: "FROCKS", img: images.kidsfrocks },
    { name: "T-SHIRTS", img: images.kidstshirts },
    { name: "JEANS", img: images.kidsjeans },
    { name: "SHORTS", img: images.kidsshorts },
    { name: "DRESSES", img: images.kidsdresses },
    { name: "SHOES", img: images.kidsshoes },
    { name: "BAGS", img: images.kidsbags },
    { name: "ACCESSORIES", img: images.kidsaccessories },
  ],
};

export default function SubNavbar() {
  const [selectedCategory, setSelectedCategory] = useState("Women");

  return (
    <div className="container">
      <div className="sub-navbar">
        <div className="category-tabs">
          {categories.map((category) => (
            <span
              key={category.name}
              className={`category-tab ${selectedCategory === category.name ? "active" : ""}`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </span>
          ))}
        </div>

        <div className="sub-categories">
          {subCategories[selectedCategory].map((category, index) => (
            <div key={index} className="sub-category">
              <img src={category.img} alt={category.name} className="category-img" />
              <p className="category-label">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}







// import React, { useState } from "react";
// import "./subnav.css";
// import images from '../assets/images'

// const categories = [
//   { name: "Women", active: true },
//   { name: "Men", active: false },
//   { name: "Kids", active: false },
// ];

// const subCategories = [
//   { name: "MY FEED", img: images.Myfeed },
//   { name: "KURTAS", img: images.kurtas },
//   { name: "TOPS", img: images.tops},
//   { name: "DRESSES", img: images.dresses },
//   { name: "SAREES", img: images.sarees },
//   { name: "SUITS", img: images.suits },
//   { name: "ETHNIC SETS", img: images.ethnicSets },
//   { name: "BOTTOMS", img: images.bottoms},
//   { name: "BAGS", img: images.bags},
//   { name: "FOOTWEAR", img: images.footwear },
//   { name: "ADD ONS", img: images.addon },
//   { name: "HOME", img: images.home },
//   { name: "WINTER", img: images.winter },
//   { name: "LINGERIE", img: images.tops },
// ];

// export default function SubNavbar() {
//   const [selectedCategory, setSelectedCategory] = useState("Women");

//   return (

//     <div className="container">

//                 <div className="sub-navbar">
//                 <div className="category-tabs">
//                     {categories.map((category) => (
//                     <span
//                         key={category.name}
//                         className={`category-tab ${selectedCategory === category.name ? "active" : ""}`}
//                         onClick={() => setSelectedCategory(category.name)}
//                     >
//                         {category.name}
//                     </span>
//                     ))}
//                 </div>
                

//                 <div className="sub-categories">
//                             {subCategories.map((category, index) => (
//                             <div key={index} className="sub-category">
//                                 <img src={category.img} alt={category.name} className="category-img" />
//                                 <p className="category-label">{category.name}</p>
//                             </div>
//                             ))}
//                 </div>
//                 </div>
//     </div>
//   );
// }


















// import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import "./subnav.css"; // Import CSS for styling
// import images from  '../assets/images'

// const categories = [
//   { name: "MY FEED", img: images.Myfeed },
//   { name: "KURTAS", img: images.kurtas },
//   { name: "TOPS", img:  images.tops},
//   { name: "DRESSES", img: images.dresses },
//   { name: "SAREES", img: images.sarees },
//   { name: "SUITS", img: images.suits},
//   { name: "ETHNIC SETS", img: images.ethnicSets },
//   { name: "BOTTOMS", img: images.bottoms },
//   { name: "BAGS", img: images.bags },
//   { name: "FOOTWEAR", img: images.footwear },
//   { name: "ADD ONS", img: images.addon },
//   { name: "HOME", img: images.home},
//   { name: "WINTER", img: images.winter },
// ];

// const SubNavbar = () => {
//   return (
//     <>
//     <div className="container">

              
//               <Navbar bg="white" expand="lg" className="shadow-sm py-2">
//                 <Container>
//                   <Nav className="me-auto"> 
//                     <Nav.Link href="/" className="nav-link ">WOMEN</Nav.Link>
//                     <Nav.Link href="/" className="nav-link">MEN</Nav.Link>
//                     <Nav.Link href="/" className="nav-link">KIDS</Nav.Link>
                    
//                   </Nav>
//                 </Container>
//               </Navbar>

              
//               <div className="category-scroll">
//                 {categories.map((category, index) => (
//                   <div key={index} className="category-item">
//                     <img src={category.img} alt={category.name} className="category-img" />
//                     <p className="category-label">{category.name}</p>
//                   </div>
//                 ))}
//               </div>
//     </div>
//     </>
//   );
// };

// export default SubNavbar;




// import React, { useState } from "react";
// import images from "../assets/images";
// //import "./subnav.css"; // Import CSS for styling

// const categories = {
//   Women: [
//     { name: "MY FEED", img: images.Myfeed },
//     { name: "KURTAS", img: images.kurtas },
//     { name: "TOPS", img: images.tops },
//     { name: "DRESSES", img: images.dresses },
//     { name: "SAREES", img: images.sarees },
//     { name: "SUITS", img: images.suits },
//   ],
//   Men: [
//     { name: "SHIRTS", img: images.shirts },
//     { name: "T-SHIRTS", img: images.tshirts },
//     { name: "JEANS", img: images.jeans },
//     { name: "JACKETS", img: images.jackets },
//   ],
//   Kids: [
//     { name: "FROCKS", img: images.frocks },
//     { name: "SHORTS", img: images.shorts },
//     { name: "SCHOOL WEAR", img: images.schoolwear },
//   ],
// };

// const SubNavbar = () => {
//   const [selectedCategory, setSelectedCategory] = useState("Women");

//   return (
//     <div className="container">
//       <nav className="navbar">
//         <ul className="nav-links">
//           {Object.keys(categories).map((category) => (
//             <li
//               key={category}
//               className={`nav-item ${selectedCategory === category ? "active" : ""}`}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category.toUpperCase()}
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <div className="category-scroll">
//         {categories[selectedCategory].map((category, index) => (
//           <div key={index} className="category-item">
//             <img src={category.img} alt={category.name} className="category-img" />
//             <p className="category-label">{category.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SubNavbar;
