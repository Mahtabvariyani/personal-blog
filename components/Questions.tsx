import React from "react";
import { client } from "@/app/lib/sanity";
import Link from "next/link";

interface InterviewQuestion {
  title: string;
  overview: string;
  content: any;
  _id: string;
  slug: {
    current: string;
  };
  _createdAt: string;
}

async function getData() {
  const query = `*[_type == "interviewQuestion"]`;

  const data = await client.fetch(query);
  return data;
}

export default async function page() {
  const data = (await getData()) as InterviewQuestion[];
  return (
    <div>
      {data.map((interviewQuestion) => (
        <div key={interviewQuestion._id}>
          <Link
            href={`/InterviewQuestion/${interviewQuestion.slug.current}`}
            prefetch
            className="space-y-3 xl:col-span-3"
          >
            {interviewQuestion.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
