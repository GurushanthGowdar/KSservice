import React, { useState } from "react";

import logo from "../../Image/Logo/Velu Mobile & Watches png 1.png";

const Header = () => {

  const [showList, setShowList] = useState(false);
  return (
    <div className="h-14 bg-header-main flex justify-between px-10 items-center sticky z-50 top-0">
      <div className="mt-4 mb-4">
        <img src={logo}></img>
      </div>
      <div className="flex space-x-4 gap-5 xs:hidden cursor-pointer">
        <div className="flex-1">Home</div>
        <div className="flex-1">About</div>
        <div className="flex-1">Services</div>
        <div className="flex-1">Career</div>
        <div className="flex-1">Training</div>
        <div className="flex-1">Contact</div>
      </div>
      <div className="flex flex-col h-full justify-center">
        <button className="hidden xs:block " onClick={() => setShowList(!showList)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

        </button>

        {showList && <div data-aos="fade-right"
          // data-aos-easing="linear"
          data-aos-duration="600" className="absolute top-12 left-0 bg-header-main w-full border-b-2">
          <ul class="list-none mt-5  p-5 text-lg  font-semibold space-y-4 cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Career</li>
            <li>Training</li>
            <li>Contact</li>

          </ul>
        </div>}
      </div>
    </div>
  );
};

export default Header;
