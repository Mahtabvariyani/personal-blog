import Image from "next/image";
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
    <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 -mt-20 ">
      <div className="relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl  sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            My journey began with a passion for creating digital art, leading me
            to explore the world of graphic design. Inspired by the desire to
            streamline design workflows, I embarked on developing a custom
            design collaboration platform for my creative community. This
            experience ignited my love for coding and software development.
          </p>
        </div>
        <div className="relative mt-16 h-80 lg:mt-8">
          <img
            className="absolute left-0 top-0  max-w-none rounded-md "
            alt="App screenshot"
            src="/book.jpeg"
            width={470}
            height={480}
          />
        </div>
      </div>
    </div>
  );
};
export default Quote;
