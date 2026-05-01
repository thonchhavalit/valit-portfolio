import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { HireMe2 } from "@/components/HireMe2";

import loading from "../../public/images/articles/GTA6-VICE.gif";

import TransitionEffect from "@/components/TransitionEffect";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base sm:self-start">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span
        className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm"
      >
        {date}
      </span>
    </motion.li>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | VALIT PORTFOLIO</title>
        <meta
          name="description"
          content="Explore featured projects by Valit, including full-stack and backend development work."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Transforms the World ✨"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <article
              className="col-span-12 relative flex w-full flex-col items-start justify-between rounded-3xl rounded-br-2xl border
              border-solid border-dark bg-light p-12 shadow-2xl dark:border-light dark:bg-dark lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
            >
              <div
                className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
                dark:bg-light xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]"
              />
              <span className="text-xl font-medium text-primary dark:text-light xs:text-base">
                Portfolio Update
              </span>
              <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
                Original Projects Are Being Added
              </h2>
              <p className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
                This section is being refreshed to include only projects built by me. I am currently preparing and documenting my original backend and full-stack work for publication.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <Link
                  href="https://github.com/thonchhavalit"
                  target={"_blank"}
                  className="rounded-lg bg-dark p-2 px-6 text-lg font-semibold border-2 border-solid
                  capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark
                  dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                  md:p-2 md:px-4 md:text-base"
                >
                  Visit GitHub
                </Link>
                <Link
                  href="/contact/"
                  target={"_self"}
                  className="rounded-lg bg-light p-2 px-6 text-lg font-semibold border-2 border-solid
                  capitalize text-dark hover:border-light hover:bg-dark hover:text-light
                  dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
                  md:p-2 md:px-4 md:text-base"
                >
                  Contact Me
                </Link>
              </div>
            </article>
          </div>

          <div>
            <ul className="flex flex-col items-center relative pt-16">
              <Article
                title="Adding more soon, thanks for the interest!"
                img={loading}
                time="1 min read"
                date=""
                link="https://github.com/thonchhavalit"
              />
            </ul>

            <div className="mt-2 flex items-center justify-between gap-3 grid-cols-2">
              <Link
                href="/articles/"
                target={"_self"}
                className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
              >
                View Articles
              </Link>
              <Link
                href="/about/"
                target={"_self"}
                className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
              >
                Get To Know Me
              </Link>
            </div>
            <HireMe2 />
          </div>
        </Layout>
      </main>
    </>
  );
}
