"use client";
import { colors } from "@/utils/Data_obj/Colors";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [color, setcolor] = useState("");
  const handleClick = (data: string) => {
    setcolor(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className={`title text-${color}-500`}>
        This is my Taskflow app with bun and hankos🚀🤖❤️😊
      </div>
      <Link href="/login">
        <button className="border shadow-md p-5 rounded-lg hover:bg-black hover:text-white transition-transform transform scale-90">
          Login to Taskflow
        </button>
      </Link>

      <div className="colors">
        {colors.map((data, index) => {
          return (
            <div
              className="color p-2 border m-5 hover:cursor-pointer"
              key={data}
              onClick={() => {
                handleClick(data);
              }}
            >
              {data}
            </div>
          );
        })}
      </div>
    </main>
  );
}
