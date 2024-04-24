import { useLocation } from "react-router-dom"
import { LoginForm, SignUpForm } from "../components";


export const AuthenticationPage = () => {

  let { pathname } = useLocation();

  return (
    <div>
      {
        pathname.includes('login') ? <LoginForm /> : <SignUpForm />
      }
    </div>
  )
}
