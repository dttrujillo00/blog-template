import { createContext, useState } from "react"

interface IAuthContext {
    token: string | null;
    setToken: (newToken: string) => void;
};

const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider = () => {

    const [token, setToken] = useState()

  return (
    <div>AuthProvider</div>
  )
}

export default AuthProvider