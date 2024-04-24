import { Link } from "react-router-dom";
import { useAuth } from "../auth"
import { AuthStatus } from "../components"



export const HomePage = () => {

  const authContext = useAuth();

  if (authContext?.session) {
    return (
      <div>
        <h1>Home Page</h1>

        <AuthStatus />
      </div>
    )
  } else {
    return (
      <Link to={'/login'}>Iniciar sesion</Link>
    )
  }

}
