import Image from 'next/legacy/image';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';
import { IoChevronForwardSharp } from 'react-icons/io5';

import { AVATAR_IMAGE_NAME, DESIGNATION, INTRO, RESUME_FILE_NAME } from '@/common/constants';
import { FlickeringGrid } from '@/components';
import { RainbowButton } from '@/components/Buttons';

import AnimatedText from './AnimatedText';
import InfoSection from './InfoSection';
import Projects from './Projects';
import Skills from './Skills';
import Urls from './Urls';

const Home = () => (
  <div className="flex min-h-screen flex-col items-center justify-center overflow-y-auto bg-black bg-gradient-to-r from-gray-900 to-gray-800 md:py-[50px]">
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <FlickeringGrid
        className="z-0"
        color="#ffffff"
        flickerChance={0.1}
        gridGap={24}
        maxOpacity={0.2}
        squareSize={3}
      />
    </div>
    <header className="fixed right-0 top-0 z-50 flex items-center gap-4 p-4">
      <RainbowButton className="gap-2" href="mailto:mondalkamolesh34@gmail.com">
        <FaEnvelope />
        Contact Me
      </RainbowButton>
    </header>
    <div className="max-w-7xl pt-[60px] md:w-[90vw] md:rounded-2xl md:p-[60px]">
      <div className="flex flex-col items-center">
        <div className="relative h-[80px] w-[80px] overflow-hidden rounded-full">
          <Image
            alt="avatar"
            blurDataURL={`/assets/images/${AVATAR_IMAGE_NAME}`}
            className="object-cover"
            layout="fill"
            placeholder="blur"
            priority
            src={`/assets/images/${AVATAR_IMAGE_NAME}`}
          />
        </div>
        <div className="order-1 flex min-h-[100px] items-center">
          <IoChevronForwardSharp className="hidden text-6xl text-gray-500 md:block" />
          <AnimatedText />
        </div>
        <p className="order-2 whitespace-break-spaces bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-center font-sans text-2xl font-bold text-transparent md:text-4xl">
          {DESIGNATION}
        </p>
        <InfoSection className="order-3 mt-8 md:order-4 md:mb-8 md:mt-0" />
        <p className="order-3 mb-8 mt-8 whitespace-break-spaces px-8 text-center font-sans text-slate-200 md:px-0">
          {INTRO}
        </p>
      </div>
      <div className="mb-10 flex h-[100px] flex-1 flex-col items-center justify-center space-y-10 md:mb-0 md:flex-row md:space-x-10 md:space-y-0">
        <Urls />
        <Link
          className="order-5"
          download={RESUME_FILE_NAME}
          href={`/resume/${RESUME_FILE_NAME}`}
          target="_blank"
        >
          <RainbowButton>Download Resume</RainbowButton>
        </Link>
      </div>
      <div className="mb-10">
        <Projects />
      </div>
      <Skills />
    </div>
  </div>
);

export default Home;
