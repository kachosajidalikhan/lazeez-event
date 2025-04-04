
import React from "react"
import files from "../../../constants";
import { Star } from "lucide-react";
export default function Features() {

    const card = [{
        title: "Ramadan Special",
        image: files.box,
        extra: files.rectangle,
        description: "Enhance the spirit of Ramadan with thoughtfully curated Iftar and Sehri packages. Designed for families and communities, our packages include delicious and nourishing meals that make every gathering memorable during this holy month.",
        vendar: "Hotel A",
        ingredients: "Chicken Biryani, Chicken",
        rating: 5
    },
    {
        title: "FIFA 2020 Special",
        image: files.box,
        extra: files.football,
        description: "Cheer for your favorite teams with our exclusive FIFA-themed food packages. Perfect for match screenings, these packages feature a variety of snacks, finger foods, and refreshing beverages to keep the excitement alive.",
        vendar: "Hotel B",
        ingredients: "Seekh Kebab, Korma",
        rating: 5
    },
    {
        title: "Wedding Special",
        image: files.box,
        description: "Celebrate your special day with our premium Wedding packages, offering customized menus that blend elegance with exceptional taste. From traditional cuisines to modern delights, we cater to every preference for an unforgettable experience.",
        vendar: "Hotel C",
        ingredients: "Chicken Biryani, Korma",
        rating: 5
    }]
    return (
        <>

            <section className="w-full bg-white">
                <div className="px-8 ">
                    <h1 className="Poppins-bold mb-6 text-[#ED004F] text-4xl md:text-5xl lg:text-6xl">Featured Packages</h1>
                    <p className="Poppins lg:w-[75%] md:text-[28px]">Explore our exclusive food packages
                        crafted for your special events.
                        From corporate gatherings to family celebrations,
                        our packages are tailored to meet your needs with a
                        perfect blend of taste and convenience.
                    </p>

                </div>
                <br />
                <br />
                <br />

                <div className="px-6 py-6 mt-4 flex md:flex-row flex-col justify-center items-center  w-full gap-6">
                    {
                        card.map((item, index) => {
                            return (
                                <div key={index}
                                    style={{ backgroundImage: `url(${files.circle})`, backgroundRepeat: 'no-repeat', backgroundPositionX: '-30px', backgroundPositionY: '390px', backgroundPosition: 'fixed' }}
                                    className="p-4 bg-white Poppins card-shadow back-image lg:w-95 md:w-56 ">
                                    <div className="flex gap-4 flex-col items-center">
                                        <img src={item.extra} alt="" className="absolute -ml-20" />
                                        <img src={item.image} alt="" />
                                        <h1 className="text-[#CC054D] Poppins-bold text-[18px]">{item.title}</h1>
                                        <span className="Poppins text-[12px] px-2 text-center w-62">{item.description}</span>
                                    </div>
                                    <br />
                                    <div>
                                        <span className="text-[#ED004F]"><strong>Ingredients: </strong>{item.ingredients}</span>
                                    </div>
                                    <div className="flex justify-between items-center mt-4">

                                        <h1><strong className="text-[#ED004F]">Vendor Name: </strong>{item.vendar} </h1>
                                        <img src={files.sheff} alt="" width={20} />
                                    </div>
                                    <div className="flex gap-2 items-end justify-end mt-4">
                                        <span className="text-[#A3A0A1] text-[10px]">(33)</span>
                                        {"⭐".repeat(item.rating)}

                                    </div>
                                    <div className="flex gap-4 items-center justify-center mt-4">
                                        <button className="bg-[#ED004F]/69 px-4 py-1 rounded-full text-white">Order Now</button>
                                        <button className="bg-[#ED004F]/69 px-4 py-1 rounded-full text-white">Learn More</button>
                                    </div>
                                    <img src={files.vector} alt="" className="fixed z-70" />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section style={{ backgroundImage: `url(${files.bg2})`, backgroundRepeat: 'no-repeat',backgroundPositionX:'' }}
                className="w-full lg:bg-cover bg-contain  gap-4">
                
                <div>
                    <br />
                    <br />
                    <div className="lg:w-[60%] w-[80%] md:mt-10 md:ml-6 px-10 md:py-10">
                    <h2 className="Poppins-bold md:text-[62px] text-[40px] text-white">Kuch Lazeez <br /> Hojaye?
                    </h2>
                    <span className="text-white Poppins md:text-2xl">Download our app to effortlessly plan
                        your events and customize food packages with
                        just a few taps—your perfect event is now at your fingertips!
                    </span>
                    </div>

                    <div className="mt-2 px-10">
                    <div className="flex-col md:flex md:flex-row gap-4">
                        <div className="bg-white md:mb-0 mb-4 px-2 py-1 rounded-lg flex items-center justify-center">
                            <img src={files.apple} alt="" width={40} className="mr-2" />
                            <h1 className="text-[#ED004F] Poppins">Download the App On <strong className="text-[#ED004F]"> <br /> App Store</strong></h1>
                        </div>
                        <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center"> 
                            <img src={files.play} alt="" width={40} className="mr-2" />
                            <h1 className="text-[#ED004F] Poppins">Download the App On <strong className="text-[#ED004F]"> <br /> Play Store</strong></h1>
                        </div>
                    </div>
                    <div className="mt-10 md:flex gap-16">
                        <button className="bg-[#A8003D] md:mb-0 mb-4 Poppins-bold text-white rounded-lg px-4 py-2">Become Our Partner</button>
                        <button className="bg-[#A8003D] Poppins-bold text-white rounded-lg px-4 py-2"> Sign up</button>
                    </div>
                    </div>
                </div>
                <br />
                <br />
                <div className=" px-10 md:py-10">
                    <div className="md:ml-6">
                        <h1 className="text-white Poppins-bold md:text-[62px] text-[40px]">Chefs! Let's Cook</h1>
                        <div className="flex gap-4 justify-between">
                        <span className="text-white Poppins md:text-2xl lg:w-[70%]">
                        Whether you're a catering service, a restaurant, 
                        a local culinary expert, or a cozy café, 
                        join Lazeez Events to showcase your talent
                         and grow your business. Signing up is simple: register, 
                        list your packages, and become a part 
                        of memorable celebrations!
                        </span>
                        {/* <img src={files.chef} alt="" width={200} height={40} className=" relative right-100"/> */}
                        </div>
                        <br />
                        <br />
                        <button className="bg-[#A8003D] Poppins-bold text-white rounded-lg px-4 py-2">Become Our Partner</button>
                    </div>
                </div>
                <br />
            <br />
            <br />
            </section>
            

        </>
    )
}