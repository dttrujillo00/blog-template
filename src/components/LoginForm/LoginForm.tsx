import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../auth";


export const LoginForm = () => {


  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const authContext = useAuth();
  const navigate = useNavigate();

  const handleLoging = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    try {

      if (authContext) {
        await authContext.signin(email, password);
        navigate('/', { replace: true })
      }

    } catch (error) {

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