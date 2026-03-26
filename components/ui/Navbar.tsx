"use client";

const navigationData = [
  { title: "Home", href: "/", id: "home" },
  { title: "About Us", href: "/#about", id: "about" },
  { title: "Products", href: "/#products", id: "products" },
  { title: "Contacts", href: "/#contact", id: "contact" },
];

import { useEffect, useState } from "react";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { scrollToView } from "@/lib/scrollToView";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const sectionIds = navigationData.map((item) => item.id).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinkClass = (id: string) =>
    cn(
      "transition-colors duration-300 rounded-md text-sm font-medium",
      activeSection === id ? "text-white bg-primary" : "text-muted-foreground",
    );

  return (
    <>
      <header className="relative bg-background shadow sticky top-0 z-50">
        <ScrollProgress />
        <div className="mx-auto flex container items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center">
            <Link
              href="/"
              className="w-8 h-8 flex items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white font-bold text-sm shadow-md"
            >
              SRI
            </Link>
            <span className="ml-3 text-sm md:text-lg font-bold text-foreground tracking-wide">
              Shree Ravechi Impex
            </span>
          </div>

          <div className="flex items-center gap-2">
            {navigationData.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(navLinkClass(item.id), "max-md:hidden")}
              >
                <Button
                  variant="link"
                  onClick={() => scrollToView(item.id)}
                  className={cn(navLinkClass(item.id), "max-md:hidden")}
                >
                  {item.title}
                </Button>
              </Link>
            ))}

            <motion.button
              className="md:hidden ml-2 p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              whileTap={{ scale: 0.9 }}
            >
              <MenuIcon className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            className="fixed inset-0 z-[100] md:hidden flex flex-col bg-background"
            initial={{ opacity: 0, y: -16 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.25, ease: [0.32, 0.72, 0, 1] },
            }}
            exit={{
              opacity: 0,
              y: -16,
              transition: { duration: 0.2, ease: [0.32, 0.72, 0, 1] },
            }}
            aria-modal="true"
            role="dialog"
          >
            {/* Header row */}
            <div className="flex items-center justify-between px-4 py-3 sm:px-6 border-b">
              <div className="flex items-center">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="w-6 h-6 flex text-xs items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 text-white font-bold text-sm shadow-md"
                >
                  SRI
                </Link>
                <span className="ml-2 md:ml-3 text-sm md:text-lg font-bold text-foreground tracking-wide">
                  Shree Ravechi Impex
                </span>
              </div>
              <motion.button
                className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                whileTap={{ scale: 0.9 }}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                  transition: { duration: 0.25, delay: 0.1 },
                }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col flex-1 justify-center px-6 gap-1">
              {navigationData.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 0.1 + i * 0.07,
                      duration: 0.35,
                      ease: [0.32, 0.72, 0, 1],
                    },
                  }}
                  exit={{
                    opacity: 0,
                    x: -24,
                    transition: {
                      delay: i * 0.03,
                      duration: 0.2,
                      ease: [0.32, 0.72, 0, 1],
                    },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-4 rounded-xl text-2xl font-semibold transition-colors",
                      activeSection === item.id
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted hover:text-primary",
                    )}
                  >
                    <span className="text-xs font-mono text-muted-foreground w-5">
                      0{i + 1}
                    </span>
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              className="px-6 py-6 border-t text-xs text-muted-foreground"
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.1 + navigationData.length * 0.07 + 0.05,
                  duration: 0.3,
                },
              }}
              exit={{ opacity: 0, y: 8, transition: { duration: 0.15 } }}
            >
              © {new Date().getFullYear()} Shree Ravechi Impex
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
