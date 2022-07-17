import React from 'react'

const Jobs = () => {
  return (
    <section className="job-area pb-100 px-20">
  <div className="container">
    <div className="section-title">
      <h2>Recent Jobs</h2>
    </div>
    <div className="sorting-menu">
      <ul>
        <li className="filter active" data-filter="all">
          All
        </li>
        <li className="filter" data-filter=".web">
          New
        </li>
        <li className="filter" data-filter=".ui">
          Featured
        </li>
        <li className="filter" data-filter=".branding">
          Recent
        </li>
        <li className="filter" data-filter=".ux">
          Full Time
        </li>
        <li className="filter" data-filter=".wp">
          Part Time
        </li>
      </ul>
    </div>
    <div id="container">
      <div className="row">
        <div className="col-lg-6 mix web ui">
          <div className="job-item">
            <img src="assets/img/home-1/jobs/1.png" alt="Job" />
            <div className="job-inner align-items-center">
              <div className="job-inner-left">
                <h3>
                  <a href="job-details.html">UI/UX Designer</a>
                </h3>
                <a className="company" href="company-details.html">
                  Winbrans.com
                </a>
                <ul>
                  <li>
                    <i className="icofont-money-bag" />
                    $20k - $25k
                  </li>
                  <li>
                    <i className="icofont-location-pin" />
                    Location 210-27 Quadra, Market Street, Victoria Canada
                  </li>
                </ul>
              </div>
              <div className="job-inner-right">
                <ul>
                  <li>
                    <a href="create-account.html">Apply</a>
                  </li>
                  <li>
                    <span>Full Time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mix ui web">
          <div className="job-item">
            <img src="assets/img/home-1/jobs/2.png" alt="Job" />
            <div className="job-inner align-items-center">
              <div className="job-inner-left">
                <h3>
                  <a href="job-details.html">Android Developer</a>
                </h3>
                <a className="company" href="company-details.html">
                  Infiniza.com
                </a>
                <ul>
                  <li>
                    <i className="icofont-money-bag" />
                    $20k - $25k
                  </li>
                  <li>
                    <i className="icofont-location-pin" />
                    Location 210-27 Quadra, Market Street, Victoria Canada
                  </li>
                </ul>
              </div>
              <div className="job-inner-right">
                <ul>
                  <li>
                    <a href="create-account.html">Apply</a>
                  </li>
                  <li>
                    <span>Part Time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mix branding wp">
          <div className="job-item">
            <img src="assets/img/home-1/jobs/3.png" alt="Job" />
            <div className="job-inner align-items-center">
              <div className="job-inner-left">
                <h3>
                  <a href="job-details.html">Senior Manager</a>
                </h3>
                <a className="company" href="company-details.html">
                  Glovibo.com
                </a>
                <ul>
                  <li>
                    <i className="icofont-money-bag" />
                    $20k - $25k
                  </li>
                  <li>
                    <i className="icofont-location-pin" />
                    Location 210-27 Quadra, Market Street, Victoria Canada
                  </li>
                </ul>
              </div>
              <div className="job-inner-right">
                <ul>
                  <li>
                    <a href="create-account.html">Apply</a>
                  </li>
                  <li>
                    <span>Intern</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mix ux branding">
          <div className="job-item ">
            <img src="assets/img/home-1/jobs/4.png" alt="Job" />
            <div className="job-inner align-items-center">
              <div className="job-inner-left">
                <h3>
                  <a href="job-details.html">Product Designer</a>
                </h3>
                <a className="company" href="company-details.html">
                  Bizotic.com
                </a>
                <ul>
                  <li>
                    <i className="icofont-money-bag" />
                    $20k - $25k
                  </li>
                  <li>
                    <i className="icofont-location-pin" />
                    Location 210-27 Quadra, Market Street, Victoria Canada
                  </li>
                </ul>
              </div>
              <div className="job-inner-right">
                <ul>
                  <li>
                    <a href="create-account.html">Apply</a>
                  </li>
                  <li>
                    <span>Part Time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mix wp web">
          <div className="job-item">
            <img src="assets/img/home-1/jobs/5.png" alt="Job" />
            <div className="job-inner align-items-center">
              <div className="job-inner-left">
                <h3>
                  <a href="job-details.html">Digital Marketer</a>
                </h3>
                <a className="company" href="company-details.html">
                  Hotelzo.com
                </a>
                <ul>
                  <li>
                    <i className="icofont-money-bag" />
                    $20k - $25k
                  </li>
                  <li>
                    <i className="icofont-location-pin" />
                    Location 210-27 Quadra, Market Street, Victoria Canada
                  </li>
                </ul>
              </div>
              <div className="job-inner-right">
                <ul>
                  <li>
                    <a href="create-account.html">Apply</a>
                  </li>
                  <li>
                    <span>Intern</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mix web ui">
          <div className="job-item">
            <img src="assets/img/home-1/jobs/6.png" alt="Job" />
            <div className="job-inner align-items-center">
              <div className="job-inner-left">
                <h3>
                  <a href="job-details.html">Sales Manager</a>
                </h3>
                <a className="company" href="company-details.html">
                  Gozuto.com
                </a>
                <ul>
                  <li>
                    <i className="icofont-money-bag" />
                    $20k - $25k
                  </li>
                  <li>
                    <i className="icofont-location-pin" />
                    Location 210-27 Quadra, Market Street, Victoria Canada
                  </li>
                </ul>
              </div>
              <div className="job-inner-right">
                <ul>
                  <li>
                    <a href="create-account.html">Apply</a>
                  </li>
                  <li>
                    <span>Part Time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mix ux ui">
          <div className="job-item">
            <img src="assets/img/home-1/jobs/7.png" alt="Job" />
            <div className="job-inner align-items-center">
              <div className="job-inner-left">
                <h3>
                  <a href="job-details.html">Web Developer</a>
                </h3>
                <a className="company" href="company-details.html">
                  Udiza.com
                </a>
                <ul>
                  <li>
                    <i className="icofont-money-bag" />
                    $20k - $25k
                  </li>
                  <li>
                    <i className="icofont-location-pin" />
                    Location 210-27 Quadra, Market Street, Victoria Canada
                  </li>
                </ul>
              </div>
              <div className="job-inner-right">
                <ul>
                  <li>
                    <a href="create-account.html">Apply</a>
                  </li>
                  <li>
                    <span>Full Time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mix branding web">
          <div className="job-item">
            <img src="assets/img/home-1/jobs/8.png" alt="Job" />
            <div className="job-inner align-items-center">
              <div className="job-inner-left">
                <h3>
                  <a href="job-details.html">SEO</a>
                </h3>
                <a className="company" href="company-details.html">
                  Oqota.com
                </a>
                <ul>
                  <li>
                    <i className="icofont-money-bag" />
                    $20k - $25k
                  </li>
                  <li>
                    <i className="icofont-location-pin" />
                    Location 210-27 Quadra, Market Street, Victoria Canada
                  </li>
                </ul>
              </div>
              <div className="job-inner-right">
                <ul>
                  <li>
                    <a href="create-account.html">Apply</a>
                  </li>
                  <li>
                    <span>Part Time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="job-pagination">
      <ul>
        <li>
          <a href="#">
            <i className="icofont-simple-left" />
          </a>
        </li>
        <li>
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">
            <i className="icofont-simple-right" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>

  )
}

export default Jobs