import React from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import sony from "../assets/images/Sony-1.png.webp";
import grenco from "../assets/images/grenco_logo-1.png";
import xerox from "../assets/images/xerox.png";
import rollink from "../assets/images/Rollink-logo-286x129.png";
import b2c from "../assets/images/Creative-Digital-Agency-B2C-Projects-Enchant-Logo.png";
import aubg from "../assets/images/AUBG-logo.png";
import babiesrus from "../assets/images/babiesrus.png";
import poster1 from "../assets/images/Full-Service Web Design Agency - Digital Silk/custom-website-design-company-enchant-full-1-scaled.jpg";
import poster2 from "../assets/images/Full-Service Web Design Agency - Digital Silk/custom-website-design-company-meltano-full-1-scaled.jpg";
import poster3 from "../assets/images/Full-Service Web Design Agency - Digital Silk/custom-web-design-g2-full-1-scaled.jpg";
import page2Img from "../assets/images/oscarImg.webp";
import { CgArrowTopRight } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
const LandingPage = () => {
  const imgLinks = [sony, grenco, xerox, rollink, b2c, babiesrus, aubg];
  return (
    <>
      <div className="page-1 gradient text-white min-h-screen flex flex-col relative overflow-hidden">
        <main className=" flex-1 flex flex-col  justify-center  p-6 min-h-[90vh]">
          <div className="lg:flex lg:justify-start  w-[90vw] lg:items-center lg:text-left lg:space-x-6  mt-10">
            <div className="lg:w-1/2 lg:mb-0 px-16  md:min-w-[70vw] mb-4 flex justify-center  flex-col min-h-[70vh] ">
            <div className="wraper flex flex-col space-y-3 mb-8">

              <h2 className="text-lg font-semibold">
                TOP WEB DESIGN AGENCY
              </h2>
              <h1 className="text-3xl md:text-[70px] leading-[70px]  font-bold  h-fit ">
                WE GROW BRANDS ONLINE
              </h1>
              <p className="text-lg font-medium">
                Custom Websites, Branding & Digital Marketing Solutions
              </p>
            </div>
              <button className="button relative btn-shadow flex justify-center items-center  border-4 font-semibold text-white hover:bg-white hover:text-purple-600 max-w-sm w-80 ">
                <div className="button_lg flex justify-center items-center space-x-2 hover:space-x-3 text-white py-3">
                  <div className="button_sl"></div>
                  <div className="text z-10  text-lg">
                    {" "}
                    SPEAK WITH OUR EXPERTS
                  </div>{" "}
                  <TbArrowBadgeRightFilled
                    fontSize={25}
                    className="arrow  z-10"
                  />
                </div>
              </button>
            </div>
          </div>
        </main>
        <div className="bgcover absolute -top-64 -right-10 md:-right-20 flex justify-center md:justify-end -z-20  bg-dark-blue w-screen ">
          <div className="poster-images rotate-12  flex space-x-2 p-4  bg-dark-blue w-fit">
            <img
              src={poster2}
              alt=""
              height="auto"
              width="250px"
              className="w-[250px] md:w-[350px]"
            />
            <img
              src={poster1}
              alt=""
              height="auto"
              width="300px"
              className="w-[250px] md:w-[350px]"
            />
            <img
              src={poster3}
              alt=""
              height="auto"
              width="250px"
              className="w-[250px] md:w-[350px]"
            />
          </div>
        </div>

        <footer className="bg-dark-blue py-6 px-4 z-10">
          <div className="flex justify-between space-x-6">
            {" "}
            {imgLinks.map((link, index) => (
              <img
                key={index}
                src={link}
                alt="NYU Logo"
                className="h-10 w-30"
              />
            ))}
          </div>
        </footer>
      </div>
      <div className="page-2 bg-dark-blue min-h-screen min-w-screen">
        <div className=" text-white p-8 md:p-16">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Creative Web Agency <br /> Delivering Custom Solutions
              </h1>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <i className="text-cyan-400 mr-2">
                    <CgArrowTopRight fontSize={30} />
                  </i>
                  <span>
                    Custom Web Design Solutions{" "}
                    <span className="text-cyan-300">To Drive Conversions</span>
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="text-cyan-400 mr-2">
                    <CgArrowTopRight fontSize={30} />
                  </i>
                  <span>
                    Effective Marketing Campaigns{" "}
                    <span className="text-cyan-300">To Generate Growth</span>
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="text-cyan-400 mr-2">
                    <CgArrowTopRight fontSize={30} />
                  </i>
                  <span>
                    Tailored Branding Strategies{" "}
                    <span className="text-cyan-300">To Drive Engagement</span>
                  </span>
                </li>
              </ul>
              <div
                className="flex   items-center w-full  
              "
              >
                <img
                  src="https://placehold.co/100x100"
                  alt="BRAND"
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-grow">
                  <button className="btn-bg-gradient w-[85vw] h-20 text-white py-2 px-4 hover:scale-y-110 flex flex-col items-start">
                    <div className="text-lg font-semibold">
                      See Our Work In Action
                    </div>
                    <span className="text-md mt-1">2 MINUTES</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-4 mt-6">
                <div className="flex items-center space-x-1">
                  <FaStar className="text-yellow-400" fontSize={20} />
                  <FaStar className="text-yellow-400" fontSize={20} />
                  <FaStar className="text-yellow-400" fontSize={20} />
                  <FaStar className="text-yellow-400" fontSize={20} />
                  <FaStar className="text-yellow-400" fontSize={20} />
                </div>
                <span className="text-zinc-400">5 Star DesignRush Reviews</span>
                <span className="text-zinc-400">|</span>
                <span className="text-zinc-400">Latest Web Design Award</span>
                <i className="text-zinc-400">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                </i>
              </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center z-10">
              <img
                src={page2Img}
                alt="Award and Work Samples"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
