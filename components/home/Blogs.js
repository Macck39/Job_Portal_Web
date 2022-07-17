import React from 'react'

const Blogs = () => {
  return (
    <section className="blog-area pt-100 px-16">
      <div className="container">
        <div className="section-title">
          <h2>Our Latest Blogs</h2>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="blog-item wow fadeInUp" data-wow-delay=".3s">
              <div className="blog-top">
                <a href="blog-details.html">
                  <img src="assets/img/home-1/blog/1.jpg" alt="Blog" />
                </a>
                <span>21 May, 2020</span>
              </div>
              <div className="blog-bottom">
                <h3>
                  <a href="blog-details.html">
                    The next genaration IT will change the world
                  </a>
                </h3>
                <ul>
                  <li>
                    <img src="assets/img/home-1/blog/1.png" alt="Blog" />
                    Aikin Ward
                  </li>
                  <li>
                    <a href="blog-details.html">
                      Read More
                      <i className="icofont-simple-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="blog-item wow fadeInUp" data-wow-delay=".4s">
              <div className="blog-top">
                <a href="blog-details.html">
                  <img src="assets/img/home-1/blog/2.jpg" alt="Blog" />
                </a>
                <span>22 May, 2020</span>
              </div>
              <div className="blog-bottom">
                <h3>
                  <a href="blog-details.html">
                    It is the most important sector in the world
                  </a>
                </h3>
                <ul>
                  <li>
                    <img src="assets/img/home-1/blog/1.png" alt="Blog" />
                    Aikin Ward
                  </li>
                  <li>
                    <a href="blog-details.html">
                      Read More
                      <i className="icofont-simple-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
            <div className="blog-item wow fadeInUp" data-wow-delay=".5s">
              <div className="blog-top">
                <a href="blog-details.html">
                  <img src="assets/img/home-1/blog/3.jpg" alt="Blog" />
                </a>
                <span>23 May, 2020</span>
              </div>
              <div className="blog-bottom">
                <h3>
                  <a href="blog-details.html">
                    Nowadays IT is being most popular
                  </a>
                </h3>
                <ul>
                  <li>
                    <img src="assets/img/home-1/blog/1.png" alt="Blog" />
                    Aikin Ward
                  </li>
                  <li>
                    <a href="blog-details.html">
                      Read More
                      <i className="icofont-simple-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Blogs