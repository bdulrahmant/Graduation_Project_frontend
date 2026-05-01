// import { useState } from "react";
// import { Eye } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log("Login attempted with:", email, password);
//   };

//   return (
//     <div
//       className="min-h-screen bg-[#F7FBFF] flex items-center justify-center p-4 md:p-0"
//       dir="rtl"
//     >
//       <div className="w-full flex flex-col lg:flex-row-reverse rounded-none overflow-hidden shadow-2xl min-h-screen">

//         <div className="w-full lg:w-1/2 bg-gradient-to-b from-[#003B88] to-[#1DA1F2] flex flex-col items-center justify-center p-8 lg:p-16 gap-8 shadow-[4px_4px_4px_0_rgba(0,0,0,0.25)]">
//           <div className="w-48 h-28 lg:w-60 lg:h-36 flex items-center justify-center">
//             <img
//               src="https://api.builder.io/api/v1/image/assets/TEMP/9602bf2f4a98702e32d5dda93f9aa23b97c21c11?width=480"
//               alt="رفيق Logo"
//               className="w-full h-full object-contain"
//             />
//           </div>

//           <div className="w-72 h-72 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
//             <img
//               src="https://api.builder.io/api/v1/image/assets/TEMP/04385ee7677f6d23228bea69c4b2c35a4c9c6149?width=1000"
//               alt="Mascot Character"
//               className="w-full h-full object-contain drop-shadow-[0_8px_4px_rgba(0,0,0,0.25)]"
//             />
//           </div>
//         </div>

//         <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-16">
//           <div className="w-full max-w-md flex flex-col gap-6">
//             <div className="text-center mb-2">
//               <h1 className="text-3xl md:text-4xl lg:text-[40px] font-changa font-semibold text-[#468EEC] leading-[120%] mb-6">
//                 يسعدني رؤيتك مجددًا!
//               </h1>
//               <h2 className="text-2xl md:text-3xl lg:text-[32px] font-changa font-semibold text-[#5B5B5B] leading-[120%]">
//                 سجّل الدخول للمتابعة إلى حسابك
//               </h2>
//             </div>

//             <form onSubmit={handleLogin} className="flex flex-col gap-4 mt-8">
//               <div className="flex flex-col gap-2 items-end">
//                 <label className="text-[#121212] font-cairo font-semibold text-lg leading-[150%]">
//                   البريد الالكتروني او اسم المستخدم
//                 </label>
//                 <input
//                   type="text"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="example@mail.com"
//                   className="w-full h-12 px-3 py-2 border border-[#C7C7C7] rounded-lg text-right font-cairo font-semibold text-base text-[#121212] placeholder:text-[#9E9E9E] focus:outline-none focus:ring-2 focus:ring-[#468EEC] focus:border-transparent transition-all"
//                 />
//               </div>

//               <div className="flex flex-col gap-2 items-end">
//                 <label className="text-[#121212] font-cairo font-semibold text-lg leading-[150%]">
//                   كلمة المرور
//                 </label>
//                 <div className="relative w-full">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="*************"
//                     className="w-full h-12 px-3 py-2 pr-12 border border-[#C7C7C7] rounded-lg text-right font-cairo font-semibold text-base text-[#121212] placeholder:text-[#9E9E9E] focus:outline-none focus:ring-2 focus:ring-[#468EEC] focus:border-transparent transition-all"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C7C7C7] hover:text-[#468EEC] transition-colors"
//                   >
//                     <Eye className="w-6 h-6" />
//                   </button>
//                 </div>
//                 <button
//                   type="button"
//                   className="text-[#135BB9] font-cairo font-semibold text-base leading-[150%] hover:underline"
//                 >
//                   هل نسيت كلمة السر ؟
//                 </button>
//               </div>

//               <button
//                 type="submit"
//                 className="w-[180px] h-[52px] mx-auto mt-2 bg-[#468EEC] hover:bg-[#6DA5ED] active:bg-[#135BB9] text-[#F5F5F5] font-cairo font-semibold text-base rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.15)] transition-all duration-200"
//               >
//                 تسجيل الدخول
//               </button>
//             </form>

//             <div className="text-center mt-4 font-cairo font-semibold text-sm leading-[150%]">
//               <span className="text-[#121212]">ليس لديك حساب؟</span>{" "}
//               <button
//                 type="button"
//                 onClick={() => navigate("/signup")}
//                 className="text-[#6DA5ED] hover:underline"
//               >
//                 أنشئ حسابًا الآن
//               </button>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }





// import { useState } from "react";
// import { Eye } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate();

//   const [userType, setUserType] = useState("user"); // user | doctor
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log("Login as:", userType, email, password);
//   };

//   return (
//     <div
//       className="min-h-screen bg-[#F7FBFF] flex items-center justify-center p-4 md:p-0"
//       dir="rtl"
//     >
//       <div className="w-full flex flex-col lg:flex-row-reverse rounded-none overflow-hidden shadow-2xl min-h-screen">

//         {/* Left side */}
//         <div className="w-full lg:w-1/2 bg-gradient-to-b from-[#003B88] to-[#1DA1F2] flex flex-col items-center justify-center p-8 lg:p-16 gap-8 shadow-[4px_4px_4px_0_rgba(0,0,0,0.25)]">
//           <div className="w-48 h-28 lg:w-60 lg:h-36 flex items-center justify-center">
//             <img
//               src="https://api.builder.io/api/v1/image/assets/TEMP/9602bf2f4a98702e32d5dda93f9aa23b97c21c11?width=480"
//               alt="رفيق Logo"
//               className="w-full h-full object-contain"
//             />
//           </div>

//           <div className="w-72 h-72 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
//             <img
//               src="https://api.builder.io/api/v1/image/assets/TEMP/04385ee7677f6d23228bea69c4b2c35a4c9c6149?width=1000"
//               alt="Mascot Character"
//               className="w-full h-full object-contain drop-shadow-[0_8px_4px_rgba(0,0,0,0.25)]"
//             />
//           </div>
//         </div>

//         {/* Right side */}
//         <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-16">
//           <div className="w-full max-w-md flex flex-col gap-6">

//             <div className="text-center mb-2">
//               <h1 className="text-3xl md:text-4xl lg:text-[40px] font-changa font-semibold text-[#468EEC] leading-[120%] mb-6">
//                 يسعدني رؤيتك مجددًا!
//               </h1>
//               <h2 className="text-2xl md:text-3xl lg:text-[32px] font-changa font-semibold text-[#5B5B5B] leading-[120%]">
//                 سجّل الدخول للمتابعة إلى حسابك
//               </h2>
//             </div>

//             {/* ===== اختيار نوع الدخول ===== */}
//             <div className="flex items-center gap-2 border border-[#C7C7C7] rounded-2xl p-2 mt-4">

//               <button
//                 type="button"
//                 onClick={() => setUserType("user")}
//                 className={`flex-1 py-2.5 rounded-xl font-cairo font-semibold transition-all
//                   ${
//                     userType === "user"
//                       ? "bg-[#468EEC] text-white"
//                       : "bg-transparent text-[#121212]"
//                   }`}
//               >
//                 مستخدم
//               </button>

//               <button
//                 type="button"
//                 onClick={() => setUserType("doctor")}
//                 className={`flex-1 py-2.5 rounded-xl font-cairo font-semibold transition-all
//                   ${
//                     userType === "doctor"
//                       ? "bg-[#468EEC] text-white"
//                       : "bg-transparent text-[#121212]"
//                   }`}
//               >
//                 طبيب
//               </button>

//             </div>
//             {/* ============================= */}

//             <form onSubmit={handleLogin} className="flex flex-col gap-4 mt-6">

//               <div className="flex flex-col gap-2 items-end">
//                 <label className="text-[#121212] font-cairo font-semibold text-lg leading-[150%]">
//                   البريد الالكتروني او اسم المستخدم
//                 </label>
//                 <input
//                   type="text"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="example@mail.com"
//                   className="w-full h-12 px-3 py-2 border border-[#C7C7C7] rounded-lg text-right font-cairo font-semibold text-base text-[#121212] placeholder:text-[#9E9E9E] focus:outline-none focus:ring-2 focus:ring-[#468EEC] focus:border-transparent transition-all"
//                 />
//               </div>

//               <div className="flex flex-col gap-2 items-end">
//                 <label className="text-[#121212] font-cairo font-semibold text-lg leading-[150%]">
//                   كلمة المرور
//                 </label>
//                 <div className="relative w-full">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="*************"
//                     className="w-full h-12 px-3 py-2 pr-12 border border-[#C7C7C7] rounded-lg text-right font-cairo font-semibold text-base text-[#121212] placeholder:text-[#9E9E9E] focus:outline-none focus:ring-2 focus:ring-[#468EEC] focus:border-transparent transition-all"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C7C7C7] hover:text-[#468EEC] transition-colors"
//                   >
//                     <Eye className="w-6 h-6" />
//                   </button>
//                 </div>

//                 <button
//                   type="button"
//                   className="text-[#135BB9] font-cairo font-semibold text-base leading-[150%] hover:underline"
//                 >
//                   هل نسيت كلمة السر ؟
//                 </button>
//               </div>

//               <button
//                 type="submit"
//                 className="w-[180px] h-[52px] mx-auto mt-2 bg-[#468EEC] hover:bg-[#6DA5ED] active:bg-[#135BB9] text-[#F5F5F5] font-cairo font-semibold text-base rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.15)] transition-all duration-200"
//               >
//                 تسجيل الدخول
//               </button>
//             </form>

//             <div className="text-center mt-4 font-cairo font-semibold text-sm leading-[150%]">
//               <span className="text-[#121212]">ليس لديك حساب؟</span>{" "}
//               <button
//                 type="button"
//                 onClick={() => navigate("/signup")}
//                 className="text-[#6DA5ED] hover:underline"
//               >
//                 أنشئ حسابًا الآن
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState } from "react";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [userType, setUserType] = useState("user"); // user | doctor
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const handleLogin = (e) => {

    e.preventDefault();

    console.log("Login as:", userType, email, password);

    /* ✅ هنا redirect حسب نوع المستخدم */
    if (userType === "user") {
      localStorage.setItem("role", "patient");
      navigate("/patient-home");

    } else if (userType === "doctor") {
      localStorage.setItem("role", "doctor");
      navigate("/doctor-home");

    }

  };


  return (
    <div
      className="min-h-screen bg-[#F7FBFF] flex items-center justify-center p-4 md:p-0"
      dir="rtl"
    >
      <div className="w-full flex flex-col lg:flex-row-reverse rounded-none overflow-hidden shadow-2xl min-h-screen">

        {/* Left side */}
        <div className="w-full lg:w-1/2 bg-gradient-to-b from-[#003B88] to-[#1DA1F2] flex flex-col items-center justify-center p-8 lg:p-16 gap-8 shadow-[4px_4px_4px_0_rgba(0,0,0,0.25)]">

          <div className="w-48 h-28 lg:w-60 lg:h-36 flex items-center justify-center">

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9602bf2f4a98702e32d5dda93f9aa23b97c21c11?width=480"
              alt="رفيق Logo"
              className="w-full h-full object-contain"
            />

          </div>

          <div className="w-72 h-72 lg:w-[500px] lg:h-[500px] flex items-center justify-center">

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/04385ee7677f6d23228bea69c4b2c35a4c9c6149?width=1000"
              alt="Mascot Character"
              className="w-full h-full object-contain drop-shadow-[0_8px_4px_rgba(0,0,0,0.25)]"
            />

          </div>

        </div>

        {/* Right side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-16">

          <div className="w-full max-w-md flex flex-col gap-6">

            <div className="text-center mb-2">

              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-changa font-semibold text-[#468EEC] leading-[120%] mb-6">
                يسعدني رؤيتك مجددًا!
              </h1>

              <h2 className="text-2xl md:text-3xl lg:text-[32px] font-changa font-semibold text-[#5B5B5B] leading-[120%]">
                سجّل الدخول للمتابعة إلى حسابك
              </h2>

            </div>


            {/* اختيار نوع الدخول */}

            <div className="flex items-center gap-2 border border-[#C7C7C7] rounded-2xl p-2 mt-4">

              <button
                type="button"
                onClick={() => setUserType("user")}
                className={`flex-1 py-2.5 rounded-xl font-cairo font-semibold transition-all
                  ${userType === "user"
                    ? "bg-[#468EEC] text-white"
                    : "bg-transparent text-[#121212]"
                  }`}
              >
                مستخدم
              </button>


              <button
                type="button"
                onClick={() => setUserType("doctor")}
                className={`flex-1 py-2.5 rounded-xl font-cairo font-semibold transition-all
                  ${userType === "doctor"
                    ? "bg-[#468EEC] text-white"
                    : "bg-transparent text-[#121212]"
                  }`}
              >
                طبيب
              </button>

            </div>


            {/* Form */}

            <form onSubmit={handleLogin} className="flex flex-col gap-4 mt-6">

              <div className="flex flex-col gap-2 items-end">

                <label className="text-[#121212] font-cairo font-semibold text-lg leading-[150%]">
                  البريد الالكتروني او اسم المستخدم
                </label>

                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@mail.com"
                  className="w-full h-12 px-3 py-2 border border-[#C7C7C7] rounded-lg text-right"
                />

              </div>


              <div className="flex flex-col gap-2 items-end">

                <label className="text-[#121212] font-cairo font-semibold text-lg leading-[150%]">
                  كلمة المرور
                </label>

                <div className="relative w-full">

                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="*************"
                    className="w-full h-12 px-3 py-2 pr-12 border border-[#C7C7C7] rounded-lg text-right"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <Eye className="w-6 h-6" />
                  </button>

                </div>

              </div>


              <button
                type="submit"
                className="w-[180px] h-[52px] mx-auto mt-2 bg-[#468EEC] text-white rounded-lg"
              >
                تسجيل الدخول
              </button>

            </form>


            <div className="text-center mt-4">

              <span>ليس لديك حساب؟ </span>

              <button
                onClick={() => navigate("/signup")}
                className="text-[#6DA5ED]"
              >
                أنشئ حسابًا الآن
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );

}




// import { useState } from "react";
// import image from "../assets/Group 3432.png";

// export default function Login() {
//   const [userType, setUserType] = useState("user");
//   const [showPassword, setShowPassword] = useState(false);

//   const isUser = userType === "user";

//   return (
//     <div className="min-h-screen w-full" dir="rtl">
//       <div className="flex min-h-screen flex-col lg:flex-row-reverse">

//         {/* Illustration */}
//         <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-[#0d6efd] p-10">
//           <img
//             src={image}
//             alt="Illustration"
//             className="max-w-md w-full object-contain"
//           />
//         </div>

//         {/* Form */}
//         <div className="flex w-full lg:w-1/2 items-center justify-center bg-gray-50 px-4">
//           <div className="w-full max-w-md py-12">

//             <div className="text-center mb-10">
//               <h2 className="text-3xl font-bold mb-2">
//                 يسعدني رؤيتك مجددًا!
//               </h2>
//               <p className="text-gray-600">
//                 سجّل الدخول للمتابعة إلى حسابك
//               </p>
//             </div>

//             {/* User type */}
//             <div className="flex mb-6 rounded-xl overflow-hidden border">
//               <button
//                 type="button"
//                 onClick={() => setUserType("user")}
//                 className={`flex-1 py-3 text-sm font-semibold transition
//                 ${isUser ? "bg-blue-600 text-white" : "bg-white text-gray-600"}`}
//               >
//                 مستخدم
//               </button>

//               <button
//                 type="button"
//                 onClick={() => setUserType("doctor")}
//                 className={`flex-1 py-3 text-sm font-semibold transition
//                 ${!isUser ? "bg-blue-600 text-white" : "bg-white text-gray-600"}`}
//               >
//                 طبيب
//               </button>
//             </div>

//             <form className="space-y-5">

//               <div>
//                 <label className="block mb-2 text-sm font-semibold">
//                   البريد الإلكتروني أو رقم الهاتف
//                 </label>
//                 <input
//                   type="text"
//                   dir="ltr"
//                   placeholder="example@mail.com"
//                   className="w-full rounded-lg border px-4 py-3 text-end focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-2 text-sm font-semibold">
//                   كلمة المرور
//                 </label>

//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     dir="ltr"
//                     placeholder="************"
//                     className="w-full rounded-lg border px-4 py-3 text-end focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                   >
//                     {showPassword ? "🙈" : "👁️"}
//                   </button>
//                 </div>
//               </div>

//               <div className="text-left">
//                 <a href="#" className="text-blue-600 text-sm font-semibold">
//                   هل نسيت كلمة السر؟
//                 </a>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full rounded-lg bg-blue-600 py-3 font-bold text-white hover:bg-blue-700 transition"
//               >
//                 تسجيل الدخول
//               </button>

//               <div className="text-center text-sm">
//                 <span className="text-gray-500">ليس لديك حساب؟</span>{" "}
//                 <a href="#" className="text-blue-600 font-semibold">
//                   أنشئ حسابًا الآن
//                 </a>
//               </div>

//             </form>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

