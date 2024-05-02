import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NAV_LINKS } from "@/constant";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function NavDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="text-gray-600 hover:text-gray-600/75 transition"
        >
          <AlignJustify />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {NAV_LINKS.map((link) => {
          const NavIcon = link.icon;

          return (
            <DropdownMenuItem key={link.href} asChild>
              <Link href={link.href}>
                <NavIcon className="mr-2 w-4 h-4" />
                <span>{link.label}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
