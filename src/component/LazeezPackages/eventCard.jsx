import { useNavigate } from "react-router-dom"
import ScrollAnimatedRight from "../scrollright"

export default function EventCard({ id,image, title, description }) {
    const nav = useNavigate()
    return (
        <div onClick={()=>{nav(`/Sub-Packages/${id}`)}} className="z-10 rounded-lg flex flex-col justify-center md:items-start  text-center">
            <ScrollAnimatedRight>

            <div className="mb-4 h-[285px] w-[285px] bg-[#FFD9E7] rounded-[20px] flex items-center justify-center m-auto md:m-0">
                <img
                    src={image} // Replace with your actual image path
                    alt="Baraat celebration icon"
                    className="object-contain w-[214px] h-[214px]"
                    />
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">

            <h2 className="text-white Poppins-bold text-[40px] mb-2 text-center md:text-start">{title}</h2>
            <p className="text-[#FFFFFFA6] Poppins text-[22px]">
                {description}
            </p>
            </div>
                    </ScrollAnimatedRight>
        </div>
    )
}