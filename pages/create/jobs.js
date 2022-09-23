import { useState } from 'react'
import dynamic from 'next/dynamic'




const RichTextEditor = dynamic(() => import('../../components/RichTextEditor.js'), {
   
    ssr: false
});

const config = {
    buttons: ['source', '|',
        'bold',
        'strikethrough',
        'underline',
        'italic', '|',
        'ul',
        'ol', '|',
        'outdent', 'indent', '|',
        'font',
        'fontsize',
        'brush',
        'paragraph', '|',
        'image',
        'video',
        'table',
        'link', 'unlink', '|',
        'align', 'undo', 'redo', '|',
        'hr',
        'eraser',
        'copyformat', '|',
        'symbol',
        'fullsize',
        'print',
        'about']
}


export default function Index() {


    const [companyName, setCompanyName] = useState("");
    const [title, setTitle] = useState("");
    const [jobType, setJobType] = useState("");
    const [openings, setOpenings] = useState("");
    const [details, setDetails] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(
            companyName,
            title,
            jobType,
            openings,
            
        )
        // const res = await axios.post(`http://localhost:8000/api/jobs`, {
        // })
        // const res2 = await res.data

        // // console.log("hii");

        // if (res2.error) {
        //             console.log(res2.error);

        // } else {
        //     console.log(res2);
        // }
    }

    return (
        <>
            <div className="post-job-area pt-100 ">
                <div className="container pt-20">
                    <div className="post-job-item">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="post-job-heading">
                                <h2>Post Your Job</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Job Title</label>
                                        <input type="text"
                                            value={title}
                                            className="form-control"
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder="Title" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Job Category/Industry</label>
                                        <div className="job-category-area">
                                            <select className="form-select" aria-label="Default select example">
                                                <option>IT & Technology</option>
                                                <option>Web Developer</option>
                                                <option>UX/UI Design</option>
                                                <option>SEO</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Company Name</label>
                                        <input type="text" value={companyName} className="form-control" onChange={(e) => setCompanyName(e.target.value)} placeholder="Winbrans.com" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label> JobType part/full</label>
                                        <input type="text" value={jobType} className="form-control" onChange={(e) => setJobType(e.target.value)} placeholder="Winbrans.com" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Openings</label>
                                        <input type="text" value={openings} className="form-control" onChange={(e) => setOpenings(e.target.value)} placeholder="Winbrans.com" />
                                    </div>
                                </div>



                                <div className="col-lg-12 text-gray-600">
                                    <div className="form-group">
                                        <label>Job Description</label>
                                        <RichTextEditor setDetails={setDetails} config={config} />
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: details }}>
                                        </div>
                                        
                                </div>
                            </div>
                            <div className="text-left">
                                <button type="submit" className="btn create-ac-btn bg-lime-400">Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

