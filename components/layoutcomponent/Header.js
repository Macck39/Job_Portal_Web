import React from 'react'
import Link from 'next/link';
import Image from "next/image";


const Header = () => {
  return (
    <div>
      <div className="mobile-nav  ">
      <Link href="/" >
        <a className="logo">
        <Image src="/assets/img/logo.png" height="400" width="400" alt="Logo" objectFit="contain" />
        </a>
        </Link>
      </div>
      <div className="main-nav fixed shadow-md px-16">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link href="/">
              <a className='navbar-brand '>
                <Image src="/assets/img/logo.jpeg" height="400" width="400" alt="Logo" objectFit="contain" />
              </a>
            </Link>
            <div className="collapse navbar-collapse mean-menu flex justify-center flex-grow " id="navbarSupportedContent" >
              <ul className="navbar-nav flex space-x-8">
                <li className="nav-item">
                  <Link href="/" className="nav-link">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about" className="nav-link">
                    <a >About</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/findjobs" className="nav-link">
                    <a >Find Jobs </a>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link href="/blogs" className="nav-link">
                    <a>Blogs</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className="nav-link">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
              <div className="common-btn items-center sm:space-x-2 justify-end">
                <div><Link href="/login">
                  <a className="login-btn "> <i className="icofont-plus-square"></i>
                    Login
                  </a>
                </Link>
                  <Link href="/signup">
                    <a className="sign-up-btn"> <i className="icofont-user-alt-4"></i>
                      Sign Up
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

  )
}

export default Header










{/*
import React from 'react'
import Link from 'next/link';
import Image from "next/image";


const Header = () => {
  return (
    <div className="navbar-area fixed-top">
      <div className="mobile-nav ">
      <Link href="/" >
        <a className="logo">
        <Image src="/assets/img/logo.png" height="400" width="400" alt="Logo" objectFit="contain" />
        </a>
        </Link>
      </div>

      
      <div className="main-nav shadow-md">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link href="/">
              <a className='navbar-brand '>
                <Image src="/assets/img/logo.jpeg" height="400" width="400" alt="Logo" objectFit="contain" />
              </a>
            </Link>
            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent" >
              <ul className="navbar-nav flex space-x-8">
                <li className="nav-item">
                  <Link href="/" className="nav-link">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about" className="nav-link">
                    <a >About</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/findjobs" className="nav-link">
                    <a >Find Jobs </a>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link href="/blogs" className="nav-link">
                    <a>Blogs</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className="nav-link">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
              <div className="common-btn items-center sm:space-x-2 justify-end">
                <div><Link href="/login">
                  <a className="login-btn "> <i className="icofont-plus-square"></i>
                    Login
                  </a>
                </Link>
                  <Link href="/signup">
                    <a className="sign-up-btn"> <i className="icofont-user-alt-4"></i>
                      Sign Up
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

  )
}

export default Header
*/}