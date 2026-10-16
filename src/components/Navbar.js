import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { GithubIcon, MoonIcon, SunIcon } from "./Icons";
import { useThemeSwitch } from "./Hooks/useThemeSwitch";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
];

const ThemeToggle = ({ mode, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-dark/10 transition-colors hover:bg-dark/5 dark:border-light/15 dark:hover:bg-light/10"
    aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
  >
    {mode === "light" ? (
      <SunIcon className="h-5 w-5" />
    ) : (
      <MoonIcon className="h-5 w-5" />
    )}
  </button>
);

const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();
  const [isOpen, setIsOpen] = useState(false);
  const toggleTheme = () => setMode(mode === "light" ? "dark" : "light");

  return (
    <header className="relative z-20 px-6 pt-6 sm:px-5 sm:pt-4">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between border-b border-dark/10 pb-5 dark:border-light/10">
        <Logo />

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-7 lg:hidden"
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-dark/65 transition-colors hover:text-primary dark:text-light/65 dark:hover:text-primaryDark"
            >
              {label}
            </Link>
          ))}
          <a
            href="https://t.me/Thon_Chhavalit"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-dark px-4 py-2.5 text-sm font-semibold text-light transition-colors hover:bg-primary dark:bg-light dark:text-dark dark:hover:bg-primaryDark"
          >
            Contact
          </a>
          <a
            href="https://github.com/thonchhavalit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-dark/10 transition-colors hover:bg-dark/5 dark:border-light/15 dark:hover:bg-light/10"
            aria-label="GitHub profile"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <ThemeToggle mode={mode} onToggle={toggleTheme} />
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle mode={mode} onToggle={toggleTheme} />
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-dark/10 dark:border-light/15"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`h-0.5 w-4 bg-dark transition-transform dark:bg-light ${
                isOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-4 bg-dark transition-transform dark:bg-light ${
                isOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-x-5 top-full mt-2 rounded-2xl border border-dark/10 bg-light p-5 text-dark shadow-xl dark:border-light/10 dark:bg-dark dark:text-light"
        >
          <div className="flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-dark/5 dark:hover:bg-light/10"
              >
                {label}
              </Link>
            ))}
            <a
              href="https://github.com/thonchhavalit"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-dark/5 dark:hover:bg-light/10"
            >
              GitHub
            </a>
            <a
              href="https://t.me/Thon_Chhavalit"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-dark px-4 py-3 text-center text-sm font-semibold text-light dark:bg-light dark:text-dark"
            >
              Get in touch
            </a>
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;
