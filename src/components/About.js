import React from 'react'

function About() {
    return (
        <div>
{/*START ABOUT US*/}
<section className="section" id="features">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-5 order-2 order-lg-1">
        <div className="features-box mt-5 mt-lg-0">
          <h3>A digital web design studio creating modern &amp; engaging online</h3>
          <p className="text-muted web-desc">Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.</p>
          <ul className="text-muted list-unstyled mt-4 features-item-list">
            <li className>We put a lot of effort in design.</li>
            <li className>The most important ingredient of successful website.</li>
            <li className>Submit Your Orgnization.</li>
          </ul>
          <a href="#" className="btn btn-primary mt-4 waves-effect waves-light">Learn More <i className="mdi mdi-arrow-right" /></a>
        </div>
      </div>
      <div className="col-lg-7 order-1 order-lg-2">
        <div className="features-img mx-auto me-lg-0">
          <img src="images/growth-analytics.svg" alt="macbook image" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</section>
{/*END ABOUT US*/}

        </div>
    )
}

export default About
