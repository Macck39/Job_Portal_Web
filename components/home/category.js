import React from 'react'

const category = () => {
  return (
    <section className="category-area ptb-100 px-16">
      <div className="container">
        <div className="section-title">
          <h2>Choose Your Desire Category</h2>
        </div>
        <div className="row">
          <div className="col-sm-3 col-lg-3 category-border">
            <div className="category-item">
              <i className="flaticon-settings" />
              <a href="#">Technical Support</a>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3 category-border">
            <div className="category-item category-two">
              <i className="flaticon-layers" />
              <a href="#">Business Development</a>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3 category-border">
            <div className="category-item category-three">
              <i className="flaticon-house" />
              <a href="#">Real Estate Business</a>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3 category-border">
            <div className="category-item category-four">
              <i className="flaticon-analysis" />
              <a href="#">Share Maeket Analysis</a>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3 category-border-three">
            <div className="category-item category-five">
              <i className="flaticon-sun" />
              <a href="#">Weather &amp; Environment</a>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3 category-border-two">
            <div className="category-item category-six">
              <i className="flaticon-hand" />
              <a href="#">Finance &amp; Banking Service</a>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3 category-border-two">
            <div className="category-item category-seven">
              <i className="flaticon-neural" />
              <a href="#">IT &amp; Networing Sevices</a>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3 category-border-two">
            <div className="category-item category-eight">
              <i className="flaticon-dish" />
              <a href="#">Restaurant Services</a>
            </div>
          </div>
          <div className="col-sm-3 offset-sm-3 offset-lg-0 col-lg-3 category-border-two">
            <div className="category-item category-nine">
              <i className="icofont-fire-burn" />
              <a href="#">Defence &amp; Fire Service</a>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div className="category-item category-ten">
              <i className="flaticon-truck" />
              <a href="#">Home Delivery Services</a>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default category