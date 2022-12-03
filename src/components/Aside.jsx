const Aside = () => {
  return (
    <aside className="new">
      <h2 className="new__title">New</h2>

      <div className="new__item">
        <h3 className="new__subtitle">Hydrogen VS Electric Cars</h3>
        <p className="new__description">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </div>
      <div className="new__item">
        <h3 className="new__subtitle">The Downsides of AI Artistry</h3>
        <p className="new__description">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <div className="new__item">
        <h3 className="new__subtitle">Is VC Funding Drying Up?</h3>
        <p className="new__description">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </aside>
  );
};

export default Aside;
