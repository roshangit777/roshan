import React, { useRef, useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Project = ({ sectionRefs }) => {
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(1);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const deltaX = touchEndX.current - touchStartX.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        setPrev(prev >= details.length - 1 ? 0 : prev + 1);
        setNext(next >= details.length - 1 ? 0 : next + 1);
      } else {
        setPrev(prev >= details.length - 1 ? 0 : prev + 1);
        setNext(next >= details.length - 1 ? 0 : next + 1);
      }
    }
  };
  const details = [
    {
      img: "/file-share.png",
      type: "SaaS/Web-app",
      title: "File-share",
      demoLink: "https://file-share-rdmr.onrender.com",
      gitLink: "https://github.com/roshangit777/file-share",
    },
    {
      img: "/social-media.jpg",
      type: "web-app",
      title: "Social Meadia",
      demoLink: "https://unityhub-b2jg.onrender.com/login",
      gitLink: "https://github.com/roshangit777/Social-Media",
    },
    {
      img: "/car-uber.webp",
      type: "web-app",
      title: "Uber Clone",
      demoLink: "",
      gitLink: "https://github.com/roshangit777/Uber-clone",
    },
    {
      img: "/todo.jpg",
      type: "web-app",
      title: "Todo List",
      demoLink: "https://taskmanagement777.netlify.app/",
      gitLink: "https://github.com/roshangit777/todo-app",
    },
    {
      img: "/food.png",
      type: "web-app",
      title: "Recipe app",
      demoLink: "https://remarkable-cactus-0bf11e.netlify.app/",
      gitLink:
        "https://github.com/roshangit777/React-projects/tree/main/food-recipe",
    },
    {
      img: "/joke.jpg",
      type: "web-app",
      title: "Joke-generator app",
      demoLink: "https://eclectic-paprenjak-d94e83.netlify.app/",
      gitLink:
        "https://github.com/roshangit777/React-projects/tree/main/Joke-generator",
    },
    {
      img: "/whether.jpeg",
      type: "web-app",
      title: "Whether app",
      demoLink: "https://serene-syrniki-dae390.netlify.app/",
      gitLink:
        "https://github.com/roshangit777/React-projects/tree/main/Whether-app",
    },
  ];

  return (
    <section
      ref={sectionRefs.project}
      className="w-full md:h-screen h-[600px]"
      id="project"
    >
      <div className="p-10 relative">
        <div className="w-[200px] h-[50px] bg-gradient-to-r from-orange-600 to-white rounded-2xl"></div>
        <h1 className="absolute font-caveat text-5xl text-black font-bold z-50 top-3 md:left-30 left-20 shadow-2xs ">
          My Work
        </h1>
        <div
          ref={(el) => {
            touchStartX.current = el;
            touchEndX.current = el;
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="w-full h-[400px] flex justify-center items-center 
        md:gap-20 gap-0 md:p-20 p-0 mt-10"
        >
          <div className="relative">
            <button
              className="absolute md:top-[-50px] top-[-80px] md:right-[-50px] right-0 z-50 p-2 text-black font-bold text-4xl hover:bg-gray-100 hover:rounded-2xl hover:text-orange-600"
              onClick={() => {
                setPrev(prev <= 0 ? details.length - 1 : prev - 1);
                setNext(next <= 0 ? details.length - 1 : next - 1);
              }}
            >
              <GrPrevious />
            </button>
            <button
              className="absolute md:top-[-50px] top-[-80px] md:left-[780px] left-64 z-50 p-2  text-black font-bold text-4xl hover:bg-gray-100 hover:rounded-2xl hover:text-orange-500"
              onClick={() => {
                setPrev(prev >= details.length - 1 ? 0 : prev + 1);
                setNext(next >= details.length - 1 ? 0 : next + 1);
              }}
            >
              <GrNext />
            </button>
          </div>

          <div className="flex flex-col gap-2 md:items-start p-2">
            <img
              src={details[prev].img}
              className="md:w-[280px] w-[400px] h-[200px] rounded-xl shadow-2xs"
              alt=""
            />
            <span className="text-sm font-semibold text-gray-500">
              {details[prev].type}
            </span>
            <h3 className="text-xl font-semibold">{details[prev].title}</h3>
            <div className="flex gap-2">
              <a
                href={details[prev].demoLink}
                target="_blank"
                className={
                  details[prev].demoLink.length > 0
                    ? "px-4 bg-gray-800 py-2 rounded-md text-white font-semibold hover:bg-black hover:shadow-2xs"
                    : "hidden"
                }
              >
                View Demo
              </a>
              <a
                href={details[prev].gitLink}
                target="_blank"
                className="px-4 bg-orange-500 py-2 rounded-md text-white font-semibold hover:bg-orange-600 hover:shadow-2xs"
              >
                View Code
              </a>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-2 items-start p-2">
            <img
              src={details[next].img}
              className="w-[280px] h-[200px] rounded-xl shadow-2xs"
              alt=""
            />
            <span className="text-sm font-semibold text-gray-500">
              {details[next].type}
            </span>
            <h3 className="text-xl font-semibold">{details[next].title}</h3>
            <div className="flex gap-2">
              <a
                href={details[next].demoLink}
                target="_blank"
                className="px-4 bg-gray-800 py-2 rounded-md text-white font-semibold hover:bg-black hover:shadow-2xs"
              >
                View Demo
              </a>
              <a
                href={details[next].gitLink}
                target="_blank"
                className="px-4 bg-orange-500 py-2 rounded-md text-white font-semibold hover:bg-orange-600 hover:shadow-2xs"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
