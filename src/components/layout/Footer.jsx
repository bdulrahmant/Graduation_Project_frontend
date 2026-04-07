import { MapPin, Mail, Phone } from "lucide-react";
import Button from "../ui/Button";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#003B88] to-[#1DA1F2] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">

          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex flex-col items-end">
              <img
                src="https://public.youware.com/image/ce79a3e5-0038-4f83-9cdf-c8bf85f5383a/2x1g20oyup.png"
                alt="منصة رفيق"
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-base font-cairo leading-relaxed text-right">
                منصّة رفيق تسهّل عليك حجز مواعيد الأطباء في أي وقت وبخطوات بسيطة.
                وبوت ذكي يساعدك تفهم أعراضك ويختار لك التخصص المناسب بسرعة.
              </p>
            </div>

            <Button variant="secondary" size="md" className="w-full">
              احجز الموعد
            </Button>
          </div>

          {/* Pages */}
          <div className="text-right">
            <h3 className="font-changa text-2xl font-semibold mb-6">
              الصفحات
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a className="block text-base font-cairo font-medium hover:text-gray-200 transition-colors" href="#">
                  الرئيسية
                </a>
                <a className="block text-base font-cairo font-medium hover:text-gray-200 transition-colors" href="#">
                  رفيقك الصحي
                </a>
                <a className="block text-base font-cairo font-medium hover:text-gray-200 transition-colors" href="#">
                  احجز موعد
                </a>
                <a className="block text-base font-cairo font-medium hover:text-gray-200 transition-colors" href="#">
                  التخصصات
                </a>
              </div>

              <div className="space-y-3">
                <a className="block text-base font-cairo font-medium hover:text-gray-200 transition-colors" href="#">
                  تسجيل الدخول
                </a>
                <a className="block text-base font-cairo font-medium hover:text-gray-200 transition-colors" href="#">
                  الأسئلة الشائعة
                </a>
                <a className="block text-base font-cairo font-medium hover:text-gray-200 transition-colors" href="#">
                  سياسة الخصوصية
                </a>
                <a className="block text-base font-cairo font-medium hover:text-gray-200 transition-colors" href="#">
                  الشروط والأحكام
                </a>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-right">
            <h3 className="font-changa text-2xl font-semibold mb-6">
              تواصل معنا
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-end gap-3">
                <span className="text-base font-cairo font-medium">
                  مصر – طنطا
                </span>
                <MapPin className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-end gap-3">
                <span className="text-base font-cairo font-medium">
                  support@rafiq.com
                </span>
                <Mail className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-end gap-3">
                <span className="text-base font-cairo font-medium">
                  +20 100 000 0000
                </span>
                <Phone className="w-5 h-5" />
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/20 mb-6"></div>

        <div className="text-center">
          <p className="text-base font-cairo">
            © 2026 منصة رفيق — جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
