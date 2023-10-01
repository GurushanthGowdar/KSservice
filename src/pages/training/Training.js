import React from "react";
import img1 from "../../Image/training/customized solutions 1.png";
import img2 from "../../Image/training/professional approach 1.png";
import img3 from "../../Image/training/transition org 1.png";
const Training = () => {
  const data = [
    {
      id: 1,
      title: "Personalized Solutions",
      imgSrc: img1,
      description:
        "We pay attention to client’s requirements and provide customized solutions to suit their expectations.",
    },
    {
      id: 2,
      title: "Competent Approach",
      imgSrc: img2,
      description:
        "KSS SECURITY offers secure, more reliable security andservices trusted by our clients from different industries.",
    },
    {
      id: 3,
      title: "Hassle Free Transition",
      imgSrc: img3,
      description:
        "We help you in smooth transition to  KSS to experience a proactive approach & committed team for best results.",
    },
  ];

  const testimonialData = [
    {
      id: 1,
      name: "Hardik",
      designation: "designation",
      message:
        "“I wanted to compliment our Security staff  for a job well done........There are always  two security guards holding the doors for us as we leave at the end of each workday”",
    },
    {
      id: 2,
      name: "Bhuvi",
      designation: "designation",
      message:
        "“Very happy with service, for many years we work together and every time I have special request they always find the way to work it out.”  ",
    },
  ];

  return (
    <>
      <div className="flex flex-col ">
        <p className=" text-3xl font-bold text-themeColor-secondary text-center mt-10 xs:text-xl xs:text-center">
          We<span className="text-themeColor-main"> Represent</span>
        </p>

        <div className="flex justify-around mt-10 xs:flex-col xs:justify-center xs:items-center">
          {data?.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col mb-10 items-center w-52 space-y-4 flex-1 xs:justify-center xs:items-center  xs:mb-10"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <p className="text-2xl font-bold text-themeColor-secondary text-center mt-10 xs:text-lg">
                  {item?.title}
                </p>
                <img
                  src={item?.imgSrc}
                  alt="..."
                  style={{ width: "174px", height: "178px" }}
                />
                <p className="text-center w-1/2 text-sm xs:text-xs xs:w-full">{item?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-[60vh] w-full bg-themeColor-main mt-5 p-2.5 xs:h-[70vh]">
        <p className=" text-3xl font-bold text-white text-center p-2.5 mb-2.5 pt-5 xs:text-xl xs:text-center" >
          Testimonials and reviews
        </p>

        <div className="flex space-x-11 w-full justify-around pr-2.5 pl-2.5 pt-10 xs:flex-col xs:space-x-0 xs:space-y-11 ">
          {testimonialData.map((data) => {
            return (
              <div
                key={data.id}
                className="flex flex-col p-4 bg-services-main flex-1 h-52 justify-around items-center xs:w-full xs:h-60"
              >
                <div className="w-11/12 flex flex-col justify-center">
                  <p className="font-bold text-xl xs:text-lg">{data.name}</p>
                  <p className="mb-5 font-semibold xs:text-sm">{data.designation}</p>
                  <hr className="border-2 rounded-lg" />
                </div>
                <p className="text-s w-11/12 xs:text-xs xs:mt-5">{data.message}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Training;
