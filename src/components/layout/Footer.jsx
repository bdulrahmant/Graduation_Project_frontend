import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "../ui/button";
import rafiqWhiteLogo from "../../assets/rafiq-white-logo.png";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,#003B88_45%,#1DA1F2_100%)] text-white">

      <div className="container mx-auto px-4 py-16">


        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">


          <div className="text-right">
            <h3 className="font-changa text-2xl font-semibold mb-6">
              تواصل معنا
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-end gap-3">
                <span>مصر – طنطا</span>
                <MapPin className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-end gap-3">
                <span>support@rafiq.com</span>
                <Mail className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-end gap-3">
                <span>+20 1221750614</span>
                <Phone className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="text-right">
            <h3 className="font-changa text-2xl font-semibold mb-6">
              الصفحات
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a href="#home" className="block hover:text-gray-200 transition">
                  الرئيسية
                </a>
                <a href="#rafiq" className="block hover:text-gray-200 transition">
                  رفيقك الصحي
                </a>
                <a href="#booking" className="block hover:text-gray-200 transition">
                  احجز موعد
                </a>
                <a href="#specialties" className="block hover:text-gray-200 transition">
                  التخصصات
                </a>
              </div>

              <div className="space-y-3">
                <a href="/login" className="block hover:text-gray-200 transition">
                  تسجيل الدخول
                </a>
                <a href="#faq" className="block hover:text-gray-200 transition">
                  الأسئلة الشائعة
                </a>
                <a href="#" className="block hover:text-gray-200 transition">
                  سياسة الخصوصية
                </a>
                <a href="#" className="block hover:text-gray-200 transition">
                  الشروط والأحكام
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end text-right space-y-6">

            <img
              src={rafiqWhiteLogo}
              alt="رفيق"
              className="w-[180px] object-contain"
            />

            <p className="text-sm leading-relaxed max-w-[400px]">
              منصّة رفيق تسهّل عليك حجز مواعيد الأطباء في أي وقت وبخطوات بسيطة،
              وبوت ذكي يساعدك تفهم أعراضك ويختار لك التخصص المناسب بسرعة.
            </p>

            <Button variant="secondary" className="w-full max-w-[300px]">
              احجز الموعد
            </Button>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm">
            © 2026 منصة رفيق — جميع الحقوق محفوظة
          </p>
        </div>

      </div>
    </footer>
  );
}