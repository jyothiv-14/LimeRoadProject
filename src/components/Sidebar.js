import React from "react";
import images from "../assets/images";

const Sidebar = () => {
  const trends = [
    "Fall in Love",
    "Fresh off the Loom",
    "Must-Have",
    "Fresh and Flowy!",
    "Colour of the Season",
    "New BFF Alert",
    "Perfect for Winters",
    "Newbie Alert!",
    "Hot off the Press",
  ];

  return (
    <div className="w-64 h-screen bg-gray-100 p-4 fixed left-0 top-0 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Trending on Limeroad</h2>
      <ul>
        {trends.map((item, index) => (
          <li key={index} className="flex items-center space-x-3 py-2">
            <img
              src={images.kurtas}
              alt="profile"
              className="w-8 h-8 rounded-full"
              height={'60px'}
              width={'60px'}
              style={{borderRadius:'50%'}}
            />
            <span className="text-sm font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
