import { useLocation } from "react-router-dom"
import { LoginForm, SignUpForm } from "../components";


export const AuthenticationPage = () => {

  let { pathname } = useLocation();
  console.log(pathname)

  return (
    <div>
      {
        pathname.includes('signup') ? <SignUpForm /> : <LoginForm />
      }
    </div>
  )
}
