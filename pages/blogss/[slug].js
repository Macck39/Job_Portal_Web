import React from 'react'
import { useRouter } from 'next/router'



export default function Slug() {

  const router = useRouter();
  const { slug } = router.query;  

  return <div >
    <h1> Title of the Page {slug}</h1>
    <hr />

    <div className="blog-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-details-item">
              <div className="blog-details-img">
                <img src="/assets/img/blod-details/2.jpg" alt="Blog Details" />
                <h3>
                  When you create your resume, you may wonder if it&apos;s acceptable
                  to change the job title of a position that you held, or maybe
                  you&apos;re thinking about expanding the amount of time you held the
                  job.
                </h3>
                <ul>
                  <li>
                    <i className="icofont-calendar" />
                    26 May, 2020
                  </li>
                  <li>
                    <i className="icofont-user-alt-7" />
                    <a href="#">Aikin Ward</a>
                  </li>
                </ul>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry&apos;s standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged.
                </p>
                <p>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </div>
            {/* 
              <div className="blog-details-social">
                <span>Share:</span>
                <ul>
                  <li>
                    <a href="#">
                      <i className="icofont-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="blog-details-nav">
                <div className="previous-left">
                  <a href="#">Previous</a>
                </div>
                <div className="previous-right">
                  <a href="#">Next</a>
                </div>
              </div>
              <div className="blog-details-form">
                <h3>Drop Your Comment</h3>
                <form id="contactForm">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      required=""
                      data-error="Please enter your name"
                      placeholder="Your Name"
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      required=""
                      data-error="Please enter your email"
                      placeholder="Your Email"
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone_number"
                      id="phone_number"
                      required=""
                      data-error="Please enter your number"
                      className="form-control"
                      placeholder="Your Phone"
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      id="message"
                      cols={30}
                      rows={8}
                      required=""
                      data-error="Write your message"
                      placeholder="Your Message"
                      defaultValue={""}
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="text-left">
                    <button type="submit" className="btn blog-details-btn">
                      Post Your Comment
                    </button>
                  </div>
                  <div id="msgSubmit" className="h3 text-center hidden" />
                  <div className="clearfix" />
                </form>
              </div>*/}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-details-item">
              <div className="single-resume-category">
                <h3>Job Categories</h3>
                <ul>
                  <li>
                    <a href="#">Web Developer</a>
                    <span>(5)</span>
                  </li>
                  <li>
                    <a href="#">Web Designer</a>
                    <span>(2)</span>
                  </li>
                  <li>
                    <a href="#">UX/UI Designer</a>
                    <span>(7)</span>
                  </li>
                  <li>
                    <a href="#">Marketing</a>
                    <span>(0)</span>
                  </li>
                  <li>
                    <a href="#">SEO</a>
                    <span>(1)</span>
                  </li>
                  <li>
                    <a href="#">Networking</a>
                    <span>(0)</span>
                  </li>
                </ul>
              </div>
              <div className="single-resume-category">
                <h3>Job Locations</h3>
                <ul>
                  <li>
                    <a href="#">New York</a>
                    <span>(4)</span>
                  </li>
                  <li>
                    <a href="#">Washington</a>
                    <span>(5)</span>
                  </li>
                  <li>
                    <a href="#">Chicago</a>
                    <span>(3)</span>
                  </li>
                  <li>
                    <a href="#">Houston</a>
                    <span>(1)</span>
                  </li>
                  <li>
                    <a href="#">Los Angeles</a>
                    <span>(0)</span>
                  </li>
                </ul>
              </div>
              <div className="single-resume-category single-resume-types">
                <h3>Job Types</h3>
                <ul>
                  <li>
                    <a href="#">Freelance</a>
                    <span>(11)</span>
                  </li>
                  <li>
                    <a href="#">Part Time</a>
                    <span>(9)</span>
                  </li>
                  <li>
                    <a href="#">Full Time</a>
                    <span>(7)</span>
                  </li>
                  <li>
                    <a href="#">Internship</a>
                    <span>(13)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
}




