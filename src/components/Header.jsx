const Header = ({ toggleMenu, isOpen }) => {
  return (
    <header className="header">
      <img className="logo" src="/assets/logo.svg" alt="logo-icon" />
      <nav className={`nav ${isOpen && "active"}`}>
        <div className="nav__item">Home</div>
        <div className="nav__item">New</div>
        <div className="nav__item">Popular</div>
        <div className="nav__item">Trending</div>
        <div className="nav__item">Categories</div>
      </nav>
      <div
        onClick={toggleMenu}
        className={`nav__hamburger ${isOpen && "active"}`}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;
