"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { motion } from 'framer-motion';

const content = [
  {
    title: "WannaEat",
    description:
      "An POS system, also known as a Food delivery Management System is a software solution designed to streaming and manage various administrative processes like:- chef, waiter, manager, customer, admin and Super admin REST APIs for the application.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/wannaeat.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="WannaEat"
        />
      </div>
    ),
    url: "https://www.wannaeat.com/",
  },

  {
    title: "BubbleBath",
    description:
      "Bubblebath Mobile Car Spa is your go-to solution for convenient and high-quality car care. With our user-friendly app, you can effortlessly book door-to-door car washing and detailing services at your preferred time. Our specially trained staff follows standardized protocols and uses premium products like Turtle Wax and 3M to ensure your vehicle receives the best care.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/bubblebath.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="BubbleBath"
        />
      </div>
    ),
    url: "https://bubblebath.one/",
  },

  {
    title: "Pokerdate",
    description:
      "PokerDate combines the thrill of Texas Hold'em poker with the excitement of modern dating. This innovative app offers a unique platform where users can enjoy engaging poker games while connecting with potential matches.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/pokerdate.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="Pokerdate"
        />
      </div>
    ),
    url: "https://www.pokerdate.net/",
  },
  
  {
    title: "SportsWiz",
    description:
      "Your go-to for live scores, stats, and sports news. Stay updated with real-time game updates and in-depth player info. Get the edge in every match with SportsWiz!",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/sportswiz.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="sportswiz"
        />
      </div>
    ),
    url: "https://sportswiz.live",
  },

  {
    title: "AffordableDreamz",
    description:
      "AffordableDreamz specializes in affordable housing, helping clients find budget-friendly properties and assisting first-time homebuyers.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/affordabledreamz.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="sportswiz"
        />
      </div>
    ),
    url: "https://affordabledreamz.com/",
  },
  
];
export function ProjectSection() {
  const [isPinned, setIsPinned] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the section is fully within the viewport
        if (entry.isIntersecting) {
          setIsPinned(true);
        } else {
          setIsPinned(false);
        }
      },
      {
        threshold: 1.0, // Fires when the entire section is fully in view
      }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  return (
    <div 
      // ref={sectionRef}
      // initial={{ opacity: 0, y: 50 }}
      // animate={isPinned ? { opacity: 1, y: 0, position: 'fixed', top: 0 } : { opacity: 1, y: 0 }}
      // transition={{ duration: 0.5 }}
      className="dark:bg-black bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center dark:text-neutral-300 text-neutral-950  pt-10 mb-20">My Projects</h2>
      <StickyScroll content={content} />
    </div>
  );
}
