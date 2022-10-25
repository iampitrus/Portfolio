import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';
import { Navbar } from '../components';

function Projects() {
  const projects = [
    {
      title: 'Groovy',
      url: {
        github: 'https://github.com/iampitrus/groovy',
        live: 'https://groovy-os.vercel.app/',
        image: '',
      },
      description:
        'An open source music player on the web (ongoing) as a contributor, I built different components like the floating player controls and made it responsive',
      stack: 'Next.js, Shazam Api, Tailwind CSS and Material UI',
    },
    {
      title: 'Sneakers',
      url: {
        github: 'https://github.com/iampitrus/ecommerce-landing-page',
        live: 'https://ecommerce-landing-page2.netlify.app/',
        image: '',
      },

      description:
        'A website where you can shop footwears of different kind both for men and women',
      stack: 'React.js, Styled components',
    },
    {
      title: 'Google Search clone',
      url: {
        github: 'https://github.com/iampitrus/Google-Search-clone',
        live: 'http://google-clone-5sxy.vercel.app/',
        image: '',
      },

      description:
        'A clone to Google search, where you make searches and receive related websites, news, images and video that match your search',
      stack: 'React.js, React-Router, Tailwind Css, Rapid Api',
    },
    {
      title: 'Note Keeper',
      url: {
        github: 'https://github.com/iampitrus/Note-Keeper-App',
        live: 'http://note-keeper-app-3ts4.vercel.app/',
        image: '',
      },
      description:
        'A website where you store notes from your thoughts, it comes with smooth layout animatinos',
      stack: 'React.js, Framer-motion and Material UI',
    },
  ];

  return (
    <>
      <Navbar />
      <section className='container-xy bg-darkBlue text-white'>
        <h1 className='text-4xl text-center sm:text-left'>
          Some Projects I have worked on
        </h1>
        <p className='gray mb-20 text-center sm:text-left'>
          A curated list of projects that I've worked on some built as part of
          the learning process and some open source which I contributed to
        </p>
        {projects.map(({ title, description, stack, url }, index) => (
          <div
            key={index}
            className={`flex md:justify-center gap-10 items-center flex-col mb-24 ${
              (index + 1) % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            <div className='w-fit'>
              <div className='w-[400px] h-[400px] bg-lighterBlue'>
                The image
              </div>
              <div className='flex justify-around mt-4'>
                <a href={url.github}>
                  <GitHubIcon sx={{ color: '#06b6d4', fontSize: '3rem' }} />
                </a>
                <a href={url.live}>
                  <PreviewIcon sx={{ color: '#06b6d4', fontSize: '3rem' }} />
                </a>
              </div>
            </div>
            <div className='text-center md:text-left'>
              <h2 className='text-3xl text-lightBlue'>{title}</h2>
              <p className='my-6 md:my-12'>{description}</p>
              <p className='gray'>Stack: {stack}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Projects;
