import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import TransitionEffect from "@/components/TransitionEffect";
import profile from "../../public/images/profile/image.png";

export default function About() {
  return (
    <>
      <Head>
        <title>About Valit | Thon Chhavalit</title>
        <meta
          name="description"
          content="Learn about Thon Chhavalit's backend development, system programming, and DevOps experience."
        />
        <link rel="canonical" href="https://valit-portfolio.vercel.app/about" />
      </Head>

      <TransitionEffect />
      <main className="text-dark dark:text-light">
        <Layout className="pb-20 pt-14 md:pb-14 md:pt-10">
          <section className="grid grid-cols-[0.8fr_1.2fr] items-center gap-14 md:grid-cols-1 md:gap-8">
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-dark/10 shadow-xl shadow-dark/10 dark:border-light/10">
              <Image
                src={profile}
                alt="Thon Chhavalit"
                priority
                className="aspect-[4/5] w-full object-cover object-center"
                sizes="(max-width: 768px) 80vw, 380px"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary dark:text-primaryDark">
                About me
              </p>
              <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-4xl">
                Thon Chhavalit
              </h1>
              <p className="mt-2 text-xl font-medium text-dark/55 dark:text-light/55">
                Valit · Backend developer
              </p>
              <div className="mt-7 space-y-4 text-base leading-7 text-dark/70 dark:text-light/70">
                <p>
                  I’m a backend developer at Wing Bank, where I build services
                  for financial products with a focus on reliability, security,
                  and performance.
                </p>
                <p>
                  My experience also includes system programming at Cambodia
                  Air Traffic Services and DevOps work at ISTAD. Those roles
                  gave me a practical view of the full software lifecycle—from
                  building applications and APIs to automating delivery and
                  supporting systems in production.
                </p>
                <p>
                  I enjoy solving operational problems with simple, dependable
                  software and continuing to grow across backend engineering
                  and platform work.
                </p>
              </div>
            </div>
          </section>

          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
}
