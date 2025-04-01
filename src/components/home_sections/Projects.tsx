import { MotionWrapper } from "../MotionWrapper";

export const Projects = () => {
  const projects = [
    {
      title: 'Social Media Growth',
      description: 'Boosted client’s social media engagement by 300% within 6 months through tailored content strategies.',
      result: '+300% Engagement',
    },
    {
      title: 'SEO Optimization',
      description: 'Enhanced organic traffic for an e-commerce brand, resulting in a 120% increase in monthly visitors.',
      result: '+120% Organic Traffic',
    },
    {
      title: 'Content Marketing Campaign',
      description: 'Executed a successful content strategy achieving consistent audience growth and increased conversion rates.',
      result: 'Higher Conversions',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects & Achievements</h2>
        <MotionWrapper stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-xl rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              <span className="inline-block bg-green-200 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
                {project.result}
              </span>
            </div>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
};

