import React from "react";
import { MdEmail } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

const Contact = ({ sectionRefs }) => {
  return (
    <section ref={sectionRefs.contact} className="w-full h-screen" id="contact">
      <div className="p-10 relative">
        <div className="w-[200px] h-[50px] bg-gradient-to-r from-orange-600 to-white rounded-2xl"></div>
        <h1 className="absolute font-caveat text-5xl text-black font-bold z-50 top-4 md:left-30 left-20 shadow-2xs">
          Get in touch
        </h1>

        <div className="w-full h-auto flex md:flex-row flex-col items-start justify-center md:gap-30 gap-20 md:p-20 p-0 mt-10">
          <div className="flex flex-col gap-5 md:items-start items-center md:justify-start justify-center">
            <h3 className="text-md font-semibold self-start flex items-center gap-2">
              <BiWorld className="text-xl" /> <span>Social Links</span>
            </h3>
            <div className="flex flex-col">
              <span className="text-md text-gray-500 font-semibold ml-3">
                Email
              </span>
              <a
                href=""
                className="text-2xl font-semibold cursor-pointer flex gap-1 items-center px-3 py-1 hover:gap-4 transition-all duration-250 md:hover:bg-orange-500 md:hover:text-white rounded-md md:bg-white bg-orange-500 md:text-black text-white"
              >
                <MdEmail />
                <FaLongArrowAltRight />
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-md text-gray-500 font-semibold ml-3">
                Lindin
              </span>
              <a
                href=""
                className="text-2xl font-semibold cursor-pointer flex gap-1 items-center px-3 py-1 hover:gap-4 transition-all duration-250 md:hover:bg-orange-500 md:hover:text-white rounded-md md:bg-white bg-orange-500 md:text-black text-white"
              >
                <FaLinkedin />
                <FaLongArrowAltRight />
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-md text-gray-500 font-semibold ml-3">
                Github
              </span>
              <a className="text-2xl font-semibold cursor-pointer flex gap-1 items-center px-3 py-1 hover:gap-4 transition-all duration-250 md:hover:bg-orange-500 md:hover:text-white rounded-md md:bg-white bg-orange-500 md:text-black text-white">
                <FaGithub />
                <FaLongArrowAltRight />
              </a>
            </div>
          </div>
          <div className="w-[280px] flex flex-col md:items-start items-center justify-center gap-6 pr-5">
            <h3 className="text-md font-semibold self-center flex gap-2 items-center">
              <FaLocationArrow />
              <span>Write me email</span>
            </h3>
            <div className="relative">
              <input
                type="text"
                name=""
                id=""
                placeholder="Write your name"
                className="md:w-sm w-[320px] border-2 p-5 rounded-4xl text-lg"
              />
              <span className="absolute text-sm font-semibold p-2 bg-white text-black rounded-2xl md:right-80 right-62 -top-4">
                Name
              </span>
            </div>
            <div className="relative">
              <input
                type="email"
                name=""
                id=""
                placeholder="Write your email"
                className="md:w-sm w-[320px] border-2 p-5 rounded-4xl text-lg"
              />
              <span className="absolute text-sm font-semibold p-2 bg-white text-black rounded-2xl md:right-80 right-62 -top-4">
                Email
              </span>
            </div>
            <div className="relative">
              <textarea
                name=""
                id=""
                placeholder="Write your message"
                className="md:w-sm w-[320px] border-2 p-5 rounded-4xl text-lg resize-none"
              />
              <span className="absolute text-sm font-semibold p-2 bg-white text-black rounded-2xl md:right-75 right-56 -top-4">
                Message
              </span>
            </div>
            <button className="px-10 py-2 bg-orange-500 text-white text-xl font-semibold rounded-2xl hover:bg-orange-600 hover:shadow-xs flex items-center gap-2">
              <span>Send</span> <MdArrowOutward className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
