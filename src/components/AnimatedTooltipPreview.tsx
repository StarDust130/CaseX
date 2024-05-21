"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Priyanka Singh",
    designation: "HR",
    image: "/didi.jpg",
  },
  {
    id: 2,
    name: "Jane Sharma",
    designation: "Product Manager",
    image: "/users/user-2.png",
  },
  {
    id: 3,
    name: "Emily Yadav",
    designation: "Data Scientist",
    image: "/users/user-3.png",
  },
  {
    id: 4,
    name: "Harsh Smith ",
    designation: "UX Designer",
    image: "/users/user-4.jpg",
  },
  {
    id: 5,
    name: "Raju Durden",
    designation: "Soap Developer",
    image: "/users/user-5.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
