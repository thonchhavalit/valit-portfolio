import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

export default function Thanks() {
  return (
    <>
      <Head>
        <title>Thank You!</title>
        <meta name="description" content="Thank you for contacting Thon Chhavalit." />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Thank you for reaching out! 🙌"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-center"
          />
          <p className="text-center text-xl">
            I'll get back to you as soon as possible. Have a great day!
          </p>
        </Layout>
      </main>
    </>
  );
}
