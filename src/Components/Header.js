import React from "react";

function Header() {
  return (
    <>
      <div className="headerComponent d-none d-xl-block ">
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
          <a href="#" className="navbar-brand">
            <img src="./image/Logo.png" />
          </a>

          <div
            className="collapse navbar-collapse justify-content-between"
            id=""
          >
            <form className="d-flex search">
              <div className="input-group ">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback"></span>
                  <input
                    type="text"
                    className="form-control searchInput"
                    placeholder="Search"
                  />
                </div>
              </div>
            </form>

            <div className="navbar-nav navbar-icon">
              <a href="#" className="nav-item nav-link">
                {" "}
                <img className="iconImg" src="./image/notif.png" />
              </a>
              <a href="#" className="nav-item nav-link">
                {" "}
                <img className="iconImg" src="./image/chat.png" />
              </a>
              <a href="#" className="nav-item nav-link">
                {" "}
                <img className="iconImg" src="./image/pepole.png" />
              </a>

              <a href="#" className="nav-item nav-link">
                {" "}
                <img className="iconImg" src="./image/explore.png" />
              </a>
            </div>
            <div className="divider"></div>
            <div className="navbar-nav navbar-drp">
              <a href="#" className="nav-item nav-link  Navuser">
                Ryan Azhari
              </a>
              <a href="#" className="nav-item nav-link navIcon">
                EC
              </a>
              <div className="nav-item dropdown ">
                <a
                  href="#"
                  className="nav-link dropdown-toggle "
                  data-bs-toggle="dropdown"
                ></a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="headerComponent d-block d-xl-none ">
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
          <a href="#" className="navbar-brand navbrand">
            <img src="./image/Logo.png" />
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav mt-5 navMobile">
              <a href="#" className="nav-item nav-link  ">
                <h5>Company</h5>
              </a>
              <a href="#" className="nav-item nav-link ">
                <p>About Us</p>
              </a>
              <a href="#" className="nav-item nav-link ">
                <p>Careers</p>
              </a>
              <a href="#" className="nav-item nav-link ">
                <p>FAQs</p>
              </a>
              <a href="#" className="nav-item nav-link ">
                <p>Teams</p>
              </a>
              <a href="#" className="nav-item nav-link ">
                <p>Contact Us</p>
              </a>

              <a href="#" className="nav-item nav-link mt-5 ">
                <h5>Use Cases</h5>
              </a>
              <a href="#" className="nav-item nav-link ">
                <p>Web Designer</p>
              </a>
              <a href="#" className="nav-item nav-link ">
                <p>Marketers</p>
              </a>
              <a href="#" className="nav-item nav-link ">
                <p>Small Business</p>
              </a>
              <a href="#" className="nav-item nav-link ">
                <p>Website Builders</p>
              </a>

              <a href="#" className="nav-item nav-link">
                {" "}
                <img className="iconImg m-2" src="./image/notif.png" />
                <img className="iconImg m-2" src="./image/chat.png" />
                <img className="iconImg m-2" src="./image/pepole.png" />
                <img className="iconImg m-2" src="./image/explore.png" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
