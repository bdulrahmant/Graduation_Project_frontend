import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DoctorCardListing({ doctor }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
      
      <div className="flex items-center gap-4 w-full md:w-auto">
        <img
          src={doctor.image}
          alt="Doctor"
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>
          <h3 className="font-bold text-lg">
            {doctor.name}
          </h3>

          <p className="text-[#468EEC] text-sm font-medium">
            {doctor.specialty}
          </p>

          <div className="flex items-center gap-1 text-xs mt-1 text-black">
            ⭐ {doctor.rating} ({doctor.reviews} مراجعة)
          </div>

          <div className="flex items-center gap-8 text-xs mt-1 text-black">

            <div>
              <i className="fa-solid fa-location-dot text-[#4a90e2]"></i>
              {" "}
              {doctor.location}
            </div>

            <div className="font-bold">
              <i className="fa-solid fa-wallet text-[#4a90e2]"></i>
              {" "}
              {doctor.price} جنيه
            </div>

          </div>
        </div>
      </div>

      <div className="text-[#468EEC] font-medium text-sm md:text-base hidden md:block">
        {doctor.experience}
      </div>

      <div className="flex flex-col items-center md:items-end w-full md:w-auto gap-3">

        <span
          className={`px-3 py-1 rounded-full text-xs font-bold ${
            doctor.available
              ? "bg-green-100 text-green-600"
              : "bg-orange-100 text-orange-600"
          }`}
        >
          {doctor.available ? "متوفر الآن" : "متاح غداً"}
        </span>

        <button
          disabled={!doctor.available}
          onClick={() => navigate(`/doctor/${doctor.id}`)}
          className={`w-full md:w-32 py-2 rounded-lg text-sm font-medium transition ${
            doctor.available
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-gray-300 text-white cursor-not-allowed"
          }`}
        >
          احجز الآن
        </button>

      </div>
    </div>
  );
}