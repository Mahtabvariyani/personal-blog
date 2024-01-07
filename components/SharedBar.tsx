"use client";

import { GiFireBottle } from "react-icons/gi";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Lottie from "lottie-react";
import Bar from "@/public/bar.json";
import Link from "next/link";
import InterviewQuestion from "@/components/Questions";
const links = [
  {
    href: "#",
    text: "Make changes to your profile here. Click save when you're done.",
    id: 1,
  },
  {
    href: "#",
    text: "Make changes to your profile here. Click save when you're done.",
    id: 12,
  },
  {
    href: "#",
    text: "Make changes to your profile here. Click save when you're done.",
    id: 13,
  },
  {
    href: "#",
    text: "Make changes to your profile here. Click save when you're done.",
    id: 14,
  },
];
export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="fixed top-0 right-0 mt-[60vh] mr-4 bg-transparent border-none ">
          <GiFireBottle
            size={40}
            className="text-sky-600 gradient-background"
          />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-transparent backdrop-blur-xl text-white border-left border-sky-700">
        <SheetHeader className="text-white">
          <SheetTitle className="text-sky-700 italic">More Infos</SheetTitle>

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
