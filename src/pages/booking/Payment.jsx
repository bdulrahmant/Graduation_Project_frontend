import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import UserNavbar from "../../components/layout/UserNavbar";
import Footer from "../../components/layout/Footer";

import DrMalek from "../../assets/Dr.Malek.png";

export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  // البيانات الجاية من Booking بعدين
  // جاهزة للـ API integration
  const bookingData = location.state || {
    doctorId: 2,
    doctorName: "د. مالك محمد حماد",
    specialty: "أخصائي عظام",
    date: "12 نوفمبر 2025",
    time: "5:00 م",
    location: "طنطا - أول شارع البحر",
    status: "مؤكد",
    image: DrMalek,
  };

  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setLoading(true);

      const payload = {
        doctorId: bookingData.doctorId,
        paymentMethod,
        bookingDate: bookingData.date,
        bookingTime: bookingData.time,
      };

      console.log("PAYMENT PAYLOAD:", payload);

      // API Ready
      // await paymentApi.confirm(payload)

      // مؤقت لحد الباك
      const existingBookings =
        JSON.parse(localStorage.getItem("myBookings")) || [];

      const newBooking = {
        id: Date.now(),
        ...bookingData,
        paymentMethod,
      };

      localStorage.setItem(
        "myBookings",
        JSON.stringify([newBooking, ...existingBookings])
      );

      setTimeout(() => {
        navigate("/booking-success", {
          state: newBooking,
        });
      }, 1200);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#F7F9FC]"
    >
      <UserNavbar showAuthButtons={false} />

      <div className="font-[Cairo] px-4 py-8">

        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">

            <h2 className="text-2xl font-bold flex items-center gap-2">

              <button
                onClick={() => navigate(-1)}
                className="text-gray-500 hover:text-blue-500 transition"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>

              طرق الدفع

            </h2>

          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Payment Methods */}
            <div className="lg:col-span-2">

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

                <h3 className="text-[#468EEC] font-bold text-lg mb-4 text-right">
                  اختر طريقة الدفع المناسبة لك
                </h3>

                {/* Alert */}
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3 mb-6 text-gray-600 text-sm">

                  <i className="fa-solid fa-circle-info text-blue-400 mt-0.5"></i>

                  <p>
                    لضمان موعدك بالكامل:
                    <br />
                    ننصح بالدفع الإلكتروني لتأكيد الحجز.
                    الحجوزات بالدفع عند الوصول قد تتأثر
                    بأولوية المواعيد المؤكدة.
                  </p>

                </div>

                {/* Options */}
                <div className="space-y-4">

                  {/* Card */}
                  <label
                    className={`block border rounded-xl p-5 cursor-pointer transition shadow-sm flex items-center justify-between ${
                      paymentMethod === "card"
                        ? "border-[#468EEC] bg-blue-50"
                        : "border-gray-200 hover:border-blue-400 bg-white"
                    }`}
                  >

                    <div className="flex items-center gap-3">

                      <i className="fa-regular fa-credit-card text-2xl text-gray-700"></i>

                      <span className="font-bold text-lg">
                        بطاقة بنكية
                      </span>

                    </div>

                    <input
                      type="radio"
                      name="payment_method"
                      checked={paymentMethod === "card"}
                      onChange={() =>
                        setPaymentMethod("card")
                      }
                      className="w-5 h-5 text-[#468EEC] focus:ring-[#468EEC] border-gray-300"
                    />

                  </label>

                  {/* Cash */}
                  <label
                    className={`block border rounded-xl p-5 cursor-pointer transition shadow-sm flex items-center justify-between ${
                      paymentMethod === "cash"
                        ? "border-[#468EEC] bg-blue-50"
                        : "border-gray-200 hover:border-blue-400 bg-white"
                    }`}
                  >

                    <div className="flex items-center gap-3">

                      <i className="fa-solid fa-money-bill-1-wave text-2xl text-gray-700"></i>

                      <span className="font-bold text-lg">
                        الدفع عند الوصول
                      </span>

                    </div>

                    <input
                      type="radio"
                      name="payment_method"
                      checked={paymentMethod === "cash"}
                      onChange={() =>
                        setPaymentMethod("cash")
                      }
                      className="w-5 h-5 text-[#468EEC] focus:ring-[#468EEC] border-gray-300"
                    />

                  </label>

                </div>

              </div>

            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">

                <h3 className="text-lg font-bold text-gray-800 mb-5">
                  ملخص الحجز
                </h3>

                <div className="flex items-center gap-4 mb-5">

                  <img
                    src={bookingData.image}
                    alt="Doctor"
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div>

                    <h4 className="font-bold text-gray-800">
                      {bookingData.doctorName}
                    </h4>

                    <p className="text-sm text-[#468EEC]">
                      {bookingData.specialty}
                    </p>

                  </div>

                </div>

                <div className="space-y-4 text-sm text-gray-600">

                  <div className="flex justify-between">

                    <span>
                      التاريخ
                    </span>

                    <span className="font-semibold text-gray-800">
                      {bookingData.date}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span>
                      الوقت
                    </span>

                    <span className="font-semibold text-gray-800">
                      {bookingData.time}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span>
                      المكان
                    </span>

                    <span className="font-semibold text-gray-800 text-left">
                      {bookingData.location}
                    </span>

                  </div>

                  <div className="border-t pt-4 flex justify-between text-base font-bold">

                    <span>
                      العربون
                    </span>

                    <span className="text-[#468EEC]">
                      50 جنيه
                    </span>

                  </div>

                </div>

                {/* Submit */}
                <button
                  onClick={handleConfirm}
                  disabled={loading}
                  className={`mt-6 w-full py-3 rounded-xl font-bold text-lg shadow-md transition ${
                    loading
                      ? "bg-gray-300 cursor-not-allowed text-white"
                      : "bg-[#468EEC] hover:bg-blue-600 text-white"
                  }`}
                >
                  {loading
                    ? "جاري تأكيد الدفع..."
                    : "تأكيد الحجز ودفع العربون"}
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}