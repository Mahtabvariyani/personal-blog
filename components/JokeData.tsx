"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface JokeDataProps {
  id: number;
  punchline: string;
  setup: string;
  type: string;
}

const JokeData: React.FC = () => {
  const [joke, setJoke] = useState<JokeDataProps | undefined>(undefined);

  useEffect(() => {
    const savedJoke = localStorage.getItem("savedJoke");
    if (savedJoke) {
      setJoke(JSON.parse(savedJoke));
    }
  }, []);

  const handleClick = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => {
        console.log("Jokeeeeeeee", data);
        setJoke(data);
        localStorage.setItem("savedJoke", JSON.stringify(data));

      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };

  return (
    <article className="flex max-w-xl flex-col items-start justify-between border-gray-200 p-7 backdrop-blur-sm rounded-md border-4">
      <div className="flex items-center gap-x-4 text-xs">
        <Button className="bg-sky-900 ml-2" onClick={() => handleClick()}>
          Button
        </Button>
      </div>
      {joke && (
        <div
          className="relative mt-8 flex items-center gap-x-4 p-4 h-[20vh] text-blue-100 rounded-xl"
        >
          <br />
          {joke.setup}
          <br />
          {joke.punchline}
        </div>
      )}
    </article>
  );
};

export default JokeData;
