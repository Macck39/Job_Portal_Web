import axios from "axios";
import Link from "next/link";


// <div className="min-h-screen px-5 pt-24 ">
//        <div className="p-6 w-3/5 h-auto rounded-md shadow-md" >
//        <div className="flex flex-col align-baseline text-black " >
//         <h1 className=" text-xl item-center"></h1>
//         <div> {job.designation}  </div>
//         <div> {job.companyname}   </div>
//         <div>   {job.category}  </div>
//         <div>    {job.smalldesc} </div>
//         <div>  {job.location} </div>
//         </div>
//         </div> 
//         </div>
const Jobs = ({ job }) => {
    return (

        <div className="job-details-area pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="p-4  ">
                            <div className="flex rounded-lg h-full bg-gray-100 p-6 flex-col shadow-sm" >
                                <div className="flex items-center mb-3" >
                                    <h2 className="text-gray-900 text-md title-font font-medium " >
                                        {job.jobtitle || job.designation}
                                    </h2>
                                </div>
                                <div className="flex-grow" >
                                    <h2 className="text-gray-900 text-md title-font font-medium" >
                                        {job.companyname}
                                    </h2>
                                    <p className="leading-relaxed text-base left-align" >
                                        {job.smalldesc}
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="job-details-item">
                            <div className="job-description">
                                <h2>{job.jobtitle || job.designation}</h2>
                                {(job.jobdescription)}
                            </div>
                            <div className="job-knowledge">
                                <h2>Required Knowledge, Skills, and Abilities</h2>
                                <ul>
                                    <li>
                                        <i className="icofont-hand-drawn-right"></i>
                                        Hand On experience with Wordpress
                                    </li>
                                    <li>
                                        <i className="icofont-hand-drawn-right"></i>
                                        Better knowledge of front-end technologies, including HTML5, CSS3, JavaScript, jQuery
                                    </li>
                                    <li>
                                        <i className="icofont-hand-drawn-right"></i>
                                        Belief – believing in yourself and those around you
                                    </li>
                                    <li>
                                        <i className="icofont-hand-drawn-right"></i>
                                        Experience designing and developing responsive design websites
                                    </li>
                                    <li>
                                        <i className="icofont-hand-drawn-right"></i>
                                        Ability to convert comprehensive layout and wireframes into working HTML pages
                                    </li>
                                    <li>
                                        <i className="icofont-hand-drawn-right"></i>
                                        Strong understanding of PHP back-end development
                                    </li>
                                </ul>
                            </div>
                            <div className="job-knowledge">
                                <h2>Education Qualification</h2>
                                <ul>
                                    <li>
                                        <i className="icofont-hand-drawn-right"></i>
                                        Any Graduattion Degree(13th Pass) (Preferred)
                                    </li>
                                    <li>
                                        <i className="icofont-hand-drawn-right"></i>
                                        Advanced degree or equivalent experience in graphic and web design
                                    </li>
                                    <li>
                                        <i className="icofont-hand-drawn-right"></i>
                                        2 or more years of professional design experience
                                    </li>
                                    <li>
                                        <i className="icofont-hand-drawn-right"></i>
                                        Direct response email experience
                                    </li>
                                    <li>
                                        <i className="icofont-hand-drawn-right"></i>
                                        Ecommerce website design experience
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <a className="job-details-btn" href="create-account.html">Apply Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="job-details-item">
                            <div className="job-overview">
                                <h3>Overview</h3>
                                <ul>
                                    <li>
                                        <i className="icofont-dollar"></i>
                                        <p>Offered Salary</p>
                                        <span>$10k-$150k</span>
                                    </li>
                                    <li>
                                        <i className="icofont-users-alt-3"></i>
                                        <p>Gender</p>
                                        <span>Male</span>
                                    </li>
                                    <li>
                                        <i className="icofont-badge"></i>
                                        <p>Experince</p>
                                        <span>2 Years</span>
                                    </li>
                                    <li>
                                        <i className="icofont-graduate"></i>
                                        <p>Qualification</p>
                                        <span>Master Degree</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="job-overview job-company">
                                <h3>Company Address</h3>
                                <ul>
                                    <li>
                                        <i className="icofont-location-pin"></i>
                                        <span>4th Floor, 408 No Chamber</span>
                                    </li>
                                    <li>
                                        <i className="icofont-ui-call"></i>
                                        <a href="tel:+07554332322">Call : +07 554 332 322</a>
                                    </li>
                                    <li>
                                        <i className="icofont-ui-email"></i>
                                        <a href="mailto:hello@gable.com">hello@gable.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps({ params: { jobid } }) {

    const url = process.env.URL;

    const res = await fetch(`${url}jobs/find/${jobid}`);
    const job = await res.json();
    return {
        props: { job }
    }
}

export default Jobs