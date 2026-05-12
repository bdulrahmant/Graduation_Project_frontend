import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import UserNavbar from "../../components/layout/UserNavbar";
import Footer from "../../components/layout/Footer";

import DrTaha from "../../assets/Dr.taha.png";
import DrMalek from "../../assets/Dr.Malek.png";
import DrAhmed from "../../assets/Dr.Ahmed.png";

const doctors = [
  {
    id: 1,
    name: "د. مالك محمد حماد",
    specialty: "أخصائي عظام",
    rating: 4.9,
    reviews: 320,
    location: "طنطا - أول شارع البحر",
    price: 150,
    image: DrMalek,
    experience: "8 سنوات خبرة في جراحة العظام",
    about:
      "متخصص في جراحة العظام وإصابات الملاعب وعلاج مشاكل العمود الفقري والمفاصل.",
    services: [
      "كشف عظام",
      "إصابات ملاعب",
      "علاج المفاصل",
      "متابعة الكسور",
    ],
  },

  {
    id: 2,
    name: "د. أحمد علي",
    specialty: "أخصائي قلب",
    rating: 4.7,
    reviews: 210,
    location: "القاهرة",
    price: 200,
    image: DrTaha,
    experience: "6 سنوات خبرة في أمراض القلب",
    about:
      "متخصص في تشخيص ومتابعة أمراض القلب والضغط باستخدام أحدث الأجهزة الطبية.",
    services: [
      "كشف قلب",
      "رسم قلب",
      "متابعة ضغط",
      "متابعة دورية",
    ],
  },

  {
    id: 3,
    name: "د. سارة محمد",
    specialty: "أخصائي جلدية",
    rating: 4.8,
    reviews: 180,
    location: "الإسكندرية",
    price: 120,
    image: DrAhmed,
    experience: "5 سنوات خبرة في الجلدية",
    about:
      "متخصصة في علاج الأمراض الجلدية والتجميل والليزر.",
    services: [
      "كشف جلدية",
      "جلسات ليزر",
      "علاج حب الشباب",
      "متابعة البشرة",
    ],
  },

  {
    id: 4,
    name: "د. محمود حسن",
    specialty: "أخصائي مخ وأعصاب",
    rating: 4.6,
    reviews: 140,
    location: "المنصورة",
    price: 180,
    image: DrMalek,
    experience: "7 سنوات خبرة في المخ والأعصاب",
    about:
      "متخصص في علاج أمراض المخ والأعصاب والصداع المزمن.",
    services: [
      "كشف أعصاب",
      "متابعة الصداع",
      "رسم مخ",
      "متابعة الأعصاب",
    ],
  },
];

const DoctorProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // جاهز للـ API بعدين
  // بعد الربط بالباك:
  // const { data } = await doctorApi.getDoctorById(id)

  const doctor = doctors.find(
    (doc) => doc.id.toString() === id
  );

  // fallback
  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-bold">
        Doctor Not Found
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 font-cairo">
      <UserNavbar showAuthButtons={false} />

      <div className="py-6 px-4 md:px-8">

        <div className="max-w-6xl mx-auto space-y-6">

          {/* Top Card */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 relative">

            {/* Badge */}
            <div className="absolute top-6 left-6 bg-[#E6FBF3] text-[#1BC5A3] px-3 py-1 rounded-full text-xs font-semibold">
              متوفر الآن
            </div>

            <div className="flex items-start gap-5">

              {/* Image */}
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-28 h-28 rounded-full object-cover"
              />

              {/* Info */}
              <div className="flex-1">

                <h1 className="text-lg font-bold text-gray-900">
                  {doctor.name}
                </h1>

                <p className="text-[#3B82F6] font-semibold text-base mt-1">
                  {doctor.specialty}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2 text-sm">

                  <i className="fa-solid fa-star text-yellow-400 text-xs"></i>

                  <span className="font-semibold text-gray-800">
                    {doctor.rating}
                  </span>

                  <span className="text-gray-400">
                    ({doctor.reviews} مراجعة)
                  </span>

                </div>

                {/* Location + Price */}
                <div className="flex flex-row gap-7 mt-3 text-sm text-gray-700">

                  <div className="flex items-center gap-2">

                    <i className="fa-solid fa-location-dot text-[#3B82F6] text-xs"></i>

                    <span>
                      {doctor.location}
                    </span>

                  </div>

                  <div className="flex items-center gap-1">

                    <i className="fa-solid fa-wallet text-[#3B82F6] text-xs"></i>

                    <span>
                      {doctor.price} جنيه
                    </span>

                  </div>

                  <div className="flex items-center gap-1 mr-auto">

                    <span className="text-[#3B82F6] font-semibold">
                      {doctor.experience}
                    </span>

                  </div>

                </div>

              </div>

            </div>

            {/* Button */}
            <button
              onClick={() =>
                navigate(`/booking/${doctor.id}`)
              }
              className="w-full mt-5 bg-[#3B82F6] hover:bg-blue-600 text-white py-3 rounded-xl font-[Cairo] text-sm flex items-center justify-center gap-2 transition"
            >

              <i className="fa-regular fa-calendar-check"></i>

              احجز الآن

            </button>

          </div>

          {/* Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 font-[Cairo]"
            dir="rtl"
          >

            {/* LEFT */}
            <div className="md:col-span-2 space-y-6 order-2 md:order-1">

              {/* About */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">

                <h3 className="font-bold mb-3 text-gray-800 flex items-center gap-2">

                  <i className="fa-regular fa-user text-[#3B82F6]"></i>

                  نبذة عن الطبيب

                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {doctor.about}
                </p>

              </div>

              {/* Services */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">

                <h3 className="font-bold mb-4 text-gray-800 flex items-center gap-2">

                  <i className="fa-solid fa-hand-holding-medical text-[#3B82F6]"></i>

                  الخدمات

                </h3>

                <div className="grid grid-cols-2 gap-3">

                  {doctor.services.map((service, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl"
                    >

                      <div className="w-8 h-8 bg-[#3B82F6] rounded-lg flex items-center justify-center text-white text-xs">
                        +
                      </div>

                      <span className="text-sm font-semibold text-gray-700">
                        {service}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

              {/* Reviews */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">

                <h3 className="font-bold mb-4 text-gray-800 flex items-center gap-2">

                  <i className="fa-regular fa-comment-dots text-blue-500"></i>

                  آراء المرضى

                </h3>

                <div className="space-y-4">

                  {[1, 2, 3].map((r) => (
                    <div
                      key={r}
                      className="p-4 bg-gray-50 rounded-xl"
                    >

                      <div className="flex items-center gap-3 mb-2">

                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>

                        <div>

                          <h4 className="text-sm font-bold">
                            محمد إبراهيم
                          </h4>

                          <div className="flex text-yellow-400 text-xs">

                            {[...Array(5)].map((_, i) => (
                              <i
                                key={i}
                                className="fa-solid fa-star"
                              ></i>
                            ))}

                          </div>

                        </div>

                      </div>

                      <p className="text-xs text-gray-500">
                        طبيب ممتاز جداً، تشخيصه دقيق وتعامل محترم.
                      </p>

                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="space-y-6 order-1 md:order-2">

              {/* Schedule */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">

                <h3 className="font-bold mb-4 text-gray-800 flex items-center gap-2">

                  <i className="fa-regular fa-clock text-blue-500"></i>

                  مواعيد العمل

                </h3>

                <div className="space-y-3 text-sm">

                  {[
                    "السبت",
                    "الأحد",
                    "الاثنين",
                    "الثلاثاء",
                    "الأربعاء",
                  ].map((day) => (
                    <div
                      key={day}
                      className="flex justify-between border-b border-gray-100 pb-2"
                    >

                      <span className="text-gray-600">
                        {day}
                      </span>

                      <span className="text-[#3B82F6] font-medium">
                        10:00 ص - 4:00 م
                      </span>

                    </div>
                  ))}

                  <div className="flex justify-between pt-2 text-red-500 font-semibold">

                    <span>
                      الخميس والجمعة
                    </span>

                    <span>
                      مغلق
                    </span>

                  </div>

                </div>

              </div>

              {/* Files */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">

                <h3 className="font-bold mb-4 text-gray-800 flex items-center gap-2">

                  <i className="fa-solid fa-briefcase text-blue-500"></i>

                  الملفات المهنية

                </h3>

                <div className="space-y-3">

                  {[
                    "شهادة التخصص",
                    "ترخيص مزاولة المهنة",
                    "صور العيادة",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition cursor-pointer"
                    >

                      <span className="text-sm">
                        {item}
                      </span>

                      <i className="fa-regular fa-eye text-gray-400"></i>

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
};

export default DoctorProfile;