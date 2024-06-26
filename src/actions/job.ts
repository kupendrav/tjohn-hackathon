"use server";

import { Job } from "@/models/job.model";
import { redirect } from "next/navigation";

const createJob = async (formData: FormData) => {
  console.log(formData);
  const mode = formData.get("mode");
  const title = formData.get("title");
  const description = formData.get("description");
  const salary = formData.get("salary");
  let tags = (formData.get("tags") as string).split(",");
  const location = formData.get("location");

  const newJob = await Job.create({
    title,
    mode,
    salary,
    location,
    description,
    tags,
  });
  redirect("/")
  

};

export { createJob };
