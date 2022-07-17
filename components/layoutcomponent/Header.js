
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image"




export default function Testcomponent() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-sm fixed w-full z-10">
      <nav className="max-w-8xl mx-auto  px-4">
        <div className="flex justify-between">
          <div>
            <div className="flex items-end md:px-3 pb-1 ">
            <Link href="/" >
              <a>
              <Image src="/assets/img/logo.jpeg" className="rounded-full" height="75" width="85" alt="Logo" />
              </a>
              </Link>
              <h1 className=" font-bold text-xl cursor-pointer">JobSa<span className="text-green-500">hiHai</span></h1>
            </div>
          </div>
          <div className=" hidden md:flex text-sm lg:text-base xl:text-lg xl:pl-20" >
            <ul className="flex items-center space-x-8 lg:space-x-12 xl:space-x-16 px-1 md:px-3 py-4 text-gray-700  ">
              <li className="">
                <Link
                 href="/"
                className=" hover:bg-green-400 text-black hover:text-white  py-2 rounded-md font-medium">
                  <a className="hover:text-white">Home</a>
                </Link>
              </li>
              <li>
                <Link 
                 href="/about"
                 className=" hover:bg-green-400 text-black hover:text-white py-2 rounded-md font-medium">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link 
                href="/findjobs" 
                className=" hover:bg-green-400 text-black hover:text-white  py-2 rounded-md font-medium">
                  <a >Find Jobs </a>
                </Link>
              </li>
              <li>
                <Link 
                href="/blogs"
                className=" hover:bg-green-400 text-black hover:text-white  py-2 rounded-md font-medium">
                  <a>Blogs</a>      
                </Link>
              </li>
              <li>
                <Link 
                 href="/contact"
                 className=" hover:bg-green-400 text-black hover:text-white  py-2 rounded-md font-medium">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden md:flex items-center space-x-3 common-btn  md:flex-col lg:flex-row ">
          <Link href="/login">
                  <a className="login-btn"> <i className="icofont-plus-square "></i>
                    Login
                  </a>
                </Link>
                  <Link href="/signup">
                    <a className="sign-up-btn"> <i className="icofont-user-alt-4"></i>
                      Sign Up
                    </a>
                  </Link>
            {/*<a className="px-3 py-5 hover:text-gray-900 text-gray-200"> <i className="icofont-plus-square"></i>Login</a>
  <a className="px-3 py-3 bg-lime-600 hover:bg-yellow-500 text-yellow-900 hover:text-gray-900 rounded transition duration-300"> <i className="icofont-user-alt-4"></i>Sign Up</a>*/}

          </div>

          
          <div className=" flex md:hidden items-center">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-green-500 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
				
								{!isOpen ? (
									<svg
										className="block h-8 w-8"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-8 w-8"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
            </div>
          
          
          </nav>
          <Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
                    className=""
				>
					{(isOpen) => (
						<div className="md:hidden" >
							<div
								className=" py-3 px-6  flex flex-col items-center text-center">
							
								<Link href="/">
								<a className="cursor-pointer  hover:bg-green-500 text-black hover:text-white px-3 py-2 rounded-md text-base font-medium">Home</a>
								</Link>
								<Link
									href="/about"
									
								>
									<a className="cursor-pointer  hover:bg-green-500 text-black hover:text-white px-3 py-2 rounded-md text-base font-medium">About</a>
								</Link>

								<Link
									href="/findjobs"
									
								>
									<a className="cursor-pointer  hover:bg-green-500 text-black px-3 py-2 rounded-md text-base font-medium">Find Jobs</a>
								</Link>
								<Link
									href="/blogs"
									
								>
								<a className="cursor-pointer  hover:bg-green-500 text-black px-3 py-2 rounded-md text-base font-medium">Blogs</a>
								</Link>

								<Link
									href="/contact"
									
								>
									<a className="cursor-pointer  hover:bg-green-500 text-black px-3 py-2 rounded-md text-base font-medium">Contact</a>
								</Link>
							</div>
						</div>
					)}
				</Transition>
          </div>
          
          )
        }
        
