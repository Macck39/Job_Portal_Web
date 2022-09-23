import React from 'react';
import Link from "next/link";
import styled from "styled-components";
import JobCard from "../../components/job/JobCard"
import JobPosts from "../../components/job/JobPosts"

import axios from "axios"
import { useState } from 'react';


export default function Home({ jobs }) {


    const jobList = jobs.map(job => {
        return (
            <div className="p-4 md:w-1/3 " key={job._id}>
                <div className="flex rounded-lg h-full bg-gray-100 p-6 flex-col shadow-sm" >
                    <div className="flex items-center mb-3" >
                        <h2 className="text-gray-900 text-md title-font font-medium " >
                            {job.title || job.designation}
                        </h2>
                    </div>
                    <div className="flex-grow" >
                        <h2 className="text-gray-900 text-md title-font font-medium" >
                            {job.companyname}
                        </h2>
                        <p className="leading-relaxed text-base left-align" >
                           {job.smalldesc}
                        </p>
                        <Link href={'/search/[jobid]'} as={`/search/${job._id}`} className="">
                        <a className="p-1  m-2 border-4 text-sm rounded-md">
                            Apply Now  
                        </a>
                        </Link>
                    </div>
                </div>
            </div>


        )

    })


    // console.log(jobs);

    return (
        <section className="text-gray-600 body-font" >
            <div className="container px-5 py-24 mx-auto" >
                <div className="flex flex-wrap -m-4" >
                    {jobList}
                </div>
            </div>
        </section>


    )
}

export const getServerSideProps = async () => {
    const url = process.env.URL;

    try {
        console.log(url);
        const response = await axios.get(`${url}jobs/alljobs`);
        if (!response) { console.log("no data"); }
        const jobs = response.data;
        // console.log(jobs);

        return { props: { jobs } }

    } catch {   
        return {
            props: {}
        };
    }
}


