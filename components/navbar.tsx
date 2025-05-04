import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="md" position="sticky">
      <NavbarContent
        className="hidden md:flex basis-1/5 md:basis-full"
        justify="end">
        <NavbarItem className="hidden md:flex gap-2 flex-1">
          <h1 className="text-2xl font-bold tracking-tighter md:text-2xl uppercase bg-gradient-to-r from-amber-700 to-amber-600 dark:from-green-400 dark:to-yellow-400 bg-clip-text text-transparent">
            {siteConfig.name}.
          </h1>
        </NavbarItem>
        <NavbarItem className="hidden md:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        {/* <NavbarMenuToggle /> */}
      </NavbarContent>
    </HeroUINavbar>
  );
};
