import React from "react";

const Clients = () => {
  const CardImgs = [
    { url: "https://placehold.co/150x50?text=EV+Universe", alt: "xyz" },
    { url: "https://placehold.co/150x50?text=EV+Universe", alt: "xyz" },
    { url: "https://placehold.co/150x50?text=EV+Universe", alt: "xyz" },
    { url: "https://placehold.co/150x50?text=EV+Universe", alt: "xyz" },
    { url: "https://placehold.co/150x50?text=EV+Universe", alt: "xyz" },
    { url: "https://placehold.co/150x50?text=EV+Universe", alt: "xyz" },
    { url: "https://placehold.co/150x50?text=EV+Universe", alt: "xyz" },
    { url: "https://placehold.co/150x50?text=EV+Universe", alt: "xyz" },
    { url: "https://placehold.co/150x50?text=EV+Universe", alt: "xyz" },
  ];


  const Card = ({ url, alt }) => {
    return (
      <div className="bg-card-glass w-56 h-32 p-4 rounded-md shadow-lg flex items-center justify-center">
        <img src={url} alt={alt} />
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-r from-[#00305e] to-purple-900 text-white py-16 px-4 min-h-[88vh]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-md font-semibold tracking-wide uppercase">
          Clients Across Industries
        </h2>
        <h1 className="mt-2 text-3xl font-bold tracking-normal sm:text-4xl">
          Full-Service Web Design Agency
        </h1>
        <p className="mt-4 text-lg leading-6 ">
          From startups to Fortune 500 companies,
          <br />
          we create custom solutions that grow brands online
        </p>
      </div>
      <div className="mt-12  mx-auto overflow-hidden relative  h-[50vh]">
        <div className="flex gap-x-10 mb-4 absolute top-0 -translate-x-6">
          {CardImgs.map((img, index) => (
            <Card key={index} url={img.url} alt={img.alt} />
          ))}
        </div>
        <div className="flex gap-x-10 absolute bottom-0 -translate-x-24 justify-center ">
          {CardImgs.map((img, index) => (
            <Card key={index} url={img.url} alt={img.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
