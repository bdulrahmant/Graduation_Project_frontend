import React, { useState, useMemo } from 'react';
import DoctorCard from '../components/DoctorCard';

export default function Listing() {

  const doctorsData = [
    {
      id: 1,
      name: "د. مالك محمد حماد",
      specialty: "أخصائي عظام",
      rating: 4.9,
      reviews: 320,
      location: "طنطا",
      experience: "8 سنوات خبرة",
      price: 150,
      available: true,
      image: "images/doctor.jpg"
    },
    {
      id: 2,
      name: "د. أحمد علي",
      specialty: "أخصائي قلب",
      rating: 4.7,
      reviews: 210,
      location: "القاهرة",
      experience: "6 سنوات خبرة",
      price: 200,
      available: false,
      image: "images/doctor.jpg"
    },
    {
      id: 3,
      name: "د. سارة محمد",
      specialty: "أخصائي جلدية",
      rating: 4.8,
      reviews: 180,
      location: "الإسكندرية",
      experience: "5 سنوات خبرة",
      price: 120,
      available: true,
      image: "images/doctor.jpg"
    },
    {
      id: 4,
      name: "د. محمود حسن",
      specialty: "أخصائي مخ وأعصاب",
      rating: 4.6,
      reviews: 140,
      location: "المنصورة",
      experience: "7 سنوات خبرة",
      price: 180,
      available: true,
      image: "images/doctor.jpg"
    }
  ];

  const [visibleCount, setVisibleCount] = useState(2);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('nearest');

  // 🔍 + 🎯 فلترة + ترتيب
  const filteredDoctors = useMemo(() => {
    let result = [...doctorsData];

    // 🔍 search
    if (search.trim() !== '') {
      result = result.filter(doc =>
        doc.name.includes(search) ||
        doc.specialty.includes(search)
      );
    }

    // 🎯 filters
    if (filter === 'top') {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (filter === 'price') {
      result.sort((a, b) => a.price - b.price);
    }

    if (filter === 'available') {
      result = result.filter(doc => doc.available);
    }

    return result;
  }, [search, filter]);

  const showMore = () => {
    setVisibleCount(prev => prev + 2);
  };

  return (
    <div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <button
          onClick={() => setFilter('nearest')}
          className={`px-5 py-1.5 rounded-full text-sm font-medium ${
            filter === 'nearest'
              ? 'bg-blue-500 text-white'
              : 'bg-white border text-gray-600'
          }`}
        >
          الأقرب
        </button>

        <button
          onClick={() => setFilter('top')}
          className={`px-5 py-1.5 rounded-full text-sm font-medium ${
            filter === 'top'
              ? 'bg-blue-500 text-white'
              : 'bg-white border text-gray-600'
          }`}
        >
          الأعلى تقييما
        </button>

        <button
          onClick={() => setFilter('price')}
          className={`px-5 py-1.5 rounded-full text-sm font-medium ${
            filter === 'price'
              ? 'bg-blue-500 text-white'
              : 'bg-white border text-gray-600'
          }`}
        >
          السعر
        </button>

        <button
          onClick={() => setFilter('available')}
          className={`px-5 py-1.5 rounded-full text-sm font-medium ${
            filter === 'available'
              ? 'bg-blue-500 text-white'
              : 'bg-white border text-gray-600'
          }`}
        >
          المتاح اليوم
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <i className="fa-solid fa-magnifying-glass absolute right-4 top-3.5 text-blue-400"></i>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ابحث بـ اسم طبيب او تخصص"
          className="w-full bg-white border border-gray-200 rounded-xl py-3 pr-12 pl-4 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
        />
      </div>

      {/* Doctors */}
      <div className="flex flex-col gap-4">
        {filteredDoctors.slice(0, visibleCount).map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>

      {/* Load More */}
      {visibleCount < filteredDoctors.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={showMore}
            className="bg-white border border-blue-200 text-blue-500 px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition"
          >
            عرض المزيد من الأطباء
          </button>
        </div>
      )}

    </div>
  );
}