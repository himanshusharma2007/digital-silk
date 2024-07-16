import React from "react";
import project1Img from "../assets/images/Projects/barton-g-portfolio-background.jpg";
import project2Img from "../assets/images/Projects/Creative-Digital-Agency-Featured-Projects-Medill-760x530.jpg";
import project3Img from "../assets/images/Projects/custom-web-design-g2-background-image-760x530.jpg";
import project4Img from "../assets/images/Projects/custom-web-design-NewDevRev-background-image-760x530.jpg";
import project5Img from "../assets/images/Projects/custom-website-design-company-AUBG-760x530.jpg";
import project6Img from "../assets/images/Projects/custom-website-design-company-Enchant-760x530.jpg";
import project7Img from "../assets/images/Projects/custom-website-design-company-Enchant-760x530.jpg";
import project8Img from "../assets/images/Projects/custom-website-design-company-FieldEdge-760x530.jpg";
import project9Img from "../assets/images/Projects/Spar-Bernstein-portfolio-background.jpg";
import project10Img from "../assets/images/Projects/puma-energy-portfolio-background.jpg";
import { PiHandshakeThin, PiShoppingCartLight } from "react-icons/pi";
import { TfiWallet } from "react-icons/tfi";
import { IoIosStarOutline } from "react-icons/io";
// Shared Tailwind CSS classes
const buttonClasses = "bg-transparent text-white py-2 px-4 text-xl   rounded";
const sectionClasses = "relative group  h-auto";
const overlayClasses =
  "absolute flex justify-center items-center inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 rounded z-40 cursor-pointer";

const projects = [
  {
    img: project1Img,
    title: "University Web Design",
    description:
      "Making a great first impression through strategic site planning and design.",
  },
  {
    img: project2Img,
    title: "Electric Vehicle eCommerce Marketplace",
    description: "Seamlessly connecting consumers to a dynamic marketplace.",
  },
  {
    img: project3Img,
    title: "Biotech Brand & Digital Presence Development",
    description:
      "Delivering undefineddriven brand architecture and strategic insights.",
  },
  {
    img: project4Img,
    title: "Gamified Digital Platform",
    description:
      "Creating engaging experiences through custom wellness design.",
  },
  {
    img: project5Img,
    title: "Gamified Digital Platform",
    description:
      "Creating engaging experiences through custom wellness design.",
  },
  {
    img: project6Img,
    title: "Gamified Digital Platform",
    description:
      "Creating engaging experiences through custom wellness design.",
  },
  {
    img: project7Img,
    title: "Gamified Digital Platform",
    description:
      "Creating engaging experiences through custom wellness design.",
  },
  {
    img: project8Img,
    title: "Gamified Digital Platform",
    description:
      "Creating engaging experiences through custom wellness design.",
  },
  {
    img: project9Img,
    title: "Gamified Digital Platform",
    description:
      "Creating engaging experiences through custom wellness design.",
  },
  {
    img: project10Img,
    title: "Gamified Digital Platform",
    description:
      "Creating engaging experiences through custom wellness design.",
  },
];

const ProjectCard = ({ img, title, description }) => (
  <div className={sectionClasses}>
    <img
      src={img}
      alt={title}
      className="w-full h-full object-cover rounded shadow-lg"
    />
    <div className="absolute z-10 bottom-16 left-10 w-[70%]">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-lg mt-2">{description}</p>
    </div>
    <div className={overlayClasses}>
      <div className="flex w-40 h-40 rounded-full justify-center items-center bg-black opacity-600 bg-opacity-70 ">
        View Projects
      </div>
    </div>
  </div>
);

const ProjectGrid = () => (
  <div className=" grid grid-cols-1 sm:grid-cols-2 bg-dark-blue place-items-center p-10 gap-8">
    {projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </div>
);

const ButtonGroup = () => (
  <div className="flex justify-center space-x-4 mt-10">
    <div className="flex bg-white flex-col justify-center items-center h-28 w-28 py-4 rounded-md">
      <IoIosStarOutline fontSize={50} className="text-black" />

      <button className="text-xl text-black py-2 px-4 rounded w-full h-full">
        Featured
      </button>
    </div>
    <div className="flex flex-col justify-center items-center h-28 w-28 py-4 rounded-md">
      <PiHandshakeThin fontSize={50} className="text-white" />
      <button className={buttonClasses}>B2B</button>
    </div>
    <div className="flex flex-col justify-center items-center h-28 w-28 py-4 rounded-md">
      <TfiWallet fontSize={50} className="text-white" />
      <button className={buttonClasses}>B2C</button>
    </div>
    <div className="flex flex-col justify-center items-center h-28 w-28 py-4 rounded-md">
      <PiShoppingCartLight fontSize={50} className="text-white" />
      <button className={buttonClasses}>eCommerce</button>
    </div>
  </div>
);

const OurWork = () => (
  <div className="bg-dark-blue text-white py-12 ">
    <div className="wrapper relative overflow-hidden h-[65vh] flex flex-col space-y-10 items-center ">
      <h2 className="text-3xl  font-semibold tracking-wide uppercase">
        Our Work
      </h2>
      <div className="text-center mb-8 flex flex-col justify-center items-center ">
        <div className="projectGrid-gredient py-10 flex flex-col  items-center justify-start min-h-[60vh] rounded-tr-full rounded-tl-full h-[100vh] w-[160vw] absolute top-14">
          <div className="wraper  flex flex-col items-center justify-center ">
            <h1 className="text-4xl font-bold mt-2">
              Featured Website Design Projects
            </h1>

            <p className="mt-4 text-2xl md:w-[60%] ">
              Custom B2C, B2B and eCommerce solutions optimized for traffic,
              engagement and conversion.
            </p>
            <ButtonGroup />
          </div>
        </div>
      </div>
    </div>
    <ProjectGrid />
  </div>
);

export default OurWork;
