import files from "../../constants/index";

export default function WhoCanJoin() {
  const services = [
    {
      title: "Restaurants",
      icon: files.RestaurantIcon,
      description: "Expand your reach by offering bulk food packages for events and special occasions.",
    },
    {
      title: "Cafes",
      icon: files.CoffeeSnacks,
      description: "Delight event-goers with your unique flavors and signature bulk orders.",
    },
    {
      title: "Catering Businesses",
      icon: files.Catering,
      description: "Streamline your services and connect with event organizers for seamless bulk orders.",
    },
    {
      title: "Individual Chefs",
      icon: files.Chef3,
      description: "Showcase your culinary skills and grow your business by serving high-demand event orders.",
    },
    {
      title: "Bakeries",
      icon: files.BakeryIcon,
      description:
        "Impress event guests with bulk orders of your freshly baked goods, from custom cakes to assorted pastry platters.",
    },
  ];

  return (
    <div className="relative px-10 py-16">
      <h1 className="text-white Poppins-bold text-center text-4xl md:text-[72px] lg:text-[72px] leading-tight mb-50 mt-30">
        Who can Join?
      </h1>
      <div className=" hidden md:block absolute right-40 bottom-122">
        <img src={files.Group30} alt="" />
      </div>
      <div className=" hidden md:block absolute left-55 -bottom-27 z-2">
        <img src={files.Group4} alt="" />
      </div>
      {/* Cards Container */}
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-x-14 gap-y-60">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-[#FF5B97F2] bg-opacity-40 rounded-xl p-6 text-center text-white backdrop-blur-sm shadow-lg w-full md:w-[309px] md:h-[370px] lg:w-[309px] lg:h-[370px]"
            >
              {/* Icon */}
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
                <div className="w-[168px] h-[168px] bg-white rounded-full flex items-center justify-center shadow-md">
                  <img
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="mt-22">
                <h3 className="text-[26px] PoppinsBold mb-2">{service.title}</h3>
                <p className="text-[20px] Poppins">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
