import { useState } from "react";
import { User, Phone, Mail, Lock } from "lucide-react";
import files from "../../constants/index";
import { Link } from "react-router-dom";

export default function SignupForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        acceptTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="relative w-full max-w-[1088px] mx-auto p-4 sm:p-6 md:p-8">
            <div className="bg-pink-100 rounded-[60px] sm:rounded-[80px] md:rounded-[120px] p-4 sm:p-6 md:p-8 shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-6">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <div className="relative w-[220px] lg:w-[350px] h-[220px] lg:h-[350px]">
                            <img
                                src={files.ChefIcon}
                                alt="Chili pepper chef"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="w-full md:w-1/2">
                        <h1 className="text-2xl sm:text-3xl md:text-2xl pl-4 text-start text-[#CC054D] font-bold mb-4 PoppinsBold">
                            Create an Account
                        </h1>

                        <form onSubmit={handleSubmit} className="space-y-4 pl-4">
                            {/* Name */}
                            <div className="relative lg:w-[60%]">
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <User className="h-4 w-4 text-[#ED004F]" />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-3 h-10 py-3 rounded-md bg-[#F1BBBBBA] placeholder-[#ED004F] Poppins focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    required
                                />
                            </div>

                            {/* Phone */}
                            <div className="relative lg:w-[60%]">
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <Phone className="h-4 w-4 text-[#ED004F]" />
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-3 h-10 py-3 rounded-md bg-[#F1BBBBBA] Poppins placeholder-[#ED004F] focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="relative lg:w-[60%]">
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <Mail className="h-4 w-4 text-[#ED004F]" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-3 h-10 py-3 Poppins rounded-md bg-[#F1BBBBBA] placeholder-[#ED004F] focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div className="relative lg:w-[60%]">
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <Lock className="h-4 w-4 text-[#ED004F]" />
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-3 h-10 py-3 Poppins rounded-md bg-[#F1BBBBBA] placeholder-[#ED004F] focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    required
                                />
                            </div>


                            {/* Submit */}
                            <div className="lg:w-[60%] flex justify-center">
                                <button
                                    type="submit"
                                    className="w-full sm:w-2/3 h-8 md:w-1/2 bg-[#ED004FB0] Poppins hover:bg-pink-600 text-white font-semibold text-sm py-2 rounded-md transition-colors"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>

                        {/* Login link */}
                        <div className="mt-4 text-start pl-4 text-[#ED004F] text-sm Poppins">
                            Already have an account?{" "}
                            <Link to='/Login-Form' className="font-bold text-sm text-[#ED004F] hover:underline Poppins">Login here</Link>
                        </div>
                        {/* Terms */}
                        <div className="flex items-start mt-2">
                            <input
                                type="checkbox"
                                id="terms"
                                name="acceptTerms"
                                checked={formData.acceptTerms}
                                onChange={handleChange}
                                className="mt-1 h-3 w-3 text-pink-600 focus:ring-pink-500 border-pink-300 rounded"
                                required
                            />
                            <label htmlFor="terms" className="ml-2 text-sm text-[#ED004F] Poppins">
                                By creating an account you accept our{" "} <br />
                                <a href="/terms" className="font-bold text-[#ED004F] hover:underline Poppins">Terms and Conditions</a> and{" "}
                                <a href="/privacy" className="font-bold text-[#ED004F] hover:underline Poppins">Privacy Policy</a>.
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
