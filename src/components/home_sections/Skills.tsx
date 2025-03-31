export const Skills = () => {
  const skills = [
    "SEO",
    "Content Creation",
    "Social Media Marketing",
    "Paid Advertising",
    "Analytics",
    "Email Marketing",
  ];

  return (
    <section className="py-20 bg-white px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8">
          Skills & Expertise
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-6 py-2 bg-green-100 text-green-700 rounded-full text-md font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
