import React from 'react'

const Popular = () => {
  return (
    <div className="popular-area pt-100 pb-70 px-20">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="popular-item">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <img src="assets/img/home-1/3.jpg" alt="Popular" />
                </div>
                <div className="col-lg-5">
                  <div className="practice-inner">
                    <img src="assets/img/home-1/4.jpg" alt="Popular" />
                    <img src="assets/img/home-1/5.jpg" alt="Popular" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="popular-item popular-right">
              <div className="section-title text-left">
                <h2>Why We are Most Popular</h2>
              </div>
              <p>
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse
                ultrices gravida
              </p>
              <div className="row popular-wrap">
                <div className="col-sm-6 col-lg-6">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Popular