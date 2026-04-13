

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
import Chatbot from "./pages/Chatbot";
import EditProfile from "./pages/EditProfile";
import MedicalProfile from "./pages/MedicalProfile";
import ChangePassword from "./pages/ChangePassword";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import FilesPage from "./pages/FilesPage";
import UploadFilePage from "./pages/UploadFilePage";

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

        <Route
          path="/chatbot"
          element={
            <ProtectedRoute role="patient">
              <Chatbot />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit-profile"
          element={
            <ProtectedRoute role="patient">
              <EditProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/medical-profile"
          element={
            <ProtectedRoute role="patient">
              <MedicalProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/change-password"
          element={
            <ProtectedRoute role="patient">
              <ChangePassword />
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

        <Route path="/profile" element={<Profile />} />

        <Route path="/files" element={<FilesPage />} />

        <Route path="/upload-file" element={<UploadFilePage />} />

        {/* Catch-all Not Found Route */}
        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  );
}