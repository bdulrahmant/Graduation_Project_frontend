import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ResetPasswordPage() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      alert("من فضلك أدخل البيانات كاملة");
      return;
    }

    if (password !== confirmPassword) {
      alert("كلمة المرور غير متطابقة");
      return;
    }

    if (password.length < 6) {
      alert("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
      return;
    }

    try {
      setLoading(true);

      // 🔗 API
      console.log("Reset Password:", password);

      // await axios.post("/auth/reset-password", {
      //   password,
      // });

      navigate("/reset-success");

    } catch {
      alert("حدث خطأ، حاول مرة أخرى");
    } finally {
      setLoading(false);
    }
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
                تعيين كلمة مرور جديدة
              </h1>

              <p className="text-[#5B5B5B] font-cairo text-lg">
                أدخل كلمة المرور الجديدة لإعادة تعيين حسابك.
              </p>

            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">

              {/* Password */}
              <div className="flex flex-col gap-2 items-end">

                <label className="text-[#121212] font-cairo font-semibold text-lg">
                  كلمة المرور
                </label>

                <div className="relative w-full">

                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full h-12 px-3 py-2 border border-[#C7C7C7] rounded-lg text-right"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>

                </div>

              </div>

              {/* Confirm */}
              <div className="flex flex-col gap-2 items-end">

                <label className="text-[#121212] font-cairo font-semibold text-lg">
                  تأكيد كلمة المرور
                </label>

                <div className="relative w-full">

                  <input
                    type={showConfirm ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full h-12 px-3 py-2 border border-[#C7C7C7] rounded-lg text-right"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                  >
                    {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>

                </div>

              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-[180px] h-[52px] mx-auto mt-4 bg-[#468EEC] text-white rounded-lg disabled:opacity-50"
              >
                {loading ? "جارٍ الحفظ..." : "التالي"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
}