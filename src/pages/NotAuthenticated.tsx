import { Navigate, Outlet } from "react-router-dom"


export const NotAuthenticated = () => {


  return (
    <div className="auth-page">
        <Outlet />
        <Navigate to={'/login'} />
    </div>
  )
}
