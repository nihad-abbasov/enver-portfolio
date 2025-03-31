import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex items-center justify-center bg-gray-50 px-4 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Side: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Ənvər 👋</h1>
          <p className="text-lg text-gray-600 mb-6">
            A digital marketing specialist helping brands grow through strategic
            campaigns, engaging content, and analytics-driven insights.
          </p>
          <a
            href="#contact"
            className="inline-block bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
          >
            Get in Touch
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/enver.jpeg"
            width={400}
            height={400}
            alt="Ənvər Nağıyev"
            className="rounded-full shadow-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};
