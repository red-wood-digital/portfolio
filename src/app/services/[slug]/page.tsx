import { SERVICES, SERVICES_REVIEWS } from "@/constant";
import HeroSection from "./hero-section";
import { notFound } from "next/navigation";
import ReviewsSection from "./reviews-section";

export default function Service({ params }: { params: { slug: string } }) {
  const hasService = SERVICES.find((service) => service.key === params.slug);

  if (!hasService) notFound();

  const { title, details } = hasService;
  const { reviews } = SERVICES_REVIEWS.find(({ key }) => params.slug === key)!;

  return (
    <main>
      <HeroSection title={title} details={details} />
      <ReviewsSection reviews={reviews} />
    </main>
  );
}
