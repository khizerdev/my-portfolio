import React from 'react'

function Navbar() {
    return (
        <div>
            {/* STRAT NAVBAR */}
<div id="navbar">
  <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
    <div className="container">
      {/* LOGO */}
      <a className="navbar-brand logo text-uppercase" href="index.html">
        <i className="mdi mdi-alien" />Syed Khizer
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <i className="mdi mdi-menu" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav navbar-center" id="navbar-navlist">
          <li className="nav-item">
            <a data-scroll href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a data-scroll href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a data-scroll href="#services" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a data-scroll href="#blog" className="nav-link">Portfolio</a>
          </li>
          <li className="nav-item">
            <a data-scroll href="#features" className="nav-link">Features</a>
          </li>
        </ul>
        <div className="nav-button ms-auto">
          <ul className="nav navbar-nav navbar-right">
            <li> <a data-scroll href="#contact">
              <button type="button" className="btn btn-primary navbar-btn btn-rounded waves-effect waves-light">Contact</button></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</div>
{/* END NAVBAR */}

        </div>
    )
}

export default Navbar
