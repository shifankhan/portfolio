"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function SkillsSection() {
  return (
    <div className="h-auto flex flex-col antialiased dark:bg-black bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      
      <h2 className="text-4xl md:text-5xl font-bold text-center dark:text-neutral-300 text-neutral-950 mb-5">My Skills</h2>

      <div className="py-3">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>

      <div className="py-3">
        <InfiniteMovingCards
          items={testimonialsCode}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "As a PHP developer, I build dynamic websites and applications, ensuring robust backend functionality and seamless user experiences.",
    image: "/images/skills/php.JFIF",
    title: "PHP",
  },
  {
    quote:
      "With Laravel, I create elegant web applications that are scalable and maintainable, leveraging its powerful features to deliver exceptional results.",
    image: "/images/skills/laravel.JFIF",
    title: "Laravel",
  },
  {
    quote:
      "In CodeIgniter, I develop rapid and reliable web solutions, optimizing performance and enhancing user engagement through clean code.",
    image: "/images/skills/codignitor.JFIF",
    title: "CodeIgniter",
  },
  {
    quote:
      "With SQL, I expertly manage and query databases, ensuring data integrity and optimizing performance for efficient data handling.",
    image: "/images/skills/sql.png",
    title: "SQL",
  },
  {
    quote:
      "Using MongoDB, I design scalable data structures and leverage its flexibility for handling large volumes of data in modern applications.",
    image: "/images/skills/mongodb.png",
    title: "MongoDB",
  },
  {
    title: "Git",
    image: "/images/skills/git.png",
    quote:"Skilled in Git, I effectively manage version control, collaborate with teams, and ensure smooth workflows through efficient branching and merging.",
  },
  {
    title: "JSON",
    image: "/images/skills/json.png",
    quote:
      "Proficient in JSON, I effectively manage data interchange between server and client, ensuring seamless data flow in applications.",
  },
  {
    title: "AJAX",
    image: "/images/skills/ajax.png",
    quote:
      "Experienced with AJAX, I implement asynchronous requests, enhancing user experience with dynamic content loading.",
  },

  {
    title: "Shopify",
    image: "/images/skills/shopify.png",
    quote:
      "Skilled in Shopify, I create and manage e-commerce solutions, enhancing online shopping experiences with effective storefront designs.",
  },
  {
    title: "Trello",
    image: "/images/skills/trello.png",
    quote:
      "Familiar with Trello, I manage tasks and projects efficiently, ensuring clear communication and tracking progress effectively.",
  },
];

const testimonialsCode = [
  
  {
    quote:
      "Experienced with SCSS, I streamline and enhance CSS with variables, nested rules, and modular styles, improving maintainability and scalability in web design.",
    image: "/images/skills/scss.png",
    title: "SCSS",
  },
  {
    quote:
      "Proficient in JavaScript, I develop dynamic and interactive web applications, implement complex features, and solve problems with versatile scripting capabilities.",
    image: "/images/skills/javascript.png",
    title: "JavaScript",
  },
  {
    quote:
      "Skilled in TypeScript, I enhance JavaScript development with static typing, leading to more reliable and maintainable code in complex applications.",
    image: "/images/skills/typescript.png",
    title: "TypeScript",
  },
  {
    quote:
      "Experienced with ReactJS, I build efficient and scalable user interfaces, leverage component-based architecture, and create responsive web applications.",
    image: "/images/skills/reactjs.png",
    title: "ReactJS",
  },
  {
    quote:
      "Proficient in NextJS, I develop server-side rendered React applications, optimize performance, and implement static site generation for faster and more reliable web experiences.",
    image: "/images/skills/nextjs.png",
    title: "NextJS",
  },
  {
    quote:
      "Skilled in Material UI, I create modern and consistent user interfaces with pre-designed components and a responsive grid system, enhancing user experience.",
    image: "/images/skills/material-ui.png",
    title: "Material UI",
  },
  {
    quote:
      "Experienced with jQuery, I simplify DOM manipulation, event handling, and AJAX requests, streamlining development for dynamic and interactive web pages.",
    image: "/images/skills/jquery.png",
    title: "jQuery",
  },
  {
    quote:
      "Proficient in Bootstrap, I utilize its responsive grid system and pre-built components to quickly design and develop mobile-first, visually appealing websites.",
    image: "/images/skills/bootstrap.png",
    title: "Bootstrap",
  }
];



