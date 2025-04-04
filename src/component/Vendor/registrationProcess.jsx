import { Info } from "lucide-react";
import files from "../../constants/index";

export default function RegistrationProcess() {
  return (
    <div className="min-h-screen text-white pt-15 relative">
      <div className=" absolute w-full flex justify-between items-center top-150">
        <img src={files.Shwarma2} alt="" />
        <img src={files.CanIcon2} alt="" />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="mt-6 px-4">
          <h1 className="text-4xl md:text-[60px] Poppins-bold">Registration process</h1>
        </div>
        <div className="flex flex-col md:flex-row items-start mt-35">
          {/* Left Column */}
          <div className="space-y-6 md:w-1/2">
            <div className="md:relative">
              <div className="absolute top-40 md:top-0 md:left-0 w-[150px] h-[150px] md:w-[350px] md:h-[350px] rounded-lg flex items-center justify-center">
                <img src={files.Image4} alt="" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 relative -left-10">
            <h2 className="text-4xl md:text-[50px] Poppins-bold text-right">Adding your information</h2>
            <p className="text-[20px] md:text-[20px] text-right Poppins">
              Whether you are an Individual Chef or a registered business, you need to add <br /> the following information:
            </p>
            <ul className="space-y-2 text-right text-[20px] Poppins">
              <li>1. Owner's or C-suite name.</li>
              <li>2. ID Card number (CNIC).</li>
              <li>3. Legal registration copy (i.e., restaurants, bakeries, etc).</li>
              <li>4. Complete address</li>
              <li>5. QA testing of your place and food.</li>
            </ul>
            <div className="absolute hidden md:block left-0 -bottom-40 z-2">
              <img src={files.Group4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}