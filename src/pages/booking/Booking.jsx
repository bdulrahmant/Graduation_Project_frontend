import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import UserNavbar from "../../components/layout/UserNavbar";
import Footer from "../../components/layout/Footer";

import DrMalek from "../../assets/Dr.Malek.png";

export default function Booking() {
    const navigate = useNavigate();
    const { id } = useParams();

    // جاهز للربط بالـ API بعدين
    const doctorData = {
        id: 2,
        name: "د. مالك محمد حماد",
        specialty: "أخصائي عظام",
        rating: 4.9,
        reviews: 320,
        location: "طنطا - أول شارع البحر",
        price: 150,
        experience: "8 سنوات خبرة",
        image: DrMalek,
    };

    // state جاهز للـ backend
    const [bookingData, setBookingData] = useState({
        day: 15,
        time: "12:30 م",
        notes: "",
    });

    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // update helpers
    const updateBookingData = (key, value) => {
        setBookingData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    // submit
    const handleSubmit = async () => {
        try {
            setLoading(true);

            const payload = {
                doctorId: doctorData.id,
                bookingDate: bookingData.day,
                bookingTime: bookingData.time,
                notes: bookingData.notes,
            };

            console.log("BOOKING PAYLOAD:", payload);

            // هنا بعدين هيتحط الـ API
            // await bookingApi.create(payload)
            setShowModal(true);

            setTimeout(() => {
                // navigate("/payment");
                navigate("/payment", {
                    state: {
                        doctorId: doctorData.id,
                        doctorName: doctorData.name,
                        specialty: doctorData.specialty,
                        date: `${bookingData.day} نوفمبر 2025`,
                        time: bookingData.time,
                        location: doctorData.location,
                        image: doctorData.image,
                        status: "مؤكد",
                    },
                });
            }, 1500);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            dir="rtl" className="min-h-screen bg-gray-50 font-cairo"
        >
            <UserNavbar showAuthButtons={false} />

            <div className="relative py-8 px-4">

                {/* Doctor Card */}
                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 relative mb-6">

                    <div className="absolute top-4 left-4 bg-[#E6FBF3] text-[#1BC5A3] px-3 py-1 rounded-full text-xs font-semibold">
                        متوفر الآن
                    </div>

                    <div className="flex items-start gap-5">

                        <img
                            src={doctorData.image}
                            alt="Doctor"
                            className="w-24 h-24 rounded-full object-cover"
                        />

                        <div className="flex-1 text-right">

                            <h3 className="text-lg font-bold text-gray-900">
                                {doctorData.name}
                            </h3>

                            <p className="text-[#3B82F6] font-semibold mt-1">
                                {doctorData.specialty}
                            </p>

                            {/* Rating */}
                            <div className="flex items-center gap-1 mt-2 text-sm">

                                <i className="fa-solid fa-star text-yellow-400 text-xs"></i>

                                <span className="font-semibold text-gray-800">
                                    {doctorData.rating}
                                </span>

                                <span className="text-gray-400">
                                    ({doctorData.reviews} مراجعة)
                                </span>

                            </div>

                            {/* Info */}
                            <div className="flex flex-row gap-6 mt-3 text-sm text-gray-700">

                                <div className="flex items-center justify-end gap-2">

                                    <i className="fa-solid fa-location-dot text-[#3B82F6] text-xs"></i>

                                    <span>
                                        {doctorData.location}
                                    </span>

                                </div>

                                <div className="flex items-center justify-end gap-2">

                                    <i className="fa-solid fa-wallet text-[#3B82F6] text-xs"></i>

                                    <span>
                                        {doctorData.price} جنيه
                                    </span>

                                </div>

                                <div className="flex items-center mr-auto gap-2">

                                    <span className="text-[#3B82F6] font-semibold">
                                        {doctorData.experience}
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Calendar + Time */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Calendar */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">

                            <div className="flex items-center gap-2 text-lg font-bold mb-6 text-gray-700">

                                <i className="fa-regular fa-calendar text-[#468EEC]"></i>

                                اختر اليوم

                            </div>

                            <div className="grid grid-cols-7 text-center text-sm">

                                {[
                                    "السبت",
                                    "الأحد",
                                    "الإثنين",
                                    "الثلاثاء",
                                    "الأربعاء",
                                    "الخميس",
                                    "الجمعة",
                                ].map((day) => (
                                    <div
                                        key={day}
                                        className="text-gray-400 font-medium pb-2 border-b mb-2"
                                    >
                                        {day}
                                    </div>
                                ))}

                                {[
                                    29, 30, 31, 1, 2, 3, 4,
                                    5, 6, 7, 8, 9, 10, 11,
                                    12, 13, 14, 15, 16, 17, 18,
                                ].map((num) => (
                                    <div
                                        key={num}
                                        onClick={() =>
                                            updateBookingData("day", num)
                                        }
                                        className={`cursor-pointer p-2 rounded-lg transition-all ${bookingData.day === num
                                            ? "bg-[#468EEC] text-white font-bold"
                                            : "hover:bg-blue-50 text-gray-600"
                                            }`}
                                    >
                                        {num}
                                    </div>
                                ))}

                            </div>

                        </div>

                        {/* Time */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">

                            <div className="flex items-center gap-2 text-lg font-bold mb-6 text-gray-700">

                                <i className="fa-regular fa-clock text-[#468EEC]"></i>

                                اختر الوقت

                            </div>

                            <h4 className="text-[#468EEC] font-bold mb-6">
                                يوم {bookingData.day}
                            </h4>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

                                {[
                                    "10:00 ص",
                                    "10:30 ص",
                                    "11:00 ص",
                                    "11:30 ص",
                                    "12:00 م",
                                    "12:30 م",
                                    "01:00 م",
                                    "01:30 م",
                                    "02:00 م",
                                    "02:30 م",
                                    "03:00 م",
                                    "03:30 م",
                                ].map((time) => (
                                    <button
                                        key={time}
                                        onClick={() =>
                                            updateBookingData("time", time)
                                        }
                                        className={`py-3 rounded-xl text-xs font-bold border transition-all ${bookingData.time === time
                                            ? "bg-[#468EEC] text-white border-[#468EEC]"
                                            : "border-blue-100 text-[#468EEC] hover:bg-blue-50"
                                            }`}
                                    >
                                        {time}
                                    </button>
                                ))}

                            </div>

                        </div>

                    </div>

                    {/* Notes */}
                    <div className="lg:col-span-1">

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">

                            <div className="flex items-center gap-2 text-lg font-bold mb-4 text-gray-700">

                                <i className="fa-solid fa-pen-to-square text-[#468EEC]"></i>

                                ملاحظات

                            </div>

                            <textarea
                                value={bookingData.notes}
                                onChange={(e) =>
                                    updateBookingData("notes", e.target.value)
                                }
                                placeholder="أدخل أي ملاحظات للطبيب (اختياري)"
                                className="w-full h-64 border border-dashed border-blue-200 rounded-xl p-4 resize-none focus:outline-none focus:border-[#468EEC] bg-blue-50/20 text-sm"
                            />

                        </div>

                    </div>

                </div>

                {/* Submit */}
                <div className="max-w-6xl mx-auto mt-8">

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className={`w-full py-4 rounded-xl font-bold text-lg shadow-md transition-all active:scale-95 ${loading
                            ? "bg-gray-300 cursor-not-allowed text-white"
                            : "bg-[#468EEC] hover:bg-blue-600 text-white"
                            }`}
                    >
                        {loading
                            ? "جاري تأكيد الحجز..."
                            : id
                                ? "تعديل الموعد"
                                : "تأكيد الحجز"}
                    </button>

                </div>

                {/* Success Modal */}
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">

                        <div className="bg-white rounded-[2.5rem] p-10 max-w-sm w-full text-center shadow-2xl">

                            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">

                                <div className="w-12 h-12 border-4 border-[#468EEC] rounded-full flex items-center justify-center">

                                    <i className="fa-solid fa-check text-[#468EEC] text-2xl"></i>

                                </div>

                            </div>

                            <h2 className="text-xl font-bold text-gray-800">
                                تم تأكيد الحجز بنجاح
                            </h2>

                        </div>

                    </div>
                )}
            </div>

            <Footer />

        </div>
    );
}