import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section id="about-us">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-32 pb-16 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                width="500"
                height="600"
                alt="Unitiy picture for about us section"
                className="absolute inset-0 w-full h-full object-cover"
                src="/images/about-us-team-picture.jpeg"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="lg:block lg:absolute lg:inset-y-0 hidden lg:-start-16 lg:bg-gray-100 lg:w-16"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="font-bold text-2xl sm:text-3xl">
                Explore More About Us
              </h2>

              <p className="mt-4 text-gray-600">
                ORM services are essential for proactively building a brand,
                fostering better customer connections, and establishing a strong
                online reputation. At Review Express, we specialize in not only
                repairing online reputation issues but also maintaining a
                positive brand image. As a leading digital marketing company, we
                offer comprehensive 360-degree digital promotion solutions.
                Recognizing the significance of brand prestige in influencing
                customer perception and productivity, we focus on consistently
                addressing negative impacts, prioritizing customer satisfaction,
                and safeguarding brand reputation for the present and future.
                Our corporate reputation management process is beneficial for
                any business looking to enhance their online image amidst
                competitive environments. Trust Review Express, one of the top
                online reputation management companies globally, to help elevate
                your brand image.
              </p>

              <p className="mt-4 text-gray-600">
                ORM services are vital for proactively shaping your brand,
                enhancing customer connections, and establishing a strong online
                reputation. Review Express specializes not only in repairing
                online reputation issues but also in maintaining a positive
                brand image. As a leading digital marketing company, we offer
                comprehensive 360-degree digital promotion solutions.
                Understanding the crucial role of brand prestige in influencing
                customer perception and productivity, we focus on consistently
                addressing negative impacts, prioritizing customer satisfaction,
                and safeguarding brand reputation for the present and future.
                Our corporate reputation management process is invaluable for
                any business seeking to improve their online image in
                competitive environments. Trust Review Express, one of the top
                online reputation management companies globally, to help bolster
                your brand image.
              </p>

              <p className="mt-4 text-gray-600">
                our primary goal is to help businesses cultivate and maintain a
                positive online presence. We understand the importance of brand
                reputation in today&apos;s digital landscape and work diligently
                to address any negative perceptions while accentuating the
                positives. Through strategic planning, proactive monitoring, and
                effective communication, we aim to elevate our clients&apos;
                reputations and foster trust among their target audience. Our
                tailored approach ensures that each client receives personalized
                solutions to suit their unique needs and challenges. With our
                expertise and dedication, we empower businesses to navigate the
                complexities of online reputation management with confidence and
                achieve long-term success.
              </p>

              <a
                href="#contact"
                className="inline-block bg-red-600 hover:bg-transparent mt-8 px-12 py-3 border border-red-600 rounded font-medium text-sm text-white hover:text-red-600 focus:outline-none focus:ring active:text-red-500"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
