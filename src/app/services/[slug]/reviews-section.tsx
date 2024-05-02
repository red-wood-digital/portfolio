import { InfiniteMovingImages } from "@/components/ui/infinite-moving-images";

export default function ReviewsSection({ reviews }: { reviews: string[] }) {
  return (
    <section id="reviews">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-screen-xl">
        <h2 className="font-bold text-4xl text-center text-gray-900 sm:text-5xl tracking-tight">
          Client Feedback
        </h2>

        <div className="relative flex flex-col justify-center items-center dark:bg-grid-white/[0.05] rounded-md h-[30rem] antialiased overflow-hidden">
          <InfiniteMovingImages
            speed="slow"
            direction="right"
            items={reviews}
          />
        </div>
      </div>
    </section>
  );
}
