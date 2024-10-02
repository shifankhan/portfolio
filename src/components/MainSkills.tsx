"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "NodeJs",
    designation: "Backend Development With Express",
    image:
      "/images/skills/nodejs.png",
  },
  {
    id: 2,
    name: "NestJs",
    designation: "Backend Development With Typescript",
    image:
      "/images/skills/nestjs.png",
  },
  {
    id: 3,
    name: "PHP",
    designation: "Full Stack Development",
    image:
      "/images/skills/php.png",
  },
  {
    id: 4,
    name: "Laravel",
    designation: "Full Stack Development",
    image:
      "/images/skills/laravel.png",
  },
  {
    id: 5,
    name: "ReactJs",
    designation: "Fronend Development",
    image:
      "/images/skills/reactjs.png",
  },
  {
    id: 6,
    name: "NextJs",
    designation: "Full Stack Development",
    image:
      "/images/skills/nextjs.png",
      },
 
 
];

export default function MainSkills() {
  return (
    <div className="flex flex-row items-center justify-center my-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
