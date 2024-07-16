import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white    py-8 px-20">
      <div className=" mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">
          Let's Grow Your Brand
        </h1>
      </div>
      <div className="flex justify-between   text-center md:text-left">
        <div>
          <h2 className="text-md font-semibold mb-4">Main Services</h2>
          <ul className="space-y-2">
            <li>Custom Web Design</li>
            <li>Branding Services</li>
            <li>eCommerce Design</li>
            <li>Shopify Website Design</li>
            <li>WordPress Web Design</li>
          </ul>
        </div>
        <div>
          <h2 className="text-md font-semibold mb-4">Apps & Development</h2>
          <ul className="space-y-2">
            <li>Website Cost Calculator</li>
            <li>Conversion Rate Calculator</li>
            <li>Custom Web Development</li>
            <li>Magento Development</li>
            <li>eCommerce Development</li>
          </ul>
        </div>
        <div>
          <h2 className="text-md font-semibold mb-4">Location Services</h2>
          <ul className="space-y-2">
            <li>NYC Web Design</li>
            <li>California Web Design</li>
            <li>Miami Web Design</li>
            <li>Los Angeles Web Design</li>
            <li>Denver Web Design</li>
            <li>San Francisco Web Design</li>
          </ul>
        </div>
        <div>
          <h2 className="text-md font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Case Studies</li>
            <li>Digital Trends</li>
            <li>Top Companies</li>
            <li>Sitemap</li>
            <li>Locations</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="mt-16">
        <div className="flex flex-wrap flex-col   justify-center md:justify-between">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-white ">DIGITALSILK</h1>
          </div>
          <div className="flex flex-wrap justify-center md:justify-between w-full md:w-auto space-x-10">
            <div className="flex  justify-center items-center space-x-2">
              <h3 className="text-[50px] font-bold image-text ">MI</h3>
              <div className="wraper text-[10px]">
                <p>Miami</p>
                <p>17975 Collins Avenue</p>
                <p>Sunny Isles Beach, FL 33160</p>
              </div>
            </div>
            <div className=" flex  justify-center items-center space-x-2">
              <h3 className="text-[50px] font-bold image-text ">NY</h3>
              <div className="wraper text-[10px]">
                <p>New York</p>
                <p>18 West 18th Street</p>
                <p>New York, NY 10011</p>
              </div>
            </div>
            <div className="flex  justify-center items-center space-x-2">
              <h3 className="text-[50px] font-bold image-text ">CH</h3>
              <div className="wraper text-[10px]">
                <p>Chicago</p>
                <p>625 W Adams St</p>
                <p>Chicago, IL 60661</p>
              </div>
            </div>
            <div className="flex  justify-center items-center space-x-2">
              <h3 className="text-[50px] font-bold image-text ">CA</h3>
              <div className="wraper text-[10px]">
                <p>California</p>
                <p>600 B St,</p>
                <p>San Diego, CA 92101</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-white pt-4 text-center md:text-left">
        <p className="text-sm">&copy;2024 Digital Silk. All rights reserved</p>
        <div className="flex justify-center md:justify-start space-x-4 mt-2">
          <a href="#" className="text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-sm">
            Accessibility
          </a>
          <a href="tel:+18002069413" className="text-sm">
            Call us at (800) 206-9413
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
