import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyOtpPage() {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleVerify = async () => {
    const code = otp.join("");

    if (code.length !== 4) {
      alert("من فضلك أدخل الكود كامل");
      return;
    }

    try {
      setLoading(true);

      // 🔗 API
      console.log("Verify OTP:", code);

      // await axios.post("/auth/verify-otp", { code });

      navigate("/reset-password");

    } catch  {
      alert("الكود غير صحيح");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    console.log("Resend OTP");

    setOtp(["", "", "", ""]);
    inputRefs[0].current?.focus();

    // await axios.post("/auth/resend-otp");
  };

  return (
    <div
      className="min-h-screen bg-[#F7FBFF] flex items-center justify-center p-4 md:p-0"
      dir="rtl"
    >
      <div className="w-full flex flex-col lg:flex-row-reverse min-h-screen">

        {/* 🔵 LEFT (نفس Login EXACT) */}
        <div className="w-full lg:w-1/2 bg-gradient-to-b from-[#003B88] to-[#1DA1F2] flex flex-col items-center justify-center p-8 lg:p-16 gap-8">

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
              alt="Robot"
              className="w-full h-full object-contain"
            />
          </div>

        </div>

        {/* ⚪ RIGHT */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-16">

          <div className="w-full max-w-md flex flex-col gap-6">

            {/* Titles */}
            <div className="text-center">

              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-changa font-semibold text-[#468EEC] mb-4">
                التحقق من الرمز
              </h1>

              <p className="text-[#5B5B5B] font-cairo text-lg">
                أدخل رمز التحقق المكون من 4 أرقام.
              </p>

            </div>

            {/* OTP Inputs */}
            <div className="flex justify-center gap-4 mt-6" dir="ltr">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={inputRefs[index]}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-14 h-14 md:w-16 md:h-16 text-center text-xl font-bold border border-[#C7C7C7] rounded-lg"
                />
              ))}
            </div>

            {/* Button */}
            <button
              onClick={handleVerify}
              disabled={loading}
              className="w-[180px] h-[52px] mx-auto mt-4 bg-[#468EEC] text-white rounded-lg disabled:opacity-50"
            >
              {loading ? "جارٍ التحقق..." : "تحقق"}
            </button>

            {/* Resend */}
            <button
              onClick={handleResend}
              className="text-[#468EEC] text-sm mt-2"
            >
              إعادة إرسال رمز التحقق
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}