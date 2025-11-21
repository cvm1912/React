import React from "react";
import { MoveUpRight } from "lucide-react";

const lcontent = () => {
  return (
    <div className="h-full w-1/3 bg-white rounded-4xl  flex flex-col justify-between p-6">
      <div>
         <h3 className="text-6xl font-bold mb-7 leading-[1.2]">Prospective <br /><span className="bg-gray-200 p-0.5 rounded-2xl">Customers</span><br />Segmentation</h3>
         <p className="text-xl font-medium text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quod ex molestias doloremque! Sit illo dolores doloribus at quos repellat!</p>
      </div>
      <div className="text-4xl"><MoveUpRight /></div>
    </div>
  );
};

export default lcontent;
