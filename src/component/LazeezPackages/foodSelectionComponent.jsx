import files from "../../constants/index";
import EventCard from "./eventCard";


export default function FoodSelection() {

    const foodPackages = [
        {
            image: files.BaratIcon,
            title: "Baraat",
            description:
                "Celebrate the Baraat with a grand feast! Our specially curated packages are packed with rich, flavorful dishes that keep the energy high and the smiles wide as the celebrations unfold.",
        },
        {
            image: files.MilladIcon,
            title: "Millad",
            description:
                "Celebrate the spiritual gathering of Millad with our wholesome and delicious food packages. Designed to reflect the sanctity of the occasion, our menu brings comfort and joy to your guests.",
        },
        {
            image: files.AqiqaIcon,
            title: "Aqiqa",
            description:
                "Bless your little one's Aqiqa with a feast that honors tradition and taste. Our thoughtfully prepared menus ensure your family and guests enjoy a moment as special as the occasion.",
        },
        {
            image: files.CorprateIcon,
            title: "Corporate Event",
            description:
                "Impress at corporate events with our professional catering. Perfect for meetings or office gatherings, our flavorful packages add a touch of Lazeez to every occasion.",
        },
        {
            image: files.NikahIcon,
            title: "Nikah",
            description:
                "Celebrate the sacred union of nikah with a menu that reflects the beauty of the occasion. From traditional dishes to modern flavors, we ensure your celebration is as memorable as the bond you’re creating.",
        },
        {
            image: files.WalimaIcon,
            title: "Walima",
            description:
                "Our exquisite menus, crafted with care and tradition, bring the perfect blend of taste and elegance to your special day, leaving a lasting impression on your guests.",
        },
        {
            image: files.MajlisIcon,
            title: "Majlis",
            description:
                "Honor the sacred moments of majlis with our carefully curated food offerings. From traditional dishes to heartfelt flavors, we ensure your gathering is filled with warmth and devotion.",
        },
        {
            image: files.BirthdayIcon,
            title: "Birthday",
            description:
                "Celebrate the sacred union of nikah with a menu that reflects the beauty of the occasion. From traditional dishes to modern flavors, we ensure your celebration is as memorable as the bond you’re creating.",
        },
        {
            image: files.MehendiIcon,
            title: "Mehendi",
            description:
                "Our vibrant and delicious food packages are designed to match the energy of this joyous occasion, ensuring your guests enjoy every bite with lazeez food.",
        },
    ];

    return (
        <section className=" relative w-full py-16">
                <div className=" absolute w-full flex justify-between items-center top-300">
                    <img src={files.Shwarma2} alt="" />
                    <img src={files.CanIcon2} alt="" />
                </div>
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-center text-white Poppins-bold text-3xl md:text-4xl md:text-[70px] mb-12 max-w-3xl mx-auto leading-tight">
                    Choose your food, your choice, at your event!
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {foodPackages.map((item, index) => (
                        <EventCard key={index} image={item.image} title={item.title} description={item.description} />
                    ))}
                </div>
            </div>
        </section>
    );
}
