import files from '../../constants/index';

export default function PackagesHero() {
  return (
    <section className="relative w-full overflow-hidden h-full py-16 px-4 md:px-16">
      <div className="mx-auto max-w-8xl relative flex flex-col lg:flex-row items-center justify-between">
          <div className="absolute hiden md:bloc top-[-30px] -left-6 md:left-[-64px]">
            <img src={files.CanIcon} alt="Can" className="w-12 md:w-20 " />
          </div>
        {/* Left Section (Text) */}
        
        <div className="text-white animate-fadeInLeft text-center md:text-left lg:w-1/2">
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
        <div className="animate-fadeInRight relative md:w-1/2 flex justify-cente items-cente mt-10 md:mt-0">
          {/* Background Logo */}
          <div className="absolute top-6 left-8 md:top-12 md:left-14 lg:top-2  z-10">
            <img src={files.WLogo} alt="" className="w-48 lg:w-[400px]" />
          </div>

          {/* Main Box Image */}
          <div className='relative -left-6'>
            <img src={files.Box} alt="Box" className="w-70 md:w-[600px]" />
          </div>

          {/* Top Floating Can Icon */}

          {/* Bottom Floating Shwarma */}
        </div>
          <div className="absolute bottom-[-30px] -right-4 md:-right-18 lg:right-[-62px]">
            <img src={files.Shwarma} alt="Shwarma" className="w-18 md:w-26" />
          </div>
      </div>
    </section>
  );
}
