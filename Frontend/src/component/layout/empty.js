import { Link } from 'react-router-dom';

export default function () {
  return (
    <>
      {/* Spinner Start */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* Spinner End */}
      {/* Topbar Start */}
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <small className="me-3 text-light">
                <i className="fa fa-map-marker-alt me-2" />
                Location, City, Country
              </small>
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2" />
                +012 345 6789
              </small>
              <small className="text-light">
                <i className="fa fa-envelope-open me-2" />
                info@example.com
              </small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <Link to="#" className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2">
                <i className="fab fa-twitter fw-normal" />
              </Link>
              <Link to="#" className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2">
                <i className="fab fa-facebook-f fw-normal" />
              </Link>
              <Link to="#" className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2">
                <i className="fab fa-linkedin-in fw-normal" />
              </Link>
              <Link to="#" className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2">
                <i className="fab fa-instagram fw-normal" />
              </Link>
              <Link to="#" className="btn btn-sm btn-outline-light btn-sm-square rounded-circle">
                <i className="fab fa-youtube fw-normal" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar & Hero Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <Link to="#" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-map-marker-alt me-3" />
              Tourist
            </h1>
            {/* <img src="img/logo.png" alt="Logo"> */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/" className="nav-item nav-link">
                Dashboard
              </Link>



              <div className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Destination
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/Adddesigation" className="dropdown-item">
                    Add Destination
                  </Link>
                  <Link to="/Managedestination" className="dropdown-item">
                    Manage Destination
                  </Link>
                  <Link to="/Editdestination" className="dropdown-item">
                    Edit Destination
                  </Link>



                      

                          
                            </div>
                          </div>
                        </div>


                      </div>
                    </nav>
                  </div>
                </>
                );
}