import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from "../components/home/Banner"
import Account from "../components/home/Account"
import Category from "../components/home/Category"
import Portal from "../components/home/Portal"
import Jobs from "../components/home/Jobs"
import Popular from "../components/home/Popular"
import Addapp from "../components/home/Addapp"
import Blogs from "../components/home/Blogs"

import path from 'path'
import matter from 'gray-matter'
import fs from 'fs'
import {sortByDate} from '../components/blog/sortByDate'






export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Job Sahi Hai</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Job Portal providing hriring solutions for employees as well as for employers" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="job provider, job, vacancies, opportunities" />
      </Head>
      <main>
        <Banner />
        <Account />
        <Category />
        <Jobs />
        <Portal />
        <Popular />
        {/* <Profile />*/}
        <Addapp />
        <Blogs posts={posts}/>
      </main>
      
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
