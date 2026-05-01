import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,#003B88_60%,#1DA1F2)] text-white pt-12 pb-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-right">
        
        {/* العمود 1 (الآن أصبح على اليمين): نبذة عن المنصة */}
        <div className="flex flex-col items-center md:items-start order-1">
         <img 
    src="\images\rafiq.png" 
    alt="رفيق"
    className="w-[180px] h-auto mb-0 object-contain" 
  />

  {/* النص مع إلغاء الهامش العلوي mt-0 أو استخدام قيمة سالبة -mt-2 إذا لزم الأمر */}
  <p className="text-sm text-white leading-relaxed text-right mt-1">
    منصة رفيق تسهل عليك حجز مواعيد الأطباء في أي وقت وبخطوات بسيطة. وبوت ذكي يساعدك تفهم أعراضك ويختار لك التخصص المناسب بسرعة.
  </p>
          <button className="bg-white text-[#468EEC] px-9 py-3 rounded-lg font-bold text-sm hover:bg-gray-100 mt-3">احجز الموعد</button>
        </div>

        {/* العمود 2 (الوسط): الروابط */}
        {/* العمود 2 (الوسط): الروابط */}
<div className="flex flex-col items-center order-2 md:pr-10 mt-5">
  <h4 className="font-bold text-lg mb-6 items-start text-center">الصفحات</h4>
  <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
    <ul className="space-y-2 text-right">
      <li><Link to="/" className="text-white hover:text-blue-500">الرئيسية</Link></li>
      <li><Link to="/" className="text-white hover:text-blue-500">رفيقك الصحي</Link></li>
      <li><Link to="/" className="text-white hover:text-blue-500">حجوزاتي</Link></li>
        <li><Link to="/" className="text-white hover:text-blue-500">التخصصات</Link></li>
    </ul>
    <ul className="space-y-2 text-right">
      <li><Link to="/" className="text-white hover:text-blue-500">تسجيل الدخول</Link></li>
        <li><Link to="/" className="text-white hover:text-blue-500"> الأسئلة الشائعة</Link></li>
      <li><Link to="/" className="text-white hover:text-blue-500">سياسة الخصوصية</Link></li>
      <li><Link to="/" className="text-white hover:text-blue-500">الشروط والأحكام</Link></li>
    </ul>
  </div>
</div>
        {/* العمود 3 (الآن أصبح على اليسار): تواصل معنا */}
        <div className="order-3 mt-9">
          <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>
          <div className="space-y-3 text-sm text-gray-300">
            <p><i className="fa-solid fa-location-dot w-5"></i> مصر - طنطا</p>
            <p><i className="fa-regular fa-envelope w-5"></i> support@rafiq.com</p>
            <p dir="ltr" className="text-right"><i className="fa-solid fa-phone w-5"></i> +20 100 000 0000</p>
          </div>
        </div>

      </div>
       <hr />
      <div className="border-t border-blue-800/50 pt-6 text-center text-sm text-white">
        &copy; 2026 منصة رفيق — جميع الحقوق محفوظة
      </div>
    </footer>
  );
}