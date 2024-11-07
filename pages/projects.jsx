import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from "@mui/icons-material/Preview";
import { projects } from "../data/data";

function Projects() {
  return (
    <section className="container-xy bg-darkBlue nav-margin text-white">
      <h1 className="text-4xl text-center sm:text-left">
        Some Projects I have worked on
      </h1>
      <p className="gray mb-20 text-center sm:text-left">
        A curated list of projects that I&apos;ve worked on, this list consists
        of projects built as part of the learning process, live projects and
        open source projects which i contributed to
      </p>
      {projects.map(({ title, description, stack, url }, index) => (
        <div
          key={index}
          className={`flex md:justify-center gap-10 items-center flex-col mb-24 ${
            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="w-fit">
            <div className="w-[400px] h-[250px] relative">
              <Image
                src={url.image}
                alt={title}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex justify-around mt-4">
              <a
                className="hover:rotate-12 hover:scale-105 active:scale-95"
                href={url.github}
              >
                <GitHubIcon sx={{ color: "#06b6d4", fontSize: "2rem" }} />
              </a>
              <a
                className="hover:rotate-12 hover:scale-105 active:scale-95"
                href={url.live}
              >
                <PreviewIcon sx={{ color: "#06b6d4", fontSize: "2rem" }} />
              </a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl text-lightBlue">{title}</h2>
            <p className="my-6 md:my-12">{description}</p>
            <p className="gray">Stack: {stack}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
