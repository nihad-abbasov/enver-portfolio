import { MotionWrapper } from "../MotionWrapper";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 px-4">
      <MotionWrapper as="section" preset="fadeRight" className="container mx-auto max-w-lg">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded border"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded border"
            required
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 rounded border"
            required
          />
          <button
            type="submit"
            className="w-full md:w-max bg-green-600 text-white px-3 py-3 md:py-2 rounded hover:bg-green-700 transition cursor-pointer"
          >
            Submit
          </button>
        </form>
      </MotionWrapper>
    </section>
  );
};
