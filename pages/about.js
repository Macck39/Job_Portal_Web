import React from 'react'
import Title from '../components/about/Title'
import Blogs from '../components/home/Blogs'
import Counter from '../components/home/Counter'
import Popular from '../components/home/Popular'
import Category from "../components/home/Category";
import Portal from "../components/home/Portal";
import Welcome from '../components/about/Welcome'


export default function about() {
  return (
    <div>
    <Title />
    <Category />
    <Welcome />
    <Portal />
    <Counter />
    <Popular />
    <Blogs />
    </div>
  )
}

