import files from "../../constants/index";
import ScrollAnimatedRight from "../scrollright";
import ScrollAnimatedSection from "../scrollsection";

export default function LazeezVendor() {
    return (
        <main className="min-h-screen text-white w-full">
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 items-start w-full">

                    {/* Left Section - Text & Button */}
                    <ScrollAnimatedSection>

                    <div className="space-y-6 px-4">
                        <h1 className="text-4xl md:text-6xl leading-tight pt-5 Poppins-bold">Lazeez Vendor Portal</h1>
                        <p className="text-lg md:text-2xl leading-relaxed Poppins">
                            Access your user-friendly <br /> personalized dashboard to manage <br /> orders, update menus, track <br /> performance, and
                            connect with <br /> event organizers—all in one place. <br /> Designed exclusively for our vendors <br /> to streamline
                            operations and boost <br /> growth.
                        </p>
                        <div className="pt-4">
                            <a
                                href="Signup-Form"
                                className="inline-block bg-[#A8003D] Poppins hover:bg-pink-900 transition-colors px-4 py-4 rounded-md text-lg font-medium"
                                >
                                Become Lazeez Vendor
                            </a>
                        </div>
                    </div>
                                </ScrollAnimatedSection>

                    {/* Right Section - Image Mockups */}
                    <ScrollAnimatedRight>

                    <div className="relative mt-10 md:mt-0">
                        <div className="relative z-20 flex justify-end">
                            <div className="relative ">
                                <img src={files.Group70} alt="" className="w-80 md:w-[500px]" />

                            </div>
                        </div>
                    </div>
                    </ScrollAnimatedRight>

                </div>
            </div>
            <br />
        </main>
    );
}
