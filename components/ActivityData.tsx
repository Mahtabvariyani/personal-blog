"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface Activity {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
}

const ActivityData: React.FC = () => {
  const [activities, setActivities] = useState<Array<Activity> | undefined>(
    undefined
  );

  useEffect(() => {
    const savedActivities = localStorage.getItem("Activities");
    if (savedActivities) {
      setActivities(JSON.parse(savedActivities));
    }
  }, []);

  const handleClick = () => {
    console.log("Clicked");
    fetch("https://www.boredapi.com/api/activity")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const updatedActivities = [...(activities || []), data];
        setActivities(updatedActivities);
        localStorage.setItem("Activities", JSON.stringify(updatedActivities));
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };

  return (
    <article className="flex max-w-xl flex-col items-start justify-between border-gray-200  p-7 backdrop-blur-md  rounded-md	border-4  ">
      <div className="flex flex-col items-center gap-x-4 text-xs ">
        <span className="text-blue-100 text-lg mb-5">
          If you Are Bored, to Know what To do
        </span>
        <Button className="bg-sky-900 " onClick={() => handleClick()}>
          Click Here
        </Button>
      </div>
      {Array.isArray(activities) &&
        activities.map((activity: Activity, index: number) => (
          <div
            key={index}
            className="relative mt-8 flex  items-center italic gap-x-4 p-4 h-[20vh] text-blue-500  text-xl rounded-xl"
          >
            {activity.activity}
          </div>
        ))}
    </article>
  );
};

export default ActivityData;
