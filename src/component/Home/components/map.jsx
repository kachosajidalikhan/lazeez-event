import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom Icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // 📍 Marker Icon
  iconSize: [35, 35], // Size of the icon
});

export default function Map() {
  return (
    <section className="w-full py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl Poppins-bold font-bold text-white">
            Find Nearest <br /> Vendor
          </h2>
          <p className="text-lg Poppins text-white mt-2">
            Check your nearest vendor in your place, your time, your way!
          </p>
        </div>

        {/* Map */}
        <div className="w-full h-[400px] rounded-4xl overflow-hidden shadow-lg">
          <MapContainer
            center={[37.8044, -122.2711]} // Oakland Coordinates
            zoom={12}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[37.8044, -122.2711]} icon={customIcon}>
              <Popup>Vendor Available Here!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
