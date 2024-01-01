import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import React from "react";

interface Post {
  id: number;
  border: string;
  bg: string;
  title: string;
  href: string;
  description: string;
  category: {
    title: string;
    href: string;
  };
  author: {
    name: string;
    role: string;
    href: string;
  };
  techs: {
    name: string;
    Language: string;
    FrontEnd: string;
    UI: string;
  };
}

interface MoreInfoProps {
  post: Post;
}

const MoreInfo = ({ post }: MoreInfoProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full bg-blue-400	 text-white"
        >
          {post.techs.name}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="backdrop-blur-sm bg-white/30 border-none ">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-blue-200 mb-6">
            The Technologies Used in The {post.title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-white flex p-2">
            <p className="text-green-500 mr-2 ">Front:</p> {post.techs.Language}
          </AlertDialogDescription>
          <AlertDialogDescription className="text-white flex p-2 ">
            <p className="text-indigo-500 mr-2 ">Back:</p>
            {post.techs.FrontEnd}
          </AlertDialogDescription>
          <AlertDialogDescription className="text-white flex p-2">
            <p className="text-cyan-500 mr-2 ">
            Design:
            </p>
            {post.techs.UI}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-gray-300 text-blue-700">
            Close
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default MoreInfo;
