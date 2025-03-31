export const About = () => {
  const expertise = [
    "SEO & SEM",
    "Content Marketing",
    "Social Media Strategy",
    "Analytics & Reporting",
    "Paid Advertising",
  ];

  return (
    <section className="py-20 bg-white px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          I'm Ənvər, a digital marketing specialist passionate about crafting
          data-driven marketing strategies and engaging content. My goal is to
          help brands enhance their online presence and achieve measurable
          growth.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {expertise.map((skill, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
