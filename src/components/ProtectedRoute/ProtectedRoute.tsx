import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../auth"


export const ProtectedRoute = () => {

    const authContext = useAuth();

    if (!authContext?.session) {
        return <Navigate to={'/login'} />;
    }

  return (
    <Outlet />
  )
}
