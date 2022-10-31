import Image from 'next/image';

function About() {
  return (
    <section id='about' className='bg-lighterBlue container-xy'>
      <h2 className='text-left subheading text-black'>
        Here to Provide the Best Digital Experience for Your Brand
      </h2>
      <div className='flex flex-col lg:flex-row gap-12'>
        <div className='relative w-[150px] h-[150px] lg:w-[663px] lg:h-[250px]'>
          <Image src={'/profile_image.png'} alt='Peter' layout='fill' />
        </div>
        <div className='text-sm [&>p]:mb-4'>
          <p>
            My name is Ogbonnaya Peter. A 19 years old, currently living in
            Nigeria. I am a self-taught Developer
          </p>
          <p>
            I am a Solution Provider, who loves building interactive
            user-interfaces that run on the web using modern technologies.
          </p>
          <p>
            I enjoy the constant change in the technology used in the area and
            love diving deeper into new frameworks and technologies. As an
            active learner, my openess to new ideas helps me to focus and
            discover new approaches to solving a problem and actually learn from
            it. <br />
            As a strong advocate of collaboration who believes that no one has
            all the answers, I have made{' '}
            <span className='text-lightBlue'>contributions</span> to good open
            source projects and love what I learn in the process. <br /> I would
            love to have a conversation about how I could be asset that&apos;ll
            create great web experience for your brand
          </p>
          <p className='pt-4'>Quality Service and Support</p>
          <p>LifeTime Online Support</p>
          <p>Expert Delivery</p>
        </div>
      </div>
    </section>
  );
}

export default About;
