import React from 'react'
import { Button } from "@/components/ui/button";



const CatData = () => {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between border-gray-200  p-7 backdrop-blur-sm  rounded-md	border-4  ">
    <div className="flex items-center gap-x-4 text-xs">
      <Button className="bg-sky-900 ml-2">Button</Button>
    </div>

    <div className="relative mt-8 flex items-center gap-x-4 p-4 h-[20vh] text-blue-100 rounded-xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
      ullam in voluptate molestiae quidem,
    </div>
  </article>
  )
}

export default CatData