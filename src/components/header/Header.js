import React from "react";

const Header = () => {
  return (
    <div className="h-14 bg-header-main flex justify-between px-10 items-center sticky top-0">
      <div>LOGO</div>
      <div className="flex space-x-4">
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
