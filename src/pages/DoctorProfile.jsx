
import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F7F9FC] min-h-screen py-6 px-4 md:px-8 font-[Cairo]" dir="ltr">
      <div className="max-w-6xl mx-auto space-y-6" dir="rtl">

        {/* Top Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 relative">

          {/* Badge */}
          <div className="absolute top-6 left-6 bg-[#E6FBF3] text-[#1BC5A3] px-3 py-1 rounded-full text-xs font-semibold">
            متوفر الآن
          </div>

          <div className="flex items-start gap-5">

            {/* Image */}
            <img
              src="/images/doctor.jpg"
              alt=""
              className="w-28 h-28 rounded-full object-cover"
            />

            {/* Info */}
            <div className="flex-1">

              <h1 className="text-lg font-bold text-gray-900">
                د. مالك محمد حماد
              </h1>

              <p className="text-[#3B82F6] font-semibold text-base mt-1">
                أخصائي عظام
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2 text-sm">
                <i className="fa-solid fa-star text-yellow-400 text-xs"></i>
                <span className="font-semibold text-gray-800">4.9</span>
                
                <span className="text-gray-400">(320 مراجعة)</span>
              </div>

              {/* Location + Price */}
<div className="flex flex-row gap-7 mt-3 text-sm text-gray-700">
  
  <div className="flex items-center gap-2">
    <i className="fa-solid fa-location-dot text-[#3B82F6] text-xs"></i>
    <span>طنطا - أول شارع البحر</span>
  </div>

  <div className="flex items-center gap-1">
    <i className="fa-solid fa-wallet text-[#3B82F6] text-xs"></i>
    <span>150 جنيه</span>
  </div>

  <div className="flex items-center gap-1 mr-auto">
    <span className="text-[#3B82F6] font-semibold text-24px">
      8 سنوات خبرة في جراحة العظام
    </span>
    </div>  
    </div>
    </div>
</div>
          {/* Button */}
          <button
            onClick={() => navigate("/booking")}
            className="w-full mt-5 bg-[#3B82F6] hover:bg-blue-600 text-white py-3 rounded-xl font-[Cairo] text-sm flex items-center justify-center gap-2 transition"
          >
            <i className="fa-regular fa-calendar-check"></i>
            احجز الآن
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-[Cairo]" dir="rtl">

  {/* LEFT (هيبقى شمال في الديسكتوب) */}
  <div className="md:col-span-2 space-y-6 order-2 md:order-1">

    {/* About */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      <h3 className="font-bold mb-3 text-gray-800 flex items-center gap-2">
        <i className="fa-regular fa-user text-[#3B82F6]"></i>
        نبذة عن الطبيب
      </h3>

      <p className="text-gray-500 text-sm leading-relaxed">
        8 أعوام في تشخيص وعلاج الأمراض الباطنية المختلفة. حاصل على
        بكالوريوس الطب والجراحة من جامعة القاهرة. يتميز بأسلوب هادئ في
        التعامل مع المرضى.
      </p>
    </div>

    {/* Services */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      <h3 className="font-bold mb-4 text-gray-800 flex items-center gap-2">
        <i className="fa-solid fa-hand-holding-medical text-[#3B82F6]"></i>
        الخدمات
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {["كشف باطنة", "متابعة السكر", "متابعة الضغط", "طوارئ بسيطة"].map(
          (service, i) => (
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
          )
        )}
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
          <div key={r} className="p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <h4 className="text-sm font-bold">محمد إبراهيم</h4>
                <div className="flex text-yellow-400 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
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

  {/* RIGHT (هيبقى يمين) */}
  <div className="space-y-6 order-1 md:order-2">

    {/* Schedule */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      <h3 className="font-bold mb-4 text-gray-800 flex items-center gap-2">
        <i className="fa-regular fa-clock text-blue-500"></i>
        مواعيد العمل
      </h3>

      <div className="space-y-3 text-sm">
        {["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء"].map((day) => (
          <div key={day} className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-600">{day}</span>
            <span className="text-[#3B82F6] font-medium">
              10:00 ص - 4:00 م
            </span>
          </div>
        ))}

        <div className="flex justify-between pt-2 text-red-500 font-semibold">
          <span>الخميس والجمعة</span>
          <span>مغلق</span>
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
        {["شهادة التخصص", "ترخيص مزاولة المهنة", "صور العيادة"].map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition cursor-pointer"
          >
            <span className="text-sm">{item}</span>
            <i className="fa-regular fa-eye text-gray-400"></i>
          </div>
        ))}
      </div>
    </div>

  </div>

</div>
      </div>
    </div>
  );
};

export default DoctorProfile;