import { Link } from "react-router-dom";

export default function About() {

    return (<>

        <>
            <div className="site-wrap">
                <div className="site-navbar mt-4">
                    <div className="container py-1">
                        <div className="row align-items-center">
                            <div className="col-8 col-md-8 col-lg-4">
                                <h1 className="mb-0">
                                    <Link to="/about" className="text-white h2 mb-0">
                                        <strong>
                                            Apart<span className="text-primary">.</span>
                                        </strong>
                                    </Link>
                                </h1>
                            </div>
                            <div className="col-4 col-md-4 col-lg-8">
                                <nav
                                    className="site-navigation text-right text-md-right"
                                    role="navigation">
                                    <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                                        <Link
                                            to="#"
                                            className="site-menu-toggle js-menu-toggle text-white">
                                            <span className="icon-menu h3" />
                                        </Link>
                                    </div>
                                    <ul className="site-menu js-clone-nav d-none d-lg-block">
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="active">
                                            <Link to="/about">About</Link>
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
                                            <Link to="contact.html">Contact</Link>
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
                className="site-blocks-cover inner-page-cover overlay"
                style={{ backgroundImage: 'url("images/hero_bg_1.jpg")' }}
                data-aos="fade"
                data-stellar-background-ratio="0.5" >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div
                            className="col-md-7 text-center"
                            data-aos="fade-up"
                            data-aos-delay={400}>
                            <h1 className="text-white">About Us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="images/img_1.jpg" alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-lg-6">
                            <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
                                <h2 className="mb-5">Our Office</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
                                    fugit nam obcaecati fuga itaque deserunt officia, error reiciendis
                                    ab quod?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
                            <h2 className="mb-5">Team</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
                                fugit nam obcaecati fuga itaque deserunt officia, error reiciendis
                                ab quod?
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">
                                <img src="images/person_1.jpg" alt="Image" className="img-fluid" />
                                <div className="text">
                                    <h2 className="mb-2 font-weight-light h4">Megan Smith</h2>
                                    <span className="d-block mb-2 text-white-opacity-05">
                                        Co Founder
                                    </span>
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                                        reprehenderit nemo.
                                    </p>
                                    <p>
                                        <Link to="#" className="text-white p-2">
                                            <span className="icon-facebook" />
                                        </Link>
                                        <Link to="#" className="text-white p-2">
                                            <span className="icon-twitter" />
                                        </Link>
                                        <Link to="#" className="text-white p-2">
                                            <span className="icon-linkedin" />
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">
                                <img src="images/person_2.jpg" alt="Image" className="img-fluid" />
                                <div className="text">
                                    <h2 className="mb-2 font-weight-light h4">Brooke Cagle</h2>
                                    <span className="d-block mb-2 text-white-opacity-05">
                                        Co Founder
                                    </span>
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                                        reprehenderit nemo.
                                    </p>
                                    <p>
                                        <Link to="#" className="text-white p-2">
                                            <span className="icon-facebook" />
                                        </Link>
                                        <Link to="#" className="text-white p-2">
                                            <span className="icon-twitter" />
                                        </Link>
                                        <Link to="#" className="text-white p-2">
                                            <span className="icon-linkedin" />
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">
                                <img src="images/person_3.jpg" alt="Image" className="img-fluid" />
                                <div className="text">
                                    <h2 className="mb-2 font-weight-light h4">Philip Martin</h2>
                                    <span className="d-block mb-2 text-white-opacity-05">
                                        Co Founder
                                    </span>
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                                        reprehenderit nemo.
                                    </p>
                                    <p>
                                        <Link to="#" className="text-white p-2">
                                            <span className="icon-facebook" />
                                        </Link>
                                        <Link to="#" className="text-white p-2">
                                            <span className="icon-twitter" />
                                        </Link>
                                        <Link to="#" className="text-white p-2">
                                            <span className="icon-linkedin" />
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">
                                <img src="images/person_4.jpg" alt="Image" className="img-fluid" />
                                <div className="text">
                                    <h2 className="mb-2 font-weight-light h4">Steven Ericson</h2>
                                    <span className="d-block mb-2 text-white-opacity-05">
                                        Co Founder
                                    </span>
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                                        reprehenderit nemo.
                                    </p>
                                    <p>
                                        <Link to="#" className="text-white p-2">
                                            <span className="icon-facebook" />
                                        </Link>
                                        <Link to="#" className="text-white p-2">
                                            <span className="icon-twitter" />
                                        </Link>
                                        <Link to="#" className="text-white p-2">
                                            <span className="icon-linkedin" />
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">
                                <img src="images/person_1.jpg" alt="Image" className="img-fluid" />
                                <div className="text">
                                    <h2 className="mb-2 font-weight-light h4">Nathan Dumlao</h2>
                                    <span className="d-block mb-2 text-white-opacity-05">
                                        Co Founder
                                    </span>
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                                        reprehenderit nemo.
                                    </p>
                                    <p>
                                        <Link to="#" className="text-white p-2">
                                            <span className="icon-facebook" />
                                        </Link>
                                        <Link to="#" className="text-white p-2">
                                            <span className="icon-twitter" />
                                        </Link>
                                        <Link to="#" className="text-white p-2">
                                            <span className="icon-linkedin" />
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">
                                <img src="images/person_2.jpg" alt="Image" className="img-fluid" />
                                <div className="text">
                                    <h2 className="mb-2 font-weight-light h4">Brooke Cagle</h2>
                                    <span className="d-block mb-2 text-white-opacity-05">
                                        Co Founder
                                    </span>
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit ullam
                                        reprehenderit nemo.
                                    </p>
                                    <p>
                                        <Link to="#" className="text-white p-2">
                                            <span className="icon-facebook" />
                                        </Link>
                                        <Link to="#" className="text-white p-2">
                                            <span className="icon-twitter" />
                                        </Link>
                                        <Link to="#" className="text-white p-2">
                                            <span className="icon-linkedin" />
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div
                            className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto"
                            data-aos="fade-up">
                            <h2 className="mb-5">Featured Apartments</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
                                fugit nam obcaecati fuga itaque deserunt officia, error reiciendis
                                ab quod?
                            </p>
                        </div>
                    </div>
                    <div className="site-block-retro d-block d-md-flex">
                        <Link
                            href="#"
                            className="col1 unit-9 no-height"
                            data-aos="fade-up"
                            data-aos-delay={100}>
                            <div
                                className="image"
                                style={{ backgroundImage: 'url("images/img_2.jpg")' }} />
                            <div className="unit-9-content">
                                <h2>Baltimore Apartment</h2>
                                <span>$600/night</span>
                            </div>
                        </Link>
                        <div className="col2 ml-auto">
                            <Link
                                to="#"
                                className="col2-row1 unit-9 no-height"
                                data-aos="fade-up"
                                data-aos-delay={200}>
                                <div
                                    className="image"
                                    style={{ backgroundImage: 'url("images/img_3.jpg")' }} />
                                <div className="unit-9-content">
                                    <h2>Austin Apartment</h2>
                                    <span>$290/night</span>
                                </div>
                            </Link>
                            <Link
                                to="#"
                                className="col2-row2 unit-9 no-height"
                                data-aos="fade-up"
                                data-aos-delay={300}>
                                <div
                                    className="image"
                                    style={{ backgroundImage: 'url("images/img_1.jpg")' }} />
                                <div className="unit-9-content">
                                    <h2>Atlanta Apartment</h2>
                                    <span>$1,290/night</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section block-13 bg-light">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
                            <h2 className="mb-5">Love By Our Customers</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
                                fugit nam obcaecati fuga itaque deserunt officia, error reiciendis
                                ab quod?
                            </p>
                        </div>
                    </div>
                    <div className="nonloop-block-13 owl-carousel">
                        <div className="text-center p-3 p-md-5 bg-white">
                            <div className="mb-4">
                                <img
                                    src="images/person_1.jpg"
                                    alt="Image"
                                    className="w-50 mx-auto img-fluid rounded-circle" />
                            </div>
                            <div className="text-black">
                                <h3 className="font-weight-light h5">Megan Smith</h3>
                                <p className="font-italic">
                                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                                    iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
                                </p>
                            </div>
                        </div>
                        <div className="text-center p-3 p-md-5 bg-white">
                            <div className="mb-4">
                                <img
                                    src="images/person_2.jpg"
                                    alt="Image"
                                    className="w-50 mx-auto img-fluid rounded-circle" />
                            </div>
                            <div className="text-black">
                                <h3 className="font-weight-light h5">Brooke Cagle</h3>
                                <p className="font-italic">
                                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                                    iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
                                </p>
                            </div>
                        </div>
                        <div className="text-center p-3 p-md-5 bg-white">
                            <div className="mb-4">
                                <img
                                    src="images/person_3.jpg"
                                    alt="Image"
                                    className="w-50 mx-auto img-fluid rounded-circle" />
                            </div>
                            <div className="text-black">
                                <h3 className="font-weight-light h5">Philip Martin</h3>
                                <p className="font-italic">
                                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                                    iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
                                </p>
                            </div>
                        </div>
                        <div className="text-center p-3 p-md-5 bg-white">
                            <div className="mb-4">
                                <img
                                    src="images/person_1.jpg"
                                    alt="Image"
                                    className="w-50 mx-auto img-fluid rounded-circle" />
                            </div>
                            <div className="text-black">
                                <h3 className="font-weight-light h5">Steven Ericson</h3>
                                <p className="font-italic">
                                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                                    iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
                                </p>
                            </div>
                        </div>
                        <div className="text-center p-3 p-md-5 bg-white">
                            <div className="mb-4">
                                <img
                                    src="images/person_2.jpg"
                                    alt="Image"
                                    className="w-50 mx-auto img-fluid rounded-circle" />
                            </div>
                            <div className="text-black">
                                <h3 className="font-weight-light h5">Nathan Dumlao</h3>
                                <p className="font-italic">
                                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                                    iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
                                </p>
                            </div>
                        </div>
                        <div className="text-center p-3 p-md-5 bg-white">
                            <div className="mb-4">
                                <img
                                    src="images/person_4.jpg"
                                    alt="Image"
                                    className="w-50 mx-auto img-fluid rounded-circle" />
                            </div>
                            <div className="text-black">
                                <h3 className="font-weight-light h5">Brook Smith</h3>
                                <p className="font-italic">
                                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                                    iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    </>)
}