import Link from "next/link";
import { useState } from "react";
const NavBar = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  // const NavItems = [{name: 'Mercury', color: '#FFFFFF'}, {name: 'Venus', color: '#F7CC7F'}, {name: 'Earth', color: '#545BFE'}, {name: 'Mars', color: '#FF6A45'}, {name: 'Jupiter', color: '#ECAD7A'}, {name: 'Saturn', color: '#FCCB6B'}, {name: 'Uranus', color: '#65F0D5'}, {name: 'Neptune', color: '#497EFA'}]
  const NavItems = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 border-b border-b-slate-600 lg:border-0">
        <div className="container px-2 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              href={"/"}
              className="text-3xl sm:text-4xl font-bold leading-relaxed uppercase inline-block mr-4 py-2 text-white font-antonio"
            >
              The planets
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <img
                src="./assets/icon-hamburger.svg"
                alt="hamburger"
                className="w-8"
              />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center self-end" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto w-full lg:w-auto">
              {NavItems.map((item, index) => {
                return (
                  <li
                    className="nav-item flex justify-between py-4 lg:py-0 border-t border-t-slate-600  lg:border-0 items-center"
                    key={index}
                  >
                    <div className="left flex items-center">
                      <div
                        className="rounded-full w-6 h-6 lg:hidden"
                        style={{ backgroundColor: NavItems[index].color }}
                      ></div>
                      <Link
                        href={`/${item}`}
                        className="px-3 py-2 flex items-center tracking-wider  uppercase text-lg font-semibold leading-snug text-white hover:opacity-75 font-spartan"
                      >
                        {item}
                      </Link>
                    </div>

                    <div className="lg:hidden">
                      <img src="../assets/icon-chevron.svg" alt="chevron" />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
