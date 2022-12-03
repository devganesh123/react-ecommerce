import "../style/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <nav className="navbar">
        <div className="logo">Sports Pedia</div>
        <div className="push-left">
          <button
            id="menu-toggler"
            data-class="menu-active"
            className="hamburger"
          >
            <span className="hamburger-line hamburger-line-top"></span>
            <span className="hamburger-line hamburger-line-middle"></span>
            <span className="hamburger-line hamburger-line-bottom"></span>
          </button>

          <ul id="primary-menu" className="menu nav-menu">
            <li className="menu-item current-menu-item">
              <a className="nav__link" href="#">
                Home
              </a>
            </li>
            <li className="menu-item dropdown">
              <a className="nav__link" href="#">
                About
              </a>
              <ul className="sub-nav">
                <li>
                  <a className="sub-nav__link" href="#">
                    link 1
                  </a>
                </li>
                <li>
                  <a className="sub-nav__link" href="#">
                    link 2
                  </a>
                </li>
                <li>
                  <a className="sub-nav__link" href="#">
                    link 3 - long link - long link - long link
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item dropdown">
              <a className="nav__link" href="#">
                Contact
              </a>
              <ul className="sub-nav">
                <li>
                  <a className="sub-nav__link" href="#">
                    link 1
                  </a>
                </li>
                <li>
                  <a className="sub-nav__link" href="#">
                    link 2
                  </a>
                </li>
                <li>
                  <a className="sub-nav__link" href="#">
                    link 3 - long link - long link - long link
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item ">
              <a className="nav__link" href="#">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
