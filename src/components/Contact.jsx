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
    <section ref={sectionRefs.contact} className="w-full h-full" id="contact">
      <div className="p-10 relative">
        <div className="w-[200px] h-[50px] bg-gradient-to-r from-orange-600 to-white rounded-2xl"></div>
        <h1 className="absolute font-caveat text-5xl text-black font-bold z-50 top-4 left-30 shadow-2xs">
          Get in touch
        </h1>

        <div className="w-full h-auto flex justify-center gap-30 p-20 mt-10">
          <div className="flex flex-col gap-5 items-start justify-start">
            <h3 className="text-md font-semibold self-start flex items-center gap-2">
              <BiWorld className="text-xl" /> <span>Social Links</span>
            </h3>
            <div className="flex flex-col">
              <span className="text-md text-gray-500 font-semibold ml-3">
                Email
              </span>
              <a
                href=""
                className="text-2xl font-semibold cursor-pointer flex gap-1 items-center px-3 py-1 hover:gap-4 transition-all duration-250 hover:bg-orange-500 hover:text-white rounded-md"
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
                className="text-2xl font-semibold cursor-pointer flex gap-1 items-center px-3 py-1 hover:gap-4 transition-all duration-250 hover:bg-orange-500 hover:text-white rounded-md"
              >
                <FaLinkedin />
                <FaLongArrowAltRight />
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-md text-gray-500 font-semibold ml-3">
                Github
              </span>
              <a
                href=""
                className="text-2xl font-semibold cursor-pointer flex gap-1 items-center px-3 py-1 hover:gap-4 transition-all duration-250 hover:bg-orange-500 hover:text-white rounded-md"
              >
                <FaGithub />
                <FaLongArrowAltRight />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-6">
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
                className="w-sm border-2 p-5 rounded-4xl text-lg"
              />
              <span className="absolute text-sm font-semibold p-2 bg-white text-black rounded-2xl right-80 -top-4">
                Name
              </span>
            </div>
            <div className="relative">
              <input
                type="email"
                name=""
                id=""
                placeholder="Write your email"
                className="w-sm border-2 p-5 rounded-4xl text-lg"
              />
              <span className="absolute text-sm font-semibold p-2 bg-white text-black rounded-2xl right-80 -top-4">
                Email
              </span>
            </div>
            <div className="relative">
              <textarea
                name=""
                id=""
                placeholder="Write your message"
                className="w-sm border-2 p-5 rounded-4xl text-lg resize-none"
              />
              <span className="absolute text-sm font-semibold p-2 bg-white text-black rounded-2xl right-80 -top-4">
                Email
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
