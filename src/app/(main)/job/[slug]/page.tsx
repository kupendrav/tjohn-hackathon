import MainBreadCrum from "@/components/MainBreadCrum";
import MainFilter from "@/components/MainFilter";
import Navbar from "@/components/Navbar";
import { Job } from "@/models/job.model";
import React from "react";

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await Job.findById(params.slug);

  return (
    <div className="px-10 md:px-16  " >
      <Navbar />
      <MainFilter />
      <MainBreadCrum />
      {/* {params.slug} */}
      <div className="m-2 p-3 border-solid border-2  max-w-80">

     <h1 className="font-bold">Title :{data.title}</h1> 
     
      <h4 className="font-medium">Location:{data.location}</h4>
     <br />
      <h4 className="font-medium">Mode:{data.mode}</h4>
      
     <br />
      <h4 className="font-medium"> Salary:{data.salary}</h4>
     
     <br />
      <h4 className="font-medium">Description:{data.description}</h4>
      
     <br />
      {/* {data.toString()} */}

      </div>
    </div>
  );
};

export default page;
