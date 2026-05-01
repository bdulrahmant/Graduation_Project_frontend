import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const navigate = useNavigate();
  const handleConfirm = () => {
  const newBooking = {
    id: Date.now(),
    doctorName: "د. مالك محمد حماد",
    specialty: "أخصائي عظام",
    date: "12 نوفمبر 2025",
    time: "5:00 م",
    location: "طنطا - أول شارع البحر",
    status: "مؤكد", // أو "ملغي" بناءً على الحالة
    image: "/images/doctor.jpg"
  };

  const existingBookings = JSON.parse(localStorage.getItem('myBookings')) || [];
  localStorage.setItem('myBookings', JSON.stringify([newBooking, ...existingBookings]));
  
  navigate('/booking-success');
};

  return (
    <div className='font-[Cairo]'>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-blue-500">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          طرق الدفع
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <h3 className="text-[#468EEC] font-bold text-lg mb-4 text-right">اختر طريقة الدفع المناسبة لك</h3>
        
        {/* Info Alert */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3 mb-6 text-gray-600 text-sm">
          <i className="fa-solid fa-circle-info text-blue-400 mt-0.5"></i>
          <p>لضمان موعدك بالكامل:<br/>ننصح بالدفع الإلكتروني لتأكيد الحجز. الحجوزات بالدفع عند الوصول قد تتأثر بأولوية المواعيد المؤكدة.</p>
        </div>

        {/* Payment Options */}
        <div className="space-y-4">
          <label className="block bg-white border border-gray-200 hover:border-blue-400 rounded-xl p-5 cursor-pointer transition shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <i className="fa-regular fa-credit-card text-2xl text-gray-700"></i>
              <span className="font-bold text-lg">بطاقة بنكية</span>
            </div>
            <input type="radio" name="payment_method" className="w-5 h-5 text-[#468EEC] focus:ring-[#468EEC] border-gray-300" />
          </label>

          <label className="block bg-white border border-gray-200 hover:border-[#468EEC] rounded-xl p-5 cursor-pointer transition shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-money-bill-1-wave text-2xl text-gray-700"></i>
              <span className="font-bold text-lg">الدفع عند الوصول</span>
            </div>
            <input type="radio" name="payment_method" defaultChecked className="w-5 h-5 text-[#468EEC] focus:ring-[#468EEC] border-gray-300" />
          </label>
        </div>

        {/* Submit */}
        <div className="mt-8 flex justify-center">
        <button onClick={() => navigate('/booking-success')} className="bg-[#468EEC] hover:bg-blue-600 text-white w-full max-w-sm py-3 rounded-lg font-bold text-lg shadow-md transition">تأكيد الحجز ودفع العربون</button>
        </div>
      </div>
    </div>
  );
}