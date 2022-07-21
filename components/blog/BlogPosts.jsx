import React from 'react'
import Head from 'next/head'
import PostCard from './PostCard'




export default function BlogPosts({ posts }) {
  // console.log(posts)
  return (
    <div>
    <Head>
        <title> Blogs</title>
      </Head>
      <div className="page-title-area">
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

          {posts.map((post)=>(
            
              <PostCard post={post} key={post.slug}/>
             
          ))}

          </div>
        </div>
      </section>
    </div>

  )
}

{/*export async function getStaticProps() {
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

*/}


{/*<Link href={{ pathname: '/blogss/[slug]', query: { slug: 'my-post' }, }}>
 </Link>*/}