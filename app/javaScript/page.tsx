import Link from "next/link";
import { client } from "../lib/sanity";
import { Interview } from "../lib/interface";
import LottieePage from "@/components/Lottiee";
import Image from "next/image";

async function getData() {
  const query = `*[_type == "interviewQuestion"]`;

  const data = await client.fetch(query);
  return data;
}

export default async function IndexPage() {
  const data = (await getData()) as Interview[];

  return (
    <>
      <div className="relative isolate overflow-hidden sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 flex flex-row">
            <h2 className="text-2xl mt-6 font-bold tracking-tight text-gray-200 sm:text-4xl whitespace-nowrap">
              The JavaScript Interview Questions
            </h2>

            <Image
              src="/js.png"
              alt="js"
              width={100}
              height={100}
              className="ml-4 pb-3"
            />
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
                      <p className="text-base font-medium leading-6 text-sky-500">
                        {new Date(post._createdAt).toISOString().split("T")[0]}
                      </p>
                    </div>

                    <Link
                      href={`/javaScript/${post.slug.current}`}
                      prefetch
                      className="space-y-3 xl:col-span-3"
                    >
                      <div>
                        <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-200 dark:text-gray-100">
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
