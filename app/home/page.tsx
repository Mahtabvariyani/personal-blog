
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center items-center bg-teal-500">
      <div className="hero bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            {/* <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p> */}

            <Image alt="image" src="/Hero.png" height={400} width={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
