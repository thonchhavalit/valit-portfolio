import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";

const areas = [
  "Backend services and APIs",
  "DevOps, CI/CD, and automation",
  "Web applications and system tools",
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Work | Thon Chhavalit</title>
        <meta
          name="description"
          content="Explore Thon Chhavalit's backend, DevOps, and web development work."
        />
        <link rel="canonical" href="https://valit-portfolio.vercel.app/projects" />
      </Head>

      <TransitionEffect />
      <main className="text-dark dark:text-light">
        <Layout className="pb-24 pt-16 md:pb-16 md:pt-12">
          <section className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary dark:text-primaryDark">
              Projects
            </p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-4xl">
              Case studies are in progress
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark/65 dark:text-light/65">
              I’m preparing project write-ups that show the problem, the
              engineering approach, and the outcome. In the meantime, GitHub is
              the best place to explore my public code.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/thonchhavalit"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-dark px-6 py-3 text-sm font-semibold text-light transition-colors hover:bg-primary dark:bg-light dark:text-dark dark:hover:bg-primaryDark"
              >
                Visit my GitHub
              </a>
              <Link
                href="/about"
                className="rounded-full border border-dark/15 px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary dark:border-light/20 dark:hover:border-primaryDark dark:hover:text-primaryDark"
              >
                View my experience
              </Link>
            </div>
          </section>

          <section className="mt-16 border-t border-dark/10 pt-10 dark:border-light/10">
            <h2 className="text-xl font-bold">Areas of focus</h2>
            <ul className="mt-6 grid grid-cols-3 gap-4 md:grid-cols-1">
              {areas.map((area, index) => (
                <li
                  key={area}
                  className="rounded-2xl border border-dark/10 p-6 dark:border-light/10"
                >
                  <span className="text-sm font-semibold text-primary dark:text-primaryDark">
                    0{index + 1}
                  </span>
                  <p className="mt-4 font-semibold">{area}</p>
                </li>
              ))}
            </ul>
          </section>
        </Layout>
      </main>
    </>
  );
}
