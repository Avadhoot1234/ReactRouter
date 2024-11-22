import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Jobs = () => {

    const jobload=useLoaderData();
  return (
    <div>
      <h1>Latest job listing</h1>
      <p>Following are the tech roles only</p>

      {/* {jobload.map((job)=>{
        return <Link>
            <h3>{job.title}</h3>
            <h4>{job.location}</h4>
        </Link>
      })} */}
    </div>
  )
  
}

export default Jobs

export const jobsLoader=async()=>{
    const result=await fetch("http://localhost:3000/jobs");
    return result.json();
}
