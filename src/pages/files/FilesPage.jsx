import { useState } from "react";
import { CloudUpload, FileText, Pill, Activity, Syringe, ArrowLeft } from "lucide-react";

import { Button } from "../../components/ui/button";
import Footer from "../../components/layout/Footer";

// Components
function FileCardIcon({ type }) {
  if (type === "report") return <FileText className="w-10 h-10 text-green-400 stroke-[#4ade80]" strokeWidth={1.5} />;
  if (type === "prescription") return <Pill className="w-10 h-10 text-blue-400 stroke-[#60a5fa]" strokeWidth={1.5} />;
  if (type === "xray") return <Activity className="w-10 h-10 text-gray-500 stroke-[#9ca3af]" strokeWidth={1.5} />;
  return <Syringe className="w-10 h-10 text-red-400 stroke-[#f87171]" strokeWidth={1.5} />;
}

// Data
const filesData = [
  { id: 1, title: "تحليل دم", date: "ديسمبر 2025", iconBg: "bg-red-50", icon: "lab", category: "تحاليل" },
  { id: 2, title: "اشعة صدر", date: "ديسمبر 2025", iconBg: "bg-gray-100", icon: "xray", category: "اشعة" },
  { id: 3, title: "روشتة طبية", date: "ديسمبر 2025", iconBg: "bg-blue-50", icon: "prescription", category: "تقارير" },
  { id: 4, title: "تقرير طبي", date: "ديسمبر 2025", iconBg: "bg-green-50", icon: "report", category: "تقارير" },
  { id: 5, title: "تحليل دم", date: "ديسمبر 2025", iconBg: "bg-red-50", icon: "lab", category: "تحاليل" },
  { id: 6, title: "اشعة صدر", date: "ديسمبر 2025", iconBg: "bg-gray-100", icon: "xray", category: "اشعة" },
];

const FILTERS = ["الكل", "تحاليل", "اشعة", "تقارير"];

function FileCard({ title, date, iconBg, icon }) {
  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl bg-white p-8 shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow">
      <div className={`w-full aspect-[2/1] flex items-center justify-center rounded-xl ${iconBg}`}>
        <FileCardIcon type={icon} />
      </div>

      <div className="text-center flex flex-col gap-1">
        <p className="font-bold text-[#121212] text-lg">{title}</p>
        <p className="text-xs font-semibold text-gray-500">{date}</p>
      </div>
    </div>
  );
}

// Main
export default function FilesPage() {
  const [activeFilter, setActiveFilter] = useState("الكل");

  const filteredFiles =
    activeFilter === "الكل"
      ? filesData
      : filesData.filter((f) => f.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#F7FBFF] font-cairo flex flex-col text-[#121212]" dir="rtl">
      
      {/* Header */}
      <div className="bg-white shadow-sm p-6 rounded-b-2xl flex justify-start items-center gap-3">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-start gap-3">
            <h1 className="text-2xl font-bold">ملفاتي الطبية</h1>
            <ArrowLeft className="w-6 h-6 text-[#468EEC] cursor-pointer" />
        </div>
      </div>

      <div className="p-8 max-w-6xl mx-auto w-full flex-1">

        {/* Filters */}
        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">

          <div className="flex gap-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2 rounded-lg border font-semibold transition-colors ${
                  activeFilter === f
                    ? "bg-[#468EEC] text-white border-[#468EEC]"
                    : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <Button variant="primary" className="bg-[#468EEC] hover:bg-[#3A7AD9] text-white px-6 py-3 rounded-lg shadow-sm">
            <CloudUpload className="w-5 h-5 ml-2" />
            رفع ملف جديد
          </Button>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFiles.map((file) => (
            <FileCard key={file.id} {...file} />
          ))}
        </div>

      </div>

      <Footer />
      
    </div>
  );
}