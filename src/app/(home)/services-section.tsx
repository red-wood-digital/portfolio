import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { SERVICES } from "@/constant";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section id="services">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-32 pb-16 max-w-screen-xl">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-bold text-3xl sm:text-4xl">Our Services</h2>

          <p className="mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {SERVICES.map((service) => (
            <CardContainer
              key={service.key}
              className="inter-var"
              containerClassName="py-0"
            >
              <CardBody className="relative dark:border-white/[0.2] bg-gray-100 dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] p-6 border border-black/[0.1] rounded-xl w-full h-auto group/card">
                <CardItem
                  translateZ="50"
                  className="font-bold text-neutral-600 text-xl dark:text-white"
                >
                  {service.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="mt-2 max-w-sm text-neutral-500 text-sm dark:text-neutral-300"
                >
                  {service.description}
                </CardItem>
                <CardItem translateZ="100" className="mt-4 w-full">
                  <Image
                    width="1000"
                    height="1000"
                    src={service.thumbnail}
                    alt={`${service.title}'s thumbnail`}
                    className="group-hover/card:shadow-xl rounded-xl w-full h-60 object-cover"
                  />
                </CardItem>

                <CardItem
                  as={Link}
                  translateZ={20}
                  href={service.url}
                  className="inline-block mt-10 px-4 py-2 rounded-xl font-normal text-xs dark:text-white"
                >
                  Learn More →
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact-us"
            className="inline-block bg-red-600 hover:bg-red-700 px-12 py-3 rounded focus:ring-red-300 font-medium text-sm text-white transition focus:outline-none focus:ring"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
