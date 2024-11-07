import Link from "next/link";
import Image from "next/image";
import { projects } from "../../data/data";

function Projects() {
  const topProject = projects.slice(0, 2);

  return (
    <section id="projects" className="container-xy bg-darkBlue">
      <h2 className="text-right subheading text-white">My Projects</h2>
      <div className="flex flex-wrap justify-center items-center md:flex-row flex-col gap-20">
        {topProject.map(({ description, title, url }, index) => (
          <Link className="card" key={index} href={`/projects/#${index}`}>
            <div className="flex items-center flex-col relative cursor-pointer w-full md:w-[360px]">
              <div className="-mb-3 relative">
                {" "}
                <Image
                  src={url.image}
                  alt={title}
                  width={350}
                  height={300}
                  layout="fixed"
                  objectFit="contain"
                />{" "}
              </div>

              <h3 className="text-3xl mt-4 text-white">{title}</h3>
              <p className="gray">{description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Link href="/projects">
          <button className="outline-btn mt-16">See more</button>
        </Link>
      </div>
    </section>
  );
}

export default Projects;
