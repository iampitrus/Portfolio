import Image from 'next/image';
import Stack from '../Stack/Stack';

function Title() {
  return (
    <section id='home'>
      <div className='w-full relative pt-[7%] pb-16 container-x bg-darkBlue'>
        <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
          <h1 className='p-0 text-4xl md:text-6xl text-white leading-tight md:leading-[1.3]'>
            Hey, <br /> I am
            <span className='text-lightBlue'> Peter,</span> <br /> Front End
            Developer.
          </h1>

          <p className='gray w-2/3 text-sm md:text-base mt-5'>
            I Build and Deploy interactive user-interface that runs on the web,
            what we call websites
          </p>
          <button className='outline-btn my-6 md:my-16'>
            DOWNLOAD MY CV HERE
          </button>
          <div className='w-fit'>
            <p className='text-sm text-gray-500 mb-2'>
              Connect with me on Social Media:
            </p>
            <div className='w-full flex justify-between'>
              <Image
                src={'/svg/github.svg'}
                alt='github'
                width={36}
                height={36}
              />
              <Image
                src={'/svg/linkedIn.svg'}
                alt='linkedIn'
                width={36}
                height={36}
              />
              <Image
                src={'/svg/twitter.svg'}
                alt='twitter'
                width={36}
                height={36}
              />
              <Image
                src={'/svg/instagram.svg'}
                alt='instagram'
                width={36}
                height={36}
              />
            </div>
          </div>
        </div>
        {/* Hero image */}
        <div className='xl:absolute lg:bottom-16 lg:right-2'>
          <Image src={'/Hero_img.png'} alt='hero' width={655} height={548.29} />
        </div>
      </div>

      {/* Tech Stack */}
      <Stack />
    </section>
  );
}

export default Title;
