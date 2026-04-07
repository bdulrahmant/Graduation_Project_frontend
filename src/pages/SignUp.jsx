// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight, User } from "lucide-react";

// import signupLogo from "../assets/signup-logo.png";
// import signupIllustration from "../assets/signup-illustration.png";

// export default function SignUp() {
//   const navigate = useNavigate();
//   const [accountType, setAccountType] = useState(null);

//   return (
//     <div
//       className="min-h-screen bg-[#F7FBFF] flex items-center justify-center p-4"
//       dir="rtl"
//     >
//       <div className="w-full flex rounded-none overflow-hidden min-h-screen">
//         <div className="grid grid-cols-1 lg:grid-cols-2 w-full">

//           {/* Left Side - Illustration */}
//           <div
//             className="hidden lg:flex flex-col items-center justify-center p-7
//                        bg-gradient-to-b from-[#003B88] to-[#1DA1F2] relative"
//           >
//             {/* Logo */}
//             <div className="absolute top-7 w-full flex justify-center">
//               <img
//                 src={signupLogo}
//                 alt="شعار رفيق"
//                 className="h-16 w-auto object-contain"
//               />
//             </div>

//             {/* Illustration */}
//             <div className="flex-1 flex items-center justify-center w-full">
//               <img
//                 src={signupIllustration}
//                 alt="توضيح إنشاء حساب"
//                 className="max-w-full h-auto object-contain
//                            drop-shadow-[0_8px_4px_rgba(0,0,0,0.25)]"
//               />
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="flex items-center justify-center p-6 lg:p-12 bg-[#F7FBFF]">
//             <div className="w-full max-w-[503px]">

//               {/* Continue Button */}
//               <div className="mb-10">
//                 <button
//                   onClick={() => {
//                     if (accountType === "doctor") {
//                       navigate("/doctor-login");
//                     } else if (accountType === "user") {
//                       navigate("/user-signup");
//                     }
//                   }}
//                   disabled={!accountType}
//                   className={`flex items-center gap-2
//                              px-5 py-2.5 rounded-lg shadow-md font-semibold
//                              transition-all
//                              ${
//                                accountType
//                                  ? "bg-[#468EEC] hover:bg-[#6DA5ED] active:bg-[#135BB9] text-white"
//                                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                              }`}
//                 >
//                   <ArrowRight className="w-5 h-5" />
//                   متابعة
//                 </button>
//               </div>

//               <div className="flex flex-col items-center gap-10">

//                 <h1 className="font-changa text-4xl font-bold text-[#468EEC] text-right w-full leading-tight">
//                   اختر نوع حسابك للحصول على تجربة مخصصة
//                 </h1>

//                 <div className="flex flex-col w-full gap-10">

//                   {/* User account */}
//                   <button
//                     onClick={() => setAccountType("user")}
//                     className={`w-full rounded-2xl shadow-lg p-10
//                                flex items-center justify-center gap-5
//                                transition-all duration-200
//                                ${
//                                  accountType === "user"
//                                    ? "ring-2 ring-[#468EEC]"
//                                    : "bg-white hover:shadow-xl"
//                                }`}
//                   >
//                     <div className="bg-[#E6E6E6] rounded-2xl p-2.5 flex-shrink-0">
//                       <User className="w-10 h-10 text-[#C7C7C7]" />
//                     </div>

//                     <div className="flex-1 flex flex-col items-end gap-6">
//                       <p className="font-cairo text-xl font-semibold text-[#4B5563] text-right leading-relaxed">
//                         لحجز المواعيد وتشخيص الأعراض والحصول على استشارات طبية متخصصة
//                       </p>

//                       <div className="flex items-center gap-2">
//                         <ArrowRight className="w-5 h-5 text-[#C7C7C7]" />
//                         <span className="font-cairo text-lg font-semibold text-[#C7C7C7]">
//                           ابدا كمستخدم
//                         </span>
//                       </div>
//                     </div>
//                   </button>

//                   {/* Doctor account */}
//                   <button
//                     onClick={() => setAccountType("doctor")}
//                     className={`w-full rounded-2xl shadow-lg p-10
//                                flex items-center justify-center gap-5
//                                transition-all duration-200
//                                ${
//                                  accountType === "doctor"
//                                    ? "ring-2 ring-[#468EEC]"
//                                    : "bg-white hover:shadow-xl"
//                                }`}
//                   >
//                     <div className="bg-[#E6E6E6] rounded-2xl p-2.5 flex-shrink-0">
//                       <svg
//                         className="w-10 h-10 text-[#C7C7C7]"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M12 11C13.66 11 15 9.66 15 8C15 6.34 13.66 5 12 5C10.34 5 9 6.34 9 8C9 9.66 10.34 11 12 11Z"
//                           fill="currentColor"
//                         />
//                         <path
//                           d="M12 12C9.79 12 8 13.79 8 16V19H16V16C16 13.79 14.21 12 12 12ZM14 13H15V14H16V15H15V16H14V15H13V14H14V13Z"
//                           fill="currentColor"
//                         />
//                       </svg>
//                     </div>

//                     <div className="flex-1 flex flex-col items-end gap-6">
//                       <p className="font-cairo text-xl font-semibold text-[#4B5563] text-right leading-relaxed">
//                         لإدارة مواعيدك وملفك المهني والتواصل مع المرضى بكفاءة
//                       </p>

//                       <div className="flex items-center gap-2">
//                         <ArrowRight className="w-5 h-5 text-[#C7C7C7]" />
//                         <span className="font-cairo text-lg font-semibold text-[#C7C7C7]">
//                           ابدا كطبيب
//                         </span>
//                       </div>
//                     </div>
//                   </button>

//                 </div>
//               </div>

//               <p className="text-left font-cairo font-semibold text-sm text-[#135BB9] mt-6">
//                 ليس لديك حساب؟ أنشئ حسابًا الآن
//               </p>

//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, User } from "lucide-react";

import signupLogo from "../assets/signup-logo.png";
import signupIllustration from "../assets/signup-illustration.png";

export default function SignUp() {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState(null); // "user" | "doctor"

  const handleNext = () => {
    if (accountType === "user") {
      navigate("/signup/user");
    }

    if (accountType === "doctor") {
      navigate("/signup/doctor");
    }
  };

  return (
    <div
      className="min-h-screen bg-[#F7FBFF] flex items-center justify-center p-4"
      dir="rtl"
    >
      <div className="w-full flex rounded-none overflow-hidden min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">

          {/* Left Side - Illustration */}
          <div
            className="hidden lg:flex flex-col items-center justify-center p-7
                       bg-gradient-to-b from-[#003B88] to-[#1DA1F2] relative"
          >
            {/* Logo */}
            <div className="absolute top-7 w-full flex justify-center">
              <img
                src={signupLogo}
                alt="شعار رفيق"
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Illustration */}
            <div className="flex-1 flex items-center justify-center w-full">
              <img
                src={signupIllustration}
                alt="توضيح إنشاء حساب"
                className="max-w-full h-auto object-contain
                           drop-shadow-[0_8px_4px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center p-6 lg:p-12 bg-[#F7FBFF]">
            <div className="w-full max-w-[503px]">

              {/* Next button */}
              <div className="mb-10 flex justify-start">
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!accountType}
                  className={`flex items-center gap-2
                             px-5 py-2.5 rounded-lg shadow-md font-semibold
                             transition-all
                             ${
                               accountType
                                 ? "bg-[#468EEC] hover:bg-[#6DA5ED] active:bg-[#135BB9] text-white"
                                 : "bg-gray-300 text-gray-500 cursor-not-allowed"
                             }`}
                >
                  <ArrowRight className="w-5 h-5" />
                  التالي
                </button>
              </div>

              <div className="flex flex-col items-center gap-10">

                <h1 className="font-changa text-4xl font-bold text-[#468EEC] text-right w-full leading-tight">
                  اختر نوع حسابك للحصول على تجربة مخصصة
                </h1>

                <div className="flex flex-col w-full gap-10">

                  {/* User account */}
                  <button
                    type="button"
                    onClick={() => setAccountType("user")}
                    className={`w-full bg-white rounded-2xl shadow-lg p-10
                               flex items-center justify-center gap-5
                               transition-all duration-200
                               ${
                                 accountType === "user"
                                   ? "ring-2 ring-[#468EEC]"
                                   : "hover:shadow-xl"
                               }`}
                  >
                    <div className="bg-[#E6E6E6] rounded-2xl p-2.5 flex-shrink-0">
                      <User className="w-10 h-10 text-[#C7C7C7]" />
                    </div>

                    <div className="flex-1 flex flex-col items-end gap-6">
                      <p className="font-cairo text-xl font-semibold text-[#4B5563] text-right leading-relaxed">
                        لحجز المواعيد وتشخيص الأعراض والحصول على استشارات طبية متخصصة
                      </p>

                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-5 h-5 text-[#C7C7C7]" />
                        <span className="font-cairo text-lg font-semibold text-[#C7C7C7]">
                          ابدأ كمستخدم
                        </span>
                      </div>
                    </div>
                  </button>

                  {/* Doctor account */}
                  <button
                    type="button"
                    onClick={() => setAccountType("doctor")}
                    className={`w-full bg-white rounded-2xl shadow-lg p-10
                               flex items-center justify-center gap-5
                               transition-all duration-200
                               ${
                                 accountType === "doctor"
                                   ? "ring-2 ring-[#468EEC]"
                                   : "hover:shadow-xl"
                               }`}
                  >
                    <div className="bg-[#E6E6E6] rounded-2xl p-2.5 flex-shrink-0">
                      <svg
                        className="w-10 h-10 text-[#C7C7C7]"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 11C13.66 11 15 9.66 15 8C15 6.34 13.66 5 12 5C10.34 5 9 6.34 9 8C9 9.66 10.34 11 12 11Z"
                          fill="currentColor"
                        />
                        <path
                          d="M12 12C9.79 12 8 13.79 8 16V19H16V16C16 13.79 14.21 12 12 12ZM14 13H15V14H16V15H15V16H14V15H13V14H14V13Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>

                    <div className="flex-1 flex flex-col items-end gap-6">
                      <p className="font-cairo text-xl font-semibold text-[#4B5563] text-right leading-relaxed">
                        لإدارة مواعيدك وملفك المهني والتواصل مع المرضى بكفاءة
                      </p>

                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-5 h-5 text-[#C7C7C7]" />
                        <span className="font-cairo text-lg font-semibold text-[#C7C7C7]">
                          ابدأ كطبيب
                        </span>
                      </div>
                    </div>
                  </button>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
