import { COMPANY_NAME, SOCIAL_LINKS } from "@/constant";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 max-w-screen-xl">
        <div className="gap-8 lg:gap-32 grid grid-cols-1 lg:grid-cols-2 mt-16">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
              As a leading digital marketing agency, we are dedicated to helping
              businesses thrive in the ever-evolving online landscape. With a
              passion for innovation and a commitment to delivering results
            </p>

            <div className="flex justify-center lg:justify-start gap-4 mt-6">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;

                return (
                  <Link
                    key={link.media}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">{link.media}</span>
                    <Icon />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="gap-8 grid grid-cols-1 lg:grid-cols-3 text-center lg:text-left">
            <div>
              <strong className="font-medium text-gray-900"> Services </strong>

              <ul className="space-y-1 mt-6">
                <li>
                  <a
                    className="text-gray-700 hover:text-gray-700/75 transition"
                    href="#"
                  >
                    Branding
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 hover:text-gray-700/75 transition"
                    href="#"
                  >
                    Marketing
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 hover:text-gray-700/75 transition"
                    href="#"
                  >
                    Web Development
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900">Quick Links</strong>

              <ul className="space-y-1 mt-6">
                <li>
                  <a
                    className="text-gray-700 hover:text-gray-700/75 transition"
                    href="#"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 hover:text-gray-700/75 transition"
                    href="#"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 hover:text-gray-700/75 transition"
                    href="#"
                  >
                    Reviews
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 hover:text-gray-700/75 transition"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900"> Support </strong>

              <ul className="space-y-1 mt-6">
                <li>
                  <a
                    className="text-gray-700 hover:text-gray-700/75 transition"
                    href="#"
                  >
                    FAQs
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 hover:text-gray-700/75 transition"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-gray-100 mt-16 pt-8 border-t">
          <p className="text-center text-gray-500 text-xs/relaxed">
            &copy; {COMPANY_NAME} {new Date().getFullYear()}. All rights
            reserved.
            <br />
            Created By{" "}
            <Link
              target="_blank"
              href="https://ahnafabir.com"
              className="text-gray-700 hover:text-gray-700/75 underline transition"
            >
              Ahnaf Abir
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
