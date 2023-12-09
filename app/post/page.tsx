import Link from "next/link";
import { client } from "../lib/sanity";
import { Post } from "../lib/interface";
import LottieePage from "@/components/Lottiee";

async function getData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query);
  return data;
}

export default async function IndexPage() {
  const data = (await getData()) as Post[];

  return (
    <>
      <div className="relative isolate overflow-hidden sm:py-24"> 
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-rose-500 sm:text-6xl whitespace-nowrap">
              The posts that I write OR like
            </h2>

            <LottieePage />
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <hr className="text-white w-full" />
            </div>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <ul className="mt-10">
              {data.map((post) => (
                <li key={post._id} className="py-4">
                  <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <div>
                      <p className="text-base font-medium leading-6 text-teal-500">
                        {new Date(post._createdAt).toISOString().split("T")[0]}
                      </p>
                    </div>

                    <Link
                      href={`/post/${post.slug.current}`}
                      prefetch
                      className="space-y-3 xl:col-span-3"
                    >
                      <div>
                        <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                          {post.title}
                        </h3>
                      </div>

                      <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                        {post.overview}
                      </p>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
