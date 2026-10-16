import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import profile from "../../public/images/profile/image.png";

const focusAreas = [
  {
    number: "01",
    title: "Backend engineering",
    description:
      "Building reliable APIs and services for products that need to scale.",
  },
  {
    number: "02",
    title: "Systems & reliability",
    description:
      "Improving system performance, stability, and operational workflows.",
  },
  {
    number: "03",
    title: "DevOps & automation",
    description:
      "Streamlining delivery with CI/CD, automation, and better developer workflows.",
  },
];

const technologies = [
  "Java",
  "Spring Boot",
  "Node.js",
  "JavaScript",
  "React",
  "Next.js",
  "CI/CD",
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Thon Chhavalit (Valit) | Backend Developer</title>
        <meta
          name="description"
          content="Thon Chhavalit (Valit) is a backend developer at Wing Bank with experience in backend systems, DevOps, and system programming."
        />
        <meta name="author" content="Thon Chhavalit" />
        <link rel="canonical" href="https://valit-portfolio.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Thon Chhavalit (Valit) | Backend Developer"
        />
        <meta
          property="og:description"
          content="Backend development, reliable systems, and DevOps."
        />
        <meta
          property="og:image"
          content="https://valit-portfolio.vercel.app/images/profile/image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Thon Chhavalit",
              alternateName: "Valit",
              url: "https://valit-portfolio.vercel.app",
              image:
                "https://valit-portfolio.vercel.app/images/profile/image.png",
              jobTitle: "Backend Developer",
              worksFor: {
                "@type": "Organization",
                name: "Wing Bank",
              },
              sameAs: [
                "https://github.com/thonchhavalit",
                "https://t.me/Thon_Chhavalit",
              ],
              knowsAbout: [
                "Backend Development",
                "DevOps",
                "System Programming",
                "Java",
                "Spring Boot",
                "Node.js",
                "JavaScript",
              ],
            }),
          }}
        />
      </Head>

      <TransitionEffect />
      <main className="text-dark dark:text-light">
        <Layout className="pb-20 pt-12 md:pb-14 md:pt-8">
          <section className="grid grid-cols-[1.15fr_0.85fr] items-center gap-16 py-10 md:grid-cols-1 md:gap-10 md:py-4">
            <div className="order-2 max-w-2xl md:order-1">
              <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary dark:text-primaryDark">
                <span className="h-px w-8 bg-primary dark:bg-primaryDark" />
                Backend development · DevOps
              </p>
              <h1 className="text-6xl font-bold leading-[1.08] tracking-tight xl:text-5xl md:text-5xl sm:text-4xl">
                Hi, I’m Valit.
                <span className="mt-2 block text-dark/55 dark:text-light/55">
                  I build dependable software systems.
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-dark/70 dark:text-light/70 sm:text-base sm:leading-7">
                I’m a backend developer at Wing Bank, focused on building
                reliable services for financial products. My experience also
                includes system programming, DevOps, CI/CD, and automation.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/projects"
                  className="rounded-full bg-dark px-6 py-3 text-sm font-semibold text-light transition-colors hover:bg-primary dark:bg-light dark:text-dark dark:hover:bg-primaryDark"
                >
                  Explore my work
                </Link>
                <Link
                  href="/about"
                  className="rounded-full border border-dark/15 px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary dark:border-light/20 dark:hover:border-primaryDark dark:hover:text-primaryDark"
                >
                  About me
                </Link>
                <a
                  href="https://t.me/Thon_Chhavalit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-3 text-sm font-semibold text-dark/70 underline decoration-dark/25 underline-offset-4 transition-colors hover:text-primary dark:text-light/70 dark:decoration-light/25 dark:hover:text-primaryDark"
                >
                  Get in touch
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-dark/55 dark:text-light/55">
                <span>Phnom Penh, Cambodia</span>
                <span className="hidden h-1 w-1 rounded-full bg-primary sm:block" />
                <a
                  href="https://github.com/thonchhavalit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium transition-colors hover:text-primary dark:hover:text-primaryDark"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <div className="relative order-1 mx-auto w-full max-w-sm md:order-2 md:max-w-xs">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl dark:bg-primaryDark/15"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-dark/10 bg-light shadow-2xl shadow-dark/10 dark:border-light/10 dark:bg-dark">
                <Image
                  priority
                  src={profile}
                  alt="Thon Chhavalit"
                  className="aspect-[4/5] w-full object-cover object-center"
                  sizes="(max-width: 768px) 80vw, 380px"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/80 to-transparent px-6 pb-5 pt-16 text-light">
                  <p className="text-lg font-semibold">Thon Chhavalit</p>
                  <p className="mt-1 text-sm text-light/75">Valit · Backend developer</p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-dark/10 pt-12 dark:border-light/10">
            <div className="mb-7 flex items-end justify-between gap-4 sm:flex-col sm:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary dark:text-primaryDark">
                  What I do
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-2xl">
                  Engineering with reliability in mind
                </h2>
              </div>
              <Link
                href="/about"
                className="text-sm font-semibold text-dark/65 underline decoration-dark/25 underline-offset-4 hover:text-primary dark:text-light/65 dark:decoration-light/25 dark:hover:text-primaryDark"
              >
                More about my experience
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
              {focusAreas.map((area) => (
                <article
                  key={area.number}
                  className="rounded-2xl border border-dark/10 bg-white/60 p-6 dark:border-light/10 dark:bg-light/[0.03]"
                >
                  <p className="text-sm font-semibold text-primary dark:text-primaryDark">
                    {area.number}
                  </p>
                  <h3 className="mt-5 text-lg font-bold">{area.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-dark/65 dark:text-light/65">
                    {area.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <p className="mr-2 text-sm font-semibold text-dark/60 dark:text-light/60">
                Technologies
              </p>
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-dark/10 px-3 py-1.5 text-xs font-medium text-dark/70 dark:border-light/15 dark:text-light/70"
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>
        </Layout>
      </main>
    </>
  );
}
