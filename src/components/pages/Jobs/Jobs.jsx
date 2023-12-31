import React from 'react'
import { useLoaderData } from 'react-router-dom';
import SignleJob from './SignleJob';

const Jobs = () => {
  const allJobs = useLoaderData();

  return (
    <div>
      {
        allJobs?.map((singleJob)=>(
          <SignleJob key={singleJob.id} singleJob={singleJob}/>
        ))
      }
    </div>
  )
}

export default Jobs;