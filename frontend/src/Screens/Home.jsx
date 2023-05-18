import { Image } from '@chakra-ui/react';
import { About } from '../Sections/About';
import { Professionals } from '../Sections/Professionals';
export function Home() {
  return (
    <>
      <Image src="https://garden.qtcmedia.com/html/images/slider/1.jpg" />
      <About />
      <Professionals />
    </>
  );
}
