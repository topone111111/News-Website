const Main = () => {
  return (
    <main className="main">
      <img className="main__img" src="/assets/hero-main.jpg" alt="main-img" />
      <img
        className="main__img-mobile"
        src="/assets/hero-mobile.jpg"
        alt="main-img-mobile"
      />
      <div className="main__content">
        <h1 className="main__title">The Bright Future of Web 3.0?</h1>
        <div className="main__description">
          <p className="info">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <div className="cta">Read More</div>
        </div>
      </div>
    </main>
  );
};

export default Main;
