

export default function EventCard({ image, title, description }) {
    return (
        <div className="z-10 rounded-lg flex flex-col items-center md:items-start  text-center">
            <div className="mb-4 h-[285px] w-[285px] bg-[#FFD9E7] rounded-[20px] flex items-center justify-center">
                <img
                    src={image} // Replace with your actual image path
                    alt="Baraat celebration icon"
                    className="object-contain w-[214px] h-[214px]"
                />
            </div>
            <div className="flex flex-col items-start ">

            <h2 className="text-white Poppins-bold text-[40px] mb-2 text-start">{title}</h2>
            <p className="text-[#FFFFFFA6] Poppins text-[22px] text-start">
                {description}
            </p>
            </div>
        </div>
    )
}