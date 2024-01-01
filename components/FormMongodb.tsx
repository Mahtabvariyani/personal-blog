"use client"
import { posts } from "@/constants";
import { FaGithub } from "react-icons/fa";
import { MdOutlineOnlinePrediction } from "react-icons/md";
import Moreinfo from "./MoreInfo";


export default function Example() {
  return (
    <div className="py-14 px-14 sm:py-32 -mt-10 -mb-[15rem]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-blue-200 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">
            The projects i did as Practice
          </p>
          <hr className="mt-7 w-full text-gray-200"   />

        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={index} className={`flex max-w-xl border-2  rounded-[80px] border-gray-300 p-9 flex-col items-start justify-between`}>
              <div className="flex items-center gap-x-4 text-xs">
              <Moreinfo  post={post} />
                <a
                  href={post.href}
                  className="relative z-10 rounded-full  py-1.5 font-medium flex text-white text-lg "
                >
                  <MdOutlineOnlinePrediction
                    size={30}
                    className="text-blue-400"
                  />
                  <h2 className="pl-1">

                  {post.category.title}
                  </h2>
                </a>
              </div>
              <div className="group relative">
                <p className="mt-5 line-clamp-4 text-sm leading-6 text-gray-300 hover:text-white">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <FaGithub
                  size={30}
                  className="text-blue-400 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-100">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-300">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
