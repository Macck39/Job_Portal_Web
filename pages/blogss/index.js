import React from 'react'
import Link from 'next/link'

export default function index(){
  return (
    <div className='my-20 p-20'>
    <div className='container bg-slate-500'>
    This is blog post 
    
    <Link href={"/blogs/blogposts"}>
    <a>Link to go next</a>
    </Link> 
    </div>
    </div>
  )
}

