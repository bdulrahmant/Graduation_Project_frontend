// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react";

// import pattern from "../assets/pattern.png";

// export default function UserSignup() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   return (
//     <div
//       className="min-h-screen flex flex-row font-cairo bg-[#F7FBFF]"
//       dir="rtl"
//     >
//       {/* Right Side - Form Section */}
//       <div className="w-full lg:w-[50%] xl:w-[45%] flex flex-col justify-center items-center p-4 lg:p-10 relative z-10">
//         <div className="w-full max-w-[503px] flex flex-col gap-3">

//           {/* Header */}
//           <div className="text-right mb-4">
//             <h1 className="font-changa font-bold text-[40px] text-[#468EEC] leading-[1.1]">
//               أهلاً بك! لنبدأ رحلتك معنا
//             </h1>
//             <p className="font-changa font-semibold text-[32px] text-[#5B5B5B] leading-[1.2] mt-2">
//               أنشئ حسابك بسهولة وابدأ الاستخدام فورًا
//             </p>
//           </div>

//           {/* Card */}
//           <div className="bg-white rounded-[16px] shadow-[0px_6px_4px_rgba(0,0,0,0.25)] p-9 flex flex-col gap-[18px]">

//             <h2 className="font-changa font-semibold text-[28px] text-[#5B5B5B] text-right">
//               المعلومات الشخصية
//             </h2>

//             <div className="flex flex-col gap-[18px]">

//               {/* Name */}
//               <div className="flex flex-col gap-2 items-end">
//                 <label className="flex items-center gap-1 text-[18px] font-semibold text-black">
//                   الاسم بالكامل <span className="text-[#A00505]">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="مثال: أحمد محمد علي"
//                   className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right placeholder-[#9E9E9E] focus:outline-none focus:border-[#468EEC]"
//                 />
//               </div>

//               {/* Email */}
//               <div className="flex flex-col gap-2 items-end">
//                 <label className="flex items-center gap-1 text-[18px] font-semibold text-black">
//                   البريد الالكتروني <span className="text-[#A00505]">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="example@mail.com"
//                   className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right placeholder-[#9E9E9E] focus:outline-none focus:border-[#468EEC]"
//                   style={{ direction: "ltr", textAlign: "right" }}
//                 />
//               </div>

//               {/* Phone */}
//               <div className="flex flex-col gap-2 items-end">
//                 <label className="flex items-center gap-1 text-[18px] font-semibold text-black">
//                   رقم الهاتف <span className="text-[#A00505]">*</span>
//                 </label>
//                 <input
//                   type="tel"
//                   placeholder="+20 0XX XXXXX XXX"
//                   className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-left placeholder-[#9E9E9E] focus:outline-none focus:border-[#468EEC]"
//                   style={{ direction: "ltr" }}
//                 />
//               </div>

//               {/* Passwords */}
//               <div className="flex flex-row gap-6 w-full">

//                 {/* Confirm */}
//                 <div className="flex flex-col gap-2 items-end flex-1">
//                   <label className="flex items-center gap-1 text-[16px] font-semibold text-black">
//                     تأكيد كلمة المرور <span className="text-[#A00505]">*</span>
//                   </label>

//                   <div className="relative w-full">
//                     <input
//                       type={showConfirmPassword ? "text" : "password"}
//                       placeholder="*************"
//                       className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right placeholder-[#9E9E9E] focus:outline-none focus:border-[#468EEC]"
//                     />

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowConfirmPassword(!showConfirmPassword)
//                       }
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C7C7C7]"
//                     >
//                       {showConfirmPassword ? (
//                         <EyeOff size={20} />
//                       ) : (
//                         <Eye size={20} />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div className="flex flex-col gap-2 items-end flex-1">
//                   <label className="flex items-center gap-1 text-[16px] font-semibold text-black">
//                     كلمة المرور <span className="text-[#A00505]">*</span>
//                   </label>

//                   <div className="relative w-full">
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       placeholder="*************"
//                       className="w-full h-[48px] px-3 border border-[#C7C7C7] rounded-lg text-right placeholder-[#9E9E9E] focus:outline-none focus:border-[#468EEC]"
//                     />

//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C7C7C7]"
//                     >
//                       {showPassword ? (
//                         <EyeOff size={20} />
//                       ) : (
//                         <Eye size={20} />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* Submit */}
//             <div className="flex justify-center mt-2">
//               <button
//                 type="button"
//                 className="w-[180px] h-[52px] bg-[#468EEC] text-white rounded-lg font-semibold text-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.15)] hover:bg-[#357bd8] transition-colors"
//               >
//                 سجل الآن
//               </button>
//             </div>

//             {/* Login link */}
//             <div className="text-center">
//               <Link
//                 to="/login"
//                 className="text-[#135BB9] font-semibold text-[14px]"
//               >
//                 لديك حساب بالفعل؟ تسجيل الدخول
//               </Link>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* Left side */}
//       <div className="hidden lg:flex flex-1 bg-gradient-to-b from-[#003B88] to-[#1DA1F2] relative items-center justify-center overflow-hidden">
//         <div
//           className="absolute inset-0 opacity-20 bg-no-repeat bg-cover"
//           style={{ backgroundImage: `url(${pattern})` }}
//         />
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import pattern from "../assets/pattern.png";

export default function UserSignup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // تحقق واحد فقط في الجافاسكريبت
    if (formData.password !== formData.confirmPassword) {
      alert("كلمتا المرور غير متطابقتين");
      return;
    }

    /*
      هنا لاحقاً هتربط بالباك اند
      console.log(formData);
    */

    navigate("/complete-profile");
  };

  return (
    <div
      className="min-h-screen bg-[#F7FBFF] flex items-center justify-center p-4 md:p-0"
      dir="rtl"
    >
      <div className="w-full flex flex-col lg:flex-row-reverse rounded-none overflow-hidden shadow-2xl min-h-screen">

        {/* Left side */}
        <div className="w-full lg:w-1/2 bg-gradient-to-b from-[#003B88] to-[#1DA1F2] flex flex-col items-center justify-center p-8 lg:p-16 gap-8 shadow-[4px_4px_4px_0_rgba(0,0,0,0.25)]">
          <div className="w-72 h-72 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
            <img
              src={pattern}
              alt="Pattern"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-16">
          <div className="w-full max-w-[420px] flex flex-col gap-4">

            {/* Header */}
            <div className="text-center mb-2">
              <h1 className="text-3xl lg:text-[36px] font-changa font-semibold text-[#468EEC] mb-4">
                أهلاً بك! لنبدأ رحلتك معنا
              </h1>

              <h2 className="text-2xl lg:text-[28px] font-changa font-semibold text-[#5B5B5B]">
                أنشئ حسابك بسهولة وابدأ الاستخدام فورًا
              </h2>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-[16px] shadow-[0px_6px_4px_rgba(0,0,0,0.25)] p-6 flex flex-col gap-4"
            >
              <h2 className="font-changa font-semibold text-[22px] text-[#5B5B5B] text-right">
                المعلومات الشخصية
              </h2>

              {/* Full name */}
              <div className="flex flex-col gap-2 items-end">
                <label className="text-[16px] font-semibold">
                  الاسم بالكامل <span className="text-[#A00505]">*</span>
                </label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  type="text"
                  required
                  placeholder="مثال: أحمد محمد علي"
                  className="w-full h-11 px-3 border border-[#C7C7C7] rounded-lg text-right focus:ring-2 focus:ring-[#468EEC]"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2 items-end">
                <label className="text-[16px] font-semibold">
                  البريد الالكتروني <span className="text-[#A00505]">*</span>
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required
                  placeholder="example@mail.com"
                  className="w-full h-11 px-3 border border-[#C7C7C7] rounded-lg text-right focus:ring-2 focus:ring-[#468EEC]"
                  style={{ direction: "ltr", textAlign: "right" }}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2 items-end">
                <label className="text-[16px] font-semibold">
                  رقم الهاتف <span className="text-[#A00505]">*</span>
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  required
                  placeholder="+20 0XX XXXXX XXX"
                  className="w-full h-11 px-3 border border-[#C7C7C7] rounded-lg text-left focus:ring-2 focus:ring-[#468EEC]"
                  style={{ direction: "ltr" }}
                />
              </div>

              {/* Passwords */}
              <div className="flex gap-4">

                {/* confirm */}
                <div className="flex flex-col gap-2 items-end flex-1">
                  <label className="text-[14px] font-semibold">
                    تأكيد كلمة المرور <span className="text-[#A00505]">*</span>
                  </label>
                  <div className="relative w-full">
                    <input
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      className="w-full h-11 px-3 border border-[#C7C7C7] rounded-lg text-right focus:ring-2 focus:ring-[#468EEC]"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C7C7C7]"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* password */}
                <div className="flex flex-col gap-2 items-end flex-1">
                  <label className="text-[14px] font-semibold">
                    كلمة المرور <span className="text-[#A00505]">*</span>
                  </label>
                  <div className="relative w-full">
                    <input
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      type={showPassword ? "text" : "password"}
                      required
                      minLength={8}
                      className="w-full h-11 px-3 border border-[#C7C7C7] rounded-lg text-right focus:ring-2 focus:ring-[#468EEC]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C7C7C7]"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

              </div>

              {/* Submit */}
              <div className="flex justify-center mt-2">
                <button
                  type="submit"
                  className="w-[170px] h-[48px] bg-[#468EEC] text-white rounded-lg font-semibold shadow hover:bg-[#357bd8]"
                >
                  سجل الآن
                </button>
              </div>

              {/* Login */}
              <div className="text-center">
                <Link
                  to="/login"
                  className="text-[#135BB9] font-semibold text-[13px]"
                >
                  لديك حساب بالفعل؟ تسجيل الدخول
                </Link>
              </div>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}


