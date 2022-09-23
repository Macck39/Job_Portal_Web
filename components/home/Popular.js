import React from 'react'
import Image from 'next/image'



const Popular = () => {
  return (
    <div className="popular-area pt-100 pb-70 px-20">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="popular-item">
              <div className="row align-items-center">
                <div className="col-lg-7 ">
                  <img src="/assets/img/home-1/popular1.jpg" alt="Popular"  />
                </div>  
                <div className="col-lg-5">
                  <div className="practice-inner">
                    <img src="assets/img/home-1/popular3.jpg" alt="Popular" />
                    <img src="assets/img/home-1/popular2.jpg" alt="Popular" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="popular-item popular-right">
              <div className="section-title text-center font-bold">
                <h2 >Our Vision</h2>
              </div>
              <p>
                Our Vision is to help people to get employment, they are fighting the battle 
                against unemployment in India. We teach people to crack all types of interviews and we increase people&apos;s communication skills and confidence so that all people can get their dream job, we also teach how to move ahead in job career.
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