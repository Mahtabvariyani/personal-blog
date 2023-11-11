import Link from "next/link";
import { client } from "../lib/sanity";
import { Post } from "../lib/interface";

async function getData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query);
  return data;
}
const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

export default async function IndexPage() {
  const data = (await getData()) as Post[];

  return (
    <>
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-rose-500 sm:text-6xl">
              The posts that i write MySelf 
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
             It can be about anything ... maybe a Question about coding or just a small Story ... it can even be a joke .... 
             it can also be just a pictures :)
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
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
