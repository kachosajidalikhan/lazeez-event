import files from "../../constants/index";

export default function MouSigningSection() {
    return (
        <div className="w-full py-12 px-4 md:px-8 relative overflow-hidden">
            <br />
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative">

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative md:w-[570] md:h-[570]">
                        <img
                            src={files.Image6}
                            alt="Briefcase and document with pen"
                            className="z-10 relative"
                        />
                        <div className="absolute bottom-0 right-0 z-0">

                        </div>
                    </div>
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 md:pt-8 text-white text-center md:text-right relative md:-left-10">
                    <h2 className="text-4xl lg:text-[60px] md:text-4xl mb-4 Poppins-bold">MoU Signing</h2>
                    <p className="text-lg md:text-[24px] leading-relaxed Poppins">
                        Visit our office in person to complete the <br /> Memorandum of Understanding (MoU) <br /> process, ensuring transparency,
                        trust, and <br /> seamless final documentation. And start <br /> receiving bulk orders for events.
                    </p>
                </div>
            <div className="absolute hidden lg:block left-100 -bottom-10 z-2">
                <img src={files.Group4} alt="" />
            </div>
            </div>
        </div>
    );
}
