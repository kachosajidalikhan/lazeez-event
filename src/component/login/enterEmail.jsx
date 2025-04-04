import { useState } from "react"
import { ShieldCheck } from "lucide-react"
import files from "../../constants/index";
import { useNavigate } from "react-router-dom";

export default function EnterEmail() {
  const [code, setCode] = useState("");
  const nav = useNavigate()

  const handleSubmit = () => {
    e.preventDefault()
    console.log("Reset password with code:", code)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-600 to-pink-500 p-4 relative">
      {/* Decorative bubbles */}
      <img src={files.Ellipse18} className="hidden md:block absolute -left-1 lg:left-1/6 lg:top-1/4 h-34 w-34 lg:h-[167px] lg:w-[167px]  z-10"/>
      <img src={files.Ellipse17} className="hidden md:block absolute bottom-10 right-2 lg:bottom-1/5 lg:right-1/6 h-45 w-45 lg:h-[219px] lg:w-[219px] z-10"/>
      <img src={files.Ellipse19} className="hidden md:block absolute bottom-30 left-40 lg:bottom-1/3 lg:left-1/3 h-[49px] w-[49px] z-10"/>
      <img src={files.Ellipse20} className="hidden md:block absolute right-30 top-24 lg:right-1/3 lg:top-1/5 h-[49px] w-[49px] z-10"/>

      {/* Main card */}
      <div className="relative w-full max-w-3xl rounded-[75px] bg-white/90 p-8 py-10 shadow-lg backdrop-blur-sm">
        <div className="text-center">
          <h1 className="mb-2 text-3xl PoppinsBold font-bold text-[#CC054D]">Enter your email below</h1>
          <p className="mb-8 text-[#ED004F] Poppins">
            We have sent a reset code to
            <br />
            your email.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto max-w-sm space-y-6 flex flex-col items-center">
            <div className="relative w-[80%]">
              <div className="absolute inset-y-0 left-3 flex items-center">
                <ShieldCheck className="h-5 w-5 text-[#F2C4C7] fill-[#ED004F]" />
              </div>
              <input
                type="text"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full rounded-md bg-[#F2C4C7] py-3 pl-10 pr-3 text-pink-800 placeholder-[#ED004F] focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Code"
                required
              />
            </div>

            <button
              type="submit"
              onClick={(()=>{nav("/Two-Step-Page")})}
              className="w-1/2 rounded-[12px] PoppinsBold bg-[#ED004FB0] py-3 font-medium text-white transition hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              Reset my password
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
