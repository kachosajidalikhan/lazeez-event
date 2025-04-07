import { Link } from "react-router-dom";
import files from "../../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FoodCarousel from "./imageSlider";

export default function HeroSection() {
    return (
        <div className="flex flex-col md:flex-row overflow-hidden min-h-[600px]">
            {/* Background food images */}

            <div className="w-full mx-auto">

                {/* <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}  // Ek time par ek pura div show hoga
                    //   navigation
                    //   pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className=""
                >

                    <SwiperSlide>
                        <div className="">
                            <div className="rotate-8 relative top-20">
                                <img
                                    src={files.image2}
                                    alt="Food decoration"
                                    className="rounded-full w-[280.92px] h-[157px]"
                                />
                            </div>
                            <div className=" rotate-8">
                                <img
                                    src={files.image1}
                                    alt="Food decoration"
                                    className="rounded-full w-[673.84px] h-[383.99px]"
                                />
                            </div>
                            <div className="-rotate-12 relative bottom-20">
                                <img
                                    src={files.image2}
                                    alt="Delicious curry dish"
                                    className="rounded-full  w-[280.92px] h-[157px]"
                                />
                            </div>
                        </div>
                    </SwiperSlide>

      
                    <SwiperSlide>
                        <div>
                            <div className="rotate-8 relative top-10">
                                <img
                                    src={files.image3}
                                    alt="Food decoration"
                                    className="rounded-full w-[280.92px] h-[157px]"
                                />
                            </div>
                            <div className=" rotate-8 ">
                                <img
                                    src={files.image4}
                                    alt="Food decoration"
                                    className="rounded-full w-[673.84px] h-[383.99px]"
                                />
                            </div>
                            <div className="-rotate-12 relative -top-20">
                                <img
                                    src={files.image5}
                                    alt="Delicious curry dish"
                                    className="rounded-full -rotate-8 w-[280.92px] h-[157px]"
                                />
                            </div>
                        </div>
                    </SwiperSlide>

   
                    <SwiperSlide>
                        <div>
                            <div className="rotate-8 relative top-10">
                                <img
                                    src={files.image6}
                                    alt="Food decoration"
                                    className="rounded-full w-[280.92px] h-[157px]"
                                />
                            </div>
                            <div className=" rotate-8">
                                <img
                                    src={files.image7}
                                    alt="Food decoration"
                                    className="rounded-full w-[673.84px] h-[383.99px]"
                                />
                            </div>
                            <div className="-rotate-12 relative -top-20">
                                <img
                                    src={files.image8}
                                    alt="Delicious curry dish"
                                    className="rounded-full -rotate-8 w-[280.92px] h-[157px]"
                                />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="rotate-8 relative top-10">
                                <img
                                    src={files.image11}
                                    alt="Food decoration"
                                    className="rounded-full w-[280.92px] h-[157px]"
                                />
                            </div>
                            <div className=" rotate-8">
                                <img
                                    src={files.image10}
                                    alt="Food decoration"
                                    className="rounded-full w-[673.84px] h-[383.99px]"
                                />
                            </div>
                            <div className="-rotate-12 relative -top-20">
                                <img
                                    src={files.image9}
                                    alt="Delicious curry dish"
                                    className="rounded-full -rotate-8 w-[280.92px] h-[157px]"
                                />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="rotate-8 relative top-10">
                                <img
                                    src={files.image12}
                                    alt="Food decoration"
                                    className="rounded-full w-[280.92px] h-[157px]"
                                />
                            </div>
                            <div className=" rotate-8">
                                <img
                                    src={files.image13}
                                    alt="Food decoration"
                                    className="rounded-full w-[673.84px] h-[383.99px]"
                                />
                            </div>
                            <div className="-rotate-12 relative -top-20">
                                <img
                                    src={files.image14}
                                    alt="Delicious curry dish"
                                    className="rounded-full -rotate-8 w-[280.92px] h-[157px]"
                                />

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="rotate-8 relative top-10">
                                <img
                                    src={files.image15}
                                    alt="Food decoration"
                                    className="rounded-full w-[280.92px] h-[157px]"
                                />
                            </div>
                            <div className=" rotate-8">
                                <img
                                    src={files.image16}
                                    alt="Food decoration"
                                    className="rounded-full w-[673.84px] h-[383.99px]"
                                />
                            </div>
                            <div className="-rotate-12 relative -top-20">
                                <img
                                    src={files.image17}
                                    alt="Delicious curry dish"
                                    className="rounded-full -rotate-8 w-[280.92px] h-[157px]"
                                />

                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper> */}

            <FoodCarousel />
            </div>

            <div className="w-full px-6 py-16 flex flex-col md:flex-row items-center">
                {/* Food Image */}
                {/* Content */}
                <div className="Poppins text-white">
                    <h1 className="text-5xl md:text-6xl Poppins-bold font-bold mb-4">
                        Yaha Sub <br />
                        Kuch Lazeez <br />
                    </h1>
                    <h1 className="text-4xl Poppins-bold">

                        Hai!
                    </h1>
                    <p className="text-lg mb-8 max-w-lg">
                        Experience Taste and Convenience with Lazeez Events. Lazeez Events offers customized food packages and
                        unforgettable experiences. Partnering with trusted vendors, we make every meal a flavorful celebration,
                        perfectly tailored to your needs and occasions.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/Lazeez-Packages"
                            className="bg-[#ED004F] Poppins hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-[12px] transition duration-300"
                        >
                            Explore Packages
                        </Link>
                        <Link
                            to="/Signup-Form"
                            className="bg-[#ED004F] Poppins w-[150px] text-center hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-[12px] transition duration-300"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
