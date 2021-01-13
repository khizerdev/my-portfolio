import React from 'react'

function Projects() {
    return (
        <div>
            {/* START BLOG */}
<section className="section" id="blog">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <h1 className="section-title text-center">Latest News</h1>
        <div className="section-title-border mt-3" />
        <p className="section-subtitle text-muted text-center font-secondary pt-4">Separated they live in
          Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod
          mus luctus quam.</p>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-lg-4">
        <div className="blog-box mt-4">
          <img src="images/blog/img-1.jpg" className="img-fluid rounded" alt="" />
          <div>
            <h5 className="mt-4 text-muted">UI &amp; UX Design</h5>
            <h4 className="mt-3"><a href="#" className="blog-title"> Doing a cross country road trip </a></h4>
            <p className="text-muted">She packed her seven versalia, put her initial into the belt and made
              herself on the way..</p>
            <div className="mt-3">
              <a href="#" className="read-btn">Read More <i className="mdi mdi-arrow-right" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="blog-box mt-4">
          <img src="images/blog/img-2.jpg" className="img-fluid rounded" alt="" />
          <div>
            <h5 className="mt-4 text-muted">Digital Marketing</h5>
            <h4 className="mt-3"><a href="#" className="blog-title">New exhibition at our Museum</a></h4>
            <p className="text-muted">Pityful a rethoric question ran over her cheek, then she continued her
              way.</p>
            <div className="mt-3">
              <a href="#" className="read-btn">Read More <i className="mdi mdi-arrow-right" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="blog-box mt-4">
          <img src="images/blog/img-3.jpg" className="img-fluid rounded" alt="" />
          <div>
            <h5 className="mt-4 text-muted">Travelling</h5>
            <h4 className="mt-3"><a href="#" className="blog-title">Why are so many people..</a></h4>
            <p className="text-muted">Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.</p>
            <div className="mt-3">
              <a href="#" className="read-btn">Read More <i className="mdi mdi-arrow-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* END BLOG */}

        </div>
    )
}

export default Projects
