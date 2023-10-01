import React from "react";
import img1 from "../../Image/service/entertainment and hospitality 1.png";
import img2 from "../../Image/service/img13.jpeg";
import img3 from "../../Image/service/img3.jpg";
import img4 from "../../Image/service/img4.jpeg";
import img5 from "../../Image/service/img5.jpg";
import img6 from "../../Image/service/img6.jpeg";
import img7 from "../../Image/service/img7.jpeg";
import img8 from "../../Image/service/img8.jpeg";
import img9 from "../../Image/service/img9.jpeg";

import ServiceImageCard from "./ServiceImageCard";

// import imgg from "./img1.png"
const Service = () => {
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
    {
      id: 5,
      src: img5,
    },
    {
      id: 6,
      src: img6,
    },
    {
      id: 7,
      src: img7,
    },
    {
      id: 8,
      src: img8,
    },
    {
      id: 9,
      src: img9,
    },
  ];
  return (
    <div className=" bg-services-main mt-10 pb-10">
      <div className=" flex  justif-center flex-col items-center mt-2.5 w-full space-y-11 ">
        <div className="w-3/4 flex flex-col items-center">
          <p className=" text-3xl font-bold text-themeColor-secondary mt-5 xs:text-xl xs:text-center">
            Our<span className="text-themeColor-main"> Services</span>
          </p>
          <p className="text-sm w-3/4 text-center mt-3 xs:text-xs xs:w-11/12">
            We have immense pleasure in introducing ourselves as Security
            professionals for Guarding offices, Solar O&M,Road projects,National
            Highways,Factories,Hotels and industrial estates, and other
            properties in and around the cities of karnataka. We, KARTHIK
            SECURITY SERVICES(KSS) are proud to say that all our clients are
            satisfied with the security services .Our Security personnel are
            well-trained by Ex-Army Instructors.{" "}
          </p>
        </div>

        <div className="flex  flex-wrap  w-full">
          {imgSet.map((item) => {
            return (
              <ServiceImageCard item={item} key={item.id}></ServiceImageCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
