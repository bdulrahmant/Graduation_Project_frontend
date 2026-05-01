import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BookingSuccess() {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    // 1. بيانات الحجز الجديد
    const newBooking = {
      id: Date.now(), // استخدام الوقت الحالي كـ ID فريد
      status: 'مؤكد',
      date: '15 نوفمبر 2025',
      time: '01:00 م',
      doctorName: 'د. مالك محمد حماد',
      specialty: 'أخصائي عظام',
      location: 'طنطا - أول شارع البحر'
    };

    // 2. هاتي القديم وضيفي الجديد عليه (تأكدي من توحيد الاسم لـ 'MyBookings')
    const existingBookings = JSON.parse(localStorage.getItem('my-bookings')) || [];
    const updatedBookings = [newBooking, ...existingBookings];

    // 3. الحفظ والانتقال
    localStorage.setItem('my-bookings', JSON.stringify(updatedBookings));
    navigate('/my-bookings'); 
  };

  return (
    <div className="flex-grow flex flex-col items-center py-12 px-4 bg-[#F7FBFF] font-[Cairo]" dir="rtl">
      
      {/* أيقونة النجاح */}
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-6 border border-blue-100">
          <div className="w-16 h-16 rounded-full border-4 border-[#468EEC] flex items-center justify-center">
             <span className="text-[#468EEC] text-4xl font-bold">✓</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-[#468EEC] mb-2">تم تأكيد حجزك بنجاح</h1>
        <p className="text-[#5B5B5B] text-base">يمكنك متابعة تفاصيل الموعد من صفحة حجوزاتي</p>
      </div>

      {/* كارت تفاصيل الحجز */}
      <div className="w-full max-w-2xl bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden mb-10">
        <div className="bg-[#4a90e2] text-white p-5 flex items-center justify-end gap-3 font-bold text-lg">
          <span>تفاصيل الحجز</span>
          <i className="fa-solid fa-file-invoice text-2xl"></i>
        </div>

        <div className="p-8 md:p-10">
          <div className="flex items-center justify-end gap-5 mb-12 text-right">
            <div>
              <h2 className="text-xl font-bold text-gray-800">د. مالك محمد حماد</h2>
              <p className="text-[#4a90e2] font-bold">أخصائي عظام</p>
              <div className="flex items-center justify-end gap-1 text-xs mt-1">
                <span className="text-gray-400 font-medium">(320 مراجعة)</span>
                <i className="fa-solid fa-star text-yellow-400"></i>
                <span className="text-gray-800 font-bold">4.9</span>
              </div>
            </div>
            <img src="/images/doctor.jpg" alt="دكتور" className="w-20 h-20 rounded-full border-4 border-blue-50 object-cover" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoBox label="التاريخ" value="15 نوفمبر 2025" icon="fa-calendar-days" color="blue" />
            <InfoBox label="الوقت" value="01:00 م" icon="fa-clock" color="blue" />
            <InfoBox label="العنوان" value="طنطا - شارع البحر" icon="fa-location-dot" color="green" />
            <InfoBox label="السعر" value="150 جنية" icon="fa-money-bill-wave" color="green" />
          </div>

          <div className="mt-10 p-5 bg-[#fffdf0] rounded-2xl border border-[#fef3c7] flex items-center justify-center gap-3 text-sm text-gray-600">
             <i className="fa-solid fa-circle-info text-yellow-500 text-lg"></i>
             <p className="font-medium">يرجى الحضور قبل الموعد بـ 15 دقيقة</p>
          </div>
        </div>
      </div>

      {/* الأزرار */}
      <div className="flex flex-col md:flex-row gap-5 w-full max-w-2xl font-bold">
        <button onClick={handleViewDetails} className="flex-1 bg-[#4a90e2] text-white py-4 rounded-xl shadow-lg hover:bg-blue-600 transition-all">
          عرض تفاصيل الحجز
        </button>
        <button onClick={() => navigate('/')} className="flex-1 bg-white text-[#4a90e2] border-2 border-[#4a90e2] py-4 rounded-xl hover:bg-blue-50 transition-all">
          العودة للرئيسية
        </button>
      </div>
    </div>
  );
}

function InfoBox({ label, value, icon, color }) {
  const styles = color === 'blue' 
    ? "bg-blue-50/50 border-blue-100 text-[#4a90e2]" 
    : "bg-green-50/50 border-green-100 text-green-500";

  return (
    <div className={`p-6 rounded-3xl border flex flex-col items-center justify-center shadow-sm ${styles}`}>
      <div className="flex items-center gap-2 mb-2 font-bold">
        <i className={`fa-solid ${icon}`}></i>
        <span className="text-sm">{label}</span>
      </div>
      <p className="text-gray-700 font-bold text-lg">{value}</p>
    </div>
  );
}