"use client";

const navigationData = [
  { title: "Home", href: "/", id: "" },
  { title: "About Us", href: "#about", id: "about" },
  { title: "Products", href: "#products", id: "products" },
  { title: "Contacts", href: "#contact", id: "contact" },
];

import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { cn, scrollToSection } from "@/lib/utils";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = navigationData.map((item) => item.id).filter(Boolean);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    const handleScroll = () => {
      if (window.scrollY < 100) setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinkClass = (id: string) =>
    cn(
      "hover:text-primary transition-colors px-3 py-1.5 rounded-md text-sm font-medium",
      activeSection === id
        ? "bg-primary/10 text-primary font-semibold"
        : "text-muted-foreground",
    );

  return (
    <header className="relative bg-background shadow sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6">
        <Link
          href="/"
          className="font-mono w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold shrink-0"
        >
          SRI
        </Link>

        <div className="flex items-center gap-2">
          {navigationData.map((item) => (
            <a
              key={item.id}
              href={item.href}
              // onClick={() => scrollToSection(item.id)}
              className={cn(navLinkClass(item.id), "max-md:hidden")}
            >
              {item.title}
            </a>
          ))}

          {/* Mobile hamburger */}
          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden ml-2">
              <MenuIcon />
              <span className="sr-only">Menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuGroup>
                {navigationData.map((item) => (
                  <DropdownMenuItem
                    key={item.id}
                    className={cn(
                      activeSection === item.id &&
                        "bg-primary/10 text-primary font-semibold",
                    )}
                  >
                    <a href={item.href} className="w-full">
                      {item.title}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
