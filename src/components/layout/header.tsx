import { NAV_LINKS } from "@/constant";
import Link from "next/link";
import NavDropdown from "./nav-dropdown";
import Image from "next/image";

export default function Header() {
  return (
    <header className="top-0 z-30 fixed bg-background w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="flex justify-between items-center h-16">
          <a className="block text-red-600" href="/">
            <span className="sr-only">Home</span>
            <Image
              width={200}
              height={200}
              src="/images/logo.png"
              alt="Red Wood Digital logo"
              className="h-16 w-full"
            />
          </a>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="md:block hidden">
              <ul className="flex items-center gap-6 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="block md:hidden">
              <NavDropdown />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
