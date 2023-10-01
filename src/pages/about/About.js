import React from "react";

import img1 from "../../Image/about/fire and safety association 1.png";
import img2 from "../../Image/about/image 1.png";
import img3 from "../../Image/about/iso 1.png";
import img4 from "../../Image/about/msme 1.png";
const About = () => {
  const imgSet = [
    {
      id: 1,
      src: img1,
    },
    {
      id: 2,
      src: img2,
    },
    {
      id: 3,
      src: img3,
    },
    {
      id: 4,
      src: img4,
    },
  ];
  return (
    <div className="">
      <div className=" flex  justif-center flex-col items-center mt-2.5 w-full space-y-11">
        <div className="w-3/4 flex flex-col items-center">
          <p className=" text-3xl font-bold text-themeColor-secondary">
            Protecting Your Peace,
            <span className="text-themeColor-main"> Securing Your Trust</span>
          </p>
          <p className="text-sm w-3/4 text-center mt-3">
            Protecting what matters most is our passion, and we look forward to
            serving you with the highest level of professionalism and integrity
            at Karthik Security Services.
          </p>
        </div>
        <div className="flex mt-10 space-x-11 ">
          {imgSet.map((item) => {
            return (
              <div key={item.id} className="">
                <img
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  src={item.src}
                  alt="hello"
                />
              </div>
            );
          })}
        </div>
        <button className="bg-themeColor-main text-white hover:bg-white hover:text-themeColor-main hover:border font-bold py-2 px-4 rounded-xl mt-10">
          Read More
        </button>
      </div>
    </div>
  );
};

export default About;
