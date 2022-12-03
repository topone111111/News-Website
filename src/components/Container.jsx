import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const Container = ({ isOpen, toggleMenu }) => {
  return (
    <div className="container">
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
};

export default Container;
