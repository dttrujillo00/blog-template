import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../auth"


export const ProtectedRoute = () => {

    const session = useAuth();

    if (!session) {
        return <Navigate to={'/login'} />;
    }

  return (
    <Outlet />
  )
}
