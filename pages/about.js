import React from 'react'
import Blogs from '../components/home/Blogs'
import Popular from '../components/home/Popular'
import Category from "../components/home/Category";
import Portal from "../components/home/Portal";
import Welcome from '../components/about/Welcome'
import {sortByDate} from '../components/blog/sortByDate'
import path from 'path'
import matter from 'gray-matter'
import fs from 'fs'


export default function About({ posts}) {
  return (
    <div className="container">
    <Category />
    <Welcome />
    <Portal />
    <Popular />
    <Blogs  posts={posts}/>
    </div>
  )
}

export async function getStaticProps() {
  //get files from the blogpost dir

  const files = fs.readdirSync(path.join('blogpost'))

  //get slug and frontmatter from blogpost
  const posts = files.map((filename) => {
    //create Slug
    const slug = filename.replace('.md', '')
    //Get frontmatter

    const markdownWithMeta = fs.readFileSync(path.join('blogpost',filename),'utf-8')
    
    const {data:frontmatter} = matter(markdownWithMeta)
  
    return {
      slug,
      frontmatter
    }
  })
  
  // console.log(posts)

  return {
    props: {
      posts: posts.sort(sortByDate)
    }
  }
}

