import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TESTIMONIALS } from "@/constant";

export default function ReviewsSection() {
  return (
    <section>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-screen-xl">
        <h2 className="font-bold text-4xl text-center text-gray-900 sm:text-5xl tracking-tight">
          Read trusted reviews from our customers
        </h2>

        <div className="relative flex flex-col justify-center items-center dark:bg-grid-white/[0.05] rounded-md h-[30rem] antialiased overflow-hidden">
          <InfiniteMovingCards
            speed="slow"
            direction="right"
            items={TESTIMONIALS}
          />
        </div>
      </div>
    </section>
  );
}
