import {
  FaSearch,
  FaPencilAlt,
  FaBullhorn,
  FaMousePointer,
  FaChartLine,
  FaEnvelopeOpenText,
} from 'react-icons/fa';
import { MotionWrapper } from '../MotionWrapper';


interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

const skills: Skill[] = [
  { name: "SEO", icon: FaSearch },
  { name: "Content Creation", icon: FaPencilAlt },
  { name: "Social Media Marketing", icon: FaBullhorn },
  { name: "Paid Advertising", icon: FaMousePointer },
  { name: "Analytics & Reporting", icon: FaChartLine },
  { name: "Email Marketing", icon: FaEnvelopeOpenText },
];

export const Skills = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-4">My Expertise</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Specialized in delivering comprehensive digital marketing solutions that drive growth and engagement
        </p>

        <MotionWrapper stagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center bg-white rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 hover:border-blue-100"
              >
                <div className="bg-blue-50 p-4 rounded-full mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                  <Icon className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300" size={40} />
                </div>
                <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{skill.name}</span>
              </div>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
};
