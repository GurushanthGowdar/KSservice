import { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [imageId, setImageId] = useState(0);

  const imagesArray = [
    "https://tecdn.b-cdn.net/img/new/slides/017.webp",
    "https://tecdn.b-cdn.net/img/new/slides/010.webp",
    "https://tecdn.b-cdn.net/img/new/slides/011.webp",
    "https://tecdn.b-cdn.net/img/new/slides/024.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageId((prev) => {
        if (prev < imagesArray.length - 1) {
          return prev + 1;
        }
        return 0;
      });
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, [imagesArray.length]);

  const mouseEnterHandler = () => {};

  const mouseLeaveHandler = () => {};

  return (
    <div
      //   data-aos="zoom-in"
      //   data-aos-duration="1000"
      className={`block rounded-lg w-[95%]  h-[80vh] ml-8   transition-transform duration-500 ease-out motion-reduce:transition-none bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 `}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <img
        className={`rounded-lg w-full h-full object-cover`}
        src={imagesArray[imageId]}
        alt=""
      />
    </div>
  );
};

export default Hero;
