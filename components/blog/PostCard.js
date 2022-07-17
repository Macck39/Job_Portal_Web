import React from 'react';
import Link from 'next/link'
// import Image from 'next/image'


export default function PostCard({ post }) {
    return (
        <div className="col-sm-6 col-lg-4">
            <div className="blog-item wow fadeInUp" data-wow-delay=".3s">
                <div className="blog-top">
                    <img src={post.frontmatter.image} alt="blog_img" />
                    <span>{post.frontmatter.date}</span>
                </div>
                <div className="blog-bottom">
                    <h3>
                        <Link as={`/blogs/${post.slug}`} href="/blogs/[slug]" >
                            <a>
                            {post.frontmatter.title}
                            </a>
                        </Link>
                    </h3>
                    <ul>
                        <li>
                            <img src="assets/img/home-1/blog/1.png" alt="Blog" />
                            Roshan Sharma
                        </li>
                        <li>
                            <Link href={`/blogs/${post.slug}`}>
                                <a>
                                    Read More
                                    <i className="icofont-simple-right" />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

