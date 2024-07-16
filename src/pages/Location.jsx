import React from "react";
import building2 from '../assets/images/locations/building (1).jpg'
import building1 from '../assets/images/locations/building (1).webp'
import building3 from '../assets/images/locations/building (2).jpg'
import building4 from '../assets/images/locations/building (3).jpg'
const Location = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-12 ">
      <div className="text-center mb-8 flex flex-col items-center ">
        <h2 className="text-3xl font-bold">Locations</h2>
        <p className="text-xl font-semibold mt-2 max-w-4xl text-center">
          With multiple locations throughout the United States, Digital Silk
          delivers localized strategies that complement your brand's national
          presence.
        </p>
      </div>
      <div className="flex md:min-h-[80vh]  justify-center gap-4 px-8 w-full ">
        <div className="relative w-full md:w-[45%] h-[75vh]">
          <img src={building1} alt="" className="h-full w-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
            <div>
              <p className="image-text text-5xl font-bold">01</p>
              <h3 className="text-2xl font-semibold mt-2">Miami</h3>
              <p className="mt-4 text-sm">
                Founded in Miami, Digital Silk helps Floridian businesses grow
                their brands online. Our services stem from a Miami-Dade County
                hub, while our global team serves brands from across the U.S.
                and internationally.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold">CLIENTS:</p>
              <ul className="text-sm list-disc list-inside">
                <li>
                  Miami Country Day School, Arnold Jewelers, FieldEdge, Rollink,
                  Barton G
                </li>
              </ul>
              <div className="flex items-center mt-4 bg-white text-black p-4 ">
                <p className="text-sm">
                  17975 Collins Avenue
                  <br />
                  Sunny Isles Beach, FL 33160
                </p>
                <a href="tel:8002069413" className="ml-auto text-blue-400">
                  (800) 206-9413
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative w-full md:w-[15%] h-[75vh]">
          <img src={building2} alt="" className="h-full w-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
            <div>
              <p className="text-5xl font-bold text-blue-400">02</p>
              <h3 className="text-2xl font-semibold mt-2">Chicago</h3>
            </div>
          </div>
        </div>
        <div className="relative w-full md:w-[15%] h-[75vh]">
          <img src={building3} alt="" className="h-full w-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
            <div>
              <p className="text-5xl font-bold text-blue-400">03</p>
              <h3 className="text-2xl font-semibold mt-2">New York</h3>
            </div>
          </div>
        </div>
        <div className=" relative w-full md:w-[15%] h-[75vh]">
          <img src={building4} alt="" className="h-full w-full" />

          <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
            <div>
              <p className="text-5xl font-bold text-blue-400">04</p>
              <h3 className="text-2xl font-semibold mt-2">California</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
