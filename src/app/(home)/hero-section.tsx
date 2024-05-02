export default function HeroSection() {
  return (
    <section
      id="#"
      className="relative bg-[url(https://images.unsplash.com/photo-1587440871875-191322ee64b0)] bg-cover bg-no-repeat bg-center"
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative lg:flex lg:items-center mx-auto px-4 sm:px-6 lg:px-8 py-32 max-w-screen-xl lg:h-screen">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="font-extrabold text-3xl text-white sm:text-5xl">
            Crafting Brands{" "}
            <strong className="block font-extrabold text-red-700">
              Building Futures
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            As a leading digital marketing agency, we are dedicated to helping
            businesses thrive in the ever-evolving online landscape. With a
            passion for innovation and a commitment to delivering results
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8 text-center">
            <a
              href="#contact-us"
              className="focus:ring-red-300 block bg-red-600 hover:bg-red-700 active:bg-red-500 shadow px-12 py-3 rounded w-full sm:w-auto font-medium text-sm text-white focus:outline-none focus:ring"
            >
              Get Started
            </a>

            <a
              href="#services"
              className="focus:ring-red-300 block bg-white shadow px-12 py-3 rounded w-full sm:w-auto font-medium text-red-600 text-sm hover:text-red-700 focus:outline-none focus:ring active:text-red-500"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
