import { MotionWrapper } from "../MotionWrapper";

interface Expertise {
  name: string;
}

const expertise: Expertise[] = [
  { name: "SEO & SEM" },
  { name: "Content Marketing" },
  { name: "Social Media Strategy" },
  { name: "Analytics & Reporting" },
  { name: "Paid Advertising" },
];

export const About = () => {
  return (
    <section className="py-20 bg-white px-4">
      <MotionWrapper as="section" preset="fadeRight"
        className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          I&apos;m Ənvər, a digital marketing specialist passionate about crafting
          data-driven marketing strategies and engaging content. My goal is to
          help brands enhance their online presence and achieve measurable
          growth.
        </p>

        <ul className="flex flex-wrap justify-center gap-3">
          {expertise.map((skill, index) => (
            <li
              key={index}
              className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              {skill.name}
            </li>
          ))}
        </ul>
      </MotionWrapper>
    </section>
  );
};
