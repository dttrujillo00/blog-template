import { redirect } from "react-router-dom"
import { useAuth } from "../../auth";


export const AuthStatus = () => {

  const authContext = useAuth()

  console.log(authContext?.session)
    
    const handleLogout = async() => { 
      
      await authContext?.signout();
      return redirect("/"); 

     }

    

  return (
    <div>
        <p>Bienvenido { authContext?.session?.user.email }</p>
        <button type="submit" onClick={handleLogout} >
          Cerrar sesion
        </button>
    </div>
  )
}