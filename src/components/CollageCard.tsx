"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { Span } from "next/dist/trace";

export default function CollageCard() {
  return (
    <div className="p-10 dark:bg-black bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center dark:text-neutral-300 text-neutral-950 mb-10">My Education</h2>
      <div className="max-w-7xl mx-auto w-100 grid grid-cols-1 gap-10">
        {/* <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 h-full flex flex-col justify-between">
            <div>
            <h3 className="text-xl font-semibold sm:text-3xl text-black mt-4 mb-2 dark:text-white">Bachelor of Computer Applications (BCA)</h3>

<p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
Maharishi Arvind Institute of Science & Management
</p>
            </div>
            <div className="flex justify-between items-center mt-4">
                <div className="rounded-full px-3 py-2 dark:text-white text-md text-neutral-950 flex items-center space-x-1 bg-gray-200 font-semibold dark:bg-zinc-800">
                <span>
                2017 - 2020
                </span>
                </div>

                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-3 py-2 font-semibold text-white">
                    67.17%
                </span>
            </div>
        </BackgroundGradient> */}
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 h-full flex flex-col justify-between">
            <div></div>
            <h3 className="text-xl font-semibold sm:text-3xl text-black mt-4 mb-2 dark:text-white">Bachelor of Technology (B.Tech) in Computer Science</h3>

            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
           Jaipur Engineering College — Jaipur, Rajasthan
            </p>
            <div className="flex justify-between items-center mt-4">
                <div className="rounded-full px-3 py-2 dark:text-white text-md text-neutral-950 flex items-center space-x-1 bg-gray-200 font-semibold dark:bg-zinc-800">
                <span>
                2015 - 2019
                </span>
                </div>

                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-3 py-2 font-semibold text-white">
                    8.17CGPA
                </span>
            </div>
        </BackgroundGradient>
      </div>
    </div>
  );
}
