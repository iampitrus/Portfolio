import Head from "next/head";
import { Navbar, Title, Projects, About, Contact, Footer } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Peter Ogbonnaya - Portfolio</title>
        <meta
          name="description"
          content="Frontend Developer portfolio website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Title />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
