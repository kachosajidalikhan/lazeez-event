import files from "../../constants/index";

const VendorHero = () => {
    return (
        <section className="relative min-h-[600px] w-full px-4 py-16 md:py-24">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
                {/* Left Content */}
                <div className="z-10">
                    <h1 className="text-white Poppins-bold text-3xl md:text-[50px] lg:text-[82px] leading-tight">
                        Why partner <br /> with us?
                    </h1>
                    <div className="mt-6 space-y-3 text-lg Poppins text-white md:text-3xl">
                        <p>Access a wide customer base for bulk orders.</p>
                        <p>Increase your sales with consistent event-based demand.</p>
                        <p>Build credibility by joining a trusted platform.</p>
                    </div>
                </div>

                {/* Right Side - Chef & Icon */}
                <div className="relative flex justify-center md:justify-between">
                    <img
                        src={files.ChefIcon2}
                        alt="Chef character flying with spatula"
                        className="w-[280px] md:w-[422px] lg:w-[422px] object-contain"
                    />
                    {/* <div className="relative md:w-[400px]"> */}
                        {/* <img src={files.Logo2} alt="" className="relative top-25 -left-30 object-contain z-2 " /> */}
                        {/* <div className="relative -top-15 -left-30  w-60 h-60 rounded-full bg-[radial-gradient(closest-side,theme(colors.yellow.400),theme(colors.yellow.500),transparent)] blur-2xl opacity-80 z-1"></div>                       */}
                    {/* </div> */}
                </div>
            </div>
            {/* background: linear-gradient(0deg, rgba(237, 217, 0, 0.69), rgba(237, 217, 0, 0.69)); */}

            {/* Decorative Elements */}
            <div className="absolute -top-8 left-0">
                <img src={files.Shwarma2} alt="Decorative food element" className="w-24 md:w-32" />
            </div>

            <div className="absolute -bottom-20 right-0 z-2">
                <img src={files.CanIcon2} alt="Decorative corner" className="w-24 md:w-32" />
            </div>
        </section>
    );
};

export default VendorHero;
