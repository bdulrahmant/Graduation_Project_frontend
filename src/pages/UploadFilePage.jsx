import { useState, useRef } from "react";
import { Button } from "../components/ui/button";
import { ChevronDown, ArrowRight, CloudUpload, Pencil } from "lucide-react";
import Footer from "../components/layout/Footer";

export default function UploadFilePage() {
  const [fileType, setFileType] = useState("");
  const [notes, setNotes] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const fileRef = useRef(null);

  const fileTypeOptions = ["تحاليل", "أشعة", "تقارير"];

  return (
    <div
      className="min-h-screen bg-[#F7FBFF] flex flex-col font-['Cairo']"
      dir="rtl"
    >
      {/* Header */}
      <header className="py-6">
        <div className="flex justify-start items-center max-w-[1200px] mx-auto px-4 md:px-16 w-full gap-3">
          <ArrowRight className="w-6 h-6 text-[#468EEC] cursor-pointer" />
          <span className="text-xl md:text-2xl font-bold text-[#121212]">
            رفع ملف طبي
          </span>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 md:px-16 py-8 md:py-12 max-w-[1200px] w-full mx-auto flex flex-col gap-8">
        
        {/* Card 1: Upload Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#E5E5E5] p-8 md:p-10">
          {/* Dropzone */}
          <div
            onClick={() => fileRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
            }}
            className={`w-full rounded-2xl border-2 border-dashed transition cursor-pointer ${
              isDragging
                ? "border-[#468EEC] bg-[#EEF5FD]"
                : "border-[#D9D9D9] bg-white hover:bg-[#F9FBFF]"
            } flex flex-col items-center justify-center gap-4 py-14`}
          >
            <input ref={fileRef} type="file" className="hidden" />

            <CloudUpload className="w-12 h-12 text-[#468EEC] mb-1" strokeWidth={1.5} />

            <p className="text-[#121212] font-semibold text-lg">
              رفع الملفات الطبية
            </p>

            <p className="text-sm text-[#7B7B7B]">
              حتى 10 ميجا | PNG, JPG, PDF
            </p>
          </div>
        </div>

        {/* Card 2: Form Options */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#E5E5E5] p-8 md:p-10 flex flex-col gap-8">
          {/* Select */}
          <div className="flex flex-col gap-3">
            <label className="text-right font-bold text-[#121212]">
              نوع الملف
            </label>

            <div className="relative">
              <select
                value={fileType}
                onChange={(e) => setFileType(e.target.value)}
                className="w-full appearance-none bg-white border border-[#C7C7C7] rounded-xl px-4 py-3.5 text-right text-[#5B5B5B] focus:outline-none focus:border-[#468EEC] cursor-pointer"
              >
                <option value="" disabled hidden>نوع الملف</option>
                {fileTypeOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7B7B7B] pointer-events-none" />
            </div>
          </div>

          {/* Notes */}
          <div className="flex flex-col gap-3 mt-4">
            <label className="flex items-center justify-start gap-2 text-right font-bold text-[#121212]">
              <span className="text-lg">ملاحظات</span>
              <Pencil className="w-5 h-5 text-[#468EEC]" strokeWidth={1.5} />
            </label>

            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="أدخل أي ملاحظات إضافية هنا"
              rows={4}
              dir="rtl"
              className="w-full border border-dashed border-[#468EEC] bg-[#FAFCFF] rounded-xl px-4 py-4 text-right text-[#468EEC] placeholder:text-[#468EEC]/70 focus:outline-none focus:ring-1 focus:ring-[#468EEC] resize-none"
            />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-2">
          <Button className="w-full max-w-[400px] bg-[#468EEC] hover:bg-[#3578d4] text-white rounded-xl py-6 font-bold text-lg">
            حفظ الملف
          </Button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}