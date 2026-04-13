import { MapPin, Star, Wallet } from "lucide-react";
import { Button } from "./button";

export default function DoctorCard({
  name,
  specialty,
  rating,
  reviews,
  location,
  price,
  image,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-4">
        <div className="flex justify-center mb-4">
          <img
            src={image}
            alt={name}
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>

        <div className="space-y-3">
          <div className="text-center">
            <h3 className="text-lg font-cairo font-semibold text-[#121212]">
              {name}
            </h3>
            <p className="text-base font-cairo font-semibold text-[#468EEC] mt-1">
              {specialty}
            </p>
          </div>

          <div className="flex items-center justify-center gap-1">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-500 font-cairo">
              {rating} ({reviews} مراجعة)
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-500">
            <MapPin className="w-5 h-5 text-[#468EEC]" />
            <span className="text-sm font-cairo font-medium">
              {location}
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-500">
            <Wallet className="w-5 h-5 text-[#468EEC]" />
            <span className="text-base font-cairo font-semibold">
              {price}
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 pt-0">
        <Button variant="primary" size="md" className="w-full">
          احجز الآن
        </Button>
      </div>
    </div>
  );
}
