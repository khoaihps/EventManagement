import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/white-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="bg-gray-800 sticky top-0 z-50 w-full">
      <div
        className={`mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8`}
      >
        <a className="block text-teal-600" href="/">
          <img src={Logo} style={{ height: 32 }} alt="Logo"></img>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav
            aria-label="Global"
            className={`hidden md:block ${isMenuOpen ? "block" : "hidden"}`}
          >
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-white transition hover:text-gray-500/75"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-gray-500/75"
                  href="/"
                >
                  About
                </a>
              </li>

              <li>
                <Link to="/event/customer">
                  <a
                    className="text-white transition hover:text-gray-500/75"
                    href="/"
                  >
                    Your Events
                  </a>
                </Link>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-gray-500/75"
                  href="/"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                href="/login/customer"
              >
                <span className="absolute rounded-lg inset-0 border border-yellow-500 group-active:border-yellow-500"></span>
                <span className="block border rounded-lg border-yellow-500 bg-yellow-500 px-5 py-2.5 transition-transform active:border-yellow-500 active:bg-yellow-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                  Log in
                </span>
              </a>
            </div>

            <button
              onClick={toggleMenu}
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns={"http://www.w3.org/2000/svg"}
                className={`h-5 w-5 ${isMenuOpen ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                xmlns={"http://www.w3.org/2000/svg"}
                className={`h-5 w-5 ${isMenuOpen ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Dropdown menu content */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="py-2">
            <li>
              <a className="block text-white px-4 py-2" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="block text-white px-4 py-2" href="/">
                About
              </a>
            </li>
            <li>
              <Link to="/event/customer">
                <a className="block text-white px-4 py-2" href="/">
                  Your Events
                </a>
              </Link>
            </li>
            <li>
              <a className="block text-white px-4 py-2" href="/">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, navItemStyles, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className={`flex py-2 text-base font-medium lg:ml-12 lg:inline-flex ${navItemStyles}`}
        >
          {children}
        </a>
      </li>
    </>
  );
};
