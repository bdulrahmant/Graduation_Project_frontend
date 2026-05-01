import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Star, 
  Calendar, 
  Clock, 
  FileText, 
  Upload, 
  Heart,
  Stethoscope,
  Baby,
  Activity,
  Pill,
  User
} from 'lucide-react';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DoctorCard from '../components/ui/DoctorCard';
import { Button } from "../components/ui/button";

// Mock Data
const specialties = [
  { id: 1, name: 'باطنة', icon: Stethoscope, color: 'bg-blue-100 text-blue-600', borderColor: 'border-blue-100', hoverBg: 'hover:bg-blue-100' },
  { id: 2, name: 'أطفال', icon: Baby, color: 'bg-green-100 text-green-600', borderColor: 'border-green-100', hoverBg: 'hover:bg-green-100' },
  { id: 3, name: 'جلدية', icon: Activity, color: 'bg-purple-100 text-purple-600', borderColor: 'border-purple-100', hoverBg: 'hover:bg-purple-100' },
  { id: 4, name: 'نساء وتوليد', icon: User, color: 'bg-pink-100 text-pink-600', borderColor: 'border-pink-100', hoverBg: 'hover:bg-pink-100' },
  { id: 5, name: 'قلب', icon: Heart, color: 'bg-red-100 text-red-600', borderColor: 'border-red-100', hoverBg: 'hover:bg-red-100' },
];

const doctors = [
  {
    id: 1,
    name: 'د. مالك محمد حماد',
    specialty: 'أخصائي عظام',
    rating: 4.9,
    reviews: 320,
    location: 'طنطا - أول شارع البحر',
    price: "150 جنيه",
    image: 'https://pixabay.com/get/ga0bafd8ef0d763f725fc1dc18cf78c295b0fe06ecfdc3cda51ed335795e5fbe0cab03da1edee05bc7c46d1f3966237691d8a01552b7cc48aaedaddba56a4a00d_1280.jpg'
  },
  {
    id: 2,
    name: 'د. سارة أحمد',
    specialty: 'أخصائي أطفال',
    rating: 4.8,
    reviews: 210,
    location: 'طنطا - شارع النحاس',
    price: "200 جنيه",
    image: 'https://pixabay.com/get/gaff981185fe71d9ce5538ce71f22eb137ba38c6c40ac6379eec02d634f555c4ef0fb7c4cc463259764a2c107bfa700ead21abf50cf487cc02f5f6d11f41d64bc_1280.jpg'
  },
  {
    id: 3,
    name: 'د. محمد علي',
    specialty: 'أخصائي باطنة',
    rating: 4.7,
    reviews: 150,
    location: 'طنطا - شارع سعيد',
    price: "120 جنيه",
    image: 'https://pixabay.com/get/gb4ef1041fc700807f769ab5f6dc0dcfa1fc5b07a87d1a1e4dfe035e50e9352159846714213fc0f45070beb08e518acfb9151a77fce75ffe90a6b34c81efb31f3_1280.jpg'
  }
];

const appointments = [
  {
    id: 1,
    doctor: 'د. مالك محمد حماد',
    title: 'أخصائي عظام',
    date: 'الأحد , 10 ديسمبر 2025',
    time: '10 صباحا',
    location: 'طنطا - أول شارع البحر',
    image: 'https://pixabay.com/get/ga0bafd8ef0d763f725fc1dc18cf78c295b0fe06ecfdc3cda51ed335795e5fbe0cab03da1edee05bc7c46d1f3966237691d8a01552b7cc48aaedaddba56a4a00d_1280.jpg'
  }
];

const medicalFiles = [
  { id: 1, name: 'تحاليل دم', date: 'ديسمبر 2025', icon: FileText, color: 'bg-red-50 text-red-500' },
  { id: 2, name: 'اشعة سينية', date: 'ديسمبر 2025', icon: Activity, color: 'bg-gray-50 text-gray-500' },
  { id: 3, name: 'روشتة طبية', date: 'ديسمبر 2025', icon: Pill, color: 'bg-blue-50 text-blue-500' },
  { id: 4, name: 'تقرير طبي', date: 'ديسمبر 2025', icon: FileText, color: 'bg-green-50 text-green-500' },
];

const articles = [
  {
    id: 1,
    title: 'نصائح للحفاظ على صحة القلب',
    excerpt: 'اكتشف أهم الطرق للحفاظ على صحة قلبك وتجنب الأمراض القلبية',
    image: 'https://pixabay.com/get/gdcbefd3b02105b780d6027caf9183840d38e941758789643ee861c6f3a05a745a5f46164c29978e4651d83ebb0afcc37075ca8877508e35c29d910da988abb2c_1280.png',
    time: 'منذ يومين'
  },
  {
    id: 2,
    title: 'التغذية السليمة للأطفال',
    excerpt: 'دليلك الشامل لتغذية طفلك بشكل صحي ومتوازن',
    image: 'https://pixabay.com/get/g190b1b71b798fa93c9343256ad3ca09dd53d07fa78f0123ebf3b38ac9d637e71b8d82a89d209f43a3ea4a878058b908f56a405949249f36143a97193ceab38e2_1280.jpg',
    time: 'منذ 3 ايام'
  },
  {
    id: 3,
    title: 'إدارة مرض السكري',
    excerpt: 'كيفية إدارة مرض السكري بطريقة صحيحة والحفاظ على مستوى السكر في الدم',
    image: 'https://pixabay.com/get/g902850296ef0fb1a045a4527f6de43e08118a3756678e02c2573fa5696b94be6e5c6892e65c2c28f81959ce2001a143d8c0a2b74501d6da83fbd258648ea30f3_1280.jpg',
    time: 'منذ 5 ايام'
  }
];

const PatientHome = () => {
  const navigate = useNavigate();

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 font-cairo">
      {/* Header */}
      <Navbar showAuthButtons={false} />

      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-2 flex justify-end">
          <button
            type="button"
            onClick={() => navigate("/edit-profile")}
            className="text-sm font-semibold text-[#468EEC] hover:underline"
          >
            تعديل الملف الشخصي
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#468EEC] to-[#2563EB] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="w-full md:w-1/2 text-center md:text-right mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-changa font-bold mb-4 leading-tight">
              رعاية صحية ذكية في <br /> متناول يدك
            </h2>
            <p className="text-blue-100 text-lg mb-8">ابحث عن طبيب أو تخصص</p>
            
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg max-w-md mx-auto md:mx-0 border border-white/20">
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  placeholder="البحث" 
                  className="w-full bg-transparent text-white placeholder-blue-200 px-4 py-3 outline-none"
                />
                <Search className="text-blue-200 ml-3" />
              </div>
            </div>
            
            <div className="mt-8 flex justify-center md:justify-start">
              <Button
                type="button"
                variant="secondary"
                className="px-8 font-bold border-none text-[#468EEC]"
                onClick={() => navigate("/chatbot")}
              >
                ابدأ التشخيص المبدئي
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <img 
                src="https://pixabay.com/get/g41df5f97c2a214ca590db4e94b98ad8e218759ab645a46fe57a217893c88fcb9ff4409beded6131512cc33e3e13e4dd7a3f4fe1eb0ef20d48c020d9812675e78_1280.png" 
                alt="Medical Robot" 
                className="w-full h-full object-contain drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
        
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-changa font-bold text-gray-800">التخصصات الشائعة</h3>
          <a href="#" className="text-[#468EEC] text-sm hover:underline font-semibold">عرض الكل</a>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {specialties.map((sp) => {
            const Icon = sp.icon;
            return (
              <button key={sp.id} className={`flex items-center gap-2 px-6 py-3 ${sp.color.split(' ')[0]} ${sp.color.split(' ')[1]} rounded-full border ${sp.borderColor} ${sp.hoverBg} transition-colors font-semibold`}>
                <Icon size={20} />
                <span>{sp.name}</span>
              </button>
            )
          })}
        </div>
      </section>

      {/* Suggested Doctors */}
      <section className="py-8 container mx-auto px-4 bg-[#F7FBFF] rounded-3xl mb-12">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-changa font-bold text-gray-800">أطباء مقترحون</h3>
          <a href="#" className="text-[#468EEC] text-sm hover:underline font-semibold">عرض الكل</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              name={doctor.name}
              specialty={doctor.specialty}
              rating={doctor.rating}
              reviews={doctor.reviews}
              location={doctor.location}
              price={doctor.price}
              image={doctor.image}
            />
          ))}
        </div>
      </section>

      {/* Upcoming Appointments */}
      <section className="py-12 container mx-auto px-4 mb-12">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-changa font-bold text-gray-800">مواعيدي القادمة</h3>
          <a href="#" className="text-[#468EEC] text-sm hover:underline font-semibold">عرض الكل</a>
        </div>
        
        {appointments.map((apt) => (
          <div key={apt.id} className="bg-[#0F4C81] text-white rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-lg mb-4">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex items-center gap-4">
                <img src={apt.image} alt={apt.doctor} className="w-16 h-16 rounded-full object-cover border-2 border-white/30" />
                <div>
                  <p className="text-blue-200 text-sm mb-1">{apt.title}</p>
                  <h4 className="text-xl font-bold mb-2 font-changa">{apt.doctor}</h4>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-blue-100">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span className="font-medium">{apt.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span className="font-medium">{apt.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-blue-100 mt-2">
                    <MapPin size={14} />
                    <span className="font-medium">{apt.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 w-full md:w-auto">
                <button className="flex-1 md:flex-none border border-transparent bg-white hover:bg-gray-100 text-[#0F4C81] font-bold rounded-lg px-6 py-2 transition-colors">
                  تعديل
                </button>
                <button className="flex-1 md:flex-none bg-red-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-600 transition-colors h-[52px]">
                  الغاء
                </button>
              </div>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute -right-10 -top-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>
          </div>
        ))}
      </section>

      {/* Medical Files */}
      <section className="py-8 container mx-auto px-4 mb-12">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-changa font-bold text-gray-800">الملفات الطبية</h3>
          <Button variant="primary" className="text-sm gap-2 h-auto py-2.5">
            <Upload size={16} />
            <span>رفع ملف جديد</span>
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {medicalFiles.map((file) => {
            const Icon = file.icon;
            return (
              <div key={file.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer">
                <div className={`w-16 h-16 rounded-2xl ${file.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={32} />
                </div>
                <h4 className="font-bold text-gray-800 mb-1">{file.name}</h4>
                <p className="text-gray-400 text-xs font-semibold">{file.date}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Articles */}
      <section className="py-12 container mx-auto px-4 mb-16">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-changa font-bold text-gray-800">المقالات</h3>
          <a href="#" className="text-[#468EEC] text-sm hover:underline font-semibold">عرض الكل</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
              <div className="h-48 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 line-clamp-1">{article.title}</h4>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">{article.excerpt}</p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <a href="#" className="text-[#468EEC] text-sm font-bold hover:underline">اقرأ المزيد</a>
                  <div className="flex items-center gap-1 text-gray-400 text-xs font-medium">
                    <Clock size={12} />
                    <span>{article.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PatientHome;