import files from '../../constants/index';

export default function PackagesHero() {
  return (
    <section className="relative w-full overflow-hidden h-full py-16 px-4 md:px-16">
      <div className="mx-auto max-w-8xl relative flex flex-col lg:flex-row items-center justify-between">
          <div className="absolute hidden md:block top-[-30px] left-0 md:left-[-60px]">
            <img src={files.CanIcon} alt="Can" className="w-16 md:w-24 " />
          </div>
        {/* Left Section (Text) */}
        <div className="text-white text-center md:text-left lg:w-1/2">
          <h2 className="text-3xl md:text-6xl font-bold Poppins-bold mb-6 md:mb-10">
            Lazeez Packages
          </h2>
          <p className="text-lg md:text-2xl Poppins leading-relaxed">
            Discover our specially curated food <br className="hidden md:block" />
            packages, designed to make your <br className="hidden md:block" />
            events unforgettable. Whether it's a <br className="hidden md:block" />
            corporate function or a family <br className="hidden md:block" />
            celebration, our offerings combine <br className="hidden md:block" />
            delicious flavors with hassle-free <br className="hidden md:block" />
            convenience, tailored perfectly to <br className="hidden md:block" />
            your needs.
          </p>
        </div>

        {/* Right Section (Images) */}
        <div className="relative md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          {/* Background Logo */}
          <div className="absolute">
            <img src={files.WLogo} alt="" className="w-48 md:w-[410px]" />
          </div>

          {/* Main Box Image */}
          <div>
            <img src={files.Box} alt="Box" className="w-72 md:w-[600px]" />
          </div>

          {/* Top Floating Can Icon */}

          {/* Bottom Floating Shwarma */}
          <div className="absolute bottom-[-30px] hidden md:block -right-60 lg:right-[-50px]">
            <img src={files.Shwarma} alt="Shwarma" className="w-20 md:w-32" />
          </div>
        </div>
      </div>
    </section>
  );
}
