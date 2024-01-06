"use client";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Lottie from "lottie-react";
import Bar from "@/public/bar.json";
const links = [
  {
    text: "Make changes to your profile here. Click save when you're done.",
    id: 1,
  },
  {
    text: "Make changes to your profile here. Click save when you're done.",
    id: 12,
  },
  {
    text: "Make changes to your profile here. Click save when you're done.",
    id: 13,
  },
  {
    text: "Make changes to your profile here. Click save when you're done.",
    id: 14,
  },
];
export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="fixed top-0 right-0 mt-[60vh] w-[50px] mr-4 rounded-[100%] text-white bg-sky-900 border-4"
        >
          Info
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-transparent backdrop-blur-3xl text-white border-left border-sky-700">
        <SheetHeader className="text-white">
          <SheetTitle className="text-sky-200">More Infos</SheetTitle>
          {links.map((link) => (
            <SheetDescription key={link.id}>{link.text}</SheetDescription>
          ))}

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
