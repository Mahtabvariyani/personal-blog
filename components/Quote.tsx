import React from "react";
import { LuQuote } from "react-icons/lu";

type QuoteType = {
  id: number;
  name: string;
  SaidQuote: string;
  bg: string;
};

type QuoteProps = {
  quotes: QuoteType[];
};

const Quote: React.FC<QuoteProps> = ({ quotes }) => {
  return (
    <div className="mb-[20px] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Deploy faster
          </h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-orange-300 sm:text-4xl">
            About Me
          </p>
          <p className="mt-6 text-lg leading-8 text-teal-300">
          My journey began with a passion for creating digital art, leading me to explore the world of graphic design. Inspired by the desire to streamline design workflows, I embarked on developing a custom design collaboration platform for my creative community. This experience ignited my love for coding and software development.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {quotes.map((feature) => (
              <div key={feature.id} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-red-300">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <LuQuote className="h-6 w-6 text-yellow-300" aria-hidden="true" />
                </div>
                {feature.name}
              </dt>
                <dd className="mt-2 text-base leading-7 text-gray-200">
                  {feature.SaidQuote}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
export default Quote;
