'use client';

import { TypeAnimation } from 'react-type-animation';

import { DEVELOPER_NAME } from '@/common/constants';

const AnimatedText = () => {
  return (
    <TypeAnimation
      className="type text-4xl font-semibold text-white md:text-5xl"
      cursor={false}
      sequence={[DEVELOPER_NAME]}
      speed={20}
      wrapper="span"
    />
  );
};

export default AnimatedText;
