import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function BlogPosts(allPostsData) {
  return (
    <div><div className="page-title-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="page-title-text">
              <h2>Blog</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

      <section className="blog-area pt-100 px-20">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="blog-item wow fadeInUp" data-wow-delay=".3s">
                <div className="blog-top">
                  <Link href={{
                    pathname: '/blogs/[slug]',
                    query: { slug: 'my-post' },
                  }}>
                    <a><Image src={"/assets/img/home-1/blog/1.jpg"} alt="Blog" height={800} width={850} /></a>
                  </Link>

                  <span>21 May, 2020</span>
                </div>
                <div className="blog-bottom">
                  <h3>
                    <Link href={{ pathname: '/blogs/[slug]',query: { slug: 'my-post' },}}>
                      <a>The next genaration IT will change the world</a>
                    </Link>
                  </h3>
                  <ul>
                    <li>
                      <img src="assets/img/home-1/blog/1.png" alt="Blog" />
                      Aikin Ward
                    </li>
                    <li>
                      <a href="">
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
                  <a href="">
                    <img src="assets/img/home-1/blog/2.jpg" alt="Blog" />
                  </a>
                  <span>22 May, 2020</span>
                </div>
                <div className="blog-bottom">
                  <h3>
                    <a href="">
                      IT is the most important sector in the world
                    </a>
                  </h3>
                  <ul>
                    <li>
                      <img src="assets/img/home-1/blog/1.png" alt="Blog" />
                      Daniel Henry
                    </li>
                    <li>
                      <a href="">
                        Read More
                        <i className="icofont-simple-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="blog-item wow fadeInUp" data-wow-delay=".5s">
                <div className="blog-top">
                  <a href="">
                    <img src="assets/img/home-1/blog/3.jpg" alt="Blog" />
                  </a>
                  <span>23 May, 2020</span>
                </div>
                <div className="blog-bottom">
                  <h3>
                    <a href="">
                      Nowadays IT is being most popular
                    </a>
                  </h3>
                  <ul>
                    <li>
                      <img src="assets/img/home-1/blog/1.png" alt="Blog" />
                      Lucas Mason
                    </li>
                    <li>
                      <a href="">
                        Read More
                        <i className="icofont-simple-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="blog-item wow fadeInUp" data-wow-delay=".3s">
                <div className="blog-top">
                  <a href="">
                    <img src="assets/img/home-1/blog/4.jpg" alt="Blog" />
                  </a>
                  <span>26 May, 2020</span>
                </div>
                <div className="blog-bottom">
                  <h3>
                    <a href="">
                      IT job is an smart profession in the world
                    </a>
                  </h3>
                  <ul>
                    <li>
                      <img src="assets/img/home-1/blog/1.png" alt="Blog" />
                      William James
                    </li>
                    <li>
                      <a href="">
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
    </div>

  )
}

import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}