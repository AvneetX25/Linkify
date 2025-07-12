import { Navigate } from "react-router-dom";
import { useStoreContext } from "./contextApi/ContextApi";

const PrivateRoute = ({ children, publicPage }) => {
  const { token } = useStoreContext();

  // If it's a public page like login/register and user is logged in, redirect to dashboard
  if (publicPage && token) return <Navigate to="/dashboard" />;

  // If it's a protected page like /dashboard and user is NOT logged in, redirect to login
  if (!publicPage && !token) return <Navigate to="/login" />;

  // Else, allow access
  return children;
};

export default PrivateRoute;
