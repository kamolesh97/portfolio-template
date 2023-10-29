import classNames from 'classnames';

import { URLS } from '@/common/constants';

import Url from './Url';

const Urls = ({ className }) => {
  return (
    <div className={classNames('flex items-center space-x-10', className)}>
      {URLS.map((url, index) => (
        <Url {...url} key={index} />
      ))}
    </div>
  );
};

export default Urls;
