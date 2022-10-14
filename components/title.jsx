import Image from 'next/image';

function Title() {
  return (
    <section id='home'>
      <div className='font-sans w-full relative pt-24 pb-16 container-x bg-darkBlue'>
        <div className='flex flex-col'>
          <h1 className='p-0 text-7xl text-white leading-tight '>
            Hey, <br /> I am
            <span className='text-lightBlue'> Peter.</span> <br /> Front End
            Developer.
          </h1>

          <p className='text-gray-500 text-base mt-5'>
            I Design, Develop and Deploy interactive user-interface that runs on
            the web
          </p>
          <button className='py-2 my-16 px-4 rounded-3xl border border-white w-fit text-white '>
            DOWNLOAD MY CV HERE
          </button>
          <div className='w-64'>
            <p className='text-gray-500 mb-2'>
              Connect with me on Social Media:
            </p>
            <div className='w-full flex justify-between'>
              <Image src={'/github.svg'} alt='github' width={36} height={36} />
              <Image
                src={'/linkedIn.svg'}
                alt='linkedIn'
                width={36}
                height={36}
              />
              <Image
                src={'/twitter.svg'}
                alt='twitter'
                width={36}
                height={36}
              />
              <Image
                src={'/instagram.svg'}
                alt='instagram'
                width={36}
                height={36}
              />
            </div>
          </div>
        </div>
        {/* Hero image */}
        <div className='absolute bottom-28 right-2'>
          <Image src={'/Hero_img.png'} alt='hero' width={655} height={548.29} />
        </div>
      </div>

      {/* Tech Stack */}
      <div className='text-center flex justify-center items-center bg-lighterBlue py-6'>
        <p className='text-gray-400 pr-10'>I work with:</p>
        <div className='flex gap-11'>
          <Image
            src={'/javascript.svg'}
            alt='javascript'
            width={40}
            height={40}
          />
          <Image src={'/react.svg'} alt='react' width={40} height={40} />
          <Image src={'/nextjs.svg'} alt='nextjs' width={40} height={40} />
          <Image src={'/sass.svg'} alt='sass' width={40} height={40} />
          <Image
            src={'/tailwindcss.svg'}
            alt='tailwindcss'
            width={40}
            height={40}
          />
        </div>
        <p className='text-gray-400 pl-10'>and many more tools...</p>
      </div>
    </section>
  );
}

export default Title;
