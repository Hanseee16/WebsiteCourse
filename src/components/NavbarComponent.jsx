import { Navbar } from "flowbite-react";
import { navLinks } from "../data/index";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY > 0;
    setChangeColor(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        className={
          changeColor
            ? "bg-white dark:bg-[#09101F] fixed w-full py-5 shadow-md transition-all ease-in duration-300 z-50 animate__animated animate__fadeInDown"
            : "bg-transparent dark:bg-transparent fixed w-full py-4 animate__animated animate__fadeInDown"
        }
      >
        <Link to="">
          <span className="text-2xl lg:text-2xl text-color-text dark:text-white font-normal">
            Website
            <span className="text-secondary-color dark:text-red-600 font-bold">
              Course
            </span>
          </span>
        </Link>
        <div className="flex gap-2 md:order-2 md:hidden lg:block">
          <Flowbite>
            <DarkThemeToggle className="text-color-text dark:text-white" />
          </Flowbite>
          <Navbar.Toggle className="text-color-text dark:text-white" />
        </div>
        <Navbar.Collapse className="text-center bg-white dark:bg-[#1E293B] dark:md:bg-transparent md:bg-transparent rounded-md mt-3 md:mt-0">
          {navLinks.map((link) => {
            return (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active, text-secondary-color dark:text-red-600 font-semibold"
                    : "text-black dark:text-white hover:text-secondary-color/90 dark:hover:text-red-600/90 transition ease-in duration-300 py-3 md:py-0"
                }
              >
                {link.text}
              </NavLink>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
