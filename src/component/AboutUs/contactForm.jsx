import React, { useState } from "react";
import { User, Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    nav('/Thank-You-Section')

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 py-10">
      <h1 className="text-3xl sm:text-5xl md:text-6xl Poppins-bold text-white mb-8 text-center">
        Contact Us
      </h1>

      <div className="bg-white rounded-[40px] sm:rounded-[60px] md:rounded-[89px] px-6 sm:px-10 md:px-16 py-10 w-full max-w-4xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              icon={<User className="h-5 w-5 text-[#ED004F] mr-2" />}
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <InputField
              icon={<Phone className="h-5 w-5 text-[#ED004F] mr-2" />}
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              icon={<Mail className="h-5 w-5 text-[#ED004F] mr-2" />}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              icon={<MapPin className="h-5 w-5 text-[#ED004F] mr-2" />}
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="relative">
            <div className="flex bg-pink-200 rounded-md p-3">
              <MessageSquare className="h-6 w-6 text-[#ED004F] mr-2 mt-1" />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-transparent w-full outline-none text-[#ED004F] placeholder-[#ED004F] resize-none pl-3 text-sm sm:text-base"
                required
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#FF4583E5] Poppins-bold hover:bg-pink-600 text-white py-3 px-10 rounded-[12px] transition duration-300 w-full sm:w-60"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function InputField({ icon, type, name, placeholder, value, onChange }) {
  return (
    <div className="relative">
      <div className="flex items-center bg-[#F1BBBBBA] rounded-md p-3">
        {icon}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-transparent w-full outline-none text-[#ED004F] placeholder-[#ED004F] pl-3 text-sm sm:text-base"
          required
        />
      </div>
    </div>
  );
}
