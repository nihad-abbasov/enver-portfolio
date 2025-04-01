import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

interface SocialMediaAccounts {
  icon: React.ReactNode;
  href: string;
  target: string;
  className: string;
}

const socialMediaAccounts: SocialMediaAccounts[] = [
  {
    icon: <FaFacebook className='w-6 h-6' />,
    href: 'https://www.facebook.com/',
    target: '_blank',
    className: 'hover:text-blue-400',
  },
  {
    icon: <FaInstagram className='w-6 h-6' />,
    href: 'https://www.instagram.com/',
    target: '_blank',
    className: 'hover:text-pink-400',
  },
  {
    icon: <FaLinkedin className='w-6 h-6' />,
    href: 'https://www.linkedin.com/',
    target: '_blank',
    className: 'hover:text-blue-400',
  },
]

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Enver. All rights reserved.
        </p>

        <div className="flex gap-3">
          {
            socialMediaAccounts.map(({ icon, href, target, className }, index) => (
              <Link key={index} href={href} target={target} className={`${className} w-6 h-6 transition`}>
                {icon}
              </Link>
            ))
          }
        </div>
      </div>
    </footer>
  );
};

