import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const ProtectedRoute: React.FC<{
  children: React.ReactNode;
  role?: string;
}> = ({ children, role }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return null;

  if (!user) return <Navigate to="/login" replace state={{ from: location }} />;
  if (role && user.role !== role) return <Navigate to="/" replace />;

  return <>{children}</>;
};

export default ProtectedRoute;
