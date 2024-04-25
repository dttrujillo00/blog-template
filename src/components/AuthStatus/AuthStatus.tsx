import { redirect } from "react-router-dom"
import { useAuth } from "../../auth";
import './AuthStatus.css'
import { FaPowerOff, FaRegCircleUser } from "react-icons/fa6";


export const AuthStatus = () => {

  const authContext = useAuth()

  const handleLogout = async () => {

    await authContext?.signout();
    return redirect("/");

  }



  return (
    <div className="box-auth-status">
      <div className="box-user">
        <FaRegCircleUser size={24} />
        <p>{authContext?.session?.user.user_metadata.username}</p>
      </div>

      <button className="btn-logout" type="submit" onClick={handleLogout} >
        <FaPowerOff />
        Cerrar sesion
      </button>
    </div>
  )
}