// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />      </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import DoctorLogin from "./pages/DoctorLogin";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/doctor-login" element={<DoctorLogin />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Landing from "./pages/Landing";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import UserSignup from "./pages/UserSignup";
// import DoctorSignup from "./pages/DoctorSignup";   
// import CompleteProfile from "./pages/CompleteProfile";


// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Landing page */}
//         <Route path="/" element={<Landing />} />

//         {/* Login page */}
//         <Route path="/login" element={<Login />} />

//         {/* Sign up page */}
//         <Route path="/signup" element={<SignUp />} />

//         <Route path="/signup/user" element={<UserSignup />} />

//         <Route path="/complete-profile" element={<CompleteProfile />} />

//         <Route path="/doctor-signup" element={<DoctorSignup />} />



//       </Routes>
//     </BrowserRouter>
//   );
// }




// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Landing from "./pages/Landing";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import UserSignup from "./pages/UserSignup";
// import DoctorSignup from "./pages/DoctorSignup";
// import CompleteProfile from "./pages/CompleteProfile";
// import CompleteDoctorProfile from "./pages/CompleteDoctorProfile";


// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Landing page */}
//         <Route path="/" element={<Landing />} />

//         {/* Login page */}
//         <Route path="/login" element={<Login />} />

//         {/* Sign up main page */}
//         <Route path="/signup" element={<SignUp />} />

//         {/* User signup */}
//         <Route path="/signup/user" element={<UserSignup />} />

//         {/* Doctor signup */}
//         <Route path="/signup/doctor" element={<DoctorSignup />} />

//         {/* Complete profile */}
//         <Route path="/complete-profile" element={<CompleteProfile />} />

//         <Route path="/complete-profile/doctor" element={<CompleteDoctorProfile />} />



//       </Routes>
//     </BrowserRouter>
//   );
// }



import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserSignup from "./pages/UserSignup";
import DoctorSignup from "./pages/DoctorSignup";
import CompleteProfile from "./pages/CompleteProfile";
import CompleteDoctorProfile from "./pages/CompleteDoctorProfile";
import PatientHome from "./pages/PatientHome";
import DoctorHome from "./pages/DoctorHome";
import DoctorLogin from "./pages/DoctorLogin";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing page */}
        <Route path="/" element={<Landing />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Doctor login page */}
        <Route path="/doctor-login" element={<DoctorLogin />} />

        {/* Sign up main page */}
        <Route path="/signup" element={<SignUp />} />

        {/* User signup */}
        <Route path="/signup/user" element={<UserSignup />} />

        {/* Doctor signup */}
        <Route path="/signup/doctor" element={<DoctorSignup />} />

        {/* Complete profile user */}
        <Route path="/complete-profile" element={<CompleteProfile />} />

        {/* Complete profile doctor */}
        <Route path="/complete-profile/doctor" element={<CompleteDoctorProfile />} />

        {/* ✅ Patient Home page */}
        <Route 
          path="/patient-home" 
          element={
            <ProtectedRoute role="patient">
              <PatientHome />
            </ProtectedRoute>
          } 
        />

        {/* ✅ Doctor Home page */}
        <Route 
          path="/doctor-home" 
          element={
            <ProtectedRoute role="doctor">
              <DoctorHome />
            </ProtectedRoute>
          } 
        />

      </Routes>
    </BrowserRouter>
  );
}