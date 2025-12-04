import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("jwt_token");
  const role = Cookies.get("role");

  // No login → redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If trying to open dashboard but user is NOT client
  if (window.location.pathname.startsWith("/dashboard") && role !== "client") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
