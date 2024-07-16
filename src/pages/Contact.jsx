import React from "react";
import { BiMessage, BiPhone, BiUser } from "react-icons/bi";
import { BsHouse, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className=" prose dark:prose-invert">
      <div className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 text-white p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
            <div className="text-center flex justify-between items-center lg:text-left mb-8 lg:mb-0 w-full">
              <h2 className="text-4xl max-w-sm font-bold mb-4">
                Sign Up To Get The Latest Digital Trends
              </h2>
              <div className="flex border-2 border-gray-300 items-center justify-center lg:justify-start max-w-lg p-1">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="p-3  bg-transparent  text-white w-64 lg:w-96 outline-none "
                />
                <button className="bg-blue-500 text-white w-52 py-4  hover:bg-purple-600 ">
                  SIGN UP
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                TAKE THE SILK ROAD TO
              </h3>
              <h1 className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-8">
                Digitizing Your Business Growth
              </h1>
              <div className="flex items-center space-x-4">
                <span className="text-xl font-semibold">Follow Us</span>
                <div className="">
                  <BsInstagram fontSize={25} />
                </div>
                <div className="">
                  <FaFacebook fontSize={25} />
                </div>
                <div className="">
                  <BsLinkedin fontSize={25} />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-8">
                Start A Conversation With Us
              </h3>
              <form className="space-y-6">
                <div className="relative ">
                  <label className="block absolute top-1">
                    <BiUser fontSize={25} />
                  </label>
                  <input
                    type="text"
                    className="w-full px-10 py-2 border-0 border-b-2 border-b-zinc-300 text-white bg-transparent outline-none"
                    placeholder="Name*"
                  />
                </div>
                <div className="relative ">
                  <label className="block absolute top-1">
                    <BsHouse fontSize={25} />
                  </label>
                  <input
                    type="text"
                    className="w-full px-10 py-2 border-0 border-b-2 border-b-zinc-300 text-white bg-transparent outline-none"
                    placeholder="Company Name*"
                  />
                </div>
                <div className="relative ">
                  <label className="block absolute top-1">
                    <MdEmail fontSize={25} />
                  </label>
                  <input
                    type="email"
                    className="w-full px-10 py-2 border-0 border-b-2 border-b-zinc-300 text-white bg-transparent outline-none"
                    placeholder="Email*"
                  />
                </div>
                <div className="relative ">
                  <label className="block absolute top-1">
                    <BiPhone fontSize={25} />
                  </label>
                  <input
                    type="number"
                    className="w-full px-10 py-2 border-0 border-b-2 border-b-zinc-300 text-white bg-transparent outline-none"
                    placeholder="Phone*"
                  />
                </div>

                <div className="relative ">
                  <label className="block absolute top-1">
                    <BiMessage fontSize={25} />
                  </label>
                  <textarea
                    className="w-full px-10 py-2 border-0 border-b-2 border-b-zinc-300 text-white bg-transparent outline-none"
                    placeholder="Enter Your Message*"
                  ></textarea>
                </div>
                <div className="wraper flex w-full justify-end items-center">
                  <button
                    type="submit"
                    className="bg-transparent border-2 border-gray-400  p-1 text-white px-4  "
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
