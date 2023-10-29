import Image from 'next/image';
import Link from 'next/link';
import { IoChevronForwardSharp } from 'react-icons/io5';

import { DESIGNATION, INTRO, PROFILE_IMAGE_NAME, RESUME_FILE_NAME } from '@/common/constants';

import AnimatedText from './AnimatedText';
import Button from './Button';
import InfoSection from './InfoSection';
import Urls from './Urls';

const Home = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-black">
    <div className="flex h-[80vh] w-[100vw] flex-col justify-between rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 p-[50px] md:w-[90vw] xl:w-[50vw]">
      <div className="flex flex-1" />
      <div className="flex max-h-[55vh] min-h-[55vh] flex-1 items-center justify-between">
        <div className="flex w-[60%] flex-col items-start pr-8">
          <div className="flex min-h-[100px] items-center">
            <IoChevronForwardSharp className="text-6xl text-gray-500" />
            <AnimatedText />
          </div>
          <p className="mt-8 whitespace-break-spaces bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text font-sans text-5xl font-bold text-transparent">
            {DESIGNATION}
          </p>
          <p className="mb-8 mt-[50px] font-sans text-slate-200">{INTRO}</p>
          <InfoSection className="mb-8" />
          <Link download={RESUME_FILE_NAME} href={`/resume/${RESUME_FILE_NAME}`} target="_blank">
            <Button label="Download Resume" />
          </Link>
        </div>
        <div className="flex h-full w-[50%] bg-white">
          <div className="relative -ml-2 -mt-2 h-full w-full">
            <Image
              alt="profile"
              className="object-cover"
              fill
              src={`/assets/images/${PROFILE_IMAGE_NAME}`}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-end justify-center">
        <Urls />
      </div>
    </div>
  </div>
);

export default Home;
