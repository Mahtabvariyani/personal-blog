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
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Deploy faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-orange-300 sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg leading-8 text-teal-300">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
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
