import React, { useEffect, useRef, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { LiaBinocularsSolid } from "react-icons/lia";
import { GrProjects } from "react-icons/gr";
import { RiContactsLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Project from "./Project";
import Contact from "./Contact";
import { RiMenu4Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [mobileNav, setMobileNav] = useState(false);
  const sectionRefs = {
    home: useRef(),
    portfolio: useRef(),
    project: useRef(),
    contact: useRef(),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // triggers when 50% of section is in view
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <section className="relative flex overflow-x-hidden overflow-y-hidden scroll-smooth">
      <div className="md:bg-white md:flex md:flex-col justify-between p-8 md:w-[180px] shadow-2xl md:h-screen md:sticky md:left-0 md:rounded-none absolute w-[320px] flex left-[50%] -translate-x-1/2 md:translate-x-0 bottom-20 bg-orange-600 z-100 h-[20px] rounded-4xl">
        <div className="w-full md:hidden flex items-center justify-between gap-40">
          <div
            id="navigation"
            className={
              mobileNav
                ? "md:hidden absolute w-full h-[150px] bg-orange-600 bottom-0 right-0 rounded-3xl z-200 flex flex-col items-center justify-around transition-all duration-150 p-10"
                : "md:hidden absolute w-full h-[150px] bg-orange-600 bottom-0 -right-150 rounded-3xl z-200 flex flex-col items-center justify-around transition-all duration-100"
            }
          >
            <ul className="flex items-center justify-center gap-4">
              <li
                className={
                  activeSection == "home"
                    ? "flex flex-col items-center text-white font-semibold text-sm"
                    : "flex flex-col items-center hover:text-white font-semibold text-sm"
                }
                onClick={() => {
                  setMobileNav(false);
                }}
              >
                <IoHomeOutline className="text-2xl" />
                <a
                  href="#home"
                  className={
                    activeSection == "home"
                      ? "transition-all duration-200 text-white"
                      : "transition-all duration-200 hover:text-white"
                  }
                >
                  <span onClick={() => (window.location.href = "#home")}></span>
                  Home
                </a>
              </li>
              <li
                className={
                  activeSection == "portfolio"
                    ? "flex flex-col items-center text-white font-semibold text-sm"
                    : "flex flex-col items-center hover:text-white font-semibold text-sm"
                }
                onClick={() => setMobileNav(false)}
              >
                <LiaBinocularsSolid className="text-2xl" />
                <a
                  href="#portfolio"
                  className={
                    activeSection == "portfolio"
                      ? "transition-all duration-200 text-white"
                      : "transition-all duration-200 hover:text-white"
                  }
                >
                  Portfolio
                </a>
              </li>
              <li
                className={
                  activeSection == "project"
                    ? "flex flex-col items-center text-white font-semibold text-sm"
                    : "flex flex-col items-center hover:text-white font-semibold text-sm"
                }
                onClick={() => setMobileNav(false)}
              >
                <GrProjects className="text-2xl" />
                <a
                  href="#project"
                  className={
                    activeSection == "project"
                      ? "transition-all duration-200 text-white"
                      : "transition-all duration-200 hover:text-white"
                  }
                >
                  Project
                </a>
              </li>
              <li
                className={
                  activeSection == "contact"
                    ? "flex flex-col items-center text-white font-semibold text-sm"
                    : "flex flex-col items-center hover:text-white font-semibold text-sm"
                }
                onClick={() => setMobileNav(false)}
              >
                <RiContactsLine className="text-2xl" />
                <a
                  href="#contact"
                  className={
                    activeSection == "contact"
                      ? "transition-all duration-200 text-white"
                      : "transition-all duration-200 hover:text-white"
                  }
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="place-self-end mt-5 p-1">
              <span className="">
                <RxCross2
                  className="text-2xl font-bold text-white"
                  onClick={() => setMobileNav(false)}
                />
              </span>
            </div>
          </div>

          <div className="md:w-30 md:h-30 rounded-full p-1 bg-cover md:bg-orange-500 bg-white flex items-center justify-center overflow-hidden w-12 h-12">
            <img
              src="/pic2.png"
              className="md:w-21 md:h-full object-cover rounded-full md:mt-8 overflow-hidden w-11 mt-4"
              alt=""
            />
          </div>
          <RiMenu4Fill
            className="text-5xl text-white p-2"
            onClick={() => setMobileNav(true)}
          />
        </div>
        <div className="hidden md:flex flex-col items-start justify-center gap-1">
          <div className="md:w-30 md:h-30 rounded-full p-1 bg-cover md:bg-orange-500 bg-white flex items-center justify-center overflow-hidden w-15 h-15 mb-10">
            <img
              src="/pic2.png"
              className="md:w-21 md:h-full object-cover rounded-full md:mt-8 overflow-hidden w-11 mt-4"
              alt=""
            />
          </div>
          <nav className="hidden md:block">
            <ul className="flex flex-col items-start gap-1">
              <li
                className={
                  activeSection == "home"
                    ? "flex items-center gap-5 text-orange-600 font-semibold text-lg"
                    : "flex items-center gap-3 hover:gap-5 hover:text-orange-600 font-semibold text-lg"
                }
                onClick={() => (window.location.href = "#home")}
              >
                <IoHomeOutline className="text-2xl" />
                <a
                  href="#home"
                  className={
                    activeSection == "home"
                      ? "transition-all duration-400 bg-orange-600 text-white px-3 rounded-md"
                      : "transition-all duration-400 hover:bg-orange-600 hover:text-white hover:px-3 hover:rounded-md"
                  }
                >
                  Home
                </a>
              </li>
              <li
                className={
                  activeSection == "portfolio"
                    ? "flex items-center gap-5 text-orange-600 font-semibold text-lg"
                    : "flex items-center gap-3 hover:gap-5 hover:text-orange-600 font-semibold text-lg"
                }
                onClick={() => (window.location.href = "#portfolio")}
              >
                <LiaBinocularsSolid className="text-2xl" />
                <a
                  href="#portfolio"
                  className={
                    activeSection == "portfolio"
                      ? "transition-all duration-400 bg-orange-600 text-white px-3 rounded-md"
                      : "transition-all duration-400 hover:bg-orange-600 hover:text-white hover:px-3 hover:rounded-md"
                  }
                >
                  Portfolio
                </a>
              </li>
              <li
                className={
                  activeSection == "project"
                    ? "flex items-center gap-5 text-orange-600 font-semibold text-lg"
                    : "flex items-center gap-3 hover:gap-5 hover:text-orange-600 font-semibold text-lg"
                }
                onClick={() => (window.location.href = "#project")}
              >
                <GrProjects className="text-2xl" />
                <a
                  href="#project"
                  className={
                    activeSection == "project"
                      ? "transition-all duration-400 bg-orange-600 text-white px-3 rounded-md"
                      : "transition-all duration-400 hover:bg-orange-600 hover:text-white hover:px-3 hover:rounded-md"
                  }
                >
                  Project
                </a>
              </li>
              <li
                className={
                  activeSection == "contact"
                    ? "flex items-center gap-5 text-orange-600 font-semibold text-lg"
                    : "flex items-center gap-3 hover:gap-5 hover:text-orange-600 font-semibold text-lg"
                }
                onClick={() => (window.location.href = "#contact")}
              >
                <RiContactsLine className="text-2xl" />
                <a
                  href="#contact"
                  className={
                    activeSection == "contact"
                      ? "transition-all duration-400 bg-orange-600 text-white px-3 rounded-md"
                      : "transition-all duration-400 hover:bg-orange-600 hover:text-white hover:px-3 hover:rounded-md"
                  }
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden md:block">
          <nav className="list-none flex flex-col gap-4">
            <div className="flex flex-row gap-4 items-center justify-start">
              <li className="text-2xl hover:text-orange-500">
                <a
                  href="https://github.com/roshangit777"
                  target="_blank"
                  className=""
                >
                  <FaGithub />
                </a>
              </li>
              <li className="text-2xl hover:text-orange-500">
                <a
                  href="https://www.linkedin.com/in/roshanrrr/"
                  target="_blank"
                  className=""
                >
                  <FaLinkedin />
                </a>
              </li>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <li className="text-2xl hover:text-orange-500">
                <a
                  href="mailto:roshanofficial766@gmail.com"
                  target="_blank"
                  className=""
                >
                  <MdOutlineMail />
                </a>
              </li>
              <li className="text-2xl hover:text-orange-500">
                <a href="/Roshan-resume(1).pdf" className="" target="_blank">
                  <FaFileDownload className="w-6 h-5" />
                </a>
              </li>
            </div>
          </nav>
        </div>
      </div>
      <main className="flex-1 overflow-x-hidden h-screen p-2">
        <Hero sectionRefs={sectionRefs} />
        <Portfolio sectionRefs={sectionRefs} activeSection={activeSection} />
        <Project sectionRefs={sectionRefs} />
        <Contact sectionRefs={sectionRefs} />
      </main>
    </section>
  );
};

export default Nav;
