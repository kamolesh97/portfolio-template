import Image from 'next/image';
import Link from 'next/link';
import { IoChevronForwardSharp } from 'react-icons/io5';

import { DESIGNATION, INTRO, PROFILE_IMAGE_NAME, RESUME_FILE_NAME } from '@/common/constants';

import AnimatedText from './AnimatedText';
import Button from './Button';
import InfoSection from './InfoSection';
import Urls from './Urls';

const Home = () => (
  <div className="flex min-h-screen flex-col items-center justify-center overflow-y-auto bg-black md:py-[50px]">
    <div className="w-[100vw] bg-gradient-to-r from-gray-900 to-gray-800 pt-[100px] md:w-[90vw] md:rounded-2xl md:p-[60px] md:pt-[100px] xl:w-[50vw]">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex h-[200px] w-[200px] bg-white md:order-2 md:h-[750px] md:w-[50%]">
          <div className="relative -ml-2 -mt-2 h-full w-full">
            <Image
              alt="profile"
              className="object-cover"
              fill
              src={`/assets/images/${PROFILE_IMAGE_NAME}`}
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:w-[60%] md:items-start md:pr-8">
          <div className="order-1 flex min-h-[100px] items-center">
            <IoChevronForwardSharp className="hidden text-6xl text-gray-500 md:block" />
            <AnimatedText />
          </div>
          <p className="order-2 whitespace-break-spaces bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text font-sans text-4xl font-bold text-transparent md:mt-8 md:text-5xl">
            {DESIGNATION}
          </p>
          <InfoSection className="order-3 mt-8 md:order-4 md:mb-8 md:mt-0" />
          <p className="order-3 mb-8 mt-8 whitespace-break-spaces px-8 text-center font-sans text-slate-200 md:mt-[50px] md:px-0 md:text-left">
            {INTRO}
          </p>
          <Link
            className="order-5"
            download={RESUME_FILE_NAME}
            href={`/resume/${RESUME_FILE_NAME}`}
            target="_blank"
          >
            <Button label="Download Resume" />
          </Link>
        </div>
      </div>
      <div className="mb-10 flex h-[100px] flex-1 items-end justify-center md:mb-0">
        <Urls />
      </div>
    </div>
  </div>
);

export default Home;
