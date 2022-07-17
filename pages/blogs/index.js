import React from 'react'
import path from 'path'
import Head from 'next/head'
import matter from 'gray-matter'
import BlogPosts from '../../components/blog/BlogPosts'
import fs from 'fs'
import {sortByDate} from '../../components/blog/sortByDate'

export default function blogs ({ posts }){
  return (
    <BlogPosts posts={posts}/>
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
