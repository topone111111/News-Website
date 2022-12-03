const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__item">
        <div className="footer__image">
          <img src="/assets/bitmap.jpg" alt="bitmap-img" />
        </div>
        <div className="footer__content">
          <span className="number">01</span>
          <h3 className="subtitle">Reviving Retro PCs</h3>
          <p className="description">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>

      <div className="footer__item">
        <div className="footer__image">
          <img src="/assets/laptops.jpg" alt="laptops-img" />
        </div>
        <div className="footer__content">
          <span className="number">02</span>
          <h3 className="subtitle">Top 10 Laptops of 2022</h3>
          <p className="description">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>

      <div className="footer__item">
        <div className="footer__image">
          <img src="/assets/gaming.jpg" alt="gamin-img" />
        </div>
        <div className="footer__content">
          <span className="number">03</span>
          <h3 className="subtitle">The Growth of Gaming</h3>
          <p className="description">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
