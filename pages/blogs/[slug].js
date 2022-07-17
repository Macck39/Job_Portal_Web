import React from 'react'
import { useRouter } from 'next/router'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'


export default function PostPage({ frontmatter: { title, date, image }, slug, content }) {

  return (
    <div className="pt-20">
      <div className="blog-details-area ptb-100">
        <h1 className="text-center pb-8 font-bold text-4xl">{title}</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-item">
                <div className="blog-details-img">
                  <img src={image} alt="Blog Details" />
                  <ul>
                    <li>
                      <i className="icofont-calendar" />
                      {date}
                    </li>
                    <li>
                      <i className="icofont-user-alt-7" />
                      Roshan Sahrma
                      </li>
                  </ul>
                  <div className="pt-4 text-black" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>

                </div>
                 
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
                  <Link href="/blogs"><a>Go Back</a></Link>
                </div>
                {/*<div className="previous-right">
                  <a href="#">Next</a>
  </div>*/}
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
              </div>
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
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('blogpost'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('blogpost', slug + '.md'), 'utf-8')
  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter,
      slug,
      content
    },
  }
}



