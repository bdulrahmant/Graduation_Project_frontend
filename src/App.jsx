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

        <Footer />
      </div>
    </Router>
  );
}

export default App;