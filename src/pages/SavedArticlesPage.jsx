// import { useEffect, useState } from "react";
// import { Bookmark, Clock, ArrowLeft } from "lucide-react";
// import Footer from "../components/layout/Footer";

// export default function SavedArticlesPage() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // 🔗 FETCH (جاهز للباك)
//   const fetchSavedArticles = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       // 🟡 استبدل ده بالـ API الحقيقي
//       // const res = await axios.get("/api/saved-articles");

//       // mock data مؤقت
//       const mockData = [
//         {
//           id: 1,
//           title: "التغذية السليمة للأطفال",
//           category: "تغذية",
//           categoryColor: "bg-teal-100 text-teal-700",
//           time: "منذ يومين",
//           image:
//             "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=120&h=100&fit=crop",
//         },
//         {
//           id: 2,
//           title: "إدارة مرض السكري",
//           category: "نصائح عامة",
//           categoryColor: "bg-blue-100 text-blue-700",
//           time: "منذ يومين",
//           image:
//             "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=120&h=100&fit=crop",
//         },
//       ];

//       setTimeout(() => {
//         setArticles(mockData);
//         setLoading(false);
//       }, 500);
//     } catch (err) {
//       setError("حدث خطأ أثناء تحميل المقالات");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchSavedArticles();
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col bg-background" dir="rtl">

//       {/* Header */}
//       <div className="w-full px-6 md:px-16 py-6 flex justify-end items-center max-w-[1200px] mx-auto">
//         <div className="flex items-center gap-2">
//           <ArrowLeft className="text-primary w-5 h-5 rotate-180" />
//           <h1 className="font-bold text-2xl md:text-3xl">
//             المقالات المحفوظة
//           </h1>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="flex-1 w-full bg-[#EEF4FC] px-6 md:px-16 py-6">
//         <div className="flex flex-col gap-4 max-w-[1200px] mx-auto">

//           {/* 🔄 Loading */}
//           {loading && (
//             <div className="text-center text-muted-foreground py-10">
//               جاري تحميل المقالات...
//             </div>
//           )}

//           {/* ❌ Error */}
//           {error && (
//             <div className="text-center text-red-500 py-10">
//               {error}
//             </div>
//           )}

//           {/* 📭 Empty */}
//           {!loading && !error && articles.length === 0 && (
//             <div className="text-center text-muted-foreground py-10">
//               لا توجد مقالات محفوظة
//             </div>
//           )}

//           {/* ✅ Data */}
//           {!loading &&
//             !error &&
//             articles.map((article) => (
//               <div
//                 key={article.id}
//                 className="w-full bg-white rounded-2xl shadow-sm flex items-center gap-4 px-4 py-3 hover:shadow-md transition"
//               >
//                 {/* Bookmark */}
//                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
//                   <Bookmark className="text-primary fill-primary w-5 h-5" />
//                 </div>

//                 {/* Text */}
//                 <div className="flex-1 flex flex-col items-end gap-1">
//                   <h3 className="font-bold text-base md:text-lg text-right">
//                     {article.title}
//                   </h3>

//                   <div className="flex items-center gap-2 flex-wrap justify-end">
//                     {/* Time */}
//                     <div className="flex items-center gap-1 text-muted-foreground">
//                       <span className="text-xs md:text-sm">
//                         {article.time}
//                       </span>
//                       <Clock className="w-4 h-4" />
//                     </div>

//                     {/* Category */}
//                     <span
//                       className={`px-3 py-0.5 rounded-md text-xs font-semibold ${article.categoryColor}`}
//                     >
//                       {article.category}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Image */}
//                 <div className="w-24 h-20 rounded-xl overflow-hidden">
//                   <img
//                     src={article.image}
//                     alt={article.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             ))}

//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { Bookmark, Clock, ArrowLeft } from "lucide-react";
import Footer from "../components/layout/Footer";

export default function SavedArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSavedArticles = async () => {
    const mockData = [
      {
        id: 1,
        title: "التغذية السليمة للأطفال",
        category: "تغذية",
        categoryColor: "bg-teal-100 text-teal-700",
        time: "منذ يومين",
        image:
          "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=120&h=100&fit=crop",
      },
      {
        id: 2,
        title: "إدارة مرض السكري",
        category: "نصائح عامة",
        categoryColor: "bg-blue-100 text-blue-700",
        time: "منذ يومين",
        image:
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=120&h=100&fit=crop",
      },
    ];

    setTimeout(() => {
      setArticles(mockData);
      setLoading(false);
    }, 400);
  };

  useEffect(() => {
    fetchSavedArticles();
  }, []);

  return (
    <div className="min-h-screen bg-[#F7FBFF] font-cairo flex flex-col text-[#121212]" dir="rtl">

      {/* Header (زي FilesPage بالظبط) */}
      <div className="bg-white shadow-sm p-6 rounded-b-2xl flex justify-start items-center gap-3">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-start gap-3">
          <h1 className="text-2xl font-bold">المقالات المحفوظة</h1>
          <ArrowLeft className="w-6 h-6 text-[#468EEC]" />
        </div>
      </div>

      {/* Content */}
      <div className="p-8 max-w-6xl mx-auto w-full flex-1 flex flex-col gap-4">

        {loading ? (
          <p className="text-center text-gray-500">جاري التحميل...</p>
        ) : (
          articles.map((article) => (
            <div
              key={article.id}
              className="w-full bg-white rounded-2xl shadow-sm flex items-center gap-4 px-4 py-3 hover:shadow-md transition"
            >

              {/* Image (يمين) */}
              <div className="w-24 h-20 rounded-xl overflow-hidden shrink-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex-1 flex flex-col items-end gap-1 text-right">
                <h3 className="font-bold text-base md:text-lg">
                  {article.title}
                </h3>

                <div className="flex items-center gap-2 flex-wrap justify-end">
                  
                  <span
                    className={`px-3 py-0.5 rounded-md text-xs font-semibold ${article.categoryColor}`}
                  >
                    {article.category}
                  </span>

                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs md:text-sm">
                      {article.time}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bookmark (شمال) */}
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <Bookmark className="text-[#468EEC] fill-[#468EEC] w-5 h-5" />
              </div>

            </div>
          ))
        )}

      </div>

      <Footer />
    </div>
  );
}