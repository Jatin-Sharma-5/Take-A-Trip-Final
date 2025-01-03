import { Link,  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Header() {
  const token=sessionStorage.getItem("token")
  const nav=useNavigate()
  const logout=()=>{
    if(window.confirm("Do you really want to logout?")){
    sessionStorage.clear()
    toast.success("Logout successfully")
      nav("/login")
  }
  }
  return (
    <>
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <small className="me-3 text-light">
                <i className="fa fa-map-marker-alt me-2" />
               Jalandhar, Punjab, India
              </small>
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2" />
                +91-8435323454
              </small>
              <small className="text-light">
                <i className="fa fa-envelope-open me-2" />
                info@Takeatrip.com
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
          <Link to="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-map-marker-alt me-3" />
           
              Take A Trip
              
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
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link ">
                About
              </Link>
              <Link to="/destination" className="nav-item nav-link">
                Destination
              </Link>
              <Link to="/userhotel" className="nav-item nav-link">
                Hotels
              </Link>
              <Link to="/package" className="nav-item nav-link">
                Packages
              </Link>
              {
              !!token &&
              <div className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Account
                </Link>
                <div className="dropdown-menu m-0">
                    <Link to="/view-booking" className="dropdown-item">
                      Bookings
                    </Link>
                    <Link to="/view-profile" className="dropdown-item">
                      Profile
                    </Link>
                  </div>
              </div>
              }
            </div>
            {
            !token?
            <Link to="/login" className="btn btn-primary rounded-pill py-2 px-4">
            Login
          </Link>:
            <a href='#' onClick={logout} className="btn btn-primary rounded-pill py-2 px-4 m-2">
              Logout
          </a>
            }

            
          </div>
        </nav>
      </div>
    </>
  );
}