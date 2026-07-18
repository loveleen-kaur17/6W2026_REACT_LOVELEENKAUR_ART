import { Link } from "react-router-dom"

export default function Header() {
    return (
    <>
          <>
  <div className="site-wrap">
    <div className="site-navbar mt-4">
      <div className="container py-1">
        <div className="row align-items-center">
          <div className="col-8 col-md-8 col-lg-4">
            <h1 className="mb-0">
              <Link to="/" className="text-white h2 mb-0">
                <strong>
                  Apart<span className="text-primary">.</span>
                </strong>
              </Link>
            </h1>
          </div>
          <div className="col-4 col-md-4 col-lg-8">
            <nav
              className="site-navigation text-right text-md-right"
              role="navigation"
            >
              <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                <Link
                  to="#"
                  className="site-menu-toggle js-menu-toggle text-white"
                >
                  <span className="icon-menu h3" />
                </Link>
              </div>
              <ul className="site-menu js-clone-nav d-none d-lg-block">
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li className="has-children">
                  <Link to="apartments.html">Apartments</Link>
                  <ul className="dropdown arrow-top">
                    <li>
                      <Link to="#">Apartments</Link>
                    </li>
                    <li>
                      <Link to="#">Rooms</Link>
                    </li>
                    <li>
                      <Link to="#">Suites</Link>
                    </li>
                    <li className="has-children">
                      <Link to="#">Sub Menu</Link>
                      <ul className="dropdown">
                        <li>
                          <Link to="#">Menu One</Link>
                        </li>
                        <li>
                          <Link to="#">Menu Two</Link>
                        </li>
                        <li>
                          <Link to="#">Menu Three</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="news.html">News</Link>
                </li>
                <li>
                  <Link tLink="contact.html">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="site-mobile-menu">
    <div className="site-mobile-menu-header">
      <div className="site-mobile-menu-close mt-3">
        <span className="icon-close2 js-menu-toggle" />
      </div>
    </div>
    <div className="site-mobile-menu-body" />
  </div>{" "}
  {/* .site-mobile-menu */}
  <div
    className="site-blocks-cover overlay"
    style={{ backgroundImage: 'url("images/hero_bg_2.jpg")' }}
    data-aos="fade"
    data-stellar-background-ratio="0.5"
  >
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div
          className="col-md-8 text-center"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <h1 className="mb-4">Excellent Space For Your Next Home</h1>
          <p className="mb-5">
            1105 Madison Plaza Suite 120 Chesapeake, CA, California
          </p>
          <p>
            <Link to="#" className="btn btn-primary px-5 py-3">
              Take a Tour
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
</>

    </>)

}