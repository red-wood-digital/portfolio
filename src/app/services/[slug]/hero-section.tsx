import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function HeroSection({
  title,
  details,
}: {
  title: string;
  details: string;
}) {
  const words = [{ text: title, className: "text-red-500" }];

  return (
    <section className="flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 py-40 sm:py-0 max-w-screen-xl sm:min-h-screen">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        The road to business starts from here
      </p>

      <TypewriterEffectSmooth words={words} />

      <TextGenerateEffect
        words={details}
        textClassName="max-w-4xl text-center text-xs md:text-base font-medium"
      />

      <div className="flex flex-wrap justify-center gap-4 mt-8 text-center">
        <a
          href="/#contact-us"
          className="focus:ring-red-300 block bg-red-600 hover:bg-red-700 active:bg-red-500 shadow px-12 py-3 rounded w-full sm:w-auto font-medium text-sm text-white focus:outline-none focus:ring"
        >
          Get Started
        </a>

        <a
          href="#reviews"
          className="focus:ring-red-300 block bg-white shadow px-12 py-3 rounded w-full sm:w-auto font-medium text-red-600 text-sm hover:text-red-700 focus:outline-none focus:ring active:text-red-500"
        >
          Client Reviews
        </a>
      </div>
    </section>
  );
}
