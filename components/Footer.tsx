"use client";
import { footerLinks, profiles } from "@/constants";
import Link from "next/link";
import "react-clock/dist/Clock.css";
import Clock from "react-live-clock";
import wecode from '@/public/wecode.png'


export default function Footer() {
  return (
    <footer className=" z-10 relative">
      <div className="mt-[5vh]" />
      <div className="mx-auto w-full max-w-screen-xl">
        <div className=" grid grid-cols-2 gap-5 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-9 text-sm font-semibold text-blue-400 uppercase ">
              Time EU zone
            </h2>
            <ul className="">
              <li>
                <div className="hover:text-pink-600  ease-in duration-300  text-gray-400 text-lg mt-6">
                  <Clock
                    format={"dddd "}
                  />
                  <br />
                  <Clock format={"MMMM Mo"} />
                  <br />
                  <Clock format={"h:mm"} />
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-blue-400 uppercase ">
              My Fav WebSites
            </h2>
            {footerLinks.map((link, index) => (
              <ul
                className="text-gray-500 dark:text-gray-400 font-medium"
                key={index}
              >
                <li className="mb-4">
                  <Link href={link.href} className=" hover:underline">
                    {link.name}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-blue-400 uppercase ">
              My Profiles
            </h2>
            {profiles.map((profile, index) => (
              <ul
                key={index}
                className="text-gray-500 dark:text-gray-400 font-medium"
              >
                <li className="mb-4">
                  <Link href={profile.href} className="hover:underline">
                    {profile.name}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
