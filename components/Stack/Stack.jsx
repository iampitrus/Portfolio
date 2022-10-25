import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';
import { useState, useEffect } from 'react';

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
  var speed;
  const [screenSize, setScreenSize] = useState(null);
  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, []);

  speed = screenSize < 700 ? 0.6 : 1;

  return (
    <div className='md:py-6 py-1  bg-lighterBlue'>
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
            speed: speed,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {stacknames.map((name, index) => (
          <SplideSlide key={index}>
            <div className='flex flex-col items-center md:g-4'>
              <object
                className='scale-50 sm:scale-75 md:scale-100'
                data={`/svg/${name}.svg`}
                name={name}
                height={50}
              />
              <em className='capitalize text-xs sm:text-sm'>{name}</em>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
