const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source
            srcSet="src/assets/cybesco.svg 1x, src/assets/cybesco.svg 2x"
            media="(max-width: 37.5em)"
          />
          <img
            srcSet="src/assets/cybesco.svg 1x, src/assets/cybesco.svg 2x"
            alt="Full logo"
            src="src/assets/cybesco.svg"
          />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Careers
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{" "}
            <a href="#" className="footer__link">
              Emmanuel Ememe
            </a>
            . Copyright &copy; Emmanuel Ememe All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
