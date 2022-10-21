import Image from 'next/image';

function About() {
  return (
    <section id='about' className='bg-lighterBlue container-xy'>
      <h2 className='text-left subheading text-black'>
        Here to Make Your Websites Look Elegant And Stylish
      </h2>
      <div className='flex justify-between'>
        {/* <Image
          src={'/profile_image.png'}
          alt='Peter'
          width={463}
          height={481}
        /> */}
        <div className='text-sm [&>p]:mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            assumenda explicabo quidem voluptate?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            culpa perferendis enim architecto nulla consequatur doloremque quas,
            vel voluptate sit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            quasi beatae ipsam excepturi, fuga, praesentium dicta nesciunt qui
            perspiciatis totam repellendus id voluptates quia cumque nihil saepe
            a voluptate nam.
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
