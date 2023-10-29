import './globals.css';

import { Space_Mono } from 'next/font/google';

import { METADATA } from '@/common/constants';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: METADATA.TITLE,
  description: METADATA.DESCRIPTION,
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={spaceMono.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
