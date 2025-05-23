import { MdOutlineFileDownload } from "react-icons/md";
import { BsArrowDown } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
const Hero = ({ sectionRefs }) => {
  const hereRef = useRef(null);
  const [link, setLink] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setLink(entry.isIntersecting);
      },
      { threshold: 0.7 }
    );
    if (hereRef.current) {
      observer.observe(hereRef.current);
    }

    return () => {
      if (hereRef.current) {
        observer.unobserve(hereRef.current);
      }
    };
  }, []);
  return (
    <section
      className="md:w-full h-screen flex items-center justify-center"
      id="home"
      ref={(el) => {
        sectionRefs.home.current = el;
        hereRef.current = el;
      }}
    >
      <div
        className={
          link
            ? "hidden md:block absolute bottom-10 hover:animate-bounce z-50"
            : "hidden"
        }
      >
        <a
          href="#portfolio"
          className="flex items-center gap-2 px-7 py-2 bg-[#fff] shadow-2xl rounded-md"
        >
          <span className="text-sm font-semibold">Know more</span>
          <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
            <BsArrowDown className="text-white font-extrabold text-2xl" />
          </div>
        </a>
      </div>
      <div className="w-[200px] md:w-[600px] flex flex-col items-center justify-center md:gap-4 gap-5">
        <h1 className="text-lg md:text-xl font-bold">
          Hi, I'm{" "}
          <span className="text-lg md:text-xl text-orange-600">Roshan</span>
        </h1>
        <div className="flex flex-col items-center md:w-[800px] w-[400px]">
          <h1 className="text-[22px] md:text-5xl font-bold text-center ">
            "Transforming Ideas into Digital
          </h1>
          <h1 className="text-[22px] md:text-5xl font-bold text-center md:w-fit w-[300px] ">
            Experiences, One Line of Code at a Time."
          </h1>
        </div>
        <h1 className="text-sm font-semibold text-center text-gray-600 md:w-fit w-[300px]">
          System-minded{" "}
          <span className="text-black font-bold">full-stack developer</span>{" "}
          specializing in{" "}
          <span className="text-black font-bold">JavaScript</span> and the{" "}
          <span className="text-black font-bold">MERN stack</span>. I build
          scalable web apps and am currently exploring{" "}
          <span className="text-black font-bold">Cloud Computing</span> to level
          up even more.
        </h1>
        <div className="flex items-center gap-4">
          <a href="https://github.com/roshangit777" target="_blank">
            <FaGithub className="text-2xl font-bold hover:text-orange-600 hover:scale-125 transition-all duration-100" />
          </a>
          <a href="https://www.linkedin.com/in/roshanrrr/" target="_blank">
            <FaLinkedin className="text-2xl font-bold hover:text-orange-600 hover:scale-125 transition-all duration-100" />
          </a>
          <a href="mailto:roshanofficial766@gmail.com" target="_blank">
            <MdOutlineMail className="text-2xl font-bold hover:text-orange-600 hover:scale-125 transition-all duration-100" />
          </a>
        </div>
        <a
          href="/Roshan-resume(1).pdf"
          target="_blank"
          className="px-5 py-2 bg-orange-600 text-white text-md font-semibold rounded-lg flex items-center gap-2 hover:px-7 hover:scale-105 hover:bg-black transition-all duration-200"
        >
          <span>Download CV</span>{" "}
          <MdOutlineFileDownload className="text-2xl font-bold" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
