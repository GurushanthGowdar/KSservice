import { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  // const [imageId, setImageId] = useState(0);
  const [showButton, setShowButton] = useState(false);


  const mouseEnterHandler = () => {
    setShowButton(true)
  };

  const mouseLeaveHandler = () => {
    setShowButton(false)
  };

  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];

  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // setImageId((prev) => {
      nextSlide()
      // });
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, [current]);

  return (
    <div className="w-full h-[70vh]  m-auto "

      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}>
      <div className="overflow-hidden relative h-full">
        <div
          className={`flex transition ease-out duration-500`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((s) => {
            return <img src={s} />;
          })}
        </div>
        {showButton &&
          <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
            <button className="rounded-full p-2 " style={{ color: 'black', background: 'white' }} onClick={previousSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>

            </button>
            <button className="rounded-full p-2 " style={{ color: 'black', background: 'white' }} onClick={nextSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>

            </button>
          </div>}

        {showButton && <div className="absolute bottom-0 py-4 flex justify-center items-center gap-3 w-full">
          {slides.map((s, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i);
                }}
                key={"circle" + i}
                className={`rounded-full cursor-pointer ${i == current ? 'w-5  h-5' : 'w-2 h-2'}`}
                style={{
                  background: i == current ? "white" : "gray"
                }}
              ></div>
            );
          })}
        </div>}
      </div>
    </div >

  );
};

export default Hero;
