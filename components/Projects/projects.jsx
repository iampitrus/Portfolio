import Link from 'next/link';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function Projects() {
  const projects = [
    {
      title: 'Car Project',
      description: 'Landing page development',
    },
    {
      title: 'Car Project',
      description: 'Landing page development',
    },
  ];

  return (
    <section id='projects' className='container-xy bg-darkBlue'>
      <h2 className='text-right subheading text-white'>My Projects</h2>
      <div className='flex justify-between flex-wrap'>
        <Splide aria-label='My Projects'>
          {projects.map(({ title, description }, index) => (
            <SplideSlide key={index}>
              <div className='card'>
                <div className='h-[420px] w-[350px] mb-3 bg-slate-400'></div>
                <h3 className='text-3xl text-white'>{title}</h3>
                <p className='gray'>{description}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <Link href='/projects'>
        <button className='outline-btn mt-16'>See more</button>
      </Link>
    </section>
  );
}

export default Projects;
