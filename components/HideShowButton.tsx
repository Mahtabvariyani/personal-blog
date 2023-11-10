"use client";

import { links } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";

const HideShowButton = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="flex flex-col ml-4">
        <button
          onClick={() => setShow(!show)}
          className="bg-yellow-300 rounded-md w-[160px]  text-black text-xl p-3"
        >
          {show ? "Hello World" : "Click here"}
        </button>
        {show && (
          <div className="flex flex-col">
            {links.map((link) => (
              <ul key={link.linkName}>
                <li>
                  <button
                    className={`${link.bg} mt-2 rounded-md w-[160px]  text-black text-xl p-3`}
                  >
                    <Link href={link.linkHref}>{link.linkName}</Link>
                  </button>
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HideShowButton;
