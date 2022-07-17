import React from 'react'

const Counter = () => {
  return (
    <div className="counter-area pt-100 pb-70">
  <div className="container">
    <div className="row">
      <div className="col-6 col-sm-3 col-lg-3">
        <div className="counter-item">
          <i className="flaticon-employee" />
          <h3>
            <span className="odometer" data-count={14}>
              00
            </span>
            <span className="target">k+</span>
          </h3>
          <p>Job Available</p>
        </div>
      </div>
      <div className="col-6 col-sm-3 col-lg-3">
        <div className="counter-item">
          <i className="flaticon-curriculum" />
          <h3>
            <span className="odometer" data-count={18}>
              00
            </span>
            <span className="target">k+</span>
          </h3>
          <p>CV Submitted</p>
        </div>
      </div>
      <div className="col-6 col-sm-3 col-lg-3">
        <div className="counter-item">
          <i className="flaticon-enterprise" />
          <h3>
            <span className="odometer" data-count={9}>
              00
            </span>
            <span className="target">k+</span>
          </h3>
          <p>Companies</p>
        </div>
      </div>
      <div className="col-6 col-sm-3 col-lg-3">
        <div className="counter-item">
          <i className="flaticon-businessman-paper-of-the-application-for-a-job" />
          <h3>
            <span className="odometer" data-count={35}>
              00
            </span>
            <span className="target">+</span>
          </h3>
          <p>Appointed to Job</p>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default Counter