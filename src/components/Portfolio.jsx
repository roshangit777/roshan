import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { RiBuilding2Fill } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa";
const Portfolio = ({ sectionRefs, activeSection }) => {
  const [fronendHover, setFrontendHover] = useState(false);
  const [backendHover, setBakendHover] = useState(false);
  const [devHover, setDevHover] = useState(false);

  const handleFrontendMouseEnter = () => {
    setFrontendHover(true);
  };
  const handleFrontendMouseLeave = () => {
    setFrontendHover(false);
  };
  const handleBackendMouseEnter = () => {
    setBakendHover(true);
  };
  const handleBackendMouseLeave = () => {
    setBakendHover(false);
  };
  const handleDevMouseEnter = () => {
    setDevHover(true);
  };
  const handleDevMouseLeave = () => {
    setDevHover(false);
  };
  return (
    <section
      ref={sectionRefs.portfolio}
      className="w-full h-auto"
      id="portfolio"
    >
      <div
        className={
          activeSection == "home"
            ? "hidden"
            : "absolute bottom-10 right-10 p-2 bg-orange-100 rounded-xl shadow-2xs"
        }
      >
        <FaArrowUp className="" />
      </div>
      <div className="p-10 relative">
        <div className="w-[200px] h-[50px] bg-gradient-to-r from-orange-600 to-white rounded-2xl"></div>
        <h1 className="absolute font-caveat text-5xl text-black font-bold z-50 top-4 md:left-30 left-20 shadow-2xs">
          Qualification
        </h1>
        <div className="flex md:flex-row flex-col items-center justify-center md:gap-10 md:p-8">
          <div className="md:w-[400px] w-[350px] md:h-[200px] h-[150px] bg-white shadow-2xs rounded-xl flex flex-col items-start justify-center hover:shadow-2xl transition-all duration-150">
            <p className="text-md text-black font-semibold ml-5 flex items-center gap-2">
              <FaCalendarAlt />
              SEP/2024
            </p>
            <p className="text-md text-black font-semibold ml-5 flex items-center gap-2">
              <FaGraduationCap />
              Master of Computer Application(MCA)
            </p>
            <p className="text-md text-black font-semibold ml-5 flex items-center gap-2">
              <RiBuilding2Fill />
              AMC Engineering Collage Bannerugatta
            </p>
          </div>
          <div className="md:w-[400px] w-[350px] md:h-[200px] h-[100px] bg-white shadow-2xs rounded-xl flex flex-col items-start justify-center hover:shadow-2xl transition-all duration-150">
            <p className="text-md text-black font-semibold ml-5 flex items-center gap-2">
              <FaCalendarAlt />
              SEP/2022
            </p>
            <p className="text-md text-black font-semibold ml-5 flex items-center gap-2">
              <FaGraduationCap />
              Bacholers of Science(BSC)
            </p>
            <p className="text-md text-black font-semibold ml-5 flex items-center gap-2">
              <RiBuilding2Fill />
              The National Collage Jayanagara.
            </p>
          </div>
        </div>
      </div>
      <div className="p-10 pt-0 relative md:mt-0 mt-30">
        <div className="w-[200px] h-[50px] bg-gradient-to-r from-orange-600 to-white rounded-2xl"></div>
        <h1 className="absolute font-caveat text-5xl text-black font-bold z-50 -top-6 md:left-30 left-30 shadow-2xs ">
          Skills
        </h1>
        <div className="flex md:flex-row flex-col items-center justify-center md:gap-5 md:p-10 p-2 gap-0 md:mt-10 mt-12">
          <div
            onMouseEnter={handleFrontendMouseEnter}
            onMouseLeave={handleFrontendMouseLeave}
            className="w-[300px] md:h-[400px] h-[340px] bg-white rounded-xl flex flex-col items-center justify-start gap-5"
            id="frontend"
          >
            <h1 className="text-md font-bold">Frontend</h1>
            <div className="flex flex-col items-start justify-center gap-5">
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-1">
                  {" "}
                  <div className="w-[50px] h-[70px] bg-gray-100 rounded-xl p-2 flex items-center justify-center">
                    <img
                      src="/html-1.svg"
                      alt=""
                      className={
                        fronendHover
                          ? "animate-bounce shadow-2xs scale-125 transition-all duration-150"
                          : ""
                      }
                    />
                  </div>
                  <p className="w-[60px] flex items-center justify-center text-sm text-gray-700 font-semibold">
                    HTML
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  {" "}
                  <div className="w-[50px] h-[70px] bg-gray-100 rounded-xl p-2 flex items-center justify-center">
                    <img
                      src="/css-3.svg"
                      alt=""
                      className={
                        fronendHover
                          ? "animate-bounce shadow-2xs scale-125 transition-all duration-150"
                          : ""
                      }
                    />
                  </div>
                  <p className="w-[60px] flex items-center justify-center text-sm text-gray-700 font-semibold">
                    CSS
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  {" "}
                  <div className="w-[50px] h-[70px] bg-gray-100 rounded-xl p-2 flex items-center justify-center">
                    <img
                      src="/react-2.svg"
                      alt=""
                      className={
                        fronendHover
                          ? "animate-bounce shadow-2xs scale-125 transition-all duration-150"
                          : ""
                      }
                    />
                  </div>
                  <p className="w-[60px] flex items-center justify-center text-sm text-gray-700 font-semibold">
                    ReactJS
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex flex-col items-center gap-1">
                  {" "}
                  <div className="w-[50px] h-[70px] bg-gray-100 rounded-xl p-2 flex items-center justify-center">
                    <img
                      src="/redux.svg"
                      alt=""
                      className={
                        fronendHover
                          ? "animate-bounce shadow-2xs scale-125 transition-all duration-150"
                          : ""
                      }
                    />
                  </div>
                  <p className="w-[60px] flex items-center justify-center text-sm text-gray-700 font-semibold">
                    redux
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  {" "}
                  <div className="w-[50px] h-[70px] bg-gray-100 rounded-xl p-2 flex items-center justify-center">
                    <img
                      src="/tailwind.svg"
                      alt=""
                      className={
                        fronendHover
                          ? "animate-bounce shadow-2xs scale-125 transition-all duration-150"
                          : ""
                      }
                    />
                  </div>
                  <p className="w-[60px] flex items-center justify-center text-sm text-gray-700 font-semibold">
                    Tailwind
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={handleBackendMouseEnter}
            onMouseLeave={handleBackendMouseLeave}
            className="w-[300px] md:h-[400px] h-[340px] bg-white rounded-xl flex flex-col items-center justify-start gap-5"
          >
            <h1 className="text-md font-bold">Backend</h1>
            <div className="flex flex-col items-center justify-center gap-5">
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-1">
                  {" "}
                  <div className="w-[50px] h-[70px] bg-gray-100 rounded-xl p-2 flex items-center justify-center">
                    <img
                      src="logo-javascript.svg"
                      alt=""
                      className={
                        backendHover
                          ? "animate-bounce shadow-2xs scale-125 transition-all duration-150"
                          : ""
                      }
                    />
                  </div>
                  <p className="w-[60px] flex items-center justify-center text-sm text-gray-700 font-semibold">
                    Javascript
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  {" "}
                  <div className="w-[50px] h-[70px] bg-gray-100 rounded-xl p-2 flex items-center justify-center">
                    <img
                      src="/typescript.svg"
                      alt=""
                      className={
                        backendHover
                          ? "animate-bounce shadow-2xs scale-125 transition-all duration-150"
                          : ""
                      }
                    />
                  </div>
                  <p className="w-[60px] flex items-center justify-center text-sm text-gray-700 font-semibold">
                    Typescript
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  {" "}
                  <div className="w-[50px] h-[70px] bg-gray-100 rounded-xl p-2 flex items-center justify-center">
                    <img
                      src="/nodejs-2.svg"
                      alt=""
                      className={
                        backendHover
                          ? "animate-bounce shadow-2xs scale-125 transition-all duration-150"
                          : ""
                      }
                    />
                  </div>
                  <p className="w-[60px] flex items-center justify-center text-sm text-gray-700 font-semibold">
                    nodeJS
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex flex-col items-center gap-1">
                  {" "}
                  <div className="w-[50px] h-[70px] bg-gray-100 rounded-xl p-2 flex items-center justify-center">
                    <img
                      src="/icons8-express-js.svg"
                      alt=""
                      className={
                        backendHover
                          ? "animate-bounce shadow-2xs scale-125 transition-all duration-150"
                          : ""
                      }
                    />
                  </div>
                  <p className="w-[60px] flex items-center justify-center text-sm text-gray-700 font-semibold">
                    ExpressJS
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  {" "}
                  <div className="w-[50px] h-[70px] bg-gray-100 rounded-xl p-2 flex items-center justify-center">
                    <img
                      src="/nextjs.svg"
                      alt=""
                      className={
                        backendHover
                          ? "animate-bounce shadow-2xs scale-125 transition-all duration-150"
                          : ""
                      }
                    />
                  </div>
                  <p className="w-[60px] flex items-center justify-center text-sm text-gray-700 font-semibold">
                    NextJS
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  {" "}
                  <div className="w-[50px] h-[70px] bg-gray-100 rounded-xl p-2 flex items-center justify-center">
                    <img
                      src="/icons8-redis.svg"
                      alt=""
                      className={
                        backendHover
                          ? "animate-bounce shadow-2xs scale-125 transition-all duration-150"
                          : ""
                      }
                    />
                  </div>
                  <p className="w-[60px] flex items-center justify-center text-sm text-gray-700 font-semibold">
                    Redis
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={handleDevMouseEnter}
            onMouseLeave={handleDevMouseLeave}
            className="w-[300px] h-[400px] bg-white rounded-xl flex flex-col items-center justify-start gap-5"
          >
            <h1 className="text-md font-bold">Database & Devops & Cloud</h1>
            <div className="flex flex-col items-center justify-center gap-5">
              <div className="flex items-center gap-5">
                <div className="flex flex-col items-center gap-1">
                  {" "}
                  <div className="w-[50px] h-[70px] bg-gray-100 rounded-xl p-2 flex items-center justify-center">
                    <img
                      src="mongodb.svg"
                      alt=""
                      className={
                        devHover
                          ? "animate-bounce shadow-2xs scale-125 transition-all duration-150"
                          : ""
                      }
                    />
                  </div>
                  <p className="w-[60px] flex items-center justify-center text-sm text-gray-700 font-semibold">
                    MongoDB
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  {" "}
                  <div className="w-[50px] h-[70px] bg-gray-100 rounded-xl p-2 flex items-center justify-center">
                    <img
                      src="/mysql.svg"
                      alt=""
                      className={
                        devHover
                          ? "animate-bounce shadow-2xs scale-125 transition-all duration-150"
                          : ""
                      }
                    />
                  </div>
                  <p className="w-[60px] flex items-center justify-center text-sm text-gray-700 font-semibold">
                    MySQL
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  {" "}
                  <div className="w-[50px] h-[70px] bg-gray-100 rounded-xl p-2 flex items-center justify-center">
                    <img
                      src="/icons8-postgresql.svg"
                      alt=""
                      className={
                        devHover
                          ? "animate-bounce shadow-2xs scale-125 transition-all duration-150"
                          : ""
                      }
                    />
                  </div>
                  <p className="w-[60px] flex items-center justify-center text-sm text-gray-700 font-semibold">
                    postgresql
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex flex-col items-center gap-1">
                  {" "}
                  <div className="w-[50px] h-[70px] bg-gray-100 rounded-xl p-2 flex items-center justify-center">
                    <img
                      src="/icons8-firebase.svg"
                      alt=""
                      className={
                        devHover
                          ? "animate-bounce shadow-2xs scale-125 transition-all duration-150"
                          : ""
                      }
                    />
                  </div>
                  <p className="w-[60px] flex items-center justify-center text-sm text-gray-700 font-semibold">
                    Firebase
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  {" "}
                  <div className="w-[50px] h-[70px] bg-gray-100 rounded-xl p-2 flex items-center justify-center">
                    <img
                      src="/docker.svg"
                      alt=""
                      className={
                        devHover
                          ? "animate-bounce shadow-2xs scale-125 transition-all duration-150"
                          : ""
                      }
                    />
                  </div>
                  <p className="w-[60px] flex items-center justify-center text-sm text-gray-700 font-semibold">
                    Docker
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  {" "}
                  <div className="w-[50px] h-[70px] bg-gray-100 rounded-xl p-2 flex items-center justify-center">
                    <img
                      src="/git-icon.svg"
                      alt=""
                      className={
                        devHover
                          ? "animate-bounce shadow-2xs scale-125 transition-all duration-150"
                          : ""
                      }
                    />
                  </div>
                  <p className="w-[60px] flex items-center justify-center text-sm text-gray-700 font-semibold">
                    Git
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 self-start">
                <div className="flex flex-col items-center gap-1">
                  {" "}
                  <div className="w-[50px] h-[70px] bg-gray-100 rounded-xl p-2 flex items-center justify-center">
                    <img
                      src="/icons8-aws.svg"
                      alt=""
                      className={
                        devHover
                          ? "animate-bounce shadow-2xs scale-125 transition-all duration-150"
                          : ""
                      }
                    />
                  </div>
                  <p className="w-[60px] flex items-center justify-center text-sm text-gray-700 font-semibold">
                    AWS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
