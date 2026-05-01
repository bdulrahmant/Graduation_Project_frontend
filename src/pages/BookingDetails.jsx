import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function BookingDetails() {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const allBookings = JSON.parse(localStorage.getItem('my-bookings')) || [];
    const current = allBookings.find(b => b.id.toString() === id?.toString());
    setBookingData(current);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F0F4F9]">
        <p className="text-xl font-bold text-[#468EEC] animate-pulse">جاري تحميل التفاصيل...</p>
      </div>
    );
  }

  if (!bookingData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F0F4F9] text-center px-4">
        <h1 className="text-2xl font-bold text-red-500 mb-4">عفواً، لم يتم العثور على الحجز</h1>
        <button 
          onClick={() => navigate('/MyBookings')} 
          className="bg-[#468EEC] text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-blue-600 transition"
        >
          العودة لصفحة الحجوزات
        </button>
      </div>
    );
  }

  return (
    <> {/* بداية الـ Fragment لجمع العناصر */}
      <div className="bg-[#F0F4F9] min-h-screen py-10 px-4 md:px-10 font-[Cairo]" dir="ltr">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* العمود الجانبي */}
          <div className="lg:col-span-4 space-y-6" dir="rtl">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex gap-2 mb-6 border-b pb-4" dir="rtl">
                <h3 className="font-bold text-gray-700 text-lg">الدفع</h3>
                <i className="fa-solid fa-wallet text-[#468EEC] text-xl"></i>
              </div>
              <div className="space-y-4">
                <PaymentRow label ="سعر الكشف" value="150 جنية" isBlue />
                <hr />
                <PaymentRow label="طريقة الدفع" value="عند الزيارة" isBlue />
                <hr />
                <PaymentRow label="عربون التأكيد" value="20 جنية" isBlue />
                <hr />
                <div className="pt-4 border-t border-dashed flex justify-between items-center">
                  <span className="text-gray-500 ">اجمالي المتبقي</span>
                  <span className="text-[#468EEC] font-extrabold text-xl font-mono">130 جنية</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
               <button onClick={() => navigate(`/Booking/${bookingData.id}`)} className="w-full bg-[#468EEC] text-white py-4 rounded-xl font-bold shadow-md hover:shadow-lg transition-all">تعديل الموعد</button>
               <button className="w-full bg-[#D1D5DB] text-gray-500 py-4 rounded-xl font-bold cursor-not-allowed">اضافة الى التقويم</button>
               <button className="w-full bg-[#D1D5DB] text-gray-500 py-4 rounded-xl font-bold cursor-not-allowed">الاتجاه الى العيادة</button>
               <button className="w-full border-2 border-red-200 text-red-500 py-4 rounded-xl font-bold hover:bg-red-50 transition-all" onClick={() => setIsCancelModalOpen(true)}>
                 الغاء الحجز
               </button>
            </div>

            <div className="bg-[#E9F3FF] rounded-2xl p-8 border border-blue-100">
               <h3 className="font-bold text-[#468EEC] mb-6 text-right text-lg">تواصل مع العيادة</h3>
               <div className="space-y-4 text-right">
                  <ContactInfo icon="fa-location-dot" text={bookingData.location || "طنطا - أول شارع البحر"} />
                  <ContactInfo icon="fa-phone" text="010 00000 000" />
                  <ContactInfo icon="fa-envelope" text="Clinic@eamail.com" />
               </div>
            </div>
          </div>

          {/* العمود الرئيسي */}
          <div className="lg:col-span-8 space-y-6 " dir="rtl">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm flex flex-col md:flex-row items-center gap-6">
              <img 
                src={bookingData.doctorImage || "/images/doctor.jpg"} 
                alt="Doctor" 
                className="w-24 h-24 rounded-full object-cover border-4 border-[#F0F4F9]" 
              />
              <div className="text-center md:text-right">
                <h2 className="text-2xl font-bold text-gray-800">{bookingData.doctorName}</h2>
                <p className="text-[#468EEC] font-bold text-lg mb-2">{bookingData.specialty || "أخصائي عظام"}</p>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  
                  <div className="flex-col items-center gap-1">
                    
                    <div>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                    <span className="text-gray-800 font-bold">4.9</span> <span className="text-gray-400 text-sm">(320 مراجعة)</span>
                    </div>
                    <div> <i className="fa-solid fa-location-dot text-[#468EEC] text-xs"></i>
                    <span className="text-gray-700 text-sm">{bookingData.location || "طنطا - أول شارع البحر"}</span></div>
                   
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <h3 className="font-bold text-xl text-gray-800 mb-8">موعدك</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <DateDetailBox icon="fa-calendar-days" label="التاريخ" value={bookingData.date} />
                <DateDetailBox icon="fa-clock" label="الوقت" value={bookingData.time} />
                <DateDetailBox icon="fa-stopwatch" label="المدة" value="30 دقيقة" />
                <DateDetailBox icon="fa-circle-check" label="الحالة" value={bookingData.status || "مؤكد"} isStatus />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                 <i className="fa-solid fa-user-pen text-[#468EEC] text-xl"></i>
                 <h3 className="font-bold text-gray-800 text-xl">بيانات المريض</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <PatientDataRow label="الاسم" value={bookingData.patientName || "أحمد محمد علي"} />
                <hr />
                <PatientDataRow label="العمر" value="35" />
                <hr />
                <PatientDataRow label="الجنس" value="ذكر" />
                <hr />
                <PatientDataRow label="الامراض المزمنة" value="ضغط الدم" />
              </div>
              
              <div className="mt-8 bg-[#F0F6FF] p-8 rounded-[2rem] border border-blue-50 text-center">
                 <div className="flex items-center justify-center gap-2 mb-4 text-[#468EEC] font-bold">
                    <i className="fa-solid fa-circle-info"></i>
                    <span>ملاحظات اضافية</span>
                 </div>
                 <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto">
                   {bookingData.notes || "شعور بالم في الصدر مع ضيق في التنفس احياناً خاصة عند بذل مجهود"}
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- المودالات (داخل الـ Fragment) --- */}
      {isCancelModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999] p-4" dir="rtl">
          <div className="bg-white rounded-[2rem] p-10 max-w-lg w-full text-center shadow-2xl">
            <div className="flex justify-center mb-4">
              <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="fa-solid fa-triangle-exclamation text-[#A00505] text-6xl font-light">
<path d="M2.03681 37.98C1.64681 37.98 1.30181 37.8875 1.00181 37.7025C0.701811 37.5175 0.468478 37.2733 0.301811 36.97C0.121811 36.6717 0.0218116 36.3492 0.00181159 36.0025C-0.0148551 35.6542 0.0834783 35.3033 0.296812 34.95L19.9718 1.01C20.1851 0.656666 20.4418 0.399999 20.7418 0.239999C21.0418 0.0799993 21.3685 0 21.7218 0C22.0751 0 22.401 0.0799993 22.6993 0.239999C22.9976 0.399999 23.2543 0.656666 23.4693 1.01L43.1468 34.95C43.3601 35.3033 43.4576 35.6533 43.4393 36C43.4226 36.35 43.3226 36.6733 43.1393 36.97C42.9726 37.2733 42.7393 37.5175 42.4393 37.7025C42.1393 37.8875 41.7951 37.98 41.4068 37.98H2.03681ZM2.84681 35.48H40.5968L21.7218 2.98L2.84681 35.48ZM21.7218 32.02C22.1585 32.02 22.5243 31.8725 22.8193 31.5775C23.1143 31.2825 23.261 30.9167 23.2593 30.48C23.2576 30.0433 23.1101 29.6783 22.8168 29.385C22.5235 29.0917 22.1585 28.9433 21.7218 28.94C21.2851 28.9367 20.9201 29.0842 20.6268 29.3825C20.3335 29.6808 20.186 30.0467 20.1843 30.48C20.1826 30.9133 20.3301 31.2792 20.6268 31.5775C20.9235 31.8758 21.2885 32.0233 21.7218 32.02ZM21.7218 26.4425C22.0785 26.4425 22.376 26.3225 22.6143 26.0825C22.8526 25.8425 22.9718 25.5458 22.9718 25.1925V15.1925C22.9718 14.8375 22.8518 14.54 22.6118 14.3C22.3718 14.06 22.0743 13.9408 21.7193 13.9425C21.3643 13.9442 21.0676 14.0633 20.8293 14.3C20.591 14.5367 20.4718 14.8342 20.4718 15.1925V25.1925C20.4718 25.5458 20.5918 25.8425 20.8318 26.0825C21.0718 26.3225 21.3693 26.4425 21.7243 26.4425" fill="#A00505"/>
</svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#A00505] mb-6">هل أنت متأكد أنك تريد إلغاء هذا الحجز؟</h3>
            <p className="text-gray-500 text-xl mb-12">لن تتمكن من استرجاعه بعد الإلغاء.</p>
            <div className="flex gap-4">
              <button 
                onClick={() => setIsCancelModalOpen(false)} 
                className="flex-1 bg-[#468EEC] text-white py-4 rounded-xl font-bold text-xl shadow-lg hover:bg-blue-600 transition"
              >
                رجوع
              </button>
              <button 
                onClick={() => {
                  setIsCancelModalOpen(false);
                  setIsSuccessModalOpen(true);
                }} 
                className="flex-1 bg-white text-[#468EEC] border border-[#468EEC] py-4 rounded-xl font-bold text-xl hover:bg-blue-50 transition"
              >
                تأكيد الإلغاء
              </button>
            </div>
          </div>
        </div>
      )}

      {isSuccessModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999] p-4" dir="rtl">
          <div className="bg-white rounded-[2rem] p-12 max-w-sm w-full text-center shadow-2xl">
            <div className="w-20 h-20 bg-blue-50 border-2 border-[#468EEC] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-check text-[#468EEC] text-3xl"></i>
            </div>
            <h2 className="text-xl font-bold text-[#468EEC] mb-10">تم الإلغاء بنجاح</h2>
            <div className="flex flex-row gap-3">
              <button onClick={() => navigate('/Booking')} className="w-full bg-[#468EEC] text-white py-4 rounded-xl font-bold">حجز موعد جديد</button>
              <button onClick={() => navigate('/my-bookings')} className="w-full bg-white text-[#468EEC] border border-[#468EEC] py-4 rounded-xl font-bold">عرض حجوزاتي</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// الكومبوننت الفرعية تفضل كما هي بالأسفل
function PaymentRow({ label, value, isBlue }) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-gray-400 font-medium">{label}</span>
      <span className={`${isBlue ? 'text-[#468EEC]' : 'text-gray-700'} font-bold`}>{value}</span>
    </div>
  );
}

function ContactInfo({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-gray-600 mb-4 justify-start">
      <i className={`fa-solid ${icon} text-[#468EEC] w-5`}></i>
      <span className="font-medium text-sm">{text}</span>
    </div>
  );
}

function DateDetailBox({ icon, label, value, isStatus }) {
  const bgClass = isStatus ? 'bg-[#EAF9F1]' : 'bg-[#F1F7FF]';
  const textClass = isStatus ? 'text-[#22C55E]' : 'text-[#468EEC]';
  return (
    <div className={`${bgClass} p-6 rounded-[2rem] flex flex-col items-center justify-center shadow-sm`}>
      <div className={`flex items-center gap-2 mb-2 font-bold ${textClass}`}>
        <i className={`fa-solid ${icon}`}></i>
        <span className="text-xs">{label}</span>
      </div>
      <p className="text-gray-800 font-bold text-lg">{value}</p>
    </div>
  );
}

function PatientDataRow({ label, value }) {
  return (
    <div className="flex justify-between items-center py-1">
      <span className="text-gray-600 font-bold">{label}</span>
      <span className="text-[#468EEC] font-medium">{value}</span>
    </div>
  );
}