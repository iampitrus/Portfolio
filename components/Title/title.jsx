import Image from "next/image";
import Stack from "../Stack/Stack";

export const socialLinks = {
  github: "https://github.com/iampitrus",
  linkedIn: "https://www.linkedin.com/in/peter-ogbonna-9889721b2/",
  instagram: "https://www.instagram.com/peterintech/",
  x: "https://x.com/Peterintech",
};

function Title() {
  return (
    <section id="home">
      <div className="w-full relative nav-margin pb-16 container-x bg-darkBlue">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="p-0 text-4xl md:text-6xl text-white leading-tight md:leading-[1.3]">
            Hey, <br /> I am
            <span className="text-lightBlue"> Peter,</span> <br /> Front End
            Developer.
          </h1>

          <p className="gray w-2/3 text-sm md:text-base mt-5">
            I Build and Deploy interactive user-interface that runs on the web,
            what we call websites
          </p>
          <a href="#contact">
            <button className="outline-btn w-[250px] my-6 md:my-16">
              Let&apos;s Talk
            </button>
          </a>
          <div className="w-fit">
            <p className="text-sm text-gray-500 mb-2">
              Connect with me on Social Media:
            </p>
            <div className="w-full flex justify-between social">
              <a href={socialLinks.github}>
                <Image
                  src={"/svg/github.svg"}
                  alt="github"
                  width={36}
                  height={36}
                />
              </a>
              <a href={socialLinks.linkedIn}>
                <Image
                  src={"/svg/linkedIn.svg"}
                  alt="linkedIn"
                  width={36}
                  height={36}
                />
              </a>
              <a href={socialLinks.x}>
                <Image
                  src={"/svg/twitter.svg"}
                  alt="twitter"
                  width={36}
                  height={36}
                />
              </a>
              <a href={socialLinks.instagram}>
                <Image
                  src={"/svg/instagram.svg"}
                  alt="instagram"
                  width={36}
                  height={36}
                />
              </a>
            </div>
          </div>
        </div>
        {/* Hero image */}
        <div className="lg:absolute lg:bottom-1 lg:right-2">
          <Image src={"/Hero_img.png"} alt="hero" width={655} height={548.29} />
        </div>
      </div>
      <Stack />
    </section>
  );
}

export default Title;
