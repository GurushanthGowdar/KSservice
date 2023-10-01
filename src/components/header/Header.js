import React from "react";

import logo from "../../Image/Logo/Velu Mobile & Watches png 1.png";

const Header = () => {
  return (
    <div className="h-14 bg-header-main flex justify-between px-10 items-center sticky z-50 top-0">
      <div className="mt-4 mb-4">
        <img src={logo}></img>
      </div>
      <div className="flex space-x-4 gap-5">
        <div className="flex-1">Home</div>
        <div className="flex-1">About</div>
        <div className="flex-1">Services</div>
        <div className="flex-1">Career</div>
        <div className="flex-1">Training</div>
        <div className="flex-1">Contact</div>
      </div>
    </div>
  );
};

export default Header;
