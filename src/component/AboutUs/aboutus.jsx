import React from "react";
import files from "../../constants";

const AboutUs = () => {
    return (
        <section className="relative text-white py-12 px-6 md:px-16 lg:px-32">
            <div className="absolute bottom-10 right-10 ">
                <img width={100} src={files.Foods2} alt="Coke Icon" className="" />
            </div>
            <div className="absolute top-10 left-4 ">
                <img width={100} src={files.Foods3} alt="Burger Icon" className="" />
            </div>
            <br />
            <br />
            <div className="md:flex mt-10">
                <div className="w-full">
                    <h2 className="text-3xl md:text-5xl Poppins-bold">Who we are?</h2>
                    <p className="mt-4 Poppins text-lg md:text-xl leading-relaxed">
                        Lazeez Events is the <span className="Poppins-bold">bridge</span> between your
                        <span className="Poppins-bold"> events </span>
                        and unforgettable dining experiences. Lazeez Events brings together
                        culinary passion to make every gathering exceptional. Whether a grand
                        wedding or an intimate celebration, we connect you with
                        <span className="Poppins-bold"> trusted vendors</span> to ensure every dish is a delight.
                    </p>
                </div>

                {/* <img src={files.whiteLogo} alt="Event Icon" className="z-10 hidden lg:block relative left-44 w-30 h-20 " />
                        <div className=" lg:w-100 md:w-20 relative hidden lg:block -top-20 bg-[radial-gradient(closest-side,theme(colors.yellow.400),theme(colors.yellow.500),transparent)] blur-2xl opacity-80 ">
                        </div> */}
                <div>
                    <img src={files.Foods1} alt="Chef Icon" className=" mt-6 md:mt-0 md:w-full w-30" />
                </div>
                </div>

                <section>
                    <div></div>
                    <div></div>
                </section>
                {/* <div className="flex flex-col md:flex-row items-center mt-8">
        <div className="md:ml-12 text-center md:text-left">
          <h3 className="text-2xl font-bold">Lazeez Events for who?</h3>
          <p className="mt-4 text-lg">
            Lazeez Events is for anyone planning a <span className="font-bold">gathering, big or small</span>
            — whether it’s a wedding, a corporate event, a family celebration, or a
            community gathering. We provide high-quality, bulk food options from
            <span className="font-bold"> trusted vendors</span>, ensuring your event is stress-free
            and full of delicious moments.
          </p>
        </div>
      </div> */}
        </section>
    );
};

export default AboutUs;
