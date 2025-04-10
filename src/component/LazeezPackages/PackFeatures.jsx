import React, {useState} from "react"
import files from "../../constants/index";
import { Star } from "lucide-react";
import PopupModal from "../Subpackages/popUp";
import ScrollAnimatedSection from "../scrollsection";
import ScrollAnimatedRight from "../scrollright";

export default function PackFeatures() {
const [selectedCard, setSelectedCard] = useState(null);
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
       
<section className="overflow-hidden w-full bg-white">
<br />
        <br />
        <br />
        <ScrollAnimatedSection>

                <div className="px-8 ">
                    <h1 className="Poppins-bold mb-6 text-[#ED004F] text-4xl md:text-5xl lg:text-6xl">Featured Packages</h1>
                    <p className="Poppins lg:w-[75%] md:text-[28px]">Explore our exclusive food packages
                        crafted for your special events.
                        From corporate gatherings to family celebrations,
                        our packages are tailored to meet your needs with a
                        perfect blend of taste and convenience.
                    </p>

                </div>
        </ScrollAnimatedSection>
                <br />
                <br />
                <br />

                <div className="px-2 py-6 grid gap-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {
                        card.map((item, index) => {
                            return (
                                <>
                                <ScrollAnimatedRight>

                                <div key={index}
                                    style={{ backgroundImage: `url(${files.circle})`, backgroundRepeat: 'no-repeat', backgroundPositionX: '-30px', backgroundPositionY: '390px', backgroundPosition: 'fixed' }}
                                    className="p-2 m-auto rounded-[20px] bg-white Poppins card-shadow back-image lg:w-80 xl:w-100 md:w-86 flex flex-col justify-end h-133 w-80  ">
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
            </>
                )
            }