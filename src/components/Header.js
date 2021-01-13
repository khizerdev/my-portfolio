import React from 'react'

function Header() {
    return (
        <div>
            {/*START HOME*/}
<section className="section bg-home home-half" id="home" data-image-src="images/bg-home.jpg">
  <div className="bg-overlay" />
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8 text-white text-center">
        <h1 className="home-title">I AM SYED KHIZER</h1>
        <h4 className="home-small-title">I AM FRONT-END DEVELOPER</h4>
        <p className="pt-3 home-desc mx-auto">I enjoy turning complex problems into simple, beautiful and responsive designs. When I'm not coding, exploring or solving challenges, you'll find me gaming, photography or working out in the gym.</p>        
      </div>
    </div>
  </div>
  <div className="wave-effect wave-anim">
    <div className="waves-shape shape-one">
      <div className="wave wave-one" style={{backgroundImage: 'url("images/wave-shape/wave1.png")'}} />
    </div>
    <div className="waves-shape shape-two">
      <div className="wave wave-two" style={{backgroundImage: 'url("images/wave-shape/wave2.png")'}} />
    </div>
    <div className="waves-shape shape-three">
      <div className="wave wave-three" style={{backgroundImage: 'url("images/wave-shape/wave3.png")'}} />
    </div>
  </div>
</section>
{/*END HOME*/}

        </div>
    )
}

export default Header
