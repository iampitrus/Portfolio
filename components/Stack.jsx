import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

// import '@splidejs/splide/dist/css/splide.min.css';

export default function Stack() {
  const stacknames = [
    'react',
    'tailwindcss',
    'figma',
    'sass',
    'javascript',
    'nextjs',
    'html5',
    'css3',
    'bootstrap',
    'typescript',
    'html5',
  ];
  return (
    <Splide
      options={{
        type: 'loop',
        gap: '40px',
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
          <div className='flex flex-col g-4'>
            <Image src={`${name}.svg`} alt={name} layout='fixed' />
            <p className='items-center uppercase'>{name}</p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
