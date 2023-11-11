import { client } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import ImageUrlBuilder from "@sanity/image-url";


async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

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
const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
  }
export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as post;
  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image
          src={urlFor(value).url()}
          alt="Image"
          className="rounded-lg"
          width={800}
          height={800}
        />
      ),
    },
  };

  return(
    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
    <header className="pt-6 xl:pb-6">
      <div className="space-y-1 text-center">
   
        <div>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {data.title}
          </h1>
        </div>
      </div>
    </header>

    <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
      <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
        <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg">
          <PortableText
            value={data.content}
            components={PortableTextComponent}
          />
        </div>
      </div>
    </div>
  </div>
  )
}
