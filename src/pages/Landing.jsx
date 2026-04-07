import {
  Search,
  MapPin,
  Clock,
  Stethoscope,
  Baby,
  Heart,
  Eye,
  Activity,
  HandMetal,
  Users,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import DoctorCard from "../components/ui/DoctorCard";
import SpecialtyBadge from "../components/ui/SpecialtyBadge";
import FAQItem from "../components/ui/FAQItem";

export default function Landing() {

  const doctors = [
    {
      name: "د. مالك محمد حماد",
      specialty: "أخصائي عظام",
      rating: 4.9,
      reviews: 320,
      location: "طنطا – أول شارع البحر",
      price: "150 جنيه",
      image:
        "https://public.youware.com/users-website-assets/prod/27cf0caf-40be-4aee-acd2-8b0014590293/0f877ff68cac4a659b44acd77846748c.jpg",
    },
    {
      name: "د. مالك محمد حماد",
      specialty: "أخصائي عظام",
      rating: 4.9,
      reviews: 320,
      location: "طنطا – أول شارع البحر",
      price: "150 جنيه",
      image:
        "https://public.youware.com/users-website-assets/prod/27cf0caf-40be-4aee-acd2-8b0014590293/2cc4dff4d10c4f0288ed5a08e76394a5.jpg",
    },
    {
      name: "د. مالك محمد حماد",
      specialty: "أخصائي عظام",
      rating: 4.9,
      reviews: 320,
      location: "طنطا – أول شارع البحر",
      price: "150 جنيه",
      image:
        "https://public.youware.com/users-website-assets/prod/27cf0caf-40be-4aee-acd2-8b0014590293/bf3be8b1e25a401abea33ebb3ea0ff82.jpg",
    },
    {
      name: "د. مالك محمد حماد",
      specialty: "أخصائي عظام",
      rating: 4.9,
      reviews: 320,
      location: "طنطا – أول شارع البحر",
      price: "150 جنيه",
      image:
        "https://public.youware.com/users-website-assets/prod/27cf0caf-40be-4aee-acd2-8b0014590293/0f877ff68cac4a659b44acd77846748c.jpg",
    },
  ];

  const specialties = [
    { icon: <Activity />, label: "باطنة" },
    { icon: <Stethoscope />, label: "أسنان" },
    { icon: <Baby />, label: "أطفال" },
    { icon: <Heart />, label: "قلب" },
    { icon: <Users />, label: "أنف وأذن" },
    { icon: <Eye />, label: "رمد" },
    { icon: <Users />, label: "نساء وتوليد" },
    {
      icon: <HandMetal />,
      label: "جلدية",
      href:
        "https://www.figma.com/design/e8D4AKIrGCyGL3yDPdLru2/Untitled?node-id=40-10008&t=XrqsbZO6Bmz70g7q-4",
    },
  ];

  const faqs = [
    {
      question: "ما هي تكلفة استخدام منصة رفيق؟",
      answer:
        "الخدمة مجانية تمامًا للمستخدم، وقد تختلف أسعار الكشف حسب كل طبيب.",
    },
    {
      question: "هل يمكن تعديل أو إلغاء موعد الحجز؟",
      answer:
        "نعم، يمكنك تعديل أو إلغاء موعدك من خلال حسابك على المنصة.",
    },
    {
      question: "هل الأطباء موثوقون؟",
      answer:
        "جميع الأطباء على المنصة معتمدون ومرخصون من وزارة الصحة.",
    },
    {
      question: "كيف يحدد رفيق التخصص المناسب؟",
      answer:
        "من خلال الذكاء الاصطناعي المتقدم الذي يحلل أعراضك ويوجهك للتخصص المناسب.",
    },
    {
      question: "هل أحتاج لتثبيت تطبيق؟",
      answer:
        "لا، يمكنك استخدام المنصة مباشرة من خلال المتصفح.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7FBFF]">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">

        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#468EEC]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#1DA1F2]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="text-right space-y-8">
              <h1 className="font-changa text-7xl font-semibold text-[#468EEC] leading-tight">
                مرحبا بك في منصة رفيق
              </h1>

              <div className="space-y-6">
                <h2 className="font-changa text-5xl font-semibold text-[#121212]">
                  ابدأ رحلتك الصحية بسهولة
                </h2>
                <p className="text-xl font-cairo text-gray-600 leading-relaxed">
                  منصّة رفيق تسهّل عليك حجز مواعيد الأطباء في أي وقت وبخطوات بسيطة.
                  وبوت ذكي يساعدك تفهم أعراضك ويختار لك التخصص المناسب بسرعة.
                </p>
              </div>

              <div className="flex gap-10">
                <Button variant="primary" size="lg" className="px-12">
                  احجز الموعد
                </Button>
                <Button variant="outline" size="lg" className="px-12">
                  تصفح الاطباء
                </Button>
              </div>
            </div>

            <div className="relative h-[500px]">
              <img
                src="https://public.youware.com/users-website-assets/prod/27cf0caf-40be-4aee-acd2-8b0014590293/0f877ff68cac4a659b44acd77846748c.jpg"
                className="absolute right-0 top-0 w-64 h-64 object-cover rounded-full shadow-2xl z-10"
              />
              <img
                src="https://public.youware.com/users-website-assets/prod/27cf0caf-40be-4aee-acd2-8b0014590293/2cc4dff4d10c4f0288ed5a08e76394a5.jpg"
                className="absolute left-0 top-20 w-64 h-64 object-cover rounded-full shadow-2xl z-20"
              />
              <img
                src="https://public.youware.com/users-website-assets/prod/27cf0caf-40be-4aee-acd2-8b0014590293/bf3be8b1e25a401abea33ebb3ea0ff82.jpg"
                className="absolute right-20 bottom-0 w-72 h-72 object-cover rounded-full shadow-2xl z-30"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Popular Doctors */}
      <section className="py-20">
        <div className="container mx-auto px-4">

          <h2 className="text-6xl font-changa font-bold text-[#468EEC] text-center mb-16">
            الأطباء الأكثر شهرة
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} {...doctor} />
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" size="lg" className="px-16">
              عرض المزيد
            </Button>
          </div>

        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-20">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="font-changa text-6xl font-semibold text-[#468EEC] mb-4">
              احجز موعد مع طبيبك
            </h2>
            <p className="text-xl font-cairo text-gray-600">
              ابحث عن التخصص أو الطبيب وحدد الوقت المناسب لك
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

              <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl">
                <Stethoscope className="w-6 h-6 text-[#468EEC]" />
                <span className="font-cairo text-gray-600">التخصص</span>
              </div>

              <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl">
                <MapPin className="w-6 h-6 text-[#468EEC]" />
                <span className="font-cairo text-gray-600">المكان</span>
              </div>

              <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl">
                <Clock className="w-6 h-6 text-[#468EEC]" />
                <span className="font-cairo text-gray-600">الوقت</span>
              </div>

            </div>

            <Button variant="primary" size="lg" className="w-full">
              <Search className="w-5 h-5" />
              البحث
            </Button>

          </div>
        </div>
      </section>

      {/* Specialties */}
      <section id="specialties" className="py-20 bg-white">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="font-changa text-6xl font-semibold text-[#468EEC] mb-4">
              اختر التخصص الطبي
            </h2>
            <p className="text-xl font-cairo text-gray-600">
              اختر التخصص للوصول لأفضل الأطباء في مجالك
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {specialties.map((specialty, index) => (
              <SpecialtyBadge key={index} {...specialty} />
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="font-changa text-6xl font-semibold text-[#468EEC] mb-4">
              أسئلة شائعة
            </h2>
            <p className="text-xl font-cairo text-gray-600">
              إجابات لأهم الأسئلة التي قد تحتاج معرفتها قبل استخدام منصة رفيق.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
