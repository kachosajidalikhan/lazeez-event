import { Info } from "lucide-react";
import files from "../../constants/index";
import ScrollAnimatedSection from "../scrollsection";
import ScrollAnimatedRight from "../scrollright";

export default function RegistrationProcess() {
  return (
    <div className="overflow-hidden min-h-screen text-white pt-15 relative">
      <div className=" absolute w-full flex justify-between items-center top-150">
        <img src={files.Shwarma2} alt="" className="w-16 md:w-24" />
        <img src={files.CanIcon2} alt="" className="w-16 md:w-24" />
      </div>
      <div className="max-w-6xl mx-auto">
        <br />
        <div className="mt-2 px-4">
          <h1 className="text-3xl md:text-4xl Poppins-bold">Registration process</h1>
        </div>
        <div className="flex flex-col lg:flex-row items-start mt-4">
          {/* Left Column */}
          <ScrollAnimatedSection>

          <div className=" md:w-1/2">
            <div className="md:relative">
              <div className="w-[150px] h-[150px] lg:w-[350px] lg:h-[350px] rounded-lg flex items-center justify-center">
                <img src={files.Image4} alt="" />
              </div>
            </div>
          </div>
          </ScrollAnimatedSection>

          {/* Right Column */}
          <ScrollAnimatedRight>

          <div className="overflow-hidden space-y-4 relative">
            <h2 className="text-3xl mt-6 px-6 md:text-4xl Poppins-bold md:text-right">Adding your information</h2>
            <p className="px-4 text-[20px] md:text-[20px] text-left Poppins">
              Whether you are an Individual Chef or a registered business, you need to add <br /> the following information:
            </p>
            <ul className="space-y-2 px-4 text-left text-[20px] Poppins">
              <li>1. Owner's or C-suite name.</li>
              <li>2. ID Card number (CNIC).</li>
              <li>3. Legal registration copy (i.e., restaurants, bakeries, etc).</li>
              <li>4. Complete address</li>
              <li>5. QA testing of your place and food.</li>
            </ul>
            <div className="absolute left-10 lg:-left-10 w-20 lg:w-full -bottom-24 lg:-bottom-45 z-2">
              <img src={files.Group4} alt="" />
            </div>
          </div>
          </ScrollAnimatedRight>
        </div>
      </div>
    </div>
  );
}