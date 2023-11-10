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
    <div className="flex flex-wrap items-center justify-center">
    {quotes.map((quote) => (
      <div key={quote.id}>
        <div
          className={`group relative   cursor-pointer overflow-hidden ${quote.bg} px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10`}
        >
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-200 transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                <LuQuote />
              </span>
              <div className="space-y-6 pt-5 text-bold leading-7 text-gray-800 transition-all duration-300 group-hover:text-black/90 ">
                <p>{quote.SaidQuote}</p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <a
                    href="#"
                    className="text-gray-900 transition-all duration-300 group-hover:text-purple-700"
                  >
                    {quote.name}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Quote;
