import Layout from "./Layout";

const Footer = () => (
  <footer className="border-t border-dark/10 dark:border-light/10">
    <Layout className="flex items-center justify-between py-6 text-sm text-dark/55 dark:text-light/55 sm:flex-col sm:items-start sm:gap-3">
      <span>
        © {new Date().getFullYear()} Thon Chhavalit. Built with care.
      </span>
      <div className="flex items-center gap-5">
        <a
          href="https://github.com/thonchhavalit"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-primary dark:hover:text-primaryDark"
        >
          GitHub
        </a>
        <a
          href="https://t.me/Thon_Chhavalit"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-primary dark:hover:text-primaryDark"
        >
          Contact
        </a>
      </div>
    </Layout>
  </footer>
);

export default Footer;
