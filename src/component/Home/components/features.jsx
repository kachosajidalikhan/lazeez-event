
import React, { useState } from "react"
import files from "../../../constants";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import PopupModal from "../../Subpackages/popUp";
import ScrollAnimatedRight from "../../scrollright";
import ScrollAnimatedSection from "../../scrollsection";
export default function Features() {
     const [selectedCard, setSelectedCard] = useState(null);

    const card = [{
        title: "Ramadan Special",
        image: files.Groups58,
        description: "Enhance the spirit of Ramadan with thoughtfully curated Iftar and Sehri packages. Designed for families and communities, our packages include delicious and nourishing meals that make every gathering memorable during this holy month.",
        vendar: "Hotel A",
        ingredients: "Chicken Biryani, Chicken",
        rating: 5,
        id:10,
    },
    {
        title: "FIFA 2020 Special",
        image: files.Group39,
        description: "Cheer for your favorite teams with our exclusive FIFA-themed food packages. Perfect for match screenings, these packages feature a variety of snacks, finger foods, and refreshing beverages to keep the excitement alive.",
        vendar: "Hotel B",
        ingredients: "Seekh Kebab, Korma",
        rating: 5,
        id:11,
    },
    {
        title: "Wedding Special",
        image: files.Group38,
        description: "Celebrate your special day with our premium Wedding packages, offering customized menus that blend elegance with exceptional taste. From traditional cuisines to modern delights, we cater to every preference for an unforgettable experience.",
        vendar: "Hotel C",
        ingredients: "Chicken Biryani, Korma",
        rating: 5,
        id:12,
    }]
    return (
        <>
            <section className=" w-full bg-white">
        <br />
                <br />
    <ScrollAnimatedSection>
                <div className="o px-8 ">
                    <h1 className="Poppins-bold mb-6 text-[#ED004F] text-4xl md:text-5xl lg:text-6xl">Featured Packages</h1>
                    <p className="Poppins lg:w-[75%] md:text-[28px]">Explore our exclusive food packages
                        crafted for your special events.
                        From corporate gatherings to family celebrations,
                        our packages are tailored to meet your needs with a
                        perfect blend of taste and convenience.
                    </p>

                </div>
    </ScrollAnimatedSection>

                <div className="px-2 py-6 grid gap-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {
                        card.map((item, index) => {
                            return (
                                <>
                                <ScrollAnimatedRight>

                                <div key={index}
                                    style={{ backgroundImage: `url(${files.circle})`, backgroundRepeat: 'no-repeat', backgroundPositionX: '-30px', backgroundPositionY: '390px', backgroundPosition: 'fixed' }}
                                    className="p-2 m-auto rounded-[20px] bg-white Poppins card-shadow back-image lg:w-80 md:w-86 ">
                                    <div className="flex gap-4 flex-col items-center">
                                        {/* <img src={item.extra} alt="" className="absolute -ml-20" /> */}
                                        <img src={item.image} alt="" />
                                        <h1 className="text-[#CC054D] Poppins-bold text-[18px]">{item.title}</h1>
                                        <span className="Poppins text-[12px] text-center w-62">{item.description}</span>
                                    </div>
                                    <br />
                                    <div>
                                        <span className="text-[#ED004F]"><strong>Food Items: </strong>{item.ingredients}</span>
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
                                        <button onClick={() => setSelectedCard(item)} className="bg-[#ED004F]/69 px-2 md:px-4 py-1 rounded-full text-white text-[10px] md:text-[10px]">Order Now</button>
                                        <button onClick={() => setSelectedCard(item)} className="bg-[#ED004F]/69 px-2 md:px-4 py-1 rounded-full text-white text-[10px] md:text-[10px]">Learn More</button>
                                    </div>
                                    {/* <img src={files.vector} alt="" className="fixed z-70" /> */}
                                </div>
                                        </ScrollAnimatedRight>
                                    </>
                            )
                        })
                    }
                </div>
            </section>
            {selectedCard && (
                            <PopupModal item={selectedCard} onClose={() => setSelectedCard(null)} />
                        )}
            {/* <section style={{ backgroundImage: `url(${files.bg2})`, backgroundRepeat: 'no-repeat',backgroundPositionX:'' }} */}
            <section className="w-full lg:bg-cover bg-cover  gap-4">

                


                        <ScrollAnimatedRight>
                    <div className="flex">
                        <br />
                        <br />

                        <div className="lg:w-[60%] w-[80%] md:mt-10 md:ml-6 p-4 md:py-10">
                            <h2 className="Poppins-bold md:text-[62px] text-[40px] z-10 text-white leading-tight">Kuch Lazeez <br /> Hojaye?
                            </h2>
                            <span className="text-white Poppins md:text-[30px]">Download our app to effortlessly plan
                                your events and customize food packages with
                                just a few taps—your perfect event is now at your fingertips!
                            </span>
                        </div>
                        
                        

                        <img src={files.Group70} alt="" className=" absolute right-0 lg:w-100 md:w-70 w-30" />

                    </div>
                        </ScrollAnimatedRight>
                    <div className="px-4 ">
                        <ScrollAnimatedSection>

                        <div className="flex-col md:flex md:flex-row gap-4">
                            <div className="bg-white md:mb-0 mb-4 px-2 py-1 rounded-lg flex items-center w-fit">
                                <img src={files.apple} alt="" className=" w-[46px] h-[46px] mr-2" />
                                <h1 className="text-[#ED004F] Poppins text-[14px] md:text-[18px]">Download the App On <strong className="text-[#ED004F] text-[16px] md:text-[20px]"> <br /> App Store</strong></h1>
                            </div>
                            <div className="bg-white px-2 py-1 rounded-lg flex items-center w-fit">
                                <img src={files.play} alt="" className=" w-[46px] h-[46px] mr-2" />
                                <h1 className="text-[#ED004F] Poppins text-[14px] md:text-[18px]" >Download the App On <strong className="text-[#ED004F] text-[16px] md:text-[20px]"> <br /> Play Store</strong></h1>
                            </div>
                        </div>
                        </ScrollAnimatedSection>
                        <ScrollAnimatedRight>

                        <div className=" mt-10 flex md:flex-row flex-col gap-x-4">
                            <Link to='/vendor-page'>
                                <button  className="bg-[#A8003D] md:mb-0 mb-4 Poppins-bold text-white rounded-lg px-6 py-2 md:text-[20px]">Become Our Partner</button>
                            </Link>
                            <Link to="/Signup-Form">
                                <button className="bg-[#A8003D] Poppins-bold text-white rounded-lg px-6 py-2 md:text-[20px]"> Sign up</button>
                            </Link>
                        </div>
                        </ScrollAnimatedRight>
                    </div>
                <br />
                <br />

                <div className="relative w-full min-h-[500px] md:h-screen px-6 py-12 md:px-12">
                    {/* Soda can - top left */}
                    <div className="absolute -top-30 right-0 md:hidden block">
                        <img src={files.group66} alt="French fries,logo" className="object-contain w-[200px]" />
                    </div>

                    <div className="absolute md:-top-1">
                        <img src={files.Foods2} alt="Soda can" className="object-contain md:w-[130px] md:h-[200px] w-[80px] h-[80px]" />
                    </div>
                    <div className="absolute lg:right-50 right-0 lg:top-50 -top-1">
                        <img src={files.chef} alt="" className="object-contain lg:w-[330px] md:w-[200px] w-[200px]" />
                    </div>
                    {/* <ScrollAnimatedRight> */}
                    {/* French fries - bottom right */}
                    <div className="absolute -bottom-10 -right-3 hidden md:block">
                        <img src={files.group66} alt="French fries" className="object-contain lg:w-[530px] md:w-[300px]" />
                    </div>
                    {/* </ScrollAnimatedRight> */}

                    {/* Hamburger - bottom left */}
                    <div className="absolute bottom-10 -left-5">
                        <img src={files.frame11} alt="Hamburger" className="object-contain md:w-[120px] md:h-[120px] w-[80px]" />
                    </div>

                    {/* Main content */}
                    <ScrollAnimatedRight>

                    <div className="relative z-10 max-w-lg">
                        <h1 className="text-white md:w-180 text-4xl md:text-7xl font-bold pt-40 mb-6 Poppins-bold">Chefs! Let's Cook</h1>
                        <p className="text-white text-lg md:text-xl mb-8 Poppins">
                            Whether you're a catering service, a restaurant, a local culinary expert, or a cozy café, join Lazeez Events
                            to showcase your talent and grow your business. Signing up is simple: register, list your packages, and become
                            a part of memorable celebrations!
                        </p>
                        <button className="bg-[#9c0036] hover:bg-[#7d002c] text-white px-6 py-2 rounded-md Poppins">
                            Become Our Partner
                        </button>
                    </div>
                    </ScrollAnimatedRight>
                </div>
                <br />
            </section>


        </>
    )
}