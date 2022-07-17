import React from 'react'

const Account = () => {
  return (
    <div className="account-area">
      <div className="container">
        <div className="row account-wrap">
          <div className="col-sm-6 col-lg-4">
            <div className="account-item">
              <i className="flaticon-approved" />
              <span>Register Your Account</span>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="account-item">
              <i className="flaticon-cv" />
              <span>Upload Your Resume</span>
            </div>
          </div>
          <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
            <div className="account-item account-last">
              <i className="flaticon-customer-service" />
              <span>Apply for Dream Job</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Account