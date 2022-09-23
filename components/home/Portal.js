import React from 'react'

const Portal = () => {
  return (
    <div className="portal-area pb-70 px-16">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="portal-item">
              <div className="row">
                <div className="col-lg-7">
                  <img src="assets/img/home-1/portall.jpg" alt="Portal" />
                </div>
                <div className="col-lg-5">
                  <img src="assets/img/home-1/portal.jpg" alt="Portal" />
                </div>
              </div>
              <div className="portal-trusted">
                <span>100% Trusted</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="portal-item portal-right">
              <h2>What we do...!</h2>
              <p>
               Let us help your business thrive!
               Provinding professional Support
              </p>
              <div className="common-btn">
                <a className="login-btn" href="#">
                  Post a Job
                  <i className="icofont-swoosh-right" />
                </a>
                <a className="sign-up-btn" href="#">
                  Apply Now
                  <i className="icofont-swoosh-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portal