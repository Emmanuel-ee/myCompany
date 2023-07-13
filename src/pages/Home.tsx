import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Popup from "../components/Popup";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <div>
      <Navigation />
      <header className="header">
        <Logo />

        <div className="header__text-box">
          {/* <div className="header__services">
            <h2>WE SUPPORT ENTERPRISES, PRODUCT HOUSES, AND STARTUPS WITH:</h2>
            <ul>
              <li>Custom software solutions development</li>
              <li>IT consulting and services</li>
              <li>Dedicated software teams establishment & operations</li>
            </ul>
          </div> */}

          <h1 className="heading-primary">
            <span className="heading-primary--main">Cybesco</span>
            <span className="heading-primary--sub">The future is now.</span>
          </h1>

          <a href="#section-tours" className="btn btn--white btn--animated">
            Free Quote
          </a>
        </div>
      </header>
      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              Get the Most out of technology
            </h2>
          </div>

          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">
                Self-managed Teams for Startups
              </h3>
              <p className="paragraph">
                Hire a team of Developers, Designers, Quality Assurance
                Specialists, DevOps Engineers, and other experts you may need to
                work hand-by-hand on your digital product.
              </p>

              <h3 className="heading-tertiary u-margin-bottom-small">
                Mobile and Web Application Development
              </h3>
              <p className="paragraph">
                Offering a full range of software development services to assist
                you throughout the whole project lifecycle, from conception
                through release and post-production. We are able to start from
                scratch when developing a solution or join your project at any
                stage. Industry best practises and tried-and-true approaches
                will be used to design your solution. With speed and excellence.
              </p>

              <a href="/services" className="btn-text">
                Learn more &rarr;
              </a>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img
                  srcSet="src/assets/projects/Nasa-Mission.png 300w, src/assets/projects/Nasa-Mission.png 1000w"
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 1"
                  className="composition__photo composition__photo--p1"
                  src="src/assets/projects/Nasa-Mission.png"
                />

                <img
                  srcSet="src/assets/projects/Nexter-project.png 300w, src/assets/projects/Nexter-project.png 1000w"
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 2"
                  className="composition__photo composition__photo--p2"
                  src="src/assets/projects/Nexter-project.png"
                />

                <img
                  srcSet="src/assets/projects/Trillo-project.png 300w, src/assets/projects/Trillo-project.png 1000w"
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 3"
                  className="composition__photo composition__photo--p3"
                  src="src/assets/projects/Trillo-project.png"
                />

                {/* <img src="img/nat-1-large.jpg" alt="Photo 1" className="composition__photo composition__photo--p1" />
                            <img src="img/nat-2-large.jpg" alt="Photo 2" className="composition__photo composition__photo--p2" />
                            <img src="img/nat-3-large.jpg" alt="Photo 3" className="composition__photo composition__photo--p3" /> */}
              </div>
            </div>
          </div>
        </section>

        <section className="section-features">
          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-world"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  CUSTOM APPLICATION DEVELOPMENT
                </h3>
                <p className="feature-box__text">
                  Get a complete delivery of your app that fully adheres to your
                  corporate objectives. By contracting with a reputable tech
                  partner to design your apps, you can guarantee a favourable
                  return on investment, a high level of user engagement, app
                  scalability, and maintainability.
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-compass"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  MINIMUM COST AND EFFORT
                </h3>
                <p className="feature-box__text">
                  By making your software scalable, simple to maintain, and
                  quick to improve, you may avoid paying more expenditures in
                  the future. We lower the total cost of ownership for apps as
                  well as development expenses.
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-map"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  DEDICATED SOFTWARE DEVELOPMENT TEAM
                </h3>
                <p className="feature-box__text">
                  Hire a dedicated team of software developers or establish a
                  software development center to design, develop, maintain, and
                  extend your products and solutions
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-heart"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  UI/UX DESIGN SERVICES
                </h3>
                <p className="feature-box__text">
                  Improve visual communication and make sure your mobile
                  application, web portal, enterprise system, or marketing
                  materials stand out from the competition with our design
                  outsourcing & consulting services
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-tours" id="section-tours">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Most popular contracts</h2>
          </div>

          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--1">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">
                      Word Press site
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>Delivered in a week</li>
                      <li>Mobile Friendly Design</li>
                      <li>3 Page site</li>
                      <li>No Monthly Cost</li>
                      <li>Custom theme Design</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">£300</p>
                    </div>
                    <a href="#popup" className="btn btn--white">
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--2">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--2">
                      Web Application
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>1 Week Delivery</li>
                      <li>Mobile Friendly Design</li>
                      <li>Single Page Application</li>
                      <li>No Monthly Cost</li>
                      <li>Free Hosting for the first year</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">£500</p>
                    </div>
                    <a href="#popup" className="btn btn--white">
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--3">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--3">
                      Mobile Application Development
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>1 Week Delivery</li>
                      <li>cross-platform Development</li>
                      <li>Maintenance</li>
                      <li>No Monthly Cost</li>
                      <li>Free Hosting for the first year</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-3">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">£500</p>
                    </div>
                    <a href="#popup" className="btn btn--white">
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="u-center-text u-margin-top-huge">
            <a href="#" className="btn btn--green">
              Discover all services
            </a>
          </div>
        </section>

        <section className="section-stories">
          <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
              <source src="src/assets/video.mp4" type="video/mp4" />
              <source src="src/assets/video.webm" type="video/webm" />
              Your browser is not supported!
            </video>
          </div>

          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">We Exceed Expectations</h2>
          </div>

          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src="src\assets\nat-8.jpg"
                  alt="Person on a tour"
                  className="story__img"
                />
                <figcaption className="story__caption">Mary Smith</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src="src\assets\nat-9.jpg"
                  alt="Person on a tour"
                  className="story__img"
                />
                <figcaption className="story__caption">Jack Wilson</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                </p>
              </div>
            </div>
          </div>

          <div className="u-center-text u-margin-top-huge">
            <a href="#" className="btn-text">
              Read all stories &rarr;
            </a>
          </div>
        </section>

        <section className="section-book">
          <div className="row">
            <div className="book">
              <div className="book__form">
                <form action="#" className="form">
                  <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary">Start booking now</h2>
                  </div>

                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Full name"
                      id="name"
                      required
                    />
                    <label htmlFor="name" className="form__label">
                      Full name
                    </label>
                  </div>

                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      placeholder="Email address"
                      id="email"
                      required
                    />
                    <label htmlFor="email" className="form__label">
                      Email address
                    </label>
                  </div>

                  <div className="form__group u-margin-bottom-medium">
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="small"
                        name="size"
                      />
                      <label htmlFor="small" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Personal Project
                      </label>
                    </div>

                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="large"
                        name="size"
                      />
                      <label htmlFor="large" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Company Project
                      </label>
                    </div>
                  </div>

                  <div className="form__group">
                    <button className="btn btn--green">Next step &rarr;</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Popup />
      <Footer />
    </div>
  );
};

export default Home;
