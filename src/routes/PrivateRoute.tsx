import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, isLoading } = useKindeAuth();

  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
