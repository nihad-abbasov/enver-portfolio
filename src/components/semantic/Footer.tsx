import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

interface SocialMediaAccounts {
  icon: React.ReactNode;
  href: string;
  target: string;
  className: string;
  label: string;
}

const socialMediaAccounts: SocialMediaAccounts[] = [
  {
    icon: <FaFacebook className='w-6 h-6' />,
    href: 'https://www.facebook.com/',
    target: '_blank',
    className: 'hover:text-blue-400',
    label: 'Facebook'
  },
  {
    icon: <FaInstagram className='w-6 h-6' />,
    href: 'https://www.instagram.com/',
    target: '_blank',
    className: 'hover:text-pink-400',
    label: 'Instagram'
  },
  {
    icon: <FaLinkedin className='w-6 h-6' />,
    href: 'https://www.linkedin.com/',
    target: '_blank',
    className: 'hover:text-blue-400',
    label: 'LinkedIn'
  },
];

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Enver Nagiyev</h3>
            <p className="text-gray-400">
              Helping businesses grow through strategic digital marketing solutions.
            </p>
            <div className="flex gap-4">
              {socialMediaAccounts.map(({ icon, href, target, className, label }, index) => (
                <Link
                  key={index}
                  href={href}
                  target={target}
                  className={`${className} w-8 h-8 transition`}
                  aria-label={label}
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <FaEnvelope className="w-5 h-5" />
                <a href="mailto:contact@example.com" className="hover:text-white transition">
                  contact@example.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <FaPhone className="w-5 h-5" />
                <a href="tel:+1234567890" className="hover:text-white transition">
                  +994 10 384 12 16
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <FaMapMarkerAlt className="w-5 h-5" />
                <span>Baku, Azerbaijan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Enver. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

