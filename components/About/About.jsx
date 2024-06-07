import Image from "next/image";

function About() {
  const skills = [
    "reactnative",
    "nextjs",
    "typescript",
    "javascript",
    "react",
    "redux",
    "tailwindcss",
    "sass",
    "html5",
    "css3",
    "figma",
    "bootstrap",
  ];

  return (
    <section id="about" className="bg-lighterBlue container-xy">
      <h2 className="text-left subheading text-black">
        Here to Provide the Best Digital Experience for Your Brand
      </h2>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="relative w-[150px] h-[150px] lg:w-[663px] lg:h-[250px]">
          <Image src={"/profile_image.png"} alt="Peter" layout="fill" />
        </div>
        <div className="text-sm [&>p]:mb-4">
          <p>My name is Ogbonnaya Peter. I am a self-taught Developer</p>
          <p>
            I have a passion in building cross-platform mobile applications
            using React Native and web applications using React and Next.js. I
            have a good understanding of the core web technologies and I am
            always looking to learn more and grow with a team.
          </p>
          <p>
            I enjoy the constant change in the technology used in the area and
            love diving deeper into new frameworks and technologies. As an
            active learner, my openess to new ideas helps me to focus and
            discover new approaches to solving a problem and actually learn from
            it. <br />
            As a strong advocate of collaboration who believes that no one has
            all the answers, I have made{" "}
            <span className="text-lightBlue">contributions</span> to good open
            source projects and love what I learn in the process. <br /> I would
            love to have a conversation about how I could be asset that&apos;ll
            create great web experience for your brand
          </p>
          <p className="pt-4">Quality Service and Support</p>
          <p>LifeTime Online Support</p>
          <p>Expert Delivery</p>
        </div>
      </div>
      <hr className="border-t-2 border-lightBlue my-4 ml-50 w-1/4" />
      <div>
        <h2 className="text-left subheading">Skills</h2>
        <div className="flex gap-4 flex-row justify-center flex-wrap">
          {skills.map((name, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:g-4 rounded-2xl border border-lightBlue p-4"
            >
              <object
                className="scale-50 sm:scale-75 md:scale-100"
                data={`/svg/${name}.svg`}
                name={name}
                height={50}
              />
              <em className="capitalize text-xs sm:text-sm">{name}</em>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
