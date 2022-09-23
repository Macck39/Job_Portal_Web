import React from 'react'
import Head from 'next/head'
import JobCard from './JobCard'




export default function JobPosts({jobs}) {


  return (
    <div>
      <div className="page-title-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="page-title-text">
              <h2>Jobs</h2>
            </div>
          </div>
        </div>  
      </div>
    </div>

      <section className="blog-area pt-100 px-20 ">
        <div className="container ">
          <div className="row bg-black">

          {jobs.map((job)=>{
            <JobCard key={job._id} />
          })}

          </div>
        </div>
      </section>
    </div>

  )
}



{/*<Link href={{ pathname: '/blogss/[slug]', query: { slug: 'my-post' }, }}>
 </Link>*/}