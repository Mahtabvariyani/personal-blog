import Link from "next/link";
import { client } from "../lib/sanity";

async function getData() {
  const query = `*[_type == 'post']`;
  const data = await client.fetch(query);

  return data;
}

export interface post {
  title: string;
  overview: string;
  content: any;
  _id: string;
  slug: {
    current: string;
  };
  _createAt: string;
}

export default async function page() {
  const data = (await getData()) as post[];
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-2xl font-bold leading-9 tracking-tight text-white dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading14 ">
          AlL Posts
        </h1>
      </div>
      <ul>
        {data.map((post) => (
          <li key={post._id} className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <Link
                href={`/post/${post.slug.current}`}
                prefetch
                className="space-y-3 xl:col-span-3"
              >
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight text-white ">
{post.title}
                  </h3>
                </div>
                <p className="text-white prose max-w-none line-clam-2">
{post.overview}
                </p>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
