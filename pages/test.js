import React from 'react';
import path from 'path';
import fs from 'fs'
import Head from 'next/head'
import matter from 'gray-matter';

export default function test({ posts}) {
  console.log(posts)

  return (
    <div>
      <Head>
        <title> Blogs</title>
      </Head>

       <div className='posts'>
      {posts.map((post,index)=>(
        <h3>{post.frontmatter.title}</h3>
      ))}
      </div>

    
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
  console.log(posts)

  return {
    props: {
      posts,
    }
  }
}
