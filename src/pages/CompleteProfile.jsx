// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronDown, Upload, Check } from 'lucide-react';

// const CompleteProfile = () => {
//   const [chronicDiseases, setChronicDiseases] = useState({
//     heart: false,
//     none: false,
//     diabetes: false,
//     immunity: false,
//     pressure: false,
//     asthma: false,
//   });

//   const toggleDisease = (key) => {
//     setChronicDiseases(prev => ({ ...prev, [key]: !prev[key] }));
//   };

//   return (
//     <div className="min-h-screen flex flex-row font-['Cairo'] bg-[#F7FBFF]" dir="rtl">
//       {/* Right Side - Form Section */}
//       <div className="w-full lg:w-[60%] xl:w-[55%] flex flex-col items-center p-4 lg:p-10 overflow-y-auto">
//         <div className="w-full max-w-[608px] flex flex-col gap-8">

//             {/* Header */}
//             <div className="flex flex-col items-end gap-4 text-right">
//                 <h1 className="font-['Changa'] font-bold text-[40px] text-[#468EEC] leading-[1.1]">
//                     أكمل ملفك الشخصي
//                 </h1>
//                 <p className="font-['Cairo'] font-semibold text-[16px] text-[#5B5B5B] leading-[1.5]">
//                     ساعدنا نفهم حالتك الصحية بشكل أدق لتحسين دقة التوصيات الطبية
//                 </p>
//             </div>

//             {/* Card 1: Basic Info */}
//             <div className="bg-white rounded-[16px] shadow-[0px_6px_4px_rgba(0,0,0,0.25)] p-6 lg:p-9 flex flex-col gap-4">
//                 <h2 className="font-['Changa'] font-semibold text-[28px] text-[#5B5B5B] text-right">
//                     المعلومات الاساسية
//                 </h2>

//                 {/* Governorate */}
//                 <div className="flex flex-col gap-2 items-end">
//                     <label className="flex items-center gap-1 text-[18px] font-semibold text-black">
//                         المحافظة <span className="text-[#A00505]">*</span>
//                     </label>
//                     <div className="relative w-full">
//                         <select className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right appearance-none bg-white focus:outline-none focus:border-[#468EEC] text-[#9E9E9E]">
//                             <option>مثال: الغربية</option>
//                             <option>القاهرة</option>
//                             <option>الإسكندرية</option>
//                         </select>
//                         <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9E9E9E] pointer-events-none" size={20} />
//                     </div>
//                 </div>

//                 {/* Gender & Age */}
//                 <div className="flex flex-row gap-5 w-full">
//                     {/* Age */}
//                     <div className="flex flex-col gap-2 items-end flex-1">
//                         <label className="flex items-center gap-1 text-[18px] font-semibold text-black">
//                             العمر <span className="text-[#A00505]">*</span>
//                         </label>
//                         <input type="number" className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right focus:outline-none focus:border-[#468EEC]" />
//                     </div>
//                     {/* Gender */}
//                     <div className="flex flex-col gap-2 items-end flex-1">
//                         <label className="flex items-center gap-1 text-[18px] font-semibold text-black">
//                             النوع <span className="text-[#A00505]">*</span>
//                         </label>
//                         <div className="relative w-full">
//                             <select className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right appearance-none bg-white focus:outline-none focus:border-[#468EEC] text-[#9E9E9E]">
//                                 <option></option>
//                                 <option>ذكر</option>
//                                 <option>أنثى</option>
//                             </select>
//                             <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9E9E9E] pointer-events-none" size={20} />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Height & Weight */}
//                 <div className="flex flex-row gap-5 w-full">
//                     {/* Weight */}
//                     <div className="flex flex-col gap-2 items-end flex-1">
//                         <label className="flex items-center gap-1 text-[18px] font-semibold text-black">
//                             الوزن <span className="text-[#A00505]">*</span>
//                         </label>
//                         <div className="relative w-full">
//                             <input type="number" placeholder="KG" className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right placeholder-[#9E9E9E] focus:outline-none focus:border-[#468EEC]" />
//                         </div>
//                     </div>
//                     {/* Height */}
//                     <div className="flex flex-col gap-2 items-end flex-1">
//                         <label className="flex items-center gap-1 text-[18px] font-semibold text-black">
//                             الطول <span className="text-[#A00505]">*</span>
//                         </label>
//                         <div className="relative w-full">
//                             <input type="number" placeholder="CM" className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right placeholder-[#9E9E9E] focus:outline-none focus:border-[#468EEC]" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Card 2: Chronic Diseases */}
//             <div className="bg-white rounded-[16px] shadow-[0px_6px_4px_rgba(0,0,0,0.25)] p-6 lg:p-9 flex flex-col gap-6">
//                 <h2 className="font-['Changa'] font-semibold text-[28px] text-[#5B5B5B] text-right">
//                     الامراض المزمنة
//                 </h2>

//                 {/* Checkboxes Grid */}
//                 <div className="grid grid-cols-2 gap-y-5 gap-x-10">
//                     {/* Row 1 */}
//                     <div className="flex items-center justify-end gap-2 cursor-pointer" onClick={() => toggleDisease('none')}>
//                         <span className="text-[18px] font-semibold text-[#121212]">لا يوجد</span>
//                         <div className={`w-5 h-5 border border-[#C7C7C7] rounded flex items-center justify-center ${chronicDiseases.none ? 'bg-[#468EEC] border-[#468EEC]' : 'bg-white'}`}>
//                             {chronicDiseases.none && <Check size={14} color="white" />}
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-end gap-2 cursor-pointer" onClick={() => toggleDisease('heart')}>
//                         <span className="text-[18px] font-semibold text-[#121212]">قلب</span>
//                         <div className={`w-5 h-5 border border-[#C7C7C7] rounded flex items-center justify-center ${chronicDiseases.heart ? 'bg-[#468EEC] border-[#468EEC]' : 'bg-white'}`}>
//                             {chronicDiseases.heart && <Check size={14} color="white" />}
//                         </div>
//                     </div>

//                     {/* Row 2 */}
//                     <div className="flex items-center justify-end gap-2 cursor-pointer" onClick={() => toggleDisease('immunity')}>
//                         <span className="text-[18px] font-semibold text-[#121212]">مناعة</span>
//                         <div className={`w-5 h-5 border border-[#C7C7C7] rounded flex items-center justify-center ${chronicDiseases.immunity ? 'bg-[#468EEC] border-[#468EEC]' : 'bg-white'}`}>
//                             {chronicDiseases.immunity && <Check size={14} color="white" />}
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-end gap-2 cursor-pointer" onClick={() => toggleDisease('diabetes')}>
//                         <span className="text-[18px] font-semibold text-[#121212]">سكر</span>
//                         <div className={`w-5 h-5 border border-[#C7C7C7] rounded flex items-center justify-center ${chronicDiseases.diabetes ? 'bg-[#468EEC] border-[#468EEC]' : 'bg-white'}`}>
//                             {chronicDiseases.diabetes && <Check size={14} color="white" />}
//                         </div>
//                     </div>

//                     {/* Row 3 */}
//                     <div className="flex items-center justify-end gap-2 cursor-pointer" onClick={() => toggleDisease('asthma')}>
//                         <span className="text-[18px] font-semibold text-[#121212]">ربو</span>
//                         <div className={`w-5 h-5 border border-[#C7C7C7] rounded flex items-center justify-center ${chronicDiseases.asthma ? 'bg-[#468EEC] border-[#468EEC]' : 'bg-white'}`}>
//                             {chronicDiseases.asthma && <Check size={14} color="white" />}
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-end gap-2 cursor-pointer" onClick={() => toggleDisease('pressure')}>
//                         <span className="text-[18px] font-semibold text-[#121212]">ضغط</span>
//                         <div className={`w-5 h-5 border border-[#C7C7C7] rounded flex items-center justify-center ${chronicDiseases.pressure ? 'bg-[#468EEC] border-[#468EEC]' : 'bg-white'}`}>
//                             {chronicDiseases.pressure && <Check size={14} color="white" />}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Allergies */}
//                 <div className="flex flex-col gap-2 items-end mt-2">
//                     <label className="flex items-center gap-1 text-[18px] font-semibold text-black">
//                         الحساسية
//                     </label>
//                     <input type="text" placeholder="مثال: الفول السوداني" className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right placeholder-[#9E9E9E] focus:outline-none focus:border-[#468EEC]" />
//                 </div>

//                 {/* Blood Type */}
//                 <div className="flex flex-col gap-2 items-end">
//                     <label className="flex items-center gap-1 text-[18px] font-semibold text-black">
//                         فصيلة الدم
//                     </label>
//                     <div className="relative w-full">
//                         <select className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right appearance-none bg-white focus:outline-none focus:border-[#468EEC] text-[#9E9E9E]">
//                             <option>اختر فصيلة الدم</option>
//                             <option>A+</option>
//                             <option>A-</option>
//                             <option>B+</option>
//                             <option>B-</option>
//                             <option>O+</option>
//                             <option>O-</option>
//                             <option>AB+</option>
//                             <option>AB-</option>
//                         </select>
//                         <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9E9E9E] pointer-events-none" size={20} />
//                     </div>
//                 </div>
//             </div>

//             {/* Card 3: Tests & X-rays */}
//             <div className="bg-white rounded-[16px] shadow-[0px_6px_4px_rgba(0,0,0,0.25)] p-6 lg:p-9 flex flex-col gap-4">
//                 <h2 className="font-['Changa'] font-semibold text-[28px] text-[#5B5B5B] text-right">
//                     التحاليل والأشعة
//                 </h2>

//                 <div className="w-full border border-dashed border-[#C7C7C7] rounded-[16px] p-10 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
//                     <Upload size={40} className="text-[#468EEC]" />
//                     <p className="font-['Cairo'] font-semibold text-[20px] text-[#5B5B5B] text-center">
//                         اسحب الملف هنا أو اضغط للتحميل
//                     </p>
//                     <p className="font-['Cairo'] font-semibold text-[16px] text-[#9E9E9E] text-center">
//                         حتى 10 ميجا PNG , JPG , PDF
//                     </p>
//                 </div>
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-col items-center gap-4 mt-2 mb-10">
//                 <button className="w-[180px] h-[52px] bg-[#468EEC] text-white rounded-lg font-semibold text-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.15)] hover:bg-[#357bd8] transition-colors">
//                     استمرار
//                 </button>
//                 <button className="text-[#468EEC] font-semibold text-[16px] hover:underline">
//                     سأقوم بالإكمال لاحقًا
//                 </button>
//             </div>

//         </div>
//       </div>

//       {/* Left Side - Gradient & Image */}
//       <div className="hidden lg:flex flex-1 bg-gradient-to-b from-[#003B88] to-[#1DA1F2] relative items-center justify-center overflow-hidden">
//          <div className="absolute inset-0 opacity-20 bg-[url('/assets/pattern.png')]"></div>
//          <div className="flex flex-col items-center text-center z-10 px-10">
//              {/* Logo Placeholder */}
//              <div className="mb-8 w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                  <span className="text-white font-bold text-xl">LOGO</span>
//              </div>
//              <h2 className="font-['Changa'] font-semibold text-[40px] text-white mb-4 leading-tight">
//                  مرحباً بك في رحلة صحية آمنة
//              </h2>
//              <p className="font-['Cairo'] font-semibold text-[16px] text-[#DBEAFE] max-w-md leading-relaxed">
//                  نحن هنا لمساعدتك في الحصول على أفضل رعاية طبية
//              </p>
//          </div>
//       </div>
//     </div>
//   );
// };

// export default CompleteProfile;



// import { useRef, useState } from "react";
// import { ChevronDown, Upload, Check } from "lucide-react";
// import pattern from "../assets/pattern.png";

// const CompleteProfile = () => {
//   const fileInputRef = useRef(null);

//   const [selectedFile, setSelectedFile] = useState(null);

//   const [chronicDiseases, setChronicDiseases] = useState({
//     heart: false,
//     none: false,
//     diabetes: false,
//     immunity: false,
//     pressure: false,
//     asthma: false,
//   });

//   const toggleDisease = (key) => {
//     setChronicDiseases((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   const handleFileClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const maxSize = 10 * 1024 * 1024;

//     if (file.size > maxSize) {
//       alert("حجم الملف يجب ألا يتجاوز 10 ميجابايت");
//       e.target.value = "";
//       return;
//     }

//     setSelectedFile(file);
//   };

//   return (
//     <div className="min-h-screen flex flex-row font-cairo bg-[#F7FBFF]" dir="rtl">
//       {/* Right Side */}
//       <div className="w-full lg:w-[60%] xl:w-[55%] flex flex-col items-center p-4 lg:p-10 overflow-y-auto">
//         <div className="w-full max-w-[608px] flex flex-col gap-8">

//           {/* Header */}
//           <div className="flex flex-col items-end gap-4 text-right">
//             <h1 className="font-changa font-bold text-[40px] text-[#468EEC] leading-[1.1]">
//               أكمل ملفك الشخصي
//             </h1>
//             <p className="font-semibold text-[16px] text-[#5B5B5B]">
//               ساعدنا نفهم حالتك الصحية بشكل أدق لتحسين دقة التوصيات الطبية
//             </p>
//           </div>

//           {/* Card 1 */}
//           <div className="bg-white rounded-[16px] shadow-[0px_6px_4px_rgba(0,0,0,0.25)] p-6 lg:p-9 flex flex-col gap-4">
//             <h2 className="font-changa font-semibold text-[28px] text-[#5B5B5B] text-right">
//               المعلومات الاساسية
//             </h2>

//             <div className="flex flex-col gap-2 items-end">
//               <label className="text-[18px] font-semibold text-black">
//                 المحافظة <span className="text-[#A00505]">*</span>
//               </label>

//               <div className="relative w-full">
//                 <select className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right appearance-none bg-white focus:outline-none focus:border-[#468EEC] text-[#9E9E9E]">
//                   <option>مثال: الغربية</option>
//                   <option>القاهرة</option>
//                   <option>الإسكندرية</option>
//                 </select>
//                 <ChevronDown
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9E9E9E]"
//                   size={20}
//                 />
//               </div>
//             </div>

//             <div className="flex flex-row gap-5 w-full">
//               <div className="flex flex-col gap-2 items-end flex-1">
//                 <label className="text-[18px] font-semibold text-black">
//                   العمر <span className="text-[#A00505]">*</span>
//                 </label>
//                 <input
//                   type="number"
//                   className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right focus:outline-none focus:border-[#468EEC]"
//                 />
//               </div>

//               <div className="flex flex-col gap-2 items-end flex-1">
//                 <label className="text-[18px] font-semibold text-black">
//                   النوع <span className="text-[#A00505]">*</span>
//                 </label>

//                 <div className="relative w-full">
//                   <select className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right appearance-none bg-white focus:outline-none focus:border-[#468EEC] text-[#9E9E9E]">
//                     <option></option>
//                     <option>ذكر</option>
//                     <option>أنثى</option>
//                   </select>
//                   <ChevronDown
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9E9E9E]"
//                     size={20}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-row gap-5 w-full">
//               <div className="flex flex-col gap-2 items-end flex-1">
//                 <label className="text-[18px] font-semibold text-black">
//                   الوزن <span className="text-[#A00505]">*</span>
//                 </label>
//                 <input
//                   type="number"
//                   placeholder="KG"
//                   className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right focus:outline-none focus:border-[#468EEC]"
//                 />
//               </div>

//               <div className="flex flex-col gap-2 items-end flex-1">
//                 <label className="text-[18px] font-semibold text-black">
//                   الطول <span className="text-[#A00505]">*</span>
//                 </label>
//                 <input
//                   type="number"
//                   placeholder="CM"
//                   className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right focus:outline-none focus:border-[#468EEC]"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white rounded-[16px] shadow-[0px_6px_4px_rgba(0,0,0,0.25)] p-6 lg:p-9 flex flex-col gap-6">
//             <h2 className="font-changa font-semibold text-[28px] text-[#5B5B5B] text-right">
//               الامراض المزمنة
//             </h2>

//             <div className="grid grid-cols-2 gap-y-5 gap-x-10">
//               {[
//                 ["none", "لا يوجد"],
//                 ["heart", "قلب"],
//                 ["immunity", "مناعة"],
//                 ["diabetes", "سكر"],
//                 ["asthma", "ربو"],
//                 ["pressure", "ضغط"],
//               ].map(([key, label]) => (
//                 <div
//                   key={key}
//                   onClick={() => toggleDisease(key)}
//                   className="flex items-center justify-end gap-2 cursor-pointer"
//                 >
//                   <span className="text-[18px] font-semibold text-[#121212]">
//                     {label}
//                   </span>
//                   <div
//                     className={`w-5 h-5 border rounded flex items-center justify-center
//                     ${
//                       chronicDiseases[key]
//                         ? "bg-[#468EEC] border-[#468EEC]"
//                         : "bg-white border-[#C7C7C7]"
//                     }`}
//                   >
//                     {chronicDiseases[key] && (
//                       <Check size={14} color="white" />
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="flex flex-col gap-2 items-end">
//               <label className="text-[18px] font-semibold text-black">
//                 الحساسية
//               </label>
//               <input
//                 type="text"
//                 placeholder="مثال: الفول السوداني"
//                 className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right focus:outline-none focus:border-[#468EEC]"
//               />
//             </div>

//             <div className="flex flex-col gap-2 items-end">
//               <label className="text-[18px] font-semibold text-black">
//                 فصيلة الدم
//               </label>

//               <div className="relative w-full">
//                 <select className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right appearance-none bg-white focus:outline-none focus:border-[#468EEC] text-[#9E9E9E]">
//                   <option>اختر فصيلة الدم</option>
//                   <option>A+</option>
//                   <option>A-</option>
//                   <option>B+</option>
//                   <option>B-</option>
//                   <option>O+</option>
//                   <option>O-</option>
//                   <option>AB+</option>
//                   <option>AB-</option>
//                 </select>
//                 <ChevronDown
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9E9E9E]"
//                   size={20}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Card 3 – Upload */}
//           <div className="bg-white rounded-[16px] shadow-[0px_6px_4px_rgba(0,0,0,0.25)] p-6 lg:p-9 flex flex-col gap-4">
//             <h2 className="font-changa font-semibold text-[28px] text-[#5B5B5B] text-right">
//               التحاليل والأشعة
//             </h2>

//             <input
//               ref={fileInputRef}
//               type="file"
//               className="hidden"
//               accept="image/*,.pdf"
//               onChange={handleFileChange}
//             />

//             <div
//               onClick={handleFileClick}
//               className="w-full border border-dashed border-[#C7C7C7] rounded-[16px] p-10 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors"
//             >
//               <Upload size={40} className="text-[#468EEC]" />

//               <p className="font-semibold text-[20px] text-[#5B5B5B] text-center">
//                 اسحب الملف هنا أو اضغط للتحميل
//               </p>

//               <p className="font-semibold text-[16px] text-[#9E9E9E] text-center">
//                 حتى 10 ميجا PNG , JPG , PDF
//               </p>

//               {selectedFile && (
//                 <p className="text-sm text-[#468EEC] mt-2">
//                   تم اختيار: {selectedFile.name}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-col items-center gap-4 mt-2 mb-10">
//             <button className="w-[180px] h-[52px] bg-[#468EEC] text-white rounded-lg font-semibold shadow-md hover:bg-[#357bd8]">
//               استمرار
//             </button>

//             <button className="text-[#468EEC] font-semibold hover:underline">
//               سأقوم بالإكمال لاحقًا
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Left Side (معدل بالكامل) */}
//       <div className="hidden lg:flex flex-1 bg-gradient-to-b from-[#003B88] to-[#1DA1F2] items-center justify-center">
//         <div className="flex flex-col items-center text-center gap-10">

//           {/* نفس حجم صورة صفحة اللوجين */}
//           <div className="w-72 h-72 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
//             <img
//               src={pattern}
//               alt="character"
//               className="w-full h-full object-contain drop-shadow-[0_8px_4px_rgba(0,0,0,0.25)]"
//             />
//           </div>

//           <div>
//             <h2 className="font-changa font-semibold text-[40px] text-white mb-4 leading-tight">
//               مرحباً بك في رحلة صحية آمنة
//             </h2>

//             <p className="font-semibold text-[16px] text-[#DBEAFE] max-w-md leading-relaxed">
//               نحن هنا لمساعدتك في الحصول على أفضل رعاية طبية
//             </p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompleteProfile;



































import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Upload, Check } from "lucide-react";
import pattern from "../assets/pattern.png";

const CompleteProfile = () => {

  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);

  // ✅ form state
  const [formData, setFormData] = useState({
    governorate: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
  });

  const [chronicDiseases, setChronicDiseases] = useState({
    heart: false,
    none: false,
    diabetes: false,
    immunity: false,
    pressure: false,
    asthma: false,
  });


  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };


  const toggleDisease = (key) => {
    setChronicDiseases((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };


  const handleFileClick = () => {
    fileInputRef.current.click();
  };


  const handleFileChange = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const maxSize = 10 * 1024 * 1024;

    if (file.size > maxSize) {
      alert("حجم الملف يجب ألا يتجاوز 10 ميجابايت");
      e.target.value = "";
      return;
    }

    setSelectedFile(file);

  };


  // ✅ continue button with validation + save
  const handleContinue = () => {

    if (
      !formData.governorate ||
      !formData.age ||
      !formData.gender ||
      !formData.weight ||
      !formData.height
    ) {
      alert("من فضلك أكمل جميع البيانات المطلوبة");
      return;
    }

    const fullProfile = {
      ...formData,
      chronicDiseases,
      fileName: selectedFile?.name || null,
    };

    // save locally (temporary until backend)
    localStorage.setItem("patientProfile", JSON.stringify(fullProfile));

    navigate("/patient-home");

  };


  const handleCompleteLater = () => {
    navigate("/patient-home");
  };


  return (
    <div className="min-h-screen flex flex-row font-cairo bg-[#F7FBFF]" dir="rtl">

      {/* Right Side */}
      <div className="w-full lg:w-[60%] xl:w-[55%] flex flex-col items-center p-4 lg:p-10 overflow-y-auto">

        <div className="w-full max-w-[608px] flex flex-col gap-8">

          {/* Header */}
          <div className="flex flex-col items-end gap-4 text-right">
            <h1 className="font-changa font-bold text-[40px] text-[#468EEC] leading-[1.1]">
              أكمل ملفك الشخصي
            </h1>
            <p className="font-semibold text-[16px] text-[#5B5B5B]">
              ساعدنا نفهم حالتك الصحية بشكل أدق لتحسين دقة التوصيات الطبية
            </p>
          </div>

          {/* Card 1 */}
          <div className="bg-white rounded-[16px] shadow-[0px_6px_4px_rgba(0,0,0,0.25)] p-6 lg:p-9 flex flex-col gap-4">

            <h2 className="font-changa font-semibold text-[28px] text-[#5B5B5B] text-right">
              المعلومات الاساسية
            </h2>


            {/* Governorate */}
            <div className="flex flex-col gap-2 items-end">

              <label className="text-[18px] font-semibold text-black">
                المحافظة <span className="text-[#A00505]">*</span>
              </label>

              <div className="relative w-full">

                <select
                  value={formData.governorate}
                  onChange={(e) => handleChange("governorate", e.target.value)}
                  className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right appearance-none bg-white focus:outline-none focus:border-[#468EEC] text-[#9E9E9E]"
                >
                  <option value="">اختر المحافظة</option>
                  <option>الغربية</option>
                  <option>القاهرة</option>
                  <option>الإسكندرية</option>
                </select>

                <ChevronDown
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9E9E9E]"
                  size={20}
                />

              </div>

            </div>


            {/* Age + Gender */}
            <div className="flex flex-row gap-5 w-full">

              <div className="flex flex-col gap-2 items-end flex-1">

                <label className="text-[18px] font-semibold text-black">
                  العمر <span className="text-[#A00505]">*</span>
                </label>

                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleChange("age", e.target.value)}
                  className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right focus:outline-none focus:border-[#468EEC]"
                />

              </div>


              <div className="flex flex-col gap-2 items-end flex-1">

                <label className="text-[18px] font-semibold text-black">
                  النوع <span className="text-[#A00505]">*</span>
                </label>

                <div className="relative w-full">

                  <select
                    value={formData.gender}
                    onChange={(e) => handleChange("gender", e.target.value)}
                    className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right appearance-none bg-white focus:outline-none focus:border-[#468EEC]"
                  >
                    <option value="">اختر النوع</option>
                    <option>ذكر</option>
                    <option>أنثى</option>
                  </select>

                  <ChevronDown
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9E9E9E]"
                    size={20}
                  />

                </div>

              </div>

            </div>


            {/* Weight + Height */}
            <div className="flex flex-row gap-5 w-full">

              <input
                type="number"
                placeholder="الوزن KG"
                value={formData.weight}
                onChange={(e) => handleChange("weight", e.target.value)}
                className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right"
              />

              <input
                type="number"
                placeholder="الطول CM"
                value={formData.height}
                onChange={(e) => handleChange("height", e.target.value)}
                className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right"
              />

            </div>

          </div>


          {/* Diseases */}
          <div className="bg-white rounded-[16px] shadow p-6 flex flex-col gap-4">

            <h2 className="font-changa font-semibold text-[28px] text-right">
              الامراض المزمنة
            </h2>

            <div className="grid grid-cols-2 gap-y-5 gap-x-10">

              {Object.entries({
                none: "لا يوجد",
                heart: "قلب",
                immunity: "مناعة",
                diabetes: "سكر",
                asthma: "ربو",
                pressure: "ضغط",
              }).map(([key, label]) => (

                <div
                  key={key}
                  onClick={() => toggleDisease(key)}
                  className="flex items-center justify-end gap-2 cursor-pointer"
                >

                  <span className="text-[18px] font-semibold">
                    {label}
                  </span>

                  <div
                    className={`w-5 h-5 border rounded flex items-center justify-center
                    ${chronicDiseases[key]
                        ? "bg-[#468EEC] border-[#468EEC]"
                        : "bg-white border-[#C7C7C7]"
                      }`}
                  >
                    {chronicDiseases[key] && (
                      <Check size={14} color="white" />
                    )}
                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* Upload */}
          <div className="bg-white rounded-[16px] shadow p-6 flex flex-col gap-4">

            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />

            <div
              onClick={handleFileClick}
              className="border border-dashed rounded-[16px] p-10 cursor-pointer text-center"
            >
              <Upload className="mx-auto text-[#468EEC]" size={40} />
              {selectedFile && (
                <p className="text-[#468EEC] mt-2">
                  {selectedFile.name}
                </p>
              )}
            </div>

          </div>


          {/* Buttons */}
          <div className="flex flex-col items-center gap-4">

            <button
              onClick={handleContinue}
              className="w-[180px] h-[52px] bg-[#468EEC] text-white rounded-lg"
            >
              استمرار
            </button>

            <button
              onClick={handleCompleteLater}
              className="text-[#468EEC]"
            >
              سأقوم بالإكمال لاحقًا
            </button>

          </div>

        </div>

      </div>


      {/* Left Side */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-b from-[#003B88] to-[#1DA1F2] items-center justify-center">

        <img
          src={pattern}
          alt="pattern"
          className="w-[500px]"
        />

      </div>

    </div>
  );
};

export default CompleteProfile;