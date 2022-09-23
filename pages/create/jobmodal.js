import Link from 'next/link'
import {useState} from 'react'


export default function JobModal(){
    let fruits = [
        { label: "Apple", value: "🍎" },
        { label: "Banana", value: "🍌" },
        { label: "Orange", value: "🍊" }
    ]
    let [fruit, setFruit] = useState("⬇️ Select a fruit ⬇️")

    let handleFruitChange = (e) => {
        setFruit(e.target.value)
      }
   const [category,setCategory] = useState();

   const [companyName,setCompanyName] = useState();
   
   const [title,setTitle] = useState();
   const url = process.env.URL

    const handleSubmit = async (e)=>{
      e.preventDefault()
      try{
            
      const res =  await fetch(`${url}/jobs/`,{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          name,
          price,
          mediaUrl,
          description
        })
      })
      const res2 = await res.json()
      if(res2.error){
        M.toast({html: res2.error,classes:"red"})
      }else{
        M.toast({html: "Product saved",classes:"green"})
      }
      }catch(err){
        console.log(err)
      }
 
    }
    
    return(
        <>
     <div className="post-job-area pt-100 ">
            <div className="container pt-20">
                <div className="post-job-item">
                    <form>
                        <div className="post-job-heading">
                            <h2>Define Your Job</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Job Title</label>
                                    <input type="text" value={title} className="form-control" placeholder="UX/UI Designer"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Job Category</label>
                                    <div className="job-category-area">
                                        <select className="form-select" aria-label="Default select example">
                                            <option>IT & Technology</option>
                                            <option>Web Developer</option>
                                            <option>UX/UI Design</option>
                                            <option>SEO</option>
                                        </select>
                                        {fruit}
                                        <select onChange={handleFruitChange}> 
                                        <option value="⬇️ Select a fruit ⬇️"> -- Select a fruit -- </option>
                                              
                                        {fruits.map((fruit) => <option key={fruit.label} value={fruit.value}>{fruit.label}</option>)}
                                      </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Company Name</label>
                                    <input type="text" value={companyName} className="form-control" placeholder="Winbrans.com"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <div className="job-currency-area">
                                        <label>Company Name</label>
                                        <input type="text" className="form-control" placeholder="Winbrans.com"/>
                                        <select className="form-select" aria-label="Default select example">
                                            <option>$USD</option>
                                            <option>EURO</option>
                                            <option>POUND</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Vacancies</label>
                                    <input type="text" className="form-control" placeholder="10"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Location</label>
                                    <input type="text" className="form-control" placeholder="210-27 Quadra, Market Street, Victoria Canada"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <div className="job-type-area">
                                        <span>Job Type</span>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"  />
                                            <label className="form-check-label" htmlFor="inlineRadio1">Full Time</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                            <label className="form-check-label" htmlFor="inlineRadio2">Part Time</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option2" />
                                            <label className="form-check-label" htmlFor="inlineRadio3">Intern</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Job Description</label>
                                    <textarea id="your_message" rows="8" className="form-control"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="text-left">
                            <button type="submit" className="btn create-ac-btn">Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
</>
    )
  }
  


//   export async function getServerSideProps(ctx){
//     const cookie = parseCookies(ctx)
//      const user =  cookie.user ? JSON.parse(cookie.user) : ""
//     if(user.role == 'user' || user.role == '' ){
//         const {res} = ctx
//         res.writeHead(302,{Location:"/"})
//         res.end()
//     }
  
  
//     return {
//         props:{}
//     }
//   }
  
//   export default Create