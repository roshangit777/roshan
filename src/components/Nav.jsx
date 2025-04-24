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

const Nav = () => {
  const [activeSection, setActiveSection] = useState(null);
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
  console.log(activeSection);

  return (
    <section className="flex overflow-x-hidden overflow-y-hidden">
      <div className="md:flex md:flex-col justify-between p-8 md:w-[180px] shadow-2xl md:h-screen md:sticky left-0 absolute w-full flex-row bottom-2">
        <div className="flex flex-col items-start justify-center gap-10">
          <div className="md:w-30 md:h-30 rounded-full p-1 bg-cover bg-orange-500 flex items-center justify-center overflow-hidden w-15 h-15">
            <img
              src="/pic2.png"
              className="md:w-21 md:h-full object-cover rounded-full mt-8 overflow-hidden w-11"
              alt=""
            />
          </div>
          <nav className="">
            <ul className="flex flex-col items-start gap-1">
              <li
                className={
                  activeSection == "home"
                    ? "flex items-center gap-5 text-orange-600 font-semibold text-lg"
                    : "flex items-center gap-3 hover:gap-5 hover:text-orange-600 font-semibold text-lg"
                }
              >
                <IoHomeOutline className="text-2xl" />
                <a
                  href="Home"
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
              >
                <LiaBinocularsSolid className="text-2xl" />
                <a
                  href="Home"
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
              >
                <GrProjects className="text-2xl" />
                <a
                  href="Home"
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
              >
                <RiContactsLine className="text-2xl" />
                <a
                  href="Home"
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
        <div>
          <nav className="list-none flex flex-col gap-4">
            <div className="flex flex-row gap-4 items-center justify-start">
              <li className="text-2xl hover:text-orange-500">
                <a href="" className="">
                  <FaGithub />
                </a>
              </li>
              <li className="text-2xl hover:text-orange-500">
                <a href="" className="">
                  <FaLinkedin />
                </a>
              </li>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <li className="text-2xl hover:text-orange-500">
                <a href="" className="">
                  <MdOutlineMail />
                </a>
              </li>
              <li className="text-2xl hover:text-orange-500">
                <a href="" className="">
                  <FaFileDownload className="w-6 h-5" />
                </a>
              </li>
            </div>
          </nav>
        </div>
      </div>
      <main className="flex-1 overflow-y-auto h-screen p-2">
        <Hero sectionRefs={sectionRefs} />
        <Portfolio sectionRefs={sectionRefs} activeSection={activeSection} />
        <Project sectionRefs={sectionRefs} />
        <Contact sectionRefs={sectionRefs} />
      </main>
    </section>
  );
};

export default Nav;
