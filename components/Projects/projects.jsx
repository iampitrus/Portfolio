import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../../data/data';

function Projects() {
  const topProject = projects.slice(0, 2);

  return (
    <section id='projects' className='container-xy bg-darkBlue'>
      <h2 className='text-right subheading text-white'>My Projects</h2>
      <div className='flex md:flex-row flex-col justify-between'>
        {topProject.map(({ description, title, id, url }, index) => (
          <div key={index} className='card'>
            <Link href={`/projects/#${id}`}>
              <div className='-mb-3 relative'>
                <Image
                  src={url.image}
                  alt={title}
                  width={350}
                  height={300}
                  layout='fixed'
                  objectFit='contain'
                />
              </div>
            </Link>
            <h3 className='text-3xl text-white'>{title}</h3>
            <p className='gray'>{description}</p>
          </div>
        ))}
      </div>
      <Link href='/projects'>
        <button className='outline-btn mt-16'>See more</button>
      </Link>
    </section>
  );
}

export default Projects;
