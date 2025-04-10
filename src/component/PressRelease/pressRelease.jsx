import React from "react";
import ScrollAnimatedSection from "../scrollsection";
import ScrollAnimatedRight from "../scrollright";

export default function PressSection() {
    return (
        <section className="bg-white w-full max-w-6xl mx-auto px-4 py-12">
            <div className="flex flex-col items-center text-center mb-12">
                <ScrollAnimatedSection>

                <h1 className="text-4xl md:text-5xl lg:text-6xl Poppins-bold font-bold text-[#ff0066] mb-6">
                    Press Release
                </h1>
                <p className="max-w-4xl Poppins text-center text-base md:text-lg lg:text-xl">
                    Welcome to the official Lazeez Events press release section. Here,
                    you’ll find the latest announcements, updates, and news about our
                    innovative approach to bulk food solutions for events. Discover how
                    we’re redefining convenience and quality in the food industry while
                    building strong partnerships with vendors.
                </p>
                </ScrollAnimatedSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl mx-auto">
                {["Update", "Announcement"].map((title, index) => (
                    <div key={index} className="flex flex-col">
                        <a href="#" className="group">
                            <ScrollAnimatedRight>

                            <div className="h-60 w-full rounded-lg overflow-hidden bg-[#f8c6c6] mb-4">
                                <img
                                    src="/placeholder.svg"
                                    alt={`${title} thumbnail`}
                                    className="w-full h-full object-cover"
                                    />
                            </div>
                                    </ScrollAnimatedRight>
                                    <ScrollAnimatedSection>

                            <h2 className="text-xl md:text-2xl Poppins-bold font-bold text-[#ff0066] mb-1">
                                {title}
                            </h2>
                            <p className="text-[#ff0066] Poppins text-sm md:text-base">
                                lorem ipsum, description
                            </p>
                                    </ScrollAnimatedSection>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
