import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { fakeAuthProvider, useAuth } from "../../auth";


export const LoginForm = () => {


  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const authContext = useAuth();

  const handleLoging = async ( event: React.FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();
    
    try {
      await fakeAuthProvider.signin(email, password);

      // if (authContext?.session) {
      //   authContext.updateSession()
      //   .then( () => {
      //     navigate("/", { replace: true });
      //   } )
      // }

    } catch (error) {
      // Unused as of now but this is how you would handle invalid
      // username/password combinations - just like validating the inputs
      // above
      return {
        error: "Invalid login attempt",
      };
    }

    
  }

  return (
    <div>
      <form onSubmit={handleLoging}>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" value={email} id="email" onChange={(event) => setEmail(event.currentTarget.value)} />
        </div>

        <div className="form-control">
          <label htmlFor="password">Contraseña</label>
          <input type="password" value={password} id="password" onChange={(event) => setPassword(event.currentTarget.value)} />
        </div>

        <button type="submit">
          Iniciar sesion
        </button>

      </form>

      <p>¿No tienes cuenta? <Link to={'/signup'}>Regístrate</Link></p>
    </div>
  )
}