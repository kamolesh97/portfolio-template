import classNames from 'classnames';

import { INFO } from '@/common/constants';

import Info from './Info';

const InfoSection = ({ className }) => {
  return (
    <div
      className={classNames(
        'z-10 flex h-[92px] items-end bg-gradient-to-r from-fuchsia-600 to-pink-600',
        className
      )}
    >
      <div className="flex h-[90px] bg-gradient-to-r from-gray-900 to-gray-800">
        {INFO.map((info, index) => (
          <Info {...info} key={index} />
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
