import { MotionWrapper } from "../MotionWrapper";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

interface ContactItem {
  icon: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
  href?: string;
}

const contactItems: ContactItem[] = [
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    title: "Email",
    content: "enver.nagiyev@gmail.com",
    href: "mailto:enver.nagiyev@gmail.com"
  },
  {
    icon: <FaPhone className="w-6 h-6" />,
    title: "Phone",
    content: "+994 10 384 12 16",
    href: "tel:+994103841216"
  },
  {
    icon: <FaMapMarkerAlt className="w-6 h-6" />,
    title: "Location",
    content: "Baku, Azerbaijan"
  },
  {
    icon: <FaClock className="w-6 h-6" />,
    title: "Working Hours",
    content: "Monday - Friday: 9:00 AM - 6:00 PM"
  }
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 px-4">
      <MotionWrapper as="section" preset="fadeRight" className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out to me through any of the following channels. I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactItems.map((item, index) => (
            <MotionWrapper
              key={index}
              preset="fadeUp"
              delay={index * 0.1}
              className="group"
            >
              <li className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-0 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-300 inline-flex items-center gap-2"
                      >
                        {item.content}
                        <svg
                          className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    ) : (
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{item.content}</p>
                    )}
                  </div>
                </div>
              </li>
            </MotionWrapper>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Connect with me on social media</p>
          <div className="flex justify-center gap-4">
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </MotionWrapper>
    </section>
  );
};
