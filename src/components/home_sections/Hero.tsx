import { MotionWrapper } from "../MotionWrapper";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="flex items-center justify-center bg-gray-50 px-4 py-16">
      <MotionWrapper as="section" preset="fadeLeft" className="container mx-auto flex flex-col md:flex-row items-center gap-8">

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m Ənvər 👋</h1>
          <p className="text-lg text-gray-600 mb-6">
            A digital marketing specialist helping brands grow through strategic
            campaigns, engaging content, and analytics-driven insights.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Get in Touch
          </Link>
        </div>

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

      </MotionWrapper>
    </section>
  );
};
