import { useState } from "react";
import "./ServiceImageCard.css";

const ServiceImageCard = (props) => {
  const [ishovered, setIsHovered] = useState(false);

  const mouseEnterHandler = () => {
    setIsHovered(true);
  };

  const mouseLeaveHandler = () => {
    setIsHovered(false);
  };

  //   const cardHoverStyles = ishovered
  //     ? {
  //         transform: "scale(1.05)", // Scale the card slightly when hovered
  //         boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)", // Apply a shadow
  //         zIndex: 1, // Bring the card to the top
  //       }
  //     : {};
  return (
    <div
      key={props.item.id}
      className="basis-1/4 flex ml-10 mr-10 mt-10 flex-1 cursor-pointer service-card xs:ml-5 xs:mr-5 xs:mt-5"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    //   style={cardHoverStyles}
    >
      <img
        src={props.item.src}
        data-aos="zoom-in"
        data-aos-duration="1000"
        alt="hello"
        className="w-full h-full rounded-md"
      />
    </div>
  );
};

export default ServiceImageCard;
