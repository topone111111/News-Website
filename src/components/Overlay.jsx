const Overlay = ({ isOpen }) => {
  return <div className={`overlay ${isOpen && "active"}`}></div>;
};

export default Overlay;
