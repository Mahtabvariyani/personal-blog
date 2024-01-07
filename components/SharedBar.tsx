"use client";

import { BsInfoSquare } from "react-icons/bs";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Lottie from "lottie-react";
import Bar from "@/public/bar.json";
import Link from "next/link";
const links = [
  {
    href: "/javaScript",
    text: "JavaScript Interview Questions ",
    id: 11,
  },
  {
    href: "/react",
    text: "React Interview Questions ",
    id: 12,
  },
  {
    href: "https://coding-quiz-nine.vercel.app/",
    text: "JavaScript, TypeScript, React, Nextjs and etc ... Quiz Game",
    id: 12,
  },
];
export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="fixed top-0 right-0 mt-[60vh] mr-4 bg-transparent border-none ">
          <BsInfoSquare
            size={30}
            className="text-sky-100 blink"
          />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-transparent backdrop-blur-xl text-white border-left border-sky-700">
        <SheetHeader className="text-white">
          <SheetTitle className="text-sky-700 italic">More Infos</SheetTitle>
          <SheetDescription>
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.id}
                className="flex flex-col text-white mt-4 underline hover:text-sky-700 duration-700"
              >
                {link.text}
              </Link>
            ))}
          </SheetDescription>

          <div className="flex flex-col py-4">
            <div className="flex flex-col items-center gap-4">
              <Lottie animationData={Bar} />
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
