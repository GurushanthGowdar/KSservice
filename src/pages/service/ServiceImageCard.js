const ServiceImageCard = (props) => {
  return (
    <div
      key={props.item.id}
      className="basis-1/4 flex ml-5 mr-5 mt-10 flex-1"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >
      <img src={props.item.src} alt="hello" className="w-full h-full" />
    </div>
  );
};

export default ServiceImageCard;
