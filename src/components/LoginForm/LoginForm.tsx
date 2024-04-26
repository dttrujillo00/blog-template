import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../auth";
import './LoginForm.css'
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";


export const LoginForm = () => {


  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
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

  const invertVisibility = () => { 
    setShowPassword(!showPassword);
   }

  return (
    <div className="auth-form">
      <form onSubmit={handleLoging}>

        <h2>Inicio de sesión</h2>

        <div className="form-control">
          <input type="email" value={email} id="email" onChange={(event) => setEmail(event.currentTarget.value)} placeholder="correo@email.com" required />
        </div>

        <div className="form-control input-password">
          <input type={ showPassword ? 'text' : 'password' } value={password} id="password" onChange={(event) => setPassword(event.currentTarget.value)} placeholder="contraseña" required />
          {
            showPassword ? (<IoEyeOffOutline onClick={ invertVisibility } />) : (<IoEyeOutline onClick={ invertVisibility } />)
          }
        </div>

        <div className="form-action">
          <button type="submit" className="submit">
            Iniciar sesión
          </button>
        </div>

      </form>

      <p>¿No tienes cuenta? <Link to={'/signup'}>Regístrate</Link></p>
    </div>
  )
}