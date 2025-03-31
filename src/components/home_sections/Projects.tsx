export const Projects = () => {
  const projects = [
    {
      title: "Social Media Growth",
      description:
        "Boosted client’s social engagement by 300% within 6 months.",
    },
    {
      title: "SEO Strategy",
      description:
        "Improved organic search traffic by 120% for e-commerce brand.",
    },
    {
      title: "Content Marketing",
      description:
        "Led content strategy achieving consistent audience growth and engagement.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8">
          Projects & Achievements
        </h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow p-6 rounded-lg">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
