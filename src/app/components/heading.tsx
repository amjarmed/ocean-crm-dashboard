import { FC } from 'react';

interface HeadingProps {
  title: string;
  isCentred?: boolean;
}
const Heading: FC<HeadingProps> = ({ title, isCentred }) => {
  return (
    <h1
      className={` bg-clip-text text-transparent bg-gradient-to-tr from-sky-200 via-sky-500 to-sky-200 font-extrabold text-3xl sm:text-4xl md:text-5xl ${
        isCentred ? 'text-center' : ''
      }`}
    >
      {title}
    </h1>
  );
};

export default Heading;
