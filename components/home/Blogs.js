import React from 'react'
import path from 'path'
import matter from 'gray-matter'
import PostCard from '../blog/PostCard'
import {sortByDate} from '../blog/sortByDate'


export default function Blogs({ posts }) {
  return (
    <section className="blog-area pt-100 px-16">
      <div className="container">
        <div className="section-title">
          <h2>Our Latest Blogs</h2>
        </div>
        <section className="blog-area pt-100 px-20">
        <div className="container">
          <div className="row">

          {posts.map((post)=>(
            
              <PostCard post={post} key={post.slug}/>
             
          ))}

          </div>
        </div>
      </section>
      </div>
    </section>

  )
}






