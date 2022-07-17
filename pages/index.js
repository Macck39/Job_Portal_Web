import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from "../components/home/Banner"
import Account from "../components/home/Account"
import Category from "../components/home/Category"
import Portal from "../components/home/Portal"
import Jobs from "../components/home/Jobs"
import Popular from "../components/home/Popular"
import Profile from "../components/home/Profile"
import Addapp from "../components/home/Addapp"
import Blogs from "../components/home/Blogs"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Job Sahi Hai</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Job Portal providing hriring solutions for employees as well as for employers" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <Banner />
        <Account />
        <Category />
        <Portal />
        <Jobs />
        <Popular />
        {/* <Profile />*/}
        <Addapp />
        <Blogs />
      </main>
    </div>
  )
}
