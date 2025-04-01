import {
  FaSearch,
  FaPencilAlt,
  FaBullhorn,
  FaMousePointer,
  FaChartLine,
  FaEnvelopeOpenText,
} from 'react-icons/fa';
import { MotionWrapper } from '../MotionWrapper';

export const Skills = () => {
  const skills = [
    { name: "SEO", icon: FaSearch },
    { name: "Content Creation", icon: FaPencilAlt },
    { name: "Social Media Marketing", icon: FaBullhorn },
    { name: "Paid Advertising", icon: FaMousePointer },
    { name: "Analytics & Reporting", icon: FaChartLine },
    { name: "Email Marketing", icon: FaEnvelopeOpenText },
  ];

  return (
    <section className="py-20 bg-white px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-12">My Expertise</h2>

        <MotionWrapper stagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-gray-50 rounded-xl shadow hover:shadow-lg p-6 transition-shadow duration-300"
              >
                <Icon className="text-green-600 mb-4" size={48} />
                <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
              </div>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
};
