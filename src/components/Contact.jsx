import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail, MdOutlineMail } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import toast from "react-hot-toast";

const Contact = ({ sectionRefs }) => {
  const from = useRef();
  const [sending, setSending] = useState(false);
  const sendMail = (e) => {
    e.preventDefault();
    setSending(true);
    const sendingToast = toast.loading("Sending...");
    if (
      from.current.from_name.value &&
      from.current.his_email.value &&
      from.current.message.value
    ) {
      emailjs
        .sendForm("service_usg4upm", "template_plahzri", from.current, {
          publicKey: "RKm6xXYpd0UUFHyqX",
        })
        .then(
          () => {
            toast.success("Email sent successfully!", { id: sendingToast });
            setSending(false);
          },
          () => {
            toast.error("Failed. Please try again.", {
              id: sendingToast,
            });
            setSending(false);
          }
        );
    } else {
      toast.error("Fill all the filds and try again.", { id: sendingToast });
      setSending(false);
      return null;
    }
  };

  return (
    <section
      ref={sectionRefs.contact}
      className="w-full h-screen flex flex-col"
      id="contact"
    >
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
                href="mailto:roshanofficial766@gmail.com"
                target="_blank"
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
                href="https://www.linkedin.com/in/roshanrrr/"
                target="_blank"
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
              <a
                href="https://github.com/roshangit777"
                target="_blank"
                className="text-2xl font-semibold cursor-pointer flex gap-1 items-center px-3 py-1 hover:gap-4 transition-all duration-250 md:hover:bg-orange-500 md:hover:text-white rounded-md md:bg-white bg-orange-500 md:text-black text-white"
              >
                <FaGithub />
                <FaLongArrowAltRight />
              </a>
            </div>
          </div>
          <div className="w-[280px] flex flex-col md:items-start items-center justify-center gap-6 pr-5">
            <h3 className="text-md font-semibold self-center flex gap-2 items-center">
              <FaLocationArrow />
              <span>Write me a mail</span>
            </h3>
            <form
              ref={from}
              onSubmit={() => sendMail(event)}
              className="flex flex-col md:items-start items-center justify-center gap-6"
            >
              <div className="relative">
                <input
                  type="text"
                  name="from_name"
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
                  name="his_email"
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
                  name="message"
                  id=""
                  placeholder="Write your message"
                  className="md:w-sm w-[320px] border-2 p-5 rounded-4xl text-lg resize-none"
                />
                <span className="absolute text-sm font-semibold p-2 bg-white text-black rounded-2xl md:right-75 right-56 -top-4">
                  Message
                </span>
              </div>
              <button
                disabled={sending}
                className="px-10 py-2 bg-orange-500 text-white text-xl font-semibold rounded-2xl hover:bg-orange-600 hover:shadow-xs flex items-center gap-2 disabled:bg-gray-400 disabled:text-white"
              >
                <span>{sending ? "Sending..." : "Send"}</span>{" "}
                <MdArrowOutward className="text-2xl" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="w-full md:h-fit bg-orange-600 text-white text-center rounded-xl p-10 md:p-4">
        <h2 className="text-2xl font-bold mt-10 md:mt-0 mb-1">Roshan</h2>
        <span className="block">Full-stack Developer</span>
        <div className="mt-5">
          <ul className="flex justify-center gap-4 text-2xl">
            <li>
              <a
                href="mailto:roshanofficial766@gmail.com"
                target="_blank"
                className=""
              >
                <MdOutlineMail />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/roshangit777"
                target="_blank"
                className=""
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/roshanrrr/"
                target="_blank"
                className=""
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
          <p className="mt-4 mb-30 md:mb-0 text-sm">
            Built & designed by Roshan ©2025
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
