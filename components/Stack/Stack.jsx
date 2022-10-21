import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';

export default function Stack() {
  const stacknames = [
    'figma',
    'tailwindcss',
    'javascript',
    'react',
    'redux',
    'sass',
    'nextjs',
    'html5',
    'css3',
    'bootstrap',
    'typescript',
  ];
  return (
    <div className='md:py-6 py-3  bg-lighterBlue'>
      <Splide
        options={{
          type: 'loop',
          drag: 'free',
          arrows: false,
          pagination: false,
          perPage: 4,
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 1,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {stacknames.map((name, index) => (
          <SplideSlide key={index}>
            <div className='flex flex-col items-center g-4'>
              <object data={`/svg/${name}.svg`} name={name} height={50} />
              <p className='capitalize text-sm'>{name}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
