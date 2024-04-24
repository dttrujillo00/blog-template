import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../auth"


export const SignUpForm = () => {

  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const authContext = useAuth();
  const navigate = useNavigate();

  const handleSignup = async(event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault();

    try {

      if (authContext) {
        await authContext.signup(username, email, password);
        navigate('/', { replace: true })
      }

    } catch (error) {

      return {
        error: "Invalid signup attempt",
      };

    }
   }

  return (
    <div>
      <form onSubmit={handleSignup}>

        <div className="form-control">
          <label htmlFor="username">Nombre de usuario</label>
          <input type="text" value={username} id="username" onChange={(event) => setUsername(event.currentTarget.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" value={email} id="email" onChange={(event) => setEmail(event.currentTarget.value)} />
        </div>

        <div className="form-control">
          <label htmlFor="password">Contraseña</label>
          <input type="password" value={password} id="password" onChange={(event) => setPassword(event.currentTarget.value)} />
        </div>

        <button type="submit">
          Registrarse
        </button>

      </form>

      <p>¿Ya tienes cuenta? <Link to={'/login'}>Inicia sesión</Link></p>
    </div>
  )
}