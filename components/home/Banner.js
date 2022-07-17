import React from 'react'

const Banner = () => {
  return (
      <div className="banner-area bg-[url('/assets/img/home-1/banner1.jpg')] ">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="banner-text  flex flex-col px-20 justify-content item-center content-center">
              <h1>
                Find Your <span>Desired</span> Job
              </h1>
              <p>Jobs, Employment &amp; Future Career Opportunities</p>
              <div className="banner-form-area   ">
                <form>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Job Title"
                        />
                        <label>
                          <i className="icofont-search-1" />
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label>
                          <i className="icofont-location-pin" />
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="City or State"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option>Job Category</option>
                          <option>ICT</option>
                          <option>Finance</option>
                          <option>Marketing</option>
                          <option>Production</option>
                          <option>Bank</option>
                          <option>Hospitality</option>
                          <option>NGO</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn banner-form-btn">
                    Search
                  </button>
                </form>
              </div>
              <div className="banner-btn">
                <a href="">Create Your Profile</a>
                <a href="">Upload Your CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Banner