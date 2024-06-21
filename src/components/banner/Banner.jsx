import "./Banner.css";
const Banner = ({ bannerSpan, bannerTitle, bannerDescription, bannerImage, bannerButton }) => {
  return (
    <section className="banner">
      <div className="banner__container">
        <span className="banner__span">{bannerSpan}</span>
        <h1 className="banner__title">{bannerTitle}</h1>
        <p className="banner__description">{bannerDescription}</p>
        <div className="banner__button">
          <button type="button" className="banner__btn">
            {bannerButton}
          </button>
        </div>
      </div>
      <figure className="banner__image">
        <img src={`${bannerImage}`} alt="banner__image"  className="banner__image--img"/>
      </figure>
    </section>
  );
};

export default Banner;
