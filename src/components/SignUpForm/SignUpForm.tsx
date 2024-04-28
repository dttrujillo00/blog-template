import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../auth"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5"


export const SignUpForm = () => {

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const authContext = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
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

  const invertVisibility = () => { 
    setShowPassword(!showPassword);
   }

  return (
    <div className="auth-form">
      <form onSubmit={handleSignup}>

        <h2>Registro</h2>

        <div className="form-control">
          <input type="text" value={username} id="username" onChange={(event) => setUsername(event.currentTarget.value)} required placeholder="nombre de usuario" />
        </div>
        <div className="form-control">
          <input type="email" value={email} id="email" onChange={(event) => setEmail(event.currentTarget.value)} required placeholder="correo@email.com" />
        </div>

        <div className="form-control input-password">
          <input type={ showPassword ? 'text' : 'password' } value={password} id="password" onChange={(event) => setPassword(event.currentTarget.value)} placeholder="contraseña" required />
          {
            showPassword ? (<IoEyeOffOutline onClick={ invertVisibility } />) : (<IoEyeOutline onClick={ invertVisibility } />)
          }
        </div>

        <div className="form-action justify-center">
          <button type="submit" className="submit">
            Registrarse
          </button>
        </div>

        <p>¿Ya tienes cuenta? <Link to={'/login'}>Inicia sesión</Link></p>
      </form>

    </div>
  )
}