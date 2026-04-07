// import { useRef, useState } from "react";
// import {
//   ChevronDown,
//   Upload,
//   User,
//   CreditCard,
//   Building,
//   MapPin,
//   Clock,
//   Plus,
// } from "lucide-react";

// import DoctorSignupSuccess from "./DoctorSignupSuccess";

// import balto from "../assets/balto.png";

// const DoctorCompleteProfile = () => {

//   const personalPhotoRef = useRef(null);
//   const certificatesRef = useRef(null);
//   const licenseRef = useRef(null);
//   const extraFilesRef = useRef(null);

//   const [photoName, setPhotoName] = useState("");
//   const [certName, setCertName] = useState("");
//   const [licenseName, setLicenseName] = useState("");
//   const [extraFiles, setExtraFiles] = useState([]);
  

//   const checkFile = (file) => {
//     const max = 10 * 1024 * 1024;
//     if (file.size > max) {
//       alert("حجم الملف يجب ألا يزيد عن 10 ميجا");
//       return false;
//     }
//     return true;
//   };

//   const handlePhoto = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     if (!checkFile(file)) return;
//     setPhotoName(file.name);
//   };

//   const handleCert = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     if (!checkFile(file)) return;
//     setCertName(file.name);
//   };

//   const handleLicense = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     if (!checkFile(file)) return;
//     setLicenseName(file.name);
//   };

//   const handleExtraFiles = (e) => {
//     const files = Array.from(e.target.files);
//     const valid = files.filter((f) => checkFile(f));
//     setExtraFiles((prev) => [...prev, ...valid]);
//   };

//   return (
//     <div className="min-h-screen flex flex-row font-cairo bg-[#F7FBFF]" dir="rtl">

//       {/* Right Side */}
//       <div className="w-full lg:w-[60%] xl:w-[55%] flex flex-col items-center p-4 lg:p-10 overflow-y-auto">
//         <div className="w-full max-w-[608px] flex flex-col gap-8">

//           {/* Header */}
//           <div className="flex flex-col items-end gap-4 text-right">
//             <h1 className="font-changa font-bold text-[40px] text-[#468EEC]">
//               أكمل ملفك الشخصي
//             </h1>
//             <p className="font-semibold text-[16px] text-[#5B5B5B]">
//               أدخل بياناتك المهنية والشخصية للانضمام إلى منصتنا
//             </p>
//           </div>

//           {/* ================= Card 1 ================= */}
//           <div className="bg-white rounded-[16px] shadow-[0px_6px_4px_rgba(0,0,0,0.25)] p-6 lg:p-9 flex flex-col gap-4">

//             <h2 className="font-changa font-semibold text-[28px] text-[#5B5B5B] text-right">
//               المعلومات المهنية
//             </h2>

//             <div className="flex flex-col gap-2 items-end">
//               <label className="text-[18px] font-semibold">
//                 التخصص <span className="text-[#A00505]">*</span>
//               </label>
//               <div className="relative w-full">
//                 <select className="w-full h-[48px] px-3 border rounded-lg appearance-none">
//                   <option>مثال: قلب</option>
//                   <option>أسنان</option>
//                   <option>عيون</option>
//                 </select>
//                 <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9E9E9E]" />
//               </div>
//             </div>

//             <div className="flex gap-5">

//               <div className="flex flex-col gap-2 items-end flex-1">
//                 <label className="text-[18px] font-semibold">
//                   العمر <span className="text-[#A00505]">*</span>
//                 </label>
//                 <input className="w-full h-[48px] px-3 border rounded-lg" />
//               </div>

//               <div className="flex flex-col gap-2 items-end flex-1">
//                 <label className="text-[18px] font-semibold">
//                   سنوات الخبرة <span className="text-[#A00505]">*</span>
//                 </label>
//                 <div className="relative w-full">
//                   <select className="w-full h-[48px] px-3 border rounded-lg appearance-none">
//                     <option></option>
//                     <option>1-3 سنوات</option>
//                     <option>3-5 سنوات</option>
//                     <option>5-10 سنوات</option>
//                     <option>+10 سنوات</option>
//                   </select>
//                   <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9E9E9E]" />
//                 </div>
//               </div>

//             </div>

//             <div className="flex flex-col gap-2 items-end">
//               <label className="text-[18px] font-semibold">
//                 رقم الترخيص الطبي <span className="text-[#A00505]">*</span>
//               </label>
//               <div className="relative w-full">
//                 <input className="w-full h-[48px] px-3 border rounded-lg pr-10" />
//                 <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C7C7C7]" />
//               </div>
//             </div>

//             <div className="flex flex-col gap-2 items-end">
//               <label className="text-[18px] font-semibold">
//                 المستشفى / العيادة <span className="text-[#A00505]">*</span>
//               </label>
//               <div className="relative w-full">
//                 <input className="w-full h-[48px] px-3 border rounded-lg pr-10" />
//                 <Building className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C7C7C7]" />
//               </div>
//             </div>

//             <div className="flex flex-col gap-2 items-end">
//               <label className="text-[18px] font-semibold">
//                 العنوان <span className="text-[#A00505]">*</span>
//               </label>
//               <div className="relative w-full">
//                 <input className="w-full h-[48px] px-3 border rounded-lg pr-10" />
//                 <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C7C7C7]" />
//               </div>
//             </div>

//             <div className="flex gap-5">

//               <div className="flex flex-col gap-2 items-end flex-1">
//                 <label className="text-[18px] font-semibold">الى</label>
//                 <div className="relative w-full">
//                   <input type="time" className="w-full h-[48px] px-3 border rounded-lg pr-10" />
//                   <Clock className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C7C7C7]" />
//                 </div>
//               </div>

//               <div className="flex flex-col gap-2 items-end flex-1">
//                 <label className="text-[18px] font-semibold">
//                   مواعيد العمل <span className="text-[#A00505]">*</span>
//                   <span className="text-sm text-[#5B5B5B] mr-2">من</span>
//                 </label>
//                 <div className="relative w-full">
//                   <input type="time" className="w-full h-[48px] px-3 border rounded-lg pr-10" />
//                   <Clock className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C7C7C7]" />
//                 </div>
//               </div>

//             </div>

//             <div className="flex flex-col gap-2 items-end">
//               <label className="text-[18px] font-semibold">
//                 سعر الكشف <span className="text-[#A00505]">*</span>
//               </label>
//               <input
//                 placeholder="مثال : 150 جنيه"
//                 className="w-full h-[48px] px-3 border rounded-lg"
//               />
//             </div>

//           </div>

//           {/* ================= Card 2 ================= */}
//           <div className="bg-white rounded-[16px] shadow-[0px_6px_4px_rgba(0,0,0,0.25)] p-6 lg:p-9 flex flex-col gap-6">

//             <h2 className="font-changa font-semibold text-[28px] text-[#5B5B5B] text-right">
//               الصورة الشخصية
//             </h2>

//             <input
//               ref={personalPhotoRef}
//               type="file"
//               accept="image/*"
//               hidden
//               onChange={handlePhoto}
//             />

//             <div className="flex justify-end items-center gap-6">

//               <div className="flex flex-col items-end gap-2">
//                 <button
//                   type="button"
//                   onClick={() => personalPhotoRef.current.click()}
//                   className="bg-[#F5F5F5] text-[#468EEC] px-5 py-2 rounded-lg font-semibold"
//                 >
//                   رفع صورة شخصية مهنية
//                 </button>

//                 {photoName && (
//                   <span className="text-sm text-[#468EEC]">{photoName}</span>
//                 )}

//                 <p className="text-[#5B5B5B] font-semibold text-[16px]">
//                   الصورة تساعد المرضى على التعرف عليك
//                 </p>
//               </div>

//               <div className="w-24 h-24 bg-[#DBEAFE] rounded-full flex items-center justify-center">
//                 <User className="text-[#468EEC]" size={40} />
//               </div>

//             </div>

//             <div className="flex flex-col gap-2 items-end">
//               <label className="text-[18px] font-semibold">
//                 أضف نبذة عنك
//               </label>
//               <textarea
//                 className="w-full h-[176px] p-3 border rounded-[16px] resize-none"
//                 placeholder="عرّف بنفسك هنا كطبيب..."
//               />
//             </div>

//           </div>

//           {/* ================= Card 3 ================= */}
//           <div className="bg-white rounded-[16px] shadow-[0px_6px_4px_rgba(0,0,0,0.25)] p-6 lg:p-9 flex flex-col gap-6">

//             <h2 className="font-changa font-semibold text-[28px] text-[#5B5B5B] text-right">
//               لتوثيق الحساب
//             </h2>

//             <p className="text-[#5B5B5B] font-semibold text-[16px] text-right">
//               رفع الشهادات يساعد المرضى على الوثوق بملفك المهني
//             </p>

//             <input
//               ref={certificatesRef}
//               type="file"
//               accept="image/*,.pdf"
//               hidden
//               onChange={handleCert}
//             />

//             <input
//               ref={licenseRef}
//               type="file"
//               accept="image/*,.pdf"
//               hidden
//               onChange={handleLicense}
//             />

//             <input
//               ref={extraFilesRef}
//               type="file"
//               accept="image/*,.pdf"
//               hidden
//               multiple
//               onChange={handleExtraFiles}
//             />

//             <div className="flex gap-8">

//               <div
//                 onClick={() => certificatesRef.current.click()}
//                 className="flex-1 border border-dashed rounded-[16px] p-6 flex flex-col items-center justify-center gap-3 cursor-pointer"
//               >
//                 <Upload className="text-[#468EEC]" />
//                 <p className="font-semibold">رفع الشهادات الطبية</p>
//                 {certName && (
//                   <span className="text-sm text-[#468EEC]">{certName}</span>
//                 )}
//               </div>

//               <div
//                 onClick={() => licenseRef.current.click()}
//                 className="flex-1 border border-dashed rounded-[16px] p-6 flex flex-col items-center justify-center gap-3 cursor-pointer"
//               >
//                 <CreditCard className="text-[#468EEC]" />
//                 <p className="font-semibold">رفع بطاقة الترخيص</p>
//                 {licenseName && (
//                   <span className="text-sm text-[#468EEC]">{licenseName}</span>
//                 )}
//               </div>

//             </div>

//             <div className="flex gap-4 justify-end">
//               {[1, 2, 3, 4].map((i) => (
//                 <div
//                   key={i}
//                   onClick={() => extraFilesRef.current.click()}
//                   className="w-[84px] h-[84px] bg-[#DBEAFE] rounded-[16px] flex items-center justify-center cursor-pointer hover:bg-[#cce0fd]"
//                 >
//                   <Plus className="text-[#468EEC]" size={32} />
//                 </div>
//               ))}
//             </div>

//             {extraFiles.length > 0 && (
//               <div className="text-right text-sm text-[#468EEC]">
//                 {extraFiles.map((f, i) => (
//                   <div key={i}>{f.name}</div>
//                 ))}
//               </div>
//             )}

//           </div>

//           <div className="flex flex-col items-center gap-4 mb-10">
//             <button className="w-[180px] h-[52px] bg-[#468EEC] text-white rounded-lg font-semibold">
//               حفظ وإكمال
//             </button>

//             <button className="text-[#468EEC] font-semibold hover:underline">
//               سأقوم بالإكمال لاحقًا
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Left side */}
//       <div className="hidden lg:flex flex-1 bg-gradient-to-b from-[#003B88] to-[#1DA1F2] items-center justify-center">

//         <div className="flex flex-col items-center text-center px-10">

//           {/* نفس حجم صورة صفحة تكملة حساب المستخدم */}
//           <div className="mb-8 w-72 h-72 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
//             <img
//               src={balto}
//               alt="balto"
//               className="w-full h-full object-contain"
//             />
//           </div>

//           <h2 className="font-changa font-semibold text-[40px] text-white mb-4">
//             انضم إلى منصتنا الطبية
//           </h2>

//           <p className="font-semibold text-[16px] text-[#DBEAFE] max-w-md">
//             ابدأ رحلتك معنا وقدم خدمات طبية متميزة لآلاف المرضى
//           </p>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default DoctorCompleteProfile;

import { useRef, useState } from "react";
import {
  ChevronDown,
  Upload,
  User,
  CreditCard,
  Building,
  MapPin,
  Clock,
  Plus,
} from "lucide-react";

import DoctorSignupSuccess from "../components/ui/DoctorSignupSuccess";
import DoctorIncompleteWarning from "../components/ui/DoctorIncompleteWarning";
import balto from "../assets/balto.png";

const CompleteDoctorProfile = () => {
  const personalPhotoRef = useRef(null);
  const certificatesRef = useRef(null);
  const licenseRef = useRef(null);
  const extraFilesRef = useRef(null);

  // files
  const [photoFile, setPhotoFile] = useState(null);
  const [certFile, setCertFile] = useState(null);
  const [licenseFile, setLicenseFile] = useState(null);
  const [extraFiles, setExtraFiles] = useState([]);

  const [showSuccess, setShowSuccess] = useState(false);
  const [showIncomplete, setShowIncomplete] = useState(false);

  const [form, setForm] = useState({
    specialty: "",
    age: "",
    experience: "",
    licenseNumber: "",
    hospital: "",
    address: "",
    workFrom: "",
    price: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const checkFile = (file) => {
    const max = 10 * 1024 * 1024;
    if (file.size > max) {
      alert("حجم الملف يجب ألا يزيد عن 10 ميجا");
      return false;
    }
    return true;
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!checkFile(file)) return;
    setPhotoFile(file);
  };

  const handleCert = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!checkFile(file)) return;
    setCertFile(file);
  };

  const handleLicense = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!checkFile(file)) return;
    setLicenseFile(file);
  };

  const handleExtraFiles = (e) => {
    const files = Array.from(e.target.files);
    const valid = files.filter((f) => checkFile(f));
    setExtraFiles((prev) => [...prev, ...valid]);
  };

  const validateForm = () => {
    if (
      !form.specialty ||
      !form.age ||
      !form.experience ||
      !form.licenseNumber ||
      !form.hospital ||
      !form.address ||
      !form.workFrom ||
      !form.price
    ) {
      return false;
    }

    if (!photoFile) return false;
    if (!certFile) return false;
    if (!licenseFile) return false;

    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      setShowIncomplete(true);
      return;
    }

    const formData = new FormData();

    formData.append("specialty", form.specialty);
    formData.append("age", form.age);
    formData.append("experience", form.experience);
    formData.append("licenseNumber", form.licenseNumber);
    formData.append("hospital", form.hospital);
    formData.append("address", form.address);
    formData.append("workFrom", form.workFrom);
    formData.append("price", form.price);
    formData.append("bio", form.bio);

    formData.append("photo", photoFile);
    formData.append("certificate", certFile);
    formData.append("license", licenseFile);

    extraFiles.forEach((file) => {
      formData.append("extraFiles", file);
    });

    // جاهز للربط مع الباك اند
    // await api.completeDoctorProfile(formData);

    console.log("FormData ready");

    setShowSuccess(true);
  };

  return (
    <>
      <div
        className="min-h-screen flex flex-row font-cairo bg-[#F7FBFF]"
        dir="rtl"
      >
        {/* Right Side */}
        <div className="w-full lg:w-[60%] xl:w-[55%] flex flex-col items-center p-4 lg:p-10 overflow-y-auto">
          <div className="w-full max-w-[608px] flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col items-end gap-4 text-right">
              <h1 className="font-changa font-bold text-[40px] text-[#468EEC]">
                أكمل ملفك الشخصي
              </h1>
              <p className="font-semibold text-[16px] text-[#5B5B5B]">
                أدخل بياناتك المهنية والشخصية للانضمام إلى منصتنا
              </p>
            </div>

            {/* ================= Card 1 ================= */}
            <div className="bg-white rounded-[16px] shadow-[0px_6px_4px_rgba(0,0,0,0.25)] p-6 lg:p-9 flex flex-col gap-4">
              <h2 className="font-changa font-semibold text-[28px] text-[#5B5B5B] text-right">
                المعلومات المهنية
              </h2>

              <div className="flex flex-col gap-2 items-end">
                <label className="text-[18px] font-semibold">
                  التخصص <span className="text-[#A00505]">*</span>
                </label>
                <div className="relative w-full">
                  <select
                    name="specialty"
                    value={form.specialty}
                    onChange={handleChange}
                    className="w-full h-[48px] px-3 border rounded-lg appearance-none"
                  >
                    <option value="">اختر التخصص</option>
                    <option value="قلب">قلب</option>
                    <option value="أسنان">أسنان</option>
                    <option value="عيون">عيون</option>
                  </select>
                  <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9E9E9E]" />
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex flex-col gap-2 items-end flex-1">
                  <label className="text-[18px] font-semibold">
                    العمر <span className="text-[#A00505]">*</span>
                  </label>
                  <input
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    className="w-full h-[48px] px-3 border rounded-lg"
                  />
                </div>

                <div className="flex flex-col gap-2 items-end flex-1">
                  <label className="text-[18px] font-semibold">
                    سنوات الخبرة <span className="text-[#A00505]">*</span>
                  </label>
                  <div className="relative w-full">
                    <select
                      name="experience"
                      value={form.experience}
                      onChange={handleChange}
                      className="w-full h-[48px] px-3 border rounded-lg appearance-none"
                    >
                      <option value="">اختر</option>
                      <option value="1-3">1-3 سنوات</option>
                      <option value="3-5">3-5 سنوات</option>
                      <option value="5-10">5-10 سنوات</option>
                      <option value="+10">+10 سنوات</option>
                    </select>
                    <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9E9E9E]" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 items-end">
                <label className="text-[18px] font-semibold">
                  رقم الترخيص الطبي <span className="text-[#A00505]">*</span>
                </label>
                <div className="relative w-full">
                  <input
                    name="licenseNumber"
                    value={form.licenseNumber}
                    onChange={handleChange}
                    className="w-full h-[48px] px-3 border rounded-lg pr-10"
                  />
                  <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C7C7C7]" />
                </div>
              </div>

              <div className="flex flex-col gap-2 items-end">
                <label className="text-[18px] font-semibold">
                  المستشفى / العيادة <span className="text-[#A00505]">*</span>
                </label>
                <div className="relative w-full">
                  <input
                    name="hospital"
                    value={form.hospital}
                    onChange={handleChange}
                    className="w-full h-[48px] px-3 border rounded-lg pr-10"
                  />
                  <Building className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C7C7C7]" />
                </div>
              </div>

              <div className="flex flex-col gap-2 items-end">
                <label className="text-[18px] font-semibold">
                  العنوان <span className="text-[#A00505]">*</span>
                </label>
                <div className="relative w-full">
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className="w-full h-[48px] px-3 border rounded-lg pr-10"
                  />
                  <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C7C7C7]" />
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex flex-col gap-2 items-end flex-1">
                  <label className="text-[18px] font-semibold">الى</label>
                  <div className="relative w-full">
                    <input
                      type="time"
                      className="w-full h-[48px] px-3 border rounded-lg pr-10"
                    />
                    <Clock className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C7C7C7]" />
                  </div>
                </div>

                <div className="flex flex-col gap-2 items-end flex-1">
                  <label className="text-[18px] font-semibold">
                    مواعيد العمل <span className="text-[#A00505]">*</span>
                    <span className="text-sm text-[#5B5B5B] mr-2">من</span>
                  </label>
                  <div className="relative w-full">
                    <input
                      type="time"
                      name="workFrom"
                      value={form.workFrom}
                      onChange={handleChange}
                      className="w-full h-[48px] px-3 border rounded-lg pr-10"
                    />
                    <Clock className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C7C7C7]" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 items-end">
                <label className="text-[18px] font-semibold">
                  سعر الكشف <span className="text-[#A00505]">*</span>
                </label>
                <input
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="مثال : 150 جنيه"
                  className="w-full h-[48px] px-3 border rounded-lg"
                />
              </div>
            </div>

            {/* ================= Card 2 ================= */}
            <div className="bg-white rounded-[16px] shadow-[0px_6px_4px_rgba(0,0,0,0.25)] p-6 lg:p-9 flex flex-col gap-6">
              <h2 className="font-changa font-semibold text-[28px] text-[#5B5B5B] text-right">
                الصورة الشخصية
              </h2>

              <input
                ref={personalPhotoRef}
                type="file"
                accept="image/*"
                hidden
                onChange={handlePhoto}
              />

              <div className="flex justify-end items-center gap-6">
                <div className="flex flex-col items-end gap-2">
                  <button
                    type="button"
                    onClick={() => personalPhotoRef.current.click()}
                    className="bg-[#F5F5F5] text-[#468EEC] px-5 py-2 rounded-lg font-semibold"
                  >
                    رفع صورة شخصية مهنية
                  </button>

                  {photoFile && (
                    <span className="text-sm text-[#468EEC]">
                      {photoFile.name}
                    </span>
                  )}

                  <p className="text-[#5B5B5B] font-semibold text-[16px]">
                    الصورة تساعد المرضى على التعرف عليك
                  </p>
                </div>

                <div className="w-24 h-24 bg-[#DBEAFE] rounded-full flex items-center justify-center">
                  <User className="text-[#468EEC]" size={40} />
                </div>
              </div>

              <div className="flex flex-col gap-2 items-end">
                <label className="text-[18px] font-semibold">
                  أضف نبذة عنك
                </label>
                <textarea
                  name="bio"
                  value={form.bio}
                  onChange={handleChange}
                  className="w-full h-[176px] p-3 border rounded-[16px] resize-none"
                  placeholder="عرّف بنفسك هنا كطبيب..."
                />
              </div>
            </div>

            {/* ================= Card 3 ================= */}
            <div className="bg-white rounded-[16px] shadow-[0px_6px_4px_rgba(0,0,0,0.25)] p-6 lg:p-9 flex flex-col gap-6">
              <h2 className="font-changa font-semibold text-[28px] text-[#5B5B5B] text-right">
                لتوثيق الحساب
              </h2>

              <p className="text-[#5B5B5B] font-semibold text-[16px] text-right">
                رفع الشهادات يساعد المرضى على الوثوق بملفك المهني
              </p>

              <input
                ref={certificatesRef}
                type="file"
                accept="image/*,.pdf"
                hidden
                onChange={handleCert}
              />

              <input
                ref={licenseRef}
                type="file"
                accept="image/*,.pdf"
                hidden
                onChange={handleLicense}
              />

              <input
                ref={extraFilesRef}
                type="file"
                accept="image/*,.pdf"
                hidden
                multiple
                onChange={handleExtraFiles}
              />

              <div className="flex gap-8">
                <div
                  onClick={() => certificatesRef.current.click()}
                  className="flex-1 border border-dashed rounded-[16px] p-6 flex flex-col items-center justify-center gap-3 cursor-pointer"
                >
                  <Upload className="text-[#468EEC]" />
                  <p className="font-semibold">رفع الشهادات الطبية</p>
                  {certFile && (
                    <span className="text-sm text-[#468EEC]">
                      {certFile.name}
                    </span>
                  )}
                </div>

                <div
                  onClick={() => licenseRef.current.click()}
                  className="flex-1 border border-dashed rounded-[16px] p-6 flex flex-col items-center justify-center gap-3 cursor-pointer"
                >
                  <CreditCard className="text-[#468EEC]" />
                  <p className="font-semibold">رفع بطاقة الترخيص</p>
                  {licenseFile && (
                    <span className="text-sm text-[#468EEC]">
                      {licenseFile.name}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-4 justify-end">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    onClick={() => extraFilesRef.current.click()}
                    className="w-[84px] h-[84px] bg-[#DBEAFE] rounded-[16px] flex items-center justify-center cursor-pointer hover:bg-[#cce0fd]"
                  >
                    <Plus className="text-[#468EEC]" size={32} />
                  </div>
                ))}
              </div>

              {extraFiles.length > 0 && (
                <div className="text-right text-sm text-[#468EEC]">
                  {extraFiles.map((f, i) => (
                    <div key={i}>{f.name}</div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col items-center gap-4 mb-10">
              <button
                onClick={handleSubmit}
                className="w-[180px] h-[52px] bg-[#468EEC] text-white rounded-lg font-semibold"
              >
                حفظ وإكمال
              </button>

              <button
                onClick={() => setShowIncomplete(true)}
                className="text-[#468EEC] font-semibold hover:underline"
              >
                سأقوم بالإكمال لاحقًا
              </button>
            </div>
          </div>
        </div>

        {/* Left side */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-b from-[#003B88] to-[#1DA1F2] items-center justify-center">
          <div className="flex flex-col items-center text-center px-10">
            <div className="mb-8 w-72 h-72 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
              <img
                src={balto}
                alt="balto"
                className="w-full h-full object-contain"
              />
            </div>

            <h2 className="font-changa font-semibold text-[40px] text-white mb-4">
              انضم إلى منصتنا الطبية
            </h2>

            <p className="font-semibold text-[16px] text-[#DBEAFE] max-w-md">
              ابدأ رحلتك معنا وقدم خدمات طبية متميزة لآلاف المرضى
            </p>
          </div>
        </div>
      </div>

      {showSuccess && (
        <DoctorSignupSuccess onClose={() => setShowSuccess(false)} />
      )}

      {showIncomplete && (
        <DoctorIncompleteWarning
          onClose={() => setShowIncomplete(false)}
          onGoUpload={() => setShowIncomplete(false)}
        />
      )}
    </>
  );
};

export default CompleteDoctorProfile;

