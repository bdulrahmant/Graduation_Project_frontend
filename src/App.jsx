<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingSuccess from './pages/BookingSuccess';
import Listing from './pages/Listing';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import MyBookings from './pages/MyBookings';
import DoctorProfile from './pages/DoctorProfile';
import BookingDetails from './pages/BookingDetails';
import DoctorCard from './components/DoctorCard';
function App() {
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ── Shared ────────────────────────────────────────────────────────────────────
import ProtectedRoute from "./components/shared/ProtectedRoute.jsx";

// ── Public: Auth ──────────────────────────────────────────────────────────────
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import UserSignup from "./pages/auth/UserSignup";
import DoctorLogin from "./pages/auth/DoctorLogin";
import DoctorSignup from "./pages/auth/DoctorSignup";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import VerifyOtpPage from "./pages/auth/VerifyOtpPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import ResetSuccessPage from "./pages/auth/ResetSuccessPage";

// ── Public: Home ──────────────────────────────────────────────────────────────
import Landing from "./pages/home/Landing";

// ── Protected: Home ───────────────────────────────────────────────────────────
import PatientHome from "./pages/home/PatientHome";
import DoctorHome from "./pages/DoctorHome";

// ── Protected: Profile ────────────────────────────────────────────────────────
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";
import MedicalProfile from "./pages/profile/MedicalProfile";
import CompleteProfile from "./pages/profile/CompleteProfile";
import CompleteDoctorProfile from "./pages/profile/CompleteDoctorProfile";

// ── Protected: Files ──────────────────────────────────────────────────────────
import FilesPage from "./pages/files/FilesPage";
import UploadFilePage from "./pages/files/UploadFilePage";

// ── Protected: Chatbot ────────────────────────────────────────────────────────
import Chatbot from "./pages/chatbot/Chatbot";

// ── Protected: Notifications ──────────────────────────────────────────────────
import NotificationsPage from "./pages/notifications/NotificationsPage";

// ── Protected: Articles ───────────────────────────────────────────────────────
import SavedArticlesPage from "./pages/articles/SavedArticlesPage";

// ── Protected: Settings ───────────────────────────────────────────────────────
import ChangePassword from "./pages/settings/ChangePassword";

export default function App() {
>>>>>>> main
  return (
    <Router>
      <div className="flex flex-col min-h-screen text-slate-800 bg-slate-50 font-sans" dir="rtl">
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow w-full max-w-6xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Listing />} />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/Booking/:id?" element={<Booking />} />
            <Route path="/payment" element={<Payment />} />    
            <Route path="/booking-success" element={<BookingSuccess />} />   
            <Route path="/my-bookings" element={<MyBookings />} />   
            <Route path="/booking-details/:id" element={<BookingDetails />} />
            <Route path="/doctor-card" element={<DoctorCard />} />
       
          </Routes>
        </main>

<<<<<<< HEAD
        <Footer />
      </div>
    </Router>
=======
        {/* ────────────────────────────────────────────────────────────────── */}
        {/*  PUBLIC ROUTES — no login required                                 */}
        {/* ────────────────────────────────────────────────────────────────── */}

        <Route path="/" element={<Landing />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/user" element={<UserSignup />} />
        <Route path="/signup/doctor" element={<DoctorSignup />} />

        {/* Password reset flow */}
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-otp" element={<VerifyOtpPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/reset-success" element={<ResetSuccessPage />} />

        {/* ────────────────────────────────────────────────────────────────── */}
        {/*  PROTECTED ROUTES — login required (token must exist)              */}
        {/* ────────────────────────────────────────────────────────────────── */}

        {/* Home */}
        <Route
          path="/patient-home"
          element={
            <ProtectedRoute role="patient">
              <PatientHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctor-home"
          element={
            <ProtectedRoute role="doctor">
              <DoctorHome />
            </ProtectedRoute>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/medical-profile"
          element={
            <ProtectedRoute>
              <MedicalProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/complete-profile"
          element={
            <ProtectedRoute>
              <CompleteProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/complete-profile/doctor"
          element={
            <ProtectedRoute>
              <CompleteDoctorProfile />
            </ProtectedRoute>
          }
        />

        {/* Files */}
        <Route
          path="/files"
          element={
            <ProtectedRoute>
              <FilesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/upload-file"
          element={
            <ProtectedRoute>
              <UploadFilePage />
            </ProtectedRoute>
          }
        />

        {/* Chatbot */}
        <Route
          path="/chatbot"
          element={
            <ProtectedRoute>
              <Chatbot />
            </ProtectedRoute>
          }
        />

        {/* Notifications */}
        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <NotificationsPage />
            </ProtectedRoute>
          }
        />

        {/* Articles */}
        <Route
          path="/saved-articles"
          element={
            <ProtectedRoute>
              <SavedArticlesPage />
            </ProtectedRoute>
          }
        />

        {/* Settings */}
        <Route
          path="/change-password"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />

        {/* ────────────────────────────────────────────────────────────────── */}
        {/*  CATCH-ALL                                                          */}
        {/* ────────────────────────────────────────────────────────────────── */}

        <Route path="*" element={<h1>404 — Page Not Found</h1>} />

      </Routes>
    </BrowserRouter>
>>>>>>> main
  );
}

export default App;