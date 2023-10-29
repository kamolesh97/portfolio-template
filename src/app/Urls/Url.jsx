import Link from 'next/link';

import { ICONS } from './constants';

const Url = ({ url, for: _for }) => {
  const Icon = ICONS[_for];

  return (
    <Link href={url} target="_blank">
      <Icon color="white" size={25} />
    </Link>
  );
};

export default Url;
