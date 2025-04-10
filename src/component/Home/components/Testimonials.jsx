import React from "react";
import files from "../../../constants/index"
import ScrollAnimatedRight from "../../scrollright";

export default function Testimonials() {
  return (
    <section className="relative w-full py-16 bg-white overflow-hidden">
      {/* Background Icons */}
      <img
        src={files.Foods2}
        alt="Coke"
        className="w-20 md:w-30 absolute top-4 opacity-80"
      />
      <img
        src={files.Foods3}
        alt="Hotdog"
        className="w-20 md:w-30 absolute top-6 right-0 opacity-80"
        width={100}
      />
      <img
        src={files.Foods1}
        alt="Chef"
        className=" absolute hidden md:block bottom-0 left-0 md:w-50 w-30"

      />
       <img
        src={files.Foods4}
        alt="Chef"
        className="md:w-30 w-18 absolute -bottom-4 right-0"
        width={100}
      />

      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#ED004F] z-1 Poppins-bold mb-8">Testimonials</h2>

        {/* Testimonial Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {[1, 2, 3].map((_, index) => (
            <ScrollAnimatedRight>

            <div
              key={index}
              style={{backgroundImage:`url(${files.circle})`,
              backgroundRepeat:"no-repeat", 
              backgroundPositionY:"120px",
            backgroundPositionX:"-120px"}}
              className="bg-white bg-cover  shadow-lg rounded-lg p-6 w-72 h-70 text-center"
            >
              <img
                src={files.userIcon}
                alt="User"
                className="mx-auto w-20"
              />
          
              <h3 className="text-pink-60 Poppins-bold mt-4">Lorem ipsum</h3>
              <p className="text-gray-500 Poppins">lorem ipsum</p>
            </div>
          </ScrollAnimatedRight>
          ))}
        </div>

        {/* Download Section */}
        <div className="mt-16 text-center">
          <h3 className="z-1000 text-3xl Poppins-bold text-[#ED004F]">
            Download Lazeez App Now!
          </h3>
          <button className="mt-4 px-6 Poppins py-2 bg-[#CC054D] text-white rounded-xl shadow-lg">
            Click Here
          </button>

          {/* App Store & Play Store Icons */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="flex items-center gap-2 z-10 bg-white">
              <img src={files.play} alt="Play Store" className="z-10 w-10" />
              <p className="md:text-[18px] Poppins text-[#ED004F]">
                Download on <br />
                <span className="Poppins-bold md:text-[20px] text-[16px] ">Play Store</span>
              </p>
            </div>
            <div className="flex bg-white z-10 Poppins items-center gap-2">
              <img src={files.apple} alt="App Store" className="z-10 w-10" />
              <p className="md:text-[18px] text-[#ED004F]">
                Download on <br />
                <span className="Poppins-bold md:text-[20px] text-[16px] ">App Store</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
