const Navigation = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              Home
            </a>
          </li>
          <li className="navigation__item">
            <a href="/about" className="navigation__link">
              About
            </a>
          </li>
          <li className="navigation__item">
            <a href="/services" className="navigation__link">
              Services
            </a>
          </li>
          <li className="navigation__item">
            <a href="/portfolio" className="navigation__link">
              Portfolio
            </a>
          </li>
          <li className="navigation__item">
            <a href="/ourtech" className="navigation__link">
              Our Tech
            </a>
          </li>
          <li className="navigation__item">
            <a href="/contact" className="navigation__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
