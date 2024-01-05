"use client";
import CatData from "./CatData";

export default function Calculator() {
  return (
    <div className="mt-3 -mb-[30vh] py-24 sm:py-32 apipic">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 ">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
              Dummy API Data
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-100">
              Click Each Button To see The dummy Data
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <CatData />
        <CatData /><CatData />
        </div>
      </div>
    </div>
  );
}
