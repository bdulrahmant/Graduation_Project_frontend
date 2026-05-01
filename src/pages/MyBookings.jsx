import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyBookings() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);

  useEffect(() => {
    const defaultData = [
      {
        id: 1,
        status: 'مؤكد',
        date: '12 نوفمبر 2025',
        time: '5:00 م',
        doctorName: 'د. مالك محمد حماد',
        specialty: 'أخصائي عظام',
        location: 'طنطا - أول شارع البحر'
      },
      {
        id: 2,
        status: 'ملغي',
        date: '13 نوفمبر 2025',
        time: '5:00 م',
        doctorName: 'د. مالك محمد حماد',
        specialty: 'أخصائي عظام',
        reason: 'تم الإلغاء بسبب انشغال الدكتور في هذا الميعاد',
        location: 'طنطا - أول شارع البحر'
      }
    ];

    const savedBookings =
      JSON.parse(localStorage.getItem('my-bookings')) || [];

    setBookings([...savedBookings, ...defaultData]);
  }, []);

  const handleConfirmCancel = () => {
    const updatedBookings = bookings.map(b => {
      if (b.id === selectedBookingId) {
        return {
          ...b,
          status: 'ملغي',
          reason: 'تم الإلغاء بناءً على طلب المستخدم'
        };
      }
      return b;
    });

    setBookings(updatedBookings);
    localStorage.setItem('my-bookings', JSON.stringify(updatedBookings));
    setIsModalOpen(false);
  };

  return (
    <div className="flex-grow bg-[#f0f4f9] py-10 px-4 min-h-screen relative font-[Cairo]" dir="rtl">
      <div className="max-w-4xl mx-auto">

        {/* Tabs */}
        <div className="flex justify-end gap-3 mb-8">
          <button className="bg-[#4a90e2] text-white px-6 py-2 rounded-lg font-bold shadow-md">
            القادمة
          </button>
          <button className="bg-white text-gray-400 px-6 py-2 rounded-lg border border-gray-100 hover:bg-gray-50 transition">
            السابقة
          </button>
          <button className="bg-white text-gray-400 px-6 py-2 rounded-lg border border-gray-100 hover:bg-gray-50 transition">
            الملغاة
          </button>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {bookings.map(booking => (
            <div
              key={booking.id}
              className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-gray-50 relative overflow-hidden"
            >
              {/* Status */}
              <div className="absolute top-6 left-6">
                <span
                  className={`px-4 py-1 rounded-full text-[10px] font-bold ${booking.status === 'مؤكد'
                      ? 'bg-green-100 text-green-500'
                      : 'bg-red-100 text-red-500'
                    }`}
                >
                  {booking.status}
                </span>
              </div>

              <div className="flex items-start gap-6">
                <img
                  src="/images/doctor.jpg"
                  alt="Doctor"
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-50"
                />

                <div className="flex-grow text-right mt-1">
                  <h3 className="font-bold text-lg text-gray-800">
                    {booking.doctorName}
                  </h3>

                  <p className="text-[#4a90e2] font-bold text-sm mb-4">
                    {booking.specialty}
                  </p>

                  {/* 🔥 UPDATED ROW (Booking Style) */}
                  <div className="flex  items-center justify-start gap-6 text-gray-400 text-xs font-medium">

                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <i className="fa-regular fa-calendar text-[#4a90e2]"></i>
                      <span>{booking.date}</span>
                    </div>

                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <i className="fa-regular fa-clock text-[#4a90e2]"></i>
                      <span>{booking.time}</span>

                    </div>

                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <i className="fa-solid fa-location-dot text-[#4a90e2]"></i>
                      <span>{booking.location || "طنطا - أول شارع البحر"}</span>

                    </div>

                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 pt-6 border-t border-gray-50">
                {booking.status === 'ملغي' ? (
                  <div className="p-3 bg-white border border-red-200 rounded-xl text-center text-red-500 text-xs font-bold shadow-inner">
                    {booking.reason}
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        navigate(`/booking-details/${booking.id}`)
                      }
                      className="flex-[2] bg-[#4a90e2] text-white py-3 rounded-xl text-sm font-bold shadow-md hover:bg-blue-600 transition"
                    >
                      عرض التفاصيل
                    </button>

                    <button 
                      onClick={() =>
                        navigate(`/booking/${booking.id}`)
                      }
                      className="flex-[1] border border-blue-100 text-[#4a90e2] py-3 rounded-xl text-sm font-bold hover:bg-blue-50 transition"
                    >
                      تعديل موعد
                    </button> 

                    <button 
                      onClick={() => {
                        setSelectedBookingId(booking.id);
                        setIsModalOpen(true);
                      }}
                      className="flex-[1] border border-red-100 text-red-400 py-3 rounded-xl text-sm font-bold hover:bg-red-50 transition"
                    >
                      إلغاء
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999] p-4">
          <div className="bg-white rounded-[2rem] p-10 max-w-lg w-full text-center shadow-2xl">

            <div className="flex justify-center mb-4">
              <svg
                width="44"
                height="38"
                viewBox="0 0 44 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#A00505] text-6xl"
              >
                <path
                  d="M2.03681 37.98C1.64681 37.98 1.30181 37.8875 1.00181 37.7025C0.701811 37.5175 0.468478 37.2733 0.301811 36.97C0.121811 36.6717 0.0218116 36.3492 0.00181159 36.0025C-0.0148551 35.6542 0.0834783 35.3033 0.296812 34.95L19.9718 1.01C20.1851 0.656666 20.4418 0.399999 20.7418 0.239999C21.0418 0.0799993 21.3685 0 21.7218 0C22.0751 0 22.401 0.0799993 22.6993 0.239999C22.9976 0.399999 23.2543 0.656666 23.4693 1.01L43.1468 34.95C43.3601 35.3033 43.4576 35.6533 43.4393 36C43.4226 36.35 43.3226 36.6733 43.1393 36.97C42.9726 37.2733 42.7393 37.5175 42.4393 37.7025C42.1393 37.8875 41.7951 37.98 41.4068 37.98H2.03681ZM21.7218 26.4425C22.0785 26.4425 22.376 26.3225 22.6143 26.0825C22.8526 25.8425 22.9718 25.5458 22.9718 25.1925V15.1925C22.9718 14.8375 22.8518 14.54 22.6118 14.3C22.3718 14.06 22.0743 13.9408 21.7193 13.9425"
                  fill="#A00505"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-semibold text-[#A00505] mb-6">
              هل أنت متأكد أنك تريد إلغاء هذا الحجز؟
            </h3>

            <p className="text-gray-500 text-xl mb-12">
              لن تتمكن من استرجاعه بعد الإلغاء.
            </p>

            <div className="flex flex-row-reverse gap-4">

              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 bg-[#468EEC] text-white py-4 rounded-xl font-bold text-xl shadow-lg"
              >
                رجوع
              </button>

              <button
                onClick={handleConfirmCancel}
                className="flex-1 bg-white text-[#468EEC] border border-[#468EEC] py-4 rounded-xl font-bold text-xl"
              >
                تأكيد الإلغاء
              </button>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}