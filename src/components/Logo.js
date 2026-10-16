import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="Thon Chhavalit home"
      className="inline-flex items-center gap-3 text-dark dark:text-light"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-dark text-sm font-bold text-light dark:bg-light dark:text-dark">
        V.
      </span>
      <span className="text-base font-bold tracking-tight">
        Valit
        <span className="ml-1.5 text-xs font-medium text-dark/50 dark:text-light/50 sm:hidden">
          / Backend developer
        </span>
      </span>
    </Link>
  );
};

export default Logo;
