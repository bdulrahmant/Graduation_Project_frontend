import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const isDev = import.meta.env.DEV;

  // Bypass auth in development (npm run dev)
  if (isDev) return children;

  const token = localStorage.getItem("token");
  const currentRole = localStorage.getItem("role");

  // Not logged in → send to login page
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Role specified but doesn't match → send to landing
  if (role && currentRole !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}
