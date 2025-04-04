import files from "../../constants/index";

export default function ListFoodMenuSection() {
    return (
        <section className="relative w-full py-16 px-6 md:px-10 md:pt-50">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                    {/* Text Section */}
                    <div className="text-white">
                        <h2 className="text-4xl md:text-5xl mb-6 Poppins-bold leading-tight">
                            List your menu and food packages.
                        </h2>
                        <p className="text-lg md:text-[25px] font-normal leading-relaxed Poppins">
                            Showcase your culinary offerings by <br /> adding your menu and <br /> customizable food packages. <br /> Highlight your
                            specialties, pricing, <br /> promotions, and options for bulk <br /> orders to attract event organizers <br /> and grow your
                            business.
                        </p>
                    </div>

                    {/* Image & Decorative SVG */}
                    <div className="flex justify-center md:justify-center relative">
                        <div className="relative w-48 h-48 md:w-54 md:h-54 -top-5">
                            <img
                                src={files.Image5}
                                alt="Menu book illustration"
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" justify-end hidden md:flex  relative z-2">
                <img src={files.Group36} alt="" className="absolute right-30" />
            </div>
        </section>
    );
}
