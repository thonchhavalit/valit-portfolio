import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 mx-auto flex w-[85%] flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold sm:text-xl xs:text-lg">
          {position}{" "}
          <span className="text-primary dark:text-primaryDark">@{company}</span>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-24 md:mt-16">
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary dark:text-primaryDark">
          Career
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-2xl">
          Experience
        </h2>
      </div>

      <div ref={ref} className="relative w-[90%] mx-auto md:w-full">
        <motion.div
          className="absolute left-9 top-0 h-full w-px origin-top bg-primary/40 dark:bg-primaryDark/40 md:left-5"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="ml-4 flex w-full flex-col items-start justify-between md:ml-0">
          <Details
            position="Backend Developer"
            company="Wing Bank"
            time="2026 - present"
            address="Phnom Penh, Cambodia"
            work="At Wing Bank, I work as a Backend Developer, designing and implementing secure, high-performance backend services for modern financial products. My responsibilities include building APIs, optimizing system performance, and collaborating with cross-functional teams to deliver reliable and scalable solutions."
          />

          <Details
            position="System Programming Officer"
            company="Cambodia Air Traffic Services"
            time="2024 - 2026"
            address="Phnom Penh, Cambodia"
            work="At Cambodia Air Traffic Services, I worked as a web developer, designing and implementing modern web solutions for operational teams. My responsibilities included developing responsive, high-performance applications and collaborating with cross-functional teams to deliver scalable and user-focused systems."
          />

          <Details
            position="DevOps Engineer"
            company="Institute of Science and Technology of Advanced Development"
            time="2024 - 2024"
            address="Phnom Penh, Cambodia"
            work="At ISTAD, I worked as a DevOps Engineer, where I was responsible for managing CI/CD pipelines, automating deployment processes, and ensuring system reliability and performance. I collaborated closely with development teams to optimize workflows, streamline processes, and implement robust solutions. My contributions helped improve the efficiency and quality of software delivery while maintaining high standards for system stability and scalability."
          />
        </ul>
      </div>
      <div className="mt-12 flex flex-wrap items-center gap-3">
        <Link
          href="/projects/"
          className="rounded-full bg-dark px-5 py-2.5 text-sm font-semibold text-light transition-colors hover:bg-primary dark:bg-light dark:text-dark dark:hover:bg-primaryDark"
        >
          View work
        </Link>
        <a
          href="https://t.me/Thon_Chhavalit"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-dark/15 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary dark:border-light/20 dark:hover:border-primaryDark dark:hover:text-primaryDark"
        >
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Experience;
