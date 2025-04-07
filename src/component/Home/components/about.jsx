import { Link } from "react-router-dom";
import files from "../../../constants";
import { ArrowDown,CornerLeftDown } from "lucide-react";

export default function AboutSection() {
    const features = [
        {
            title: "High Quality Food",
            image: files.icon8,
            description: "Fresh and delicious meals every time.",
        },
        {
            title: "Cost-Effective Prices",
            image: files.icon9,
            description: "Packages that fit your budget.",
        },
        {
            title: "Timely Delivery",
            image: files.icon10,
            description: "Always on time, stress-free events.",
        },
    ];

    return (
        <>
        <section className="w-full bg-white pt-6">
            <div className="container p-6 mx-auto max-w-6xl">
                {/* Heading and Description */}
                <div className="max-w-4xl">
                    <h2 className="text-4xl leading-normal md:text-5xl lg:text-6xl Poppins-bold font-extrabold text-[#ED004F] mb-6">
                        Say Goodbye to Event's Food Hassle!
                    </h2>
                    <p className="text-lg md:text-[28px] Poppins text-gray-800 leading-relaxed">
                        Planning an event just got easier! With Lazeez Events, it's all about your event, your food, and your choice.
                        Select from our onboarded vendors offering ready-made packages or{" "}
                        <span className="text-[#ED004F]/69 font-medium">customize</span> your own to
                        <span className="text-[#ED004F]/69 font-medium"> match your needs</span>.
                        We’ve got you covered—so{" "}
                        <span className="text-[#ED004F] font-medium">you</span> can focus on{" "}
                        <span className="text-[#ED004F] font-medium">celebrating</span>, while{" "}
                        <span className="text-[#ED004F]/69 font-medium">we</span> take <span className="text-[#ED004F]/69 font-medium">care of the rest!</span>
                    </p>
                </div>

            </div>
            <section className="w-full">
                <img src={files.bg} alt="" className="hidden md:block" />


                <div className="md:hidden Poppins flex gap-10 flex-col p-2">
                    <div className="gap-2 flex flex-col items-center">
                        <div className="flex gap-4 items-center">
                            <img src={files.icon1} alt="" width={40} />
                            <span className="text-xl">Aapke Khane</span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <img src={files.icon2} alt="" width={40} />
                            <span className="text-xl">Aapke Events</span>
                        </div>
                    </div>
                    

                    {/* <CornerLeftDown className="w-16 h-16 text-[#ED004F] relative left-12" /> */}
                    <img src={files.icon6} alt="" width={80} className=" -rotate-55" />
                    

                    <div className="flex gap-4 items-center justify-center">
                        <img src={files.icon4} alt="" width={40} />
                        <span className="text-xl">Aapki Choice</span>

                    </div>
                    {/* <ArrowDown className="w-16 h-16 text-[#ED004F] mx-auto" /> */}
                    <img src={files.icon5} alt="" width={80}  className="mx-auto -rotate-75"/>

                    <div className="m-auto">
                        <img src={files.logo} alt="" />

                    </div>
                    {/* <CornerLeftDown className="w-16 h-16 text-[#ED004F] relative left-12" /> */}
                    <img src={files.icon6} alt="" width={80} className=" -rotate-45" />

                    <div className="flex gap-4 items-center justify-center">
                        <img src={files.icon7} alt="" width={40} />
                        <span className="text-xl">Top-notch trusted vendor</span>

                    </div>

                </div>

                <div className=" relative  md:w-[55%] w-full lg:bottom-20 md:bottom-13   flex flex-col items-center justify-center gap-6">

                    <Link
                        to="/vendor-page"
                    >
                        <button
                            className="bg-[#ED004F]/69 Poppins w-fit h-fit p-2 hover:bg-[#ED004F] text-white font-medium  rounded-md transition duration-300">

                            Become Our Partner
                        </button>
                    </Link>

                </div>
            </section>

            <div className="flex flex-col md:hidden gap-6 items-center px-4 py-10">
                {features.map((feature, index) => (
                    <>
                    <div
                        key={index}
                        style={{backgroundImage: `url(${files.vector})`, backgroundRepeat:'no-repeat', backgroundPositionX:'-20px' , backgroundPositionY:'30px', backgroundSize:'contain'}}
                        className="bg-white Poppins shadow-lg rounded-lg p-6 h-fit w-[200px] text-center border border-gray-200"
                        >
                        {/* Icon Placeholder (Replace with your image) */}
                        <div className=" mx-auto mb-4  rounded-full flex items-center justify-center">
                            <img src={feature.image} alt="" width={100} />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-[#CC054D]">{feature.title}</h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mt-2">{feature.description}</p>

                        {/* Bottom Circle */}
                            {/* <img src={files.vector} alt="" width={20} /> */}
                    </div>
                        </>
                ))}
            </div>
        </section>
        </>
    );
}
