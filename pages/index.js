import Head from 'next/head';
import About from '../components/about';
import Navbar from '../components/Navbar';
import Projects from '../components/projects';
import Title from '../components/title';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ogbonnaya Peter</title>
        <meta
          name='description'
          content='Frontend Developer portfolio website'
        />
        <link
          rel='preload'
          href='/fonts/microgme-webfont.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Title />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
